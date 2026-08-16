type RouterLike = {
  onAfterRouteChange?: (to: string) => void | Promise<void>
}

let installed = false
let routerHookInstalled = false
let revealObserver: IntersectionObserver | null = null
let tableResizeObserver: ResizeObserver | null = null
let routeTimer: number | undefined
let toastTimer: number | undefined
let progressFrame = 0
let prepareFrame = 0
let prepareFrame2 = 0
let prepareGeneration = 0

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const headingText = (heading: HTMLElement) => heading.textContent?.replace(/\u200b/g, '').trim() ?? ''

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false
  return Boolean(target.closest('input, textarea, select, [contenteditable="true"], [role="textbox"]'))
}

function openSearch() {
  document.querySelector<HTMLButtonElement>('.VPNavBarSearch button, .DocSearch-Button')?.click()
}

function installSearchShortcuts() {
  document.addEventListener('keydown', (event) => {
    if (event.defaultPrevented || isEditableTarget(event.target)) return
    const key = event.key.toLowerCase()
    const commandSearch = (event.metaKey || event.ctrlKey) && key === 'k'
    const slashSearch = event.key === '/' && !event.metaKey && !event.ctrlKey && !event.altKey
    if (!commandSearch && !slashSearch) return
    event.preventDefault()
    openSearch()
  })
}

function ensureGlobalUI() {
  if (!document.querySelector('.zz-reading-progress')) {
    const progress = document.createElement('div')
    progress.className = 'zz-reading-progress'
    progress.setAttribute('aria-hidden', 'true')
    document.body.appendChild(progress)
  }
  if (!document.querySelector('.zz-toast')) {
    const toast = document.createElement('div')
    toast.className = 'zz-toast'
    toast.setAttribute('role', 'status')
    toast.setAttribute('aria-live', 'polite')
    toast.setAttribute('aria-atomic', 'true')
    document.body.appendChild(toast)
  }
}

function updateReadingProgress() {
  const bar = document.querySelector<HTMLElement>('.zz-reading-progress')
  if (!bar) return
  const root = document.documentElement
  const max = Math.max(root.scrollHeight - window.innerHeight, 1)
  const progress = Math.min(Math.max(window.scrollY / max, 0), 1)
  bar.style.transform = `scaleX(${progress})`
}

function scheduleProgressUpdate() {
  if (progressFrame) return
  progressFrame = window.requestAnimationFrame(() => {
    progressFrame = 0
    updateReadingProgress()
  })
}

function showToast(message: string) {
  const toast = document.querySelector<HTMLElement>('.zz-toast')
  if (!toast) return
  window.clearTimeout(toastTimer)
  toast.textContent = message
  toast.classList.remove('is-visible')
  void toast.offsetWidth
  toast.classList.add('is-visible')
  toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 1800)
}

async function copyText(text: string) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {}
  }
  const input = document.createElement('textarea')
  input.value = text
  input.setAttribute('readonly', '')
  input.style.position = 'fixed'
  input.style.inset = '-9999px auto auto -9999px'
  document.body.appendChild(input)
  input.select()
  let copied = false
  try { copied = document.execCommand('copy') } catch {}
  input.remove()
  return copied
}

function updateTableAccessibility(shell: HTMLElement) {
  const scrollable = shell.scrollWidth > shell.clientWidth + 1
  shell.dataset.scrollable = String(scrollable)
  if (scrollable) {
    shell.tabIndex = 0
    shell.setAttribute('role', 'region')
    const doc = shell.closest('.vp-doc')
    const headings = Array.from(doc?.querySelectorAll<HTMLElement>('h1[id], h2[id], h3[id]') ?? [])
    const heading = headings.filter((candidate) => candidate.compareDocumentPosition(shell) & Node.DOCUMENT_POSITION_FOLLOWING).at(-1)
    if (heading?.id) {
      shell.setAttribute('aria-labelledby', heading.id)
      shell.removeAttribute('aria-label')
    } else if (!shell.getAttribute('aria-label')) {
      const title = doc?.querySelector('h1')?.textContent?.trim() ?? '문서'
      shell.setAttribute('aria-label', `${title}의 표. 가로로 스크롤할 수 있습니다.`)
    }
  } else {
    shell.removeAttribute('tabindex')
    shell.removeAttribute('role')
    shell.removeAttribute('aria-label')
    shell.removeAttribute('aria-labelledby')
  }
}

