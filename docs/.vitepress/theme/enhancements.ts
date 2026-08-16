type RouterLike = {
  onAfterRouteChange?: (to: string) => void | Promise<void>
}

let installed = false
let revealObserver: IntersectionObserver | null = null
let routeTimer: number | undefined

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

    const shell = document.createElement('div')
    shell.className = 'zz-table-shell'
    shell.tabIndex = 0
    shell.setAttribute('role', 'region')
    shell.setAttribute('aria-label', '표. 필요한 경우 가로로 스크롤할 수 있습니다.')

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
      prepareTables()
      installRevealAnimations()
      playRouteTransition()
    })
  })
}

export function installEnhancements(router: RouterLike) {
  if (typeof window === 'undefined') return

  if (!installed) {
    installed = true
    installSearchShortcuts()
    window.addEventListener('load', preparePage, { once: true })
  }

  const previousAfterRouteChange = router.onAfterRouteChange
  router.onAfterRouteChange = async (to) => {
    await previousAfterRouteChange?.(to)
    preparePage()
  }

  preparePage()
}
