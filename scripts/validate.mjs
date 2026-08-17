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
  if (/<(?:p|span|strong|div)\b[^>]*>[^<]*\[[^\]]+\]\(\/[^)]+\)/i.test(source)) errors.push(`${rel}: Markdown link syntax inside raw HTML renders as visible text`)

  for (const link of collectLinks(source)) {
    if (/^(https?:|mailto:|tel:)/i.test(link) || link.startsWith('#')) continue
    if (/^javascript:/i.test(link)) { errors.push(`${rel}: unsafe javascript link: ${link}`); continue }
    if (!link.startsWith('/')) continue
    const candidates = routeCandidates(link)
    if (candidates.length && !candidates.some((candidate) => markdownSet.has(candidate))) errors.push(`${rel}: broken internal route ${link}`)
  }
}

const requiredRoutes = [
  '/', '/guide/', '/guide/vanilla-differences', '/guide/client', '/guide/building', '/guide/exploration', '/guide/survival',
  '/mods/', '/mods/vertical-slabs', '/mods/simpleores', '/mods/fallingtree', '/mods/elytra-slot', '/mods/worldgen',
  '/mods/dungeons-taverns', '/mods/end-structures', '/mods/graves', '/mods/voice-chat', '/mods/discord',
  '/recipes/', '/recipes/simpleores', '/controls/', '/community/', '/troubleshooting/', '/changelog/'
]
for (const route of requiredRoutes) {
  if (!routeCandidates(route).some((candidate) => markdownSet.has(candidate))) errors.push(`docs: required route missing: ${route}`)
}

const removedPaths = [
  'getting-started.md', 'quick-reference.md', join('commands', 'index.md'), join('economy', 'index.md'),
  join('guide', 'farming-cooking.md'), join('guide', 'fishing.md'), join('guide', 'cooking-catalog.md'), join('guide', 'fishing-catalog.md'), join('guide', 'building-catalog.md'),
  join('mods', 'seasons.md'), join('mods', 'farmers-delight.md'), join('mods', 'gone-fishing.md'), join('mods', 'furniture.md'),
  join('mods', 'friends-and-foes.md'), join('mods', 'economycraft.md')
].map((path) => normalize(join(docsRoot, path)))
for (const path of removedPaths) if (markdownSet.has(path)) errors.push(`docs: removed/stale page returned: ${relative(root, path)}`)

const themeFiles = await walk(themeRoot, (file) => ['.css', '.ts'].includes(extname(file)))
for (const file of themeFiles) {
  const source = await readFile(file, 'utf8')
  const rel = relative(root, file)
  if (/\b100vw\b/.test(source)) errors.push(`${rel}: avoid 100vw; it can create scrollbar overflow`)
  if (/overflow-x:\s*hidden/.test(source)) warnings.push(`${rel}: overflow-x:hidden can mask layout bugs`)
}

const baseCss = await readFile(join(themeRoot, 'base.css'), 'utf8')
if (/\bmin-width:\s*320px/.test(baseCss)) errors.push('base.css: 320px root minimum can create horizontal scrolling')

