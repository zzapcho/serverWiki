const sidebarSections = [
  {
    text: '플레이 가이드',
    items: [
      { text: '서버 가이드', link: '/guide/' },
      { text: '바닐라와 달라진 점', link: '/guide/vanilla-differences' },
      { text: '클라이언트 모드', link: '/guide/client' },
      { text: '건축', link: '/guide/building' },
      { text: '탐험 & 월드', link: '/guide/exploration' },
      { text: '생존 & 죽음', link: '/guide/survival' }
    ]
  },
  {
    text: '모드 가이드',
    items: [
      { text: '모드 한눈에 보기', link: '/mods/' },
      { text: '세로 반블록', link: '/mods/vertical-slabs' },
      { text: '광물 · SimpleOres', link: '/mods/simpleores' },
      { text: '벌목 · FallingTree', link: '/mods/fallingtree' },
      { text: '겉날개 슬롯 · Elytra Slot', link: '/mods/elytra-slot' },
      { text: '지형 · Terralith + Tectonic', link: '/mods/worldgen' },
      { text: '구조물 · Dungeons & Taverns', link: '/mods/dungeons-taverns' },
      { text: '엔드 구조물 · MES', link: '/mods/end-structures' },
      { text: '무덤 · Universal Graves', link: '/mods/graves' },
      { text: '보이스챗', link: '/mods/voice-chat' },
      { text: 'Discord 연동', link: '/mods/discord' }
    ]
  },
  {
    text: '도움말',
    items: [
      { text: '조합법 빠른 찾기', link: '/recipes/' },
      { text: 'SimpleOres 조합법', link: '/recipes/simpleores' },
      { text: '조작법 & 단축키', link: '/controls/' },
      { text: 'Discord & Voice', link: '/community/' },
      { text: '문제 해결', link: '/troubleshooting/' },
      { text: '업데이트', link: '/changelog/' }
    ]
  }
]

export const nav = [
  { text: '가이드', link: '/guide/', activeMatch: '^/guide/' },
  { text: '모드', link: '/mods/', activeMatch: '^/mods/' },
  { text: '조합법', link: '/recipes/', activeMatch: '^/recipes/' },
  { text: 'Discord & Voice', link: '/community/', activeMatch: '^/(community|controls)/' },
  { text: '문제 해결', link: '/troubleshooting/', activeMatch: '^/troubleshooting/' }
]

export const sidebar = sidebarSections