function refreshTableAccessibility() {
  document.querySelectorAll<HTMLElement>('.zz-table-shell').forEach(updateTableAccessibility)
}

function prepareInlineToc() {
  const doc = document.querySelector<HTMLElement>('.VPDoc .vp-doc')
  if (!doc) return
  const existing = Array.from(doc.querySelectorAll<HTMLElement>('.zz-inline-toc'))
  if (existing.length) {
    existing.slice(1).forEach((duplicate) => duplicate.remove())
    return
  }
  const headings = Array.from(doc.querySelectorAll<HTMLElement>('h2[id]'))
    .filter((heading) => !heading.closest('.custom-block'))
  if (headings.length < 2) return

  const nav = document.createElement('nav')
  nav.className = 'zz-inline-toc'
  nav.setAttribute('aria-label', '이 페이지의 제목')

  const head = document.createElement('div')
  head.className = 'zz-inline-toc-head'
  const title = document.createElement('strong')
  title.textContent = '이 페이지에서'
  const count = document.createElement('span')
  count.textContent = `${headings.length}개 제목`
  head.append(title, count)

  const list = document.createElement('ol')
  list.className = 'zz-inline-toc-list'
  headings.forEach((heading) => {
    const item = document.createElement('li')
    const link = document.createElement('a')
    link.href = `#${heading.id}`
    link.textContent = headingText(heading) || heading.id
    item.appendChild(link)
    list.appendChild(item)
  })

  nav.append(head, list)
  headings[0].before(nav)
}

function prepareRelatedLinks() {
  document.querySelectorAll<HTMLElement>('.vp-doc h2').forEach((heading) => {
    if (headingText(heading) !== '관련 문서') return
    const paragraph = heading.nextElementSibling
    if (paragraph instanceof HTMLParagraphElement && paragraph.querySelector('a')) {
      paragraph.classList.add('zz-related-links')
    }
  })
}

function prepareTables(root: ParentNode = document) {
  tableResizeObserver?.disconnect()
  tableResizeObserver = typeof ResizeObserver !== 'undefined'
    ? new ResizeObserver((entries) => entries.forEach((entry) => updateTableAccessibility(entry.target as HTMLElement)))
    : null

  root.querySelectorAll<HTMLTableElement>('.vp-doc table').forEach((table) => {
    if (!table.closest('.zz-table-shell')) {
      const columnCount = table.querySelectorAll('thead th').length || table.querySelector('tr')?.children.length || 0
      table.classList.add('zz-table')
      if (columnCount <= 3) table.classList.add('zz-table--compact')
      if (columnCount >= 5) table.classList.add('zz-table--wide')
      table.querySelectorAll('thead th').forEach((header) => {
        if (!header.hasAttribute('scope')) header.setAttribute('scope', 'col')
      })
      const firstHeader = table.querySelector('thead th')?.textContent?.trim() ?? ''
      if (firstHeader.includes('명령어')) {
        table.classList.add('zz-command-table')
        table.querySelectorAll<HTMLTableRowElement>('tbody tr').forEach((row) => {
          const cell = row.querySelector<HTMLTableCellElement>('td:first-child')
          const code = cell?.querySelector<HTMLElement>('code')
          if (!cell || !code || cell.querySelector('[data-zz-copy]')) return
          cell.classList.add('zz-command-cell')
          const button = document.createElement('button')
          button.className = 'zz-copy-command'
          button.type = 'button'
          button.dataset.zzCopy = code.textContent?.trim() ?? ''
          button.setAttribute('aria-label', `${button.dataset.zzCopy} 명령어 복사`)
          button.textContent = '복사'
          cell.appendChild(button)
        })
      }
      const shell = document.createElement('div')
      shell.className = 'zz-table-shell'
      table.parentNode?.insertBefore(shell, table)
      shell.appendChild(table)
    }
  })

  document.querySelectorAll<HTMLElement>('.zz-table-shell').forEach((shell) => {
    updateTableAccessibility(shell)
    tableResizeObserver?.observe(shell)
  })
}