const enhancements = await readFile(join(themeRoot, 'enhancements.ts'), 'utf8')
if (/window\.scrollTo\(\{\s*top:\s*0/.test(enhancements)) errors.push('enhancements.ts: unconditional route scroll-to-top breaks hash/search navigation')

const mobileCss = await readFile(join(themeRoot, 'mobile.css'), 'utf8')
const componentsCss = await readFile(join(themeRoot, 'components.css'), 'utf8')
const outlineCss = await readFile(join(themeRoot, 'outline-fix.css'), 'utf8')
const themeIndex = await readFile(join(themeRoot, 'index.ts'), 'utf8')
const navigationSource = await readFile(join(docsRoot, '.vitepress', 'navigation.mts'), 'utf8')
const configSource = await readFile(join(docsRoot, '.vitepress', 'config.mts'), 'utf8')

if (!/\.vp-doc \.zz-table-shell table\s*\{[^}]*display:\s*table/s.test(componentsCss)) errors.push('components.css: wrapped tables must retain table layout')
if (!/\.VPSidebarItem\.is-active[^}]+\.link::before\s*\{[^}]*content:\s*none/s.test(componentsCss)) errors.push('components.css: active sidebar must not restore VitePress color rail')
if (!/\.VPSidebar:focus[^}]*\{[^}]*outline:\s*none/s.test(componentsCss)) errors.push('components.css: programmatic sidebar focus must not draw full-height outline')
if (!/\.VPNavBarSearch button[\s\S]*?width:\s*var\(--zz-touch\)\s*!important/.test(componentsCss)) errors.push('components.css: nav search must keep shared touch target')
if (!/\.VPNavBarSearch\s*\{[^}]*padding:\s*0\s*!important/s.test(componentsCss)) errors.push('components.css: compact nav search must clear VitePress padding')
if (!/outline-fix\.css/.test(themeIndex)) errors.push('theme/index.ts: outline fix stylesheet must be imported')
if (!/\.VPDocAsideOutline \.outline-link[\s\S]*?white-space:\s*normal\s*!important/.test(outlineCss)) errors.push('outline-fix.css: long Korean outline headings must wrap instead of ellipsizing')
if (/\bcollapsed\s*:/.test(navigationSource)) errors.push('navigation.mts: sidebar groups must remain always visible')
if (/getting-started|quick-reference|EconomyCraft|Farmer.?s Delight|Gone Fishing|Homeostatic Seasons/.test(navigationSource)) errors.push('navigation.mts: stale/removed content is present in navigation')
if (!/disableQueryPersistence:\s*true/.test(configSource) || !/fuzzy:\s*0\.22/.test(configSource) || !/maxFuzzy:\s*2/.test(configSource) || !/prefix:\s*true/.test(configSource) || !/combineWith:\s*'OR'/.test(configSource)) errors.push('config.mts: fast forgiving local search contract changed unexpectedly')
if (!/function tokenize\(text: string\)/.test(configSource) || !/세로반블럭/.test(configSource) || !/미쓰릴/.test(configSource) || !/아다만튬/.test(configSource) || !/나무베기/.test(configSource) || !/템복구/.test(configSource) || !/선술집/.test(configSource) || !/겉날개/.test(configSource)) errors.push('config.mts: Korean tokenization/search aliases are incomplete')
if (/\bjei\b|제이아이|\brei\b/i.test(configSource)) errors.push('config.mts: recipe viewers must not remain as search aliases')
if (!/\.VPSidebar\.open\s*\{[^}]*transform:\s*translateX\(0\)\s*!important/s.test(mobileCss)) errors.push('mobile.css: open sidebar must override off-canvas transform')
if (!/\.VPSidebar\s*\{[^}]*width:\s*100%\s*!important[^}]*height:\s*100dvh\s*!important/s.test(mobileCss)) errors.push('mobile.css: mobile sidebar must use full dynamic viewport')
if (!/\.VPLocalSearchBox \.search-actions button\s*\{[^}]*min-width:\s*var\(--zz-touch\)[^}]*min-height:\s*var\(--zz-touch\)/s.test(mobileCss)) errors.push('mobile.css: search actions must keep touch targets')
if (!/export const sidebar = sidebarSections/.test(navigationSource)) errors.push('navigation.mts: all routes must use one shared sidebar')
if (!/function installSidebarGestures\(\)/.test(enhancements)) errors.push('enhancements.ts: mobile sidebar gestures missing')

const allDocs = (await Promise.all(markdownFiles.map((file) => readFile(file, 'utf8')))).join('\n')
if (/Caps Lock[^\n]*(푸시|PTT)|푸시투톡[^\n]*Caps Lock/i.test(allDocs)) errors.push('docs: do not hard-code Caps Lock as current PTT default')
if (/그룹[^\n]*기본키[^\n]*`G`|`G`[^\n]*그룹[^\n]*기본키/i.test(allDocs)) errors.push('docs: do not hard-code G as current group key')
if (/30분\s*(뒤|후)[^\n]{0,20}(자동|만료|소멸)/i.test(allDocs)) errors.push('docs: Universal Graves default does not auto-expire at 30 minutes')

for (const warning of warnings) console.warn(`WARN  ${warning}`)
for (const error of errors) console.error(`ERROR ${error}`)
if (errors.length) {
  console.error(`\nValidation failed with ${errors.length} error(s).`)
  process.exit(1)
}
console.log(`Validated ${markdownFiles.length} Markdown pages and ${themeFiles.length} theme files.`)
