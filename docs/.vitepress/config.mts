import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ko-KR',
  title: 'ZZAPCHO SERVER WIKI',
  description: 'ZZAPCHO SERVER 공식 가이드 · 명령어 · 경제 · 조작법',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['meta', { name: 'theme-color', content: '#0d100e' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['meta', { property: 'og:site_name', content: 'ZZAPCHO SERVER WIKI' }],
    ['meta', { property: 'og:title', content: 'ZZAPCHO SERVER WIKI' }],
    ['meta', { property: 'og:description', content: '서버 플레이에 필요한 가이드, 명령어, 경제, 조작법을 한 곳에서 확인하세요.' }]
  ],

  themeConfig: {
    siteTitle: 'ZZAPCHO SERVER',

    nav: [
      { text: '가이드', link: '/guide/', activeMatch: '^/guide/' },
      { text: '명령어', link: '/commands/', activeMatch: '^/commands/' },
      { text: '경제', link: '/economy/', activeMatch: '^/economy/' },
      { text: '조작법', link: '/controls/', activeMatch: '^/controls/' },
      {
        text: '더보기',
        items: [
          { text: 'Discord & Voice', link: '/community/' },
          { text: '문제 해결', link: '/troubleshooting/' },
          { text: '업데이트', link: '/changelog/' }
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '검색',
            buttonAriaLabel: '문서 검색'
          },
          modal: {
            noResultsText: '검색 결과가 없습니다.',
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

    sidebar: [
      {
        text: '시작하기',
        collapsed: false,
        items: [
          { text: '홈', link: '/' },
          { text: '처음 접속하기', link: '/getting-started' }
        ]
      },
      {
        text: '서버 가이드',
        collapsed: false,
        items: [
          { text: '가이드 개요', link: '/guide/' },
          { text: '바닐라와 달라진 점', link: '/guide/vanilla-differences' },
          { text: '농사 & 요리', link: '/guide/farming-cooking' },
          { text: '낚시', link: '/guide/fishing' },
          { text: '건축 & 가구', link: '/guide/building' },
          { text: '탐험 & 월드', link: '/guide/exploration' },
          { text: '생존 & 죽음', link: '/guide/survival' }
        ]
      },
      {
        text: '플레이',
        collapsed: false,
        items: [
          { text: '조작법 & 단축키', link: '/controls/' },
          { text: '전체 명령어', link: '/commands/' },
          { text: '경제 시스템', link: '/economy/' }
        ]
      },
      {
        text: '커뮤니티',
        collapsed: false,
        items: [
          { text: 'Discord & Voice', link: '/community/' }
        ]
      },
      {
        text: '지원',
        collapsed: false,
        items: [
          { text: '문제 해결', link: '/troubleshooting/' },
          { text: '업데이트', link: '/changelog/' }
        ]
      }
    ],

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
