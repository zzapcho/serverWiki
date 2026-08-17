import { defineConfig } from 'vitepress'
import { nav, sidebar } from './navigation.mts'

const searchAliases = [
  ['조합법', '레시피', 'recipe', 'craft', '제작', '제작법', '만드는법', '만드는 법'],
  ['세로반블록', '세로 반블록', '세로반블럭', '세로 반블럭', '세로슬랩', '세로 슬랩', 'vertical', 'slab', 'vertical slab', 'evs', '반블록', '반블럭', '슬랩'],
  ['광물', '광석', 'simpleores', 'simple ores', 'tin', '주석', 'mythril', '미스릴', '미쓰릴', 'adamantium', '아다만티움', '아다만튬', 'onyx', '오닉스'],
  ['벌목', '나무베기', '나무 베기', '나무캐기', '나무 캐기', 'fallingtree', 'falling tree', 'chopper', '초퍼', '도끼', '통나무'],
  ['겉날개', '엘리트라', 'elytra', 'elytraslot', 'elytra slot', '흉갑', '갑옷슬롯', '갑옷 슬롯'],
  ['지형', '월드젠', 'worldgen', '월드생성', '월드 생성', 'terralith', '테랄리스', '테라리스', 'tectonic', '텍토닉', '바이옴', '산맥'],
  ['던전', '선술집', '구조물', 'dungeons', 'taverns', 'dungeons and taverns', 'dnt', '요새', '타번'],
  ['엔드', 'end', 'mes', 'moog', 'moogs', '엔드구조물', '엔드 구조물', 'structure', 'structures', '메가쉽', 'mega ship'],
  ['무덤', 'grave', 'graves', '죽음', '사망', '아이템복구', '아이템 복구', '템복구', '템 복구', '죽음나침반'],
  ['음성', '보이스', 'voice', 'voicechat', 'voice chat', '마이크', 'mic', 'ptt', '푸시투톡'],
  ['디스코드', 'discord', '디코', '채팅연동', '채팅 연동', '계정연동', '계정 연동'],
  ['클라이언트', '클라', 'client', '모드팩', 'mods', 'sodium', '소듐', 'iris', '아이리스', 'journeymap', '저니맵', 'shader', '쉐이더'],
  ['단축키', '키설정', '키 설정', '키바인드', 'keybind', 'controls', '조작키'],
  ['렉', 'lag', '핑', 'ping', '버벅임', '성능', 'performance', '최적화', 'fps', '청크', 'chunk'],
  ['접속', '연결', '로그인', '인증', '화이트리스트', '튕김', '충돌', '크래시'],
  ['곡괭이', '곡갱이', 'pickaxe'],
  ['아다만티움', '아다만튬', 'adamantium'],
  ['미스릴', '미쓰릴', 'mythril']
]

function normalize(value: string) {
  return value.normalize('NFKC').toLocaleLowerCase('ko-KR').trim()
}

function compact(value: string) {
  return normalize(value).replace(/[\s·&'"`~!@#$%^*()+=\[\]{}|\\:;,.?/_-]+/g, '')
}

const aliasMap = new Map<string, string[]>()
for (const group of searchAliases) {
  const expanded = [...new Set(group.flatMap((value) => [normalize(value), compact(value)]).filter(Boolean))]
  for (const value of expanded) aliasMap.set(compact(value), expanded)
}

function tokenize(text: string) {
  const parts = normalize(text)
    .replace(/[·&'"`~!@#$%^*()+=\[\]{}|\\:;,.?/_-]+/g, ' ')
    .split(/\s+/u)
    .filter(Boolean)

  const tokens = new Set<string>()
  for (let i = 0; i < parts.length; i += 1) {
    tokens.add(parts[i])
    const one = compact(parts[i])
    if (one) tokens.add(one)
    if (i + 1 < parts.length) {
      const pair = compact(parts[i] + parts[i + 1])
      if (pair) tokens.add(pair)
    }
  }
  return [...tokens]
}

function expandSearchTerm(term: string) {
  const normalized = normalize(term)
  const key = compact(normalized)
  const group = aliasMap.get(key)
  if (group) return group
  return key && key !== normalized ? [normalized, key] : normalized
}

export default defineConfig({
  lang: 'ko-KR',
  title: 'ZZAPCHO SERVER WIKI',
  description: 'Minecraft 26.2 Fabric Vanilla+ 서버의 광물, 벌목, 구조물, 무덤, 보이스챗, 조합법 플레이 가이드',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['meta', { name: 'theme-color', content: '#f7faf8', media: '(prefers-color-scheme: light)' }],
    ['meta', { name: 'theme-color', content: '#0c0f0d', media: '(prefers-color-scheme: dark)' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['meta', { property: 'og:site_name', content: 'ZZAPCHO SERVER WIKI' }],
    ['meta', { property: 'og:title', content: 'ZZAPCHO SERVER WIKI' }],
    ['meta', { property: 'og:description', content: '26.2 Vanilla+ 서버의 실제 설치 모드를 기준으로 사용법·Y값·구조물·확률·조합법을 확인하세요.' }]
  ],

  themeConfig: {
    siteTitle: 'ZZAPCHO SERVER',
    nav,
    search: {
      provider: 'local',
      options: {
        detailedView: 'auto',
        disableQueryPersistence: true,
        miniSearch: {
          options: { tokenize, processTerm: expandSearchTerm },
          searchOptions: {
            prefix: true,
            fuzzy: 0.22,
            maxFuzzy: 2,
            boost: { title: 5, titles: 3, text: 1 },
            weights: { fuzzy: 0.45, prefix: 0.9 },
            combineWith: 'OR'
          }
        },
        translations: {
          button: { buttonText: '검색', buttonAriaLabel: '문서 검색' },
          modal: {
            noResultsText: '검색 결과가 없어요. 더 짧은 말, 비슷한 말, 한글/영문 이름으로 다시 검색해 보세요.',
            resetButtonTitle: '검색 초기화',
            footer: { selectText: '선택', navigateText: '이동', closeText: '닫기' }
          }
        }
      }
    },
    sidebar,
    outline: { level: [2, 3], label: '이 페이지에서' },
    docFooter: { prev: '이전', next: '다음' },
    lastUpdated: { text: '마지막 업데이트' },
    sidebarMenuLabel: '메뉴',
    darkModeSwitchLabel: '테마 변경',
    returnToTopLabel: '맨 위로',
    socialLinks: [{ icon: 'github', link: 'https://github.com/zzapcho/serverWiki' }],
    footer: { message: 'ZZAPCHO SERVER · Vanilla+', copyright: 'Minecraft 26.2 · Fabric' }
  }
})
