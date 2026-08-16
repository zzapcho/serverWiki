import { defineConfig } from 'vitepress'
import { nav, sidebar } from './navigation.mts'

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
