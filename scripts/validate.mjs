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
  if (!/^---\n[\s\S]*?\n---\n|<span class="page-kicker">|^#\s/m.test(source)) warnings.push(`${rel}: page has no obvious title/frontmatter marker`)
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

const enhancements = await readFile(join(themeRoot, 'enhancements.ts'), 'utf8')
if (/window\.scrollTo\(\{\s*top:\s*0/.test(enhancements)) errors.push('enhancements.ts: unconditional route scroll-to-top breaks hash/search-result navigation')

const allDocs = (await Promise.all(markdownFiles.map((file) => readFile(file, 'utf8')))).join('\n')
if (/Caps Lock[^\n]*(푸시|PTT)|푸시투톡[^\n]*Caps Lock/i.test(allDocs)) errors.push('docs: Simple Voice Chat PTT must not be documented as Caps Lock default on current versions')
if (/그룹[^\n]*기본키[^\n]*`G`|`G`[^\n]*그룹[^\n]*기본키/i.test(allDocs)) errors.push('docs: do not document G as the current default group-chat key')

for (const warning of warnings) console.warn(`WARN  ${warning}`)
for (const error of errors) console.error(`ERROR ${error}`)
if (errors.length) {
  console.error(`\nValidation failed with ${errors.length} error(s).`)
  process.exit(1)
}
console.log(`Validated ${markdownFiles.length} Markdown pages and ${themeFiles.length} theme files.`)
