import { readdir, readFile } from 'node:fs/promises'
import { extname, join, normalize, relative, resolve } from 'node:path'

const root = process.cwd()
const docsRoot = resolve(root, 'docs')
const themeRoot = resolve(docsRoot, '.vitepress', 'theme')
const errors = []
const warnings = []

async function walk(dir, predicate = () => true) {
  const result = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) result.push(...await walk(full, predicate))
    else if (predicate(full)) result.push(full)
  }
  return result
}

const markdownFiles = await walk(docsRoot, (file) => extname(file) === '.md' && !file.includes(`${join('.vitepress', '')}`))
const markdownSet = new Set(markdownFiles.map((file) => normalize(file)))

function routeCandidates(rawPath) {
  let pathname = rawPath.split('#')[0].split('?')[0]
  try { pathname = decodeURIComponent(pathname) } catch {}
  if (!pathname.startsWith('/')) return []
  if (pathname === '/') return [join(docsRoot, 'index.md')]
  const trimmed = pathname.replace(/^\/+|\/+$/g, '')
  return [join(docsRoot, `${trimmed}.md`), join(docsRoot, trimmed, 'index.md')].map(normalize)
}

function collectLinks(source) {
  const links = []
  for (const match of source.matchAll(/\[[^\]]*\]\(([^)\s]+)(?:\s+['"][^'"]*['"])?\)/g)) links.push(match[1])
  for (const match of source.matchAll(/\bhref=["']([^"']+)["']/g)) links.push(match[1])
  return links
}

for (const file of markdownFiles) {
  const source = await readFile(file, 'utf8')
  const rel = relative(root, file)
  if (!/^---\r?\n[\s\S]*?\r?\n---\r?\n|<span class="page-kicker">|^#\s/m.test(source)) warnings.push(`${rel}: page has no obvious title/frontmatter marker`)
  if (/<(?:p|span|strong|div)\b[^>]*>[^<]*\[[^\]]+\]\(\/[^)]+\)/i.test(source)) {
    errors.push(`${rel}: Markdown link syntax inside raw HTML renders as visible text; use an <a> element`)
  }
  for (const link of collectLinks(source)) {
    if (/^(https?:|mailto:|tel:)/i.test(link) || link.startsWith('#')) continue
    if (/^javascript:/i.test(link)) {
      errors.push(`${rel}: unsafe javascript link: ${link}`)
      continue
    }
    if (!link.startsWith('/')) continue
    const candidates = routeCandidates(link)
    if (candidates.length && !candidates.some((candidate) => markdownSet.has(candidate))) errors.push(`${rel}: broken internal route ${link}`)
  }
}

const themeFiles = await walk(themeRoot, (file) => ['.css', '.ts'].includes(extname(file)))
for (const file of themeFiles) {
  const source = await readFile(file, 'utf8')
  const rel = relative(root, file)
  if (/\b100vw\b/.test(source)) errors.push(`${rel}: use width:100% instead of 100vw to avoid scrollbar overflow`)
  if (/overflow-x:\s*hidden/.test(source)) warnings.push(`${rel}: overflow-x:hidden can mask layout bugs; prefer fixing the cause or intentional clip`)
}

const baseCss = await readFile(join(themeRoot, 'base.css'), 'utf8')
if (/\bmin-width:\s*320px/.test(baseCss)) errors.push('base.css: a 320px root minimum creates horizontal scrolling when a vertical scrollbar consumes layout width')

