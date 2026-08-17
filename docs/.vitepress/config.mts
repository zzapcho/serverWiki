import { defineConfig } from 'vitepress'
import { nav, sidebar } from './navigation.mts'

const searchAliases = [
  ['조합법', '레시피', 'recipe', 'craft', '제작', '제작법', '만드는법', '만드는 법', 'jei', '제이아이'],
  ['세로반블록', '세로 반블록', '세로반블럭', '세로 반블럭', '세로슬랩', '세로 슬랩', 'vertical', 'slab', 'vertical slab', 'evs', '반블록', '반블럭', '슬랩'],
  ['광물', '광석', 'simpleores', 'simple ores', 'tin', '주석', 'mythril', '미스릴', 'adamantium', '아다만티움', 'onyx', '오닉스'],
  ['계절', 'seasons', 'season', 'homeostatic', '봄', '여름', '가을', '겨울'],
  ['지형', '월드젠', 'worldgen', '월드생성', '월드 생성', 'terralith', '테랄리스', '테라리스', 'tectonic', '텍토닉', '바이옴', '산맥'],
  ['엔드', 'end', 'mes', 'moog', 'moogs', '엔드구조물', '엔드 구조물', 'structure', 'structures', '구조물'],
  ['무덤', 'grave', 'graves', '죽음', '사망', '아이템복구', '아이템 복구', '템복구', '템 복구'],
  ['음성', '보이스', 'voice', 'voicechat', 'voice chat', '마이크', 'mic', 'ptt'],
  ['디스코드', 'discord', '디코', '채팅연동', '채팅 연동'],
  ['단축키', '키설정', '키 설정', '키바인드', 'keybind', 'controls', '조작키'],
  ['렉', 'lag', '핑', 'ping', '버벅임', '성능', 'performance', '최적화', 'fps'],
  ['접속', '연결', '로그인', '인증', '화이트리스트']
]

function compact(value: string) {
  return value.normalize('NFKC').toLocaleLowerCase('ko-KR').trim().replace(/[\s·&'_-]+/g, '')
}

function expandSearchTerm(term: string) {
  const normalized = term.normalize('NFKC').toLocaleLowerCase('ko-KR').trim()
  const compacted = compact(normalized)
  const group = searchAliases.find((aliases) => aliases.some((alias) => compact(alias) === compacted))
  return group ?? normalized
}

export default defineConfig({
  lang: 'ko-KR',
  title: 'ZZAPCHO SERVER WIKI',
  description: '바닐라에 필요한 기능만 더한 ZZAPCHO SERVER Vanilla+ 플레이 가이드',
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
    ['meta', { property: 'og:description', content: '세로 반블록, 광물, 계절, 지형, 엔드 구조물, 무덤을 초보자도 쉽게 확인하세요.' }]
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
          options: { processTerm: expandSearchTerm },
          searchOptions: {
            prefix: true,
            fuzzy: 0.3,
            maxFuzzy: 2,
            boost: { title: 5, titles: 3, text: 1 },
            weights: { fuzzy: 0.55, prefix: 0.85 },
            combineWith: 'OR'
          }
        },
        translations: {
          button: { buttonText: '검색', buttonAriaLabel: '문서 검색' },
          modal: {
            noResultsText: '검색 결과가 없어요. 모드 이름 대신 기능이나 쉬운 단어로도 찾아보세요.',
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
    footer: {
      message: 'ZZAPCHO SERVER · Vanilla+',
      copyright: 'Minecraft 26.2 · Fabric'
    }
  }
})
