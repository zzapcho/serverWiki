import { defineConfig } from 'vitepress'
import { nav, sidebar } from './navigation.mts'

function expandSearchTerm(term: string) {
  const normalized = term.normalize('NFKC').toLocaleLowerCase('ko-KR')
  const groups = [
    ['조합법', '레시피', '제작법', '만드는법', 'jei', '제이아이'],
    ['낚시', '물고기', '낚시대', '낚싯대'],
    ['요리', '음식', '조리'],
    ['가구', '인테리어', '꾸미기'],
    ['건축', '건설', '집짓기'],
    ['경제', '돈', '상점', '판매', '거래'],
    ['죽음', '무덤', '회수', '복구'],
    ['음성', '보이스', '마이크', 'voice'],
    ['지도', '맵', '웨이포인트', 'journeymap'],
    ['겉날개', '엘리트라', 'elytra'],
    ['명령어', '커맨드', 'command'],
    ['접속', '로그인', '인증', '화이트리스트'],
    ['모드', 'mod'],
    ['농사', '작물', '씨앗'],
    ['월드', '지형', '바이옴', '탐험']
  ]
  return groups.find((group) => group.includes(normalized)) ?? normalized
}

export default defineConfig({
  lang: 'ko-KR',
  title: 'ZZAPCHO SERVER WIKI',
  description: 'ZZAPCHO SERVER 공식 가이드 · 모드 · 조합법 · 명령어 · 경제 · 조작법',
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
    ['meta', { property: 'og:description', content: '서버 플레이에 필요한 가이드, 모드, 조합법, 명령어와 조작법을 한 곳에서 확인하세요.' }]
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
          options: {
            processTerm: expandSearchTerm
          },
          searchOptions: {
            prefix: true,
            fuzzy: 0.22,
            maxFuzzy: 2,
            boost: { title: 4, titles: 2.5, text: 1 },
            weights: { fuzzy: 0.4, prefix: 0.75 },
            combineWith: 'AND'
          }
        },
        translations: {
          button: {
            buttonText: '검색',
            buttonAriaLabel: '문서 검색'
          },
          modal: {
            noResultsText: '검색 결과가 없어요. 더 짧은 단어로 다시 찾아보세요.',
            resetButtonTitle: '검색 초기화',
            footer: {
              selectText: '선택',
              navigateText: '이동',
              closeText: '닫기'
            }
          }
        }
      }
    },

    sidebar,

    outline: {
      level: [2, 3],
      label: '이 페이지에서'
    },

    docFooter: {
      prev: '이전',
      next: '다음'
    },

    lastUpdated: {
      text: '마지막 업데이트'
    },

    sidebarMenuLabel: '메뉴',
    darkModeSwitchLabel: '테마 변경',
    returnToTopLabel: '맨 위로',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zzapcho/serverWiki' }
    ],

    footer: {
      message: 'ZZAPCHO SERVER 공식 위키',
      copyright: 'Minecraft 26.2 · Fabric'
    }
  }
})
