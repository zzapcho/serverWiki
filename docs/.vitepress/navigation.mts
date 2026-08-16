const start = [
  {
    text: '시작하기',
    items: [
      { text: '처음 접속하기', link: '/getting-started' },
      { text: '30초 빠른 참조', link: '/quick-reference' },
      { text: '서버 가이드', link: '/guide/' }
    ]
  }
]

const guide = [
  ...start,
  {
    text: '서버 가이드',
    items: [
      { text: '가이드 개요', link: '/guide/' },
      { text: '바닐라와 달라진 점', link: '/guide/vanilla-differences' },
      { text: '농사 & 요리', link: '/guide/farming-cooking' },
      { text: '요리 방법 & 레시피', link: '/guide/cooking-catalog' },
      { text: '낚시', link: '/guide/fishing' },
      { text: '물고기 확률 & 낚싯대', link: '/guide/fishing-catalog' },
      { text: '건축 & 가구', link: '/guide/building' },
      { text: '가구 & 건축 카탈로그', link: '/guide/building-catalog' },
      { text: '탐험 & 월드', link: '/guide/exploration' },
      { text: '생존 & 죽음', link: '/guide/survival' }
    ]
  },
  {
    text: '참고',
    items: [
      { text: '모드 전체보기', link: '/mods/' },
      { text: '조합법', link: '/recipes/' },
      { text: '조작법 & 단축키', link: '/controls/' },
      { text: '알려진 문제', link: '/troubleshooting/#현재-알려진-문제' }
    ]
  }
]

const mods = [
  ...start,
  {
    text: '모드 & 시스템',
    items: [
      { text: '전체보기', link: '/mods/' },
      { text: '플레이 콘텐츠', link: '/mods/gameplay' },
      { text: '서버 시스템', link: '/mods/server' },
      { text: '클라이언트 & QoL', link: '/mods/client' },
      { text: '조합법', link: '/recipes/' }
    ]
  },
  {
    text: '콘텐츠 상세',
    items: [
      { text: "Farmer's Delight", link: '/mods/farmers-delight' },
      { text: 'Gone Fishing', link: '/mods/gone-fishing' },
      { text: 'Vertical Slabs', link: '/mods/vertical-slabs' },
      { text: 'Skniro Furniture', link: '/mods/furniture' },
      { text: 'Friends&Foes', link: '/mods/friends-and-foes' },
      { text: 'Elytra Slot', link: '/mods/elytra-slot' },
      { text: '월드 생성', link: '/mods/worldgen' }
    ]
  },
  {
    text: '서버 기능 상세',
    items: [
      { text: 'EconomyCraft', link: '/mods/economycraft' },
      { text: 'Universal Graves', link: '/mods/graves' },
      { text: 'Simple Voice Chat', link: '/mods/voice-chat' },
      { text: 'Discord 연동', link: '/mods/discord' }
    ]
  },
  {
    text: '플레이',
    items: [
      { text: '조작법 & 단축키', link: '/controls/' },
      { text: '전체 명령어', link: '/commands/' },
      { text: '경제 시스템', link: '/economy/' }
    ]
  }
]

const play = [
  ...start,
  {
    text: '플레이',
    items: [
      { text: '조작법 & 단축키', link: '/controls/' },
      { text: '전체 명령어', link: '/commands/' },
      { text: '경제 시스템', link: '/economy/' }
    ]
  },
  {
    text: '참고',
    items: [
      { text: '모드 전체보기', link: '/mods/' },
      { text: '조합법', link: '/recipes/' },
      { text: '문제 해결', link: '/troubleshooting/' }
    ]
  }
]

const support = [
  ...start,
  {
    text: '커뮤니티 & 지원',
    items: [
      { text: 'Discord & Voice', link: '/community/' },
      { text: '문제 해결', link: '/troubleshooting/' },
      { text: '업데이트', link: '/changelog/' }
    ]
  }
]

export const nav = [
  { text: '가이드', link: '/guide/', activeMatch: '^/guide/' },
  { text: '모드', link: '/mods/', activeMatch: '^/(mods|recipes)/' },
  { text: '명령어', link: '/commands/', activeMatch: '^/commands/' },
  { text: '경제', link: '/economy/', activeMatch: '^/economy/' },
  {
    text: '더보기',
    items: [
      { text: '30초 빠른 참조', link: '/quick-reference' },
      { text: '조작법 & 단축키', link: '/controls/' },
      { text: 'Discord & Voice', link: '/community/' },
      { text: '문제 해결', link: '/troubleshooting/' },
      { text: '업데이트', link: '/changelog/' }
    ]
  }
]

export const sidebar = {
  '/guide/': guide,
  '/mods/': mods,
  '/recipes/': mods,
  '/controls/': play,
  '/commands/': play,
  '/economy/': play,
  '/community/': support,
  '/troubleshooting/': support,
  '/changelog/': support,
  '/quick-reference': start,
  '/getting-started': start
}
