type RouterLike = {
  onAfterRouteChange?: (to: string) => void | Promise<void>
}

let installed = false
let revealObserver: IntersectionObserver | null = null
let routeTimer: number | undefined
let progressFrame = 0

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false
  return Boolean(
    target.closest('input, textarea, select, [contenteditable="true"], [role="textbox"]')
  )
}

function openSearch() {
  const button = document.querySelector<HTMLButtonElement>(
    '.VPNavBarSearch button, .DocSearch-Button'
  )
  button?.click()
}

function installSearchShortcuts() {
  document.addEventListener('keydown', (event) => {
    if (event.defaultPrevented) return

    const key = event.key.toLowerCase()
    const commandSearch = (event.metaKey || event.ctrlKey) && key === 'k'
    const slashSearch = event.key === '/' && !event.metaKey && !event.ctrlKey && !event.altKey

    if ((!commandSearch && !slashSearch) || isEditableTarget(event.target)) return

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

  toast.textContent = message
  toast.classList.remove('is-visible')
  void toast.offsetWidth
  toast.classList.add('is-visible')
  window.setTimeout(() => toast.classList.remove('is-visible'), 1600)
}

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const input = document.createElement('textarea')
    input.value = text
    input.style.position = 'fixed'
    input.style.opacity = '0'
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    input.remove()
  }
  showToast('클립보드에 복사했습니다.')
}

function installGlobalActions() {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null
    const copyButton = target?.closest<HTMLButtonElement>('[data-zz-copy]')
    if (!copyButton) return

    const value = copyButton.dataset.zzCopy
    if (!value) return
    void copyText(value)
  })

  window.addEventListener('scroll', scheduleProgressUpdate, { passive: true })
  window.addEventListener('resize', scheduleProgressUpdate, { passive: true })
}

function prepareTables(root: ParentNode = document) {
  const tables = root.querySelectorAll<HTMLTableElement>('.vp-doc table')

  tables.forEach((table) => {
    if (table.closest('.zz-table-shell')) return

    const columnCount = table.querySelectorAll('thead th').length ||
      table.querySelector('tr')?.children.length || 0

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

    const heading = table.closest('.vp-doc')?.querySelector('h1')?.textContent?.trim()
    const shell = document.createElement('div')
    shell.className = 'zz-table-shell'
    shell.tabIndex = 0
    shell.setAttribute('role', 'region')
    shell.setAttribute('aria-label', `${heading ?? '문서'}의 표. 필요한 경우 가로로 스크롤할 수 있습니다.`)

    table.parentNode?.insertBefore(shell, table)
    shell.appendChild(table)
  })
}

function installRevealAnimations(root: ParentNode = document) {
  revealObserver?.disconnect()

  const items = Array.from(
    root.querySelectorAll<HTMLElement>([
      '.VPHomeHero .main',
      '.VPFeature',
      '.home-status',
      '.home-section-head',
      '.quick-card',
      '.step-card',
      '.content-card',
      '.stat-card',
      '.flow-card',
      '.vp-doc > h1',
      '.vp-doc > h2',
      '.vp-doc > .custom-block',
      '.vp-doc > .zz-table-shell',
      '.VPDocFooter'
    ].join(','))
  )

  if (prefersReducedMotion()) {
    items.forEach((item) => item.classList.add('zz-reveal', 'is-visible'))
    return
  }

  items.forEach((item, index) => {
    item.classList.add('zz-reveal')
    item.classList.remove('is-visible')
    item.style.setProperty('--zz-reveal-delay', `${Math.min(index % 6, 5) * 34}ms`)
  })

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        ;(entry.target as HTMLElement).classList.add('is-visible')
        revealObserver?.unobserve(entry.target)
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -28px' }
  )

  items.forEach((item) => revealObserver?.observe(item))
}

function playRouteTransition() {
  if (prefersReducedMotion()) return

  window.clearTimeout(routeTimer)
  document.documentElement.classList.remove('zz-route-enter')
  void document.documentElement.offsetWidth
  document.documentElement.classList.add('zz-route-enter')

  routeTimer = window.setTimeout(() => {
    document.documentElement.classList.remove('zz-route-enter')
  }, 360)
}

function preparePage() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ensureGlobalUI()
      prepareTables()
      installRevealAnimations()
      playRouteTransition()
      updateReadingProgress()
    })
  })
}

export function installEnhancements(router: RouterLike) {
  if (typeof window === 'undefined') return

  if (!installed) {
    installed = true
    installSearchShortcuts()
    installGlobalActions()
    window.addEventListener('load', preparePage, { once: true })
  }

  const previousAfterRouteChange = router.onAfterRouteChange
  router.onAfterRouteChange = async (to) => {
    await previousAfterRouteChange?.(to)
    window.scrollTo({ top: 0, behavior: 'auto' })
    preparePage()
  }

  preparePage()
}
