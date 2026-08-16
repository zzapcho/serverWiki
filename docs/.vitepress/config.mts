import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ko-KR',
  title: 'ZZAPCHO SERVER WIKI',
  description: 'ZZAPCHO SERVER 공식 가이드 · 명령어 · 경제 · 조작법',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['meta', { name: 'theme-color', content: '#101612' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }]
  ],

  themeConfig: {
    siteTitle: 'ZZAPCHO SERVER',

    nav: [
      { text: '가이드', link: '/guide/' },
      { text: '명령어', link: '/commands/' },
      { text: '경제', link: '/economy/' },
      { text: '조작법', link: '/controls/' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: '시작하기',
        items: [
          { text: '홈', link: '/' },
          { text: '처음 접속하기', link: '/getting-started' }
        ]
      },
      {
        text: '가이드',
        items: [
          { text: '가이드 개요', link: '/guide/' },
          { text: '바닐라와 달라진 점', link: '/guide/vanilla-differences' }
        ]
      },
      {
        text: '조작법',
        items: [
          { text: '조작법 & 단축키', link: '/controls/' }
        ]
      },
      {
        text: '명령어',
        items: [
          { text: '전체 명령어', link: '/commands/' }
        ]
      },
      {
        text: '경제',
        items: [
          { text: '경제 시스템', link: '/economy/' }
        ]
      },
      {
        text: '커뮤니티',
        items: [
          { text: 'Discord & Voice', link: '/community/' }
        ]
      },
      {
        text: '도움말',
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
      prev: '이전 페이지',
      next: '다음 페이지'
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
      copyright: 'Built with VitePress'
    }
  }
})
