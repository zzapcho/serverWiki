# Wiki architecture

## Product goal

이 위키는 개발자용 모드 문서가 아니라 **처음 보는 플레이어도 바로 행동할 수 있는 Vanilla+ 서버 가이드**다. 문서는 모드 이름보다 플레이어 질문을 먼저 해결한다.

1. 무엇이 달라졌는가?
2. 어디서 얻거나 어떻게 만드는가?
3. 무엇을 클릭하거나 눌러야 하는가?
4. 문제가 생기면 무엇을 확인해야 하는가?

## Current content baseline

- Minecraft Java 26.2 + Fabric
- Enchanted Vertical Slabs
- SimpleOres
- Homeostatic Seasons
- Terralith + Tectonic
- MES - Moog's End Structures
- Universal Graves
- Simple Voice Chat
- Discord Integration / proxy-side Discord authentication

이전의 Farmer's Delight, Gone Fishing, Skniro Furniture, Friends&Foes, EconomyCraft, Elytra Slot 문서는 현재 플레이 가이드로 다시 넣지 않는다. 서버 구성이 실제로 바뀌었다는 확인이 있을 때만 복원한다.

## Source of truth

1. 현재 서버와 배포 클라이언트의 실제 동작/설정
2. 현재 설치 모드 JAR, JEI, 조작키 화면
3. 설치 버전의 공식 소스/문서
4. 이 위키
5. 추측이나 오래된 인터넷 글

레시피와 키처럼 바뀌기 쉬운 값은 틀린 숫자를 고정하지 않는다. 정확히 검증한 대표 조합은 모드 페이지에 넣고 전체 그래프는 JEI를 최종 기준으로 한다.

## Theme ownership

스타일 소유 순서를 유지한다.

```text
tokens.css → base.css → components.css → motion.css → mobile.css
```

- `tokens.css`: 색, 간격, radius, motion 상수
- `base.css`: 문서 안전성, focus/overflow 기본 규칙
- `components.css`: 데스크톱/기본 컴포넌트
- `motion.css`: 상태 전환과 reduced-motion
- `mobile.css`: 반응형 적응만 담당
- `enhancements.ts`: SPA에서 필요한 점진적 기능

나중 CSS에서 앞 레이어의 책임을 통째로 덮어쓰지 않는다.

## Navigation

`navigation.mts`가 하나의 전체 sidebar를 소유한다. 현재는 별도 `시작하기` 그룹을 두지 않는다. 사용자는 `가이드 → 모드 → 조합법/도움말` 흐름으로 찾는다.

## Search

VitePress local search + MiniSearch를 사용한다.

- prefix 검색
- 최대 2자 정도의 fuzzy 검색
- 한국어 쉬운 표현/오타/영문 모드명 alias
- 검색어 persistence 비활성화
- `/`, `Ctrl/Cmd+K` 단축키는 `enhancements.ts`가 담당

검색 alias는 실제 현재 콘텐츠에만 유지한다. 제거된 모드의 별칭이 검색에 다시 나타나지 않게 한다.

## Runtime safety

`enhancements.ts`는 SPA 재진입을 고려한다. 전역 listener는 한 번만 설치하고 Observer/RAF/timer는 교체 전에 정리한다. 라우트 변경 뒤 강제 `scrollTo(0)`를 호출하지 않는다.

## Responsive contract

테마 변경 시 최소 320, 360, 412, 768, 1024, 1440 CSS px를 확인한다. 페이지 자체의 가로 스크롤을 만들지 않는다. 표가 넓으면 `.zz-table-shell`만 가로 스크롤한다. 모바일 검색 입력은 16px 이상, 터치 대상은 약 44px를 유지한다.

## Release gates

```bash
npm ci
npm run docs:check
npm run docs:build
npm run docs:verify
```

GitHub Pages는 위 단계가 모두 성공한 뒤에만 배포한다.