function installRevealAnimations(root: ParentNode = document) {
  revealObserver?.disconnect()
  const items = Array.from(root.querySelectorAll<HTMLElement>([
    '.VPHomeHero .main', '.VPFeature', '.home-status', '.home-section-head', '.quick-card', '.step-card',
    '.content-card', '.stat-card', '.flow-card', '.vp-doc > h1', '.vp-doc > h2', '.vp-doc > .custom-block',
    '.vp-doc > .zz-inline-toc', '.vp-doc > .zz-related-links',
    '.vp-doc > .zz-table-shell', '.VPDocFooter'
  ].join(',')))

  if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
    items.forEach((item) => item.classList.add('zz-reveal', 'is-visible'))
    return
  }
  items.forEach((item, index) => {
    item.classList.add('zz-reveal')
    item.classList.remove('is-visible')
    item.style.setProperty('--zz-reveal-delay', `${Math.min(index % 5, 4) * 28}ms`)
  })
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      ;(entry.target as HTMLElement).classList.add('is-visible')
      revealObserver?.unobserve(entry.target)
    })
  }, { threshold: 0.06, rootMargin: '0px 0px -20px' })
  items.forEach((item) => revealObserver?.observe(item))
}

function playRouteTransition() {
  if (prefersReducedMotion()) return
  window.clearTimeout(routeTimer)
  document.documentElement.classList.remove('zz-route-enter')
  void document.documentElement.offsetWidth
  document.documentElement.classList.add('zz-route-enter')
  routeTimer = window.setTimeout(() => document.documentElement.classList.remove('zz-route-enter'), 320)
}

function preparePage() {
  const generation = ++prepareGeneration
  window.cancelAnimationFrame(prepareFrame)
  window.cancelAnimationFrame(prepareFrame2)
  prepareFrame = window.requestAnimationFrame(() => {
    prepareFrame2 = window.requestAnimationFrame(() => {
      if (generation !== prepareGeneration) return
      ensureGlobalUI()
      prepareInlineToc()
      prepareRelatedLinks()
      prepareTables()
      installRevealAnimations()
      playRouteTransition()
      updateReadingProgress()
    })
  })
}

function installGlobalActions() {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null
    const button = target?.closest<HTMLButtonElement>('[data-zz-copy]')
    if (!button) return
    const value = button.dataset.zzCopy
    if (!value) return
    void copyText(value).then((copied) => showToast(copied ? '클립보드에 복사했습니다.' : '복사하지 못했습니다. 직접 선택해 주세요.'))
  })
  window.addEventListener('scroll', scheduleProgressUpdate, { passive: true })
  window.addEventListener('resize', () => {
    scheduleProgressUpdate()
    if (!tableResizeObserver) refreshTableAccessibility()
  }, { passive: true })
}

export function installEnhancements(router: RouterLike) {
  if (typeof window === 'undefined') return
  if (!installed) {
    installed = true
    installSearchShortcuts()
    installGlobalActions()
    window.addEventListener('load', preparePage, { once: true })
  }
  if (!routerHookInstalled) {
    routerHookInstalled = true
    const previousAfterRouteChange = router.onAfterRouteChange
    router.onAfterRouteChange = async (to) => {
      await previousAfterRouteChange?.(to)
      preparePage()
    }
  }
  preparePage()
}