const enhancements = await readFile(join(themeRoot, 'enhancements.ts'), 'utf8')
if (/window\.scrollTo\(\{\s*top:\s*0/.test(enhancements)) errors.push('enhancements.ts: unconditional route scroll-to-top breaks hash/search-result navigation')

const mobileCss = await readFile(join(themeRoot, 'mobile.css'), 'utf8')
const componentsCss = await readFile(join(themeRoot, 'components.css'), 'utf8')
const navigationSource = await readFile(join(root, 'docs', '.vitepress', 'navigation.mts'), 'utf8')
const configSource = await readFile(join(root, 'docs', '.vitepress', 'config.mts'), 'utf8')
if (!/\.vp-doc \.zz-table-shell table\s*\{[^}]*display:\s*table/s.test(componentsCss)) errors.push('components.css: wrapped tables must use table layout instead of VitePress block layout')
if (!/\.VPSidebarItem\.is-active[^}]+\.link::before\s*\{[^}]*content:\s*none/s.test(componentsCss)) errors.push('components.css: active sidebar links must not render the caret-like color bar')
if (!/\.VPSidebar:focus[^}]*\{[^}]*outline:\s*none/s.test(componentsCss)) errors.push('components.css: programmatic sidebar focus must not draw a full-height color rail')
if (!/\.VPNavBarSearch button[\s\S]*?width:\s*var\(--zz-touch\)\s*!important/.test(componentsCss)) errors.push('components.css: navigation search must stay collapsed to the shared touch target')
if (!/\.VPNavBarSearch\s*\{[^}]*padding:\s*0\s*!important/s.test(componentsCss)) errors.push('components.css: compact navigation search must clear VitePress desktop padding to avoid overlapping the first nav link')
if (/\bcollapsed\s*:/.test(navigationSource)) errors.push('navigation.mts: sidebar groups must remain always visible and non-collapsible')
if (!/disableQueryPersistence:\s*true/.test(configSource) || !/fuzzy:\s*0\.22/.test(configSource) || !/prefix:\s*true/.test(configSource)) errors.push('config.mts: local search must clear stale queries and keep fuzzy/prefix matching')
if (!/\.VPSidebar\.open\s*\{[^}]*transform:\s*translateX\(0\)\s*!important/s.test(mobileCss)) errors.push('mobile.css: mobile sidebar open state must override the off-canvas transform')
if (!/\.VPSidebar\s*\{[^}]*width:\s*100%\s*!important[^}]*height:\s*100dvh\s*!important/s.test(mobileCss)) errors.push('mobile.css: mobile sidebar must be a full-screen dynamic-viewport surface')
if (!/\.VPSidebar\s*\{[^}]*transition:[^}]*transform\s+260ms/s.test(mobileCss)) errors.push('mobile.css: mobile sidebar transform must use the short 260ms motion contract')
if (/@media\s*\(max-width:\s*420px\)[\s\S]*?\.VPSidebar\s*\{[^}]*\bwidth:/s.test(mobileCss)) errors.push('mobile.css: narrow breakpoint must not override the shared sidebar width')
if (!/\.VPLocalSearchBox \.search-actions button\s*\{[^}]*min-width:\s*var\(--zz-touch\)[^}]*min-height:\s*var\(--zz-touch\)/s.test(mobileCss)) errors.push('mobile.css: search action buttons must keep the shared touch target')
if (!/\.VPLocalSearchBox \.search-bar input[^\{]*\{[^}]*flex:\s*1 1 auto\s*!important/s.test(mobileCss)) errors.push('mobile.css: search input must retain flexible width on narrow screens')
if (!/export const sidebar = sidebarSections/.test(navigationSource)) errors.push('navigation.mts: every route must use one complete shared sidebar')
if (!/function installSidebarGestures\(\)/.test(enhancements) || !/html\.zz-sidebar-open \.VPLocalNav \.menu/.test(mobileCss)) errors.push('mobile sidebar: full-screen close control and touch gesture support are required')

const allDocs = (await Promise.all(markdownFiles.map((file) => readFile(file, 'utf8')))).join('\n')
for (const result of allDocs.matchAll(/<span class="recipe-result-icon">([\s\S]*?)<\/span>/g)) {
  const imageCount = (result[1].match(/<img\b/g) ?? []).length
  if (imageCount !== 1) errors.push(`docs: every recipe result slot must contain exactly one item image; found ${imageCount}`)
}
if (/\.recipe-result\s+span\s*\{/.test(componentsCss)) errors.push('components.css: do not style every recipe result span; target the icon and text wrapper separately')

const blazeRodTexture = await readFile(join(docsRoot, 'public', 'items', 'gofish-blaze-rod.png'))
if (blazeRodTexture.toString('ascii', 1, 4) !== 'PNG') {
  errors.push('gofish-blaze-rod.png: expected a PNG item texture')
} else {
  const width = blazeRodTexture.readUInt32BE(16)
  const height = blazeRodTexture.readUInt32BE(20)
  if (width !== 16 || height !== 16) errors.push(`gofish-blaze-rod.png: browser asset must be one 16x16 animation frame, found ${width}x${height}`)
}
if (/Caps Lock[^\n]*(푸시|PTT)|푸시투톡[^\n]*Caps Lock/i.test(allDocs)) errors.push('docs: Simple Voice Chat PTT must not be documented as Caps Lock default on current versions')
if (/그룹[^\n]*기본키[^\n]*`G`|`G`[^\n]*그룹[^\n]*기본키/i.test(allDocs)) errors.push('docs: do not document G as the current default group-chat key')

for (const warning of warnings) console.warn(`WARN  ${warning}`)
for (const error of errors) console.error(`ERROR ${error}`)
if (errors.length) {
  console.error(`\nValidation failed with ${errors.length} error(s).`)
  process.exit(1)
}
console.log(`Validated ${markdownFiles.length} Markdown pages and ${themeFiles.length} theme files.`)
