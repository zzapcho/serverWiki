import { readdir, readFile } from 'node:fs/promises'
import { extname, join, normalize, relative, resolve } from 'node:path'

const root = process.cwd()
const distRoot = resolve(root, 'docs', '.vitepress', 'dist')
const errors = []

async function walk(dir, predicate = () => true) {
  const result = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) result.push(...await walk(full, predicate))
    else if (predicate(full)) result.push(full)
  }
  return result
}

function stripUrl(raw) {
  return raw.split('#')[0].split('?')[0]
}

function targetCandidates(raw) {
  let pathname = stripUrl(raw)
  try { pathname = decodeURIComponent(pathname) } catch {}
  if (!pathname.startsWith('/')) return []
  if (pathname === '/') return [join(distRoot, 'index.html')]

  const trimmed = pathname.replace(/^\/+|\/+$/g, '')
  if (extname(trimmed)) return [join(distRoot, trimmed)]

  return [
    join(distRoot, `${trimmed}.html`),
    join(distRoot, trimmed, 'index.html')
  ].map(normalize)
}

const files = await walk(distRoot)
const fileSet = new Set(files.map((file) => normalize(file)))
const htmlFiles = files.filter((file) => extname(file) === '.html')

if (!fileSet.has(normalize(join(distRoot, 'index.html')))) errors.push('dist: index.html is missing')
if (!fileSet.has(normalize(join(distRoot, '404.html')))) errors.push('dist: 404.html is missing')

for (const file of htmlFiles) {
  const source = await readFile(file, 'utf8')
  const rel = relative(distRoot, file)

  if (!/<title>[^<]+<\/title>/i.test(source)) errors.push(`${rel}: missing document title`)

  for (const match of source.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)) {
    const url = match[1]
    if (!url || /^(https?:|mailto:|tel:|data:|blob:)/i.test(url) || url.startsWith('#')) continue
    if (/^javascript:/i.test(url)) {
      errors.push(`${rel}: unsafe javascript URL: ${url}`)
      continue
    }
    if (!url.startsWith('/')) continue

    const candidates = targetCandidates(url)
    if (candidates.length && !candidates.some((candidate) => fileSet.has(normalize(candidate)))) {
      errors.push(`${rel}: generated link target missing: ${url}`)
    }
  }
}

const searchIndex = files.some((file) => file.includes(`${join('assets', 'chunks')}`) && file.includes('@localSearchIndex') && extname(file) === '.js')
if (!searchIndex) errors.push('dist: local search index chunk is missing')

for (const error of errors) console.error(`ERROR ${error}`)
if (errors.length) {
  console.error(`\nBuilt-site verification failed with ${errors.length} error(s).`)
  process.exit(1)
}

console.log(`Verified ${htmlFiles.length} generated HTML pages, internal targets, assets and local search index.`)
