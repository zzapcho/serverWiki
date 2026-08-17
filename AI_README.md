# ZZAPCHO SERVER WIKI — AI maintenance guide

Last reviewed: 2026-08-17

이 문서는 AI가 이 저장소를 수정할 때 따라야 하는 유지보수 계약이다. `AGENTS.md`와 함께 먼저 읽는다.

## 1. Product goal

`wiki.zzapcho.kr`은 **Minecraft 26.2 Fabric Vanilla+ 서버의 플레이어용 위키**다. 독자는 Fabric 내부 구조를 모를 수 있으므로 구현 용어보다 실제 행동을 먼저 설명한다.

페이지는 가능하면 다음 질문에 답한다.

1. 이 기능은 무엇인가?
2. 어디서 얻거나 어떻게 만드는가?
3. 무엇을 클릭/설치/입력하는가?
4. 조합법이나 획득법은 어디서 확인하는가?
5. 문제가 생기면 무엇을 확인하는가?

짧게 만들기 위해 중요한 설명을 지우지 말고, 제목·표·단계로 나눠 쉽게 스캔하게 한다.

## 2. Current server baseline

현재 플레이 문서의 기준은 다음이다.

| Area | Current role |
| --- | --- |
| Game | Minecraft Java 26.2 |
| Loader | Fabric |
| Building | Enchanted Vertical Slabs 2.7.0 |
| Ores | SimpleOres Fabric |
| Seasons | Homeostatic Seasons 26.2 line |
| Overworld | Terralith 2.6.4 + Tectonic 3.0.26 |
| End | MES - Moog's End Structures 2.0.3 + Moog's Structure Lib |
| Death | Universal Graves 3.12.0+26.2 + Polymer |
| Voice | Simple Voice Chat 26.2 line |
| Discord | DiscordIO/VelocityDiscord for proxy auth + patched Discord Integration for chat bridge |

현재 플레이 문서에서 제거된 기능:

- Farmer's Delight
- Gone Fishing / Go Fish
- Skniro Furniture
- Friends&Foes
- EconomyCraft
- Elytra Slot
- Dungeons & Taverns
- inventory-save ticket / cheque

사용자가 실제 서버에 다시 넣었다고 명시하기 전에는 위 기능을 현재 기능, 계획 기능, 추천 기능으로 슬쩍 되살리지 않는다.

서버 운영/성능 모드(Lithium, FerriteCore, ServerCore, Chunky, spark, LuckPerms, Ledger, backup/recovery tools 등)는 플레이어가 알아야 할 일이 있을 때만 노출한다. 추천만 했고 설치 확인이 없는 C2ME/ScalableLux/Noisium 등은 설치된 것으로 쓰지 않는다.

## 3. Source-of-truth order

두 정보가 다르면 다음 순서를 사용한다.

1. live server runtime/configuration and observed behavior
2. current distributed client pack, installed JAR data, JEI, current key settings
3. exact upstream source/docs for the installed version
4. this wiki
5. docs for another version
6. memory or guesses

특히 레시피, 키, 생성 높이, 드롭 확률, 버전 숫자는 추측하지 않는다.

## 4. Content model

기능/모드 상세 페이지는 필요한 항목만 사용한다.

- 한 문단 개요
- 무엇이 추가되는가
- 실제 플레이 순서
- 클릭/설치/GUI/키
- 제작법 또는 획득법
- 다른 기능과의 관계
- 문제 해결
- 관련 문서

조합법이 없는 월드 생성/계절/통신 모드에는 억지 recipe grid를 만들지 말고 `조합법 없음`을 명확히 쓴다.

### Recipe rule

대표 레시피를 정확히 검증했다면 모드 페이지 안에서 바로 보여 준다. 아이템이 많거나 현재 JAR과 1:1 검증하지 못한 경우에는 제작 흐름과 검색어를 설명하고 **현재 JEI를 최종 기준**으로 한다.

`/recipes/`는 중복 레시피 데이터베이스가 아니라 각 모드의 `#제작법`으로 보내는 빠른 인덱스다.

## 5. Beginner writing

좋은 문장:

- `같은 재료 3개를 세로 한 줄로 놓으세요.`
- `오닉스는 네더에서 찾습니다.`
- `키가 다르면 설정 → 조작키에서 JEI를 검색하세요.`

피할 문장:

- 설명 없이 registry ID만 나열
- `알아서`, `그냥 사용`, `적당히` 같은 모호한 지시
- 확인하지 않은 Y좌표/드롭률
- 예전 버전 기본키를 현재 기본키라고 단정
- 제거된 기능을 아직 있는 것처럼 서술

## 6. Search contract

`docs/.vitepress/config.mts`의 local MiniSearch는 현재 Vanilla+ 문서에 맞춘다.

- `prefix: true`
- fuzzy matching 활성화, `maxFuzzy: 2`
- 쉬운 한국어, 흔한 오타, 영문 모드명 alias
- query persistence 비활성화

예: `세로반블럭`, `광석`, `미스릴`, `겨울`, `엔드 구조물`, `템 복구`, `디코`, `렉`으로도 관련 문서를 찾을 수 있어야 한다.

제거된 모드의 alias를 남겨 검색 결과를 오염시키지 않는다.

## 7. Navigation contract

`navigation.mts`는 하나의 전체 sidebar를 제공한다. `시작하기`, `처음 접속하기`, `30초 빠른 참조`는 현재 정보 구조에서 사용하지 않는다.

구조:

- 플레이 가이드
- 모드 가이드
- 도움말

경제/전체 명령어 같은 제거된 시스템을 최상위 메뉴에 다시 넣지 않는다.

## 8. Visual architecture

CSS ownership order:

```text
tokens.css → base.css → components.css → motion.css → mobile.css
```

- spacing/radius/color는 token 우선
- 동일 컴포넌트는 동일한 위치/간격
- 320px에서 페이지 가로 스크롤 금지
- 모바일 터치 대상 약 44px
- 모바일 입력 16px 이상
- safe-area 고려
- motion은 transform/opacity/color 중심
- `prefers-reduced-motion` 존중
- `100vw`로 layout bug를 숨기지 않음
- global `overflow-x:hidden`로 원인을 감추지 않음
- focus ring 중복 금지

UI.zip은 원칙 참고 자료이며 코드를 그대로 복사하는 소스가 아니다.

## 9. Search/sidebar/runtime safety

`enhancements.ts`는 VitePress SPA에서 반복 실행될 수 있다.

- global install guard 유지
- listener 중복 설치 금지
- Resize/Intersection/MutationObserver 교체 전 disconnect
- obsolete RAF 취소 또는 generation guard
- toast timer 교체 전 이전 timer 취소
- clipboard 실패를 성공으로 표시하지 않음
- route change 후 강제 `scrollTo({top:0})` 금지
- hash/search-result/browser history의 스크롤은 router/browser에 맡김

모바일 sidebar는 full-screen navigation surface이며 100svh/100dvh, safe-area, 독립 scroll, 약 44px close target을 유지한다.

## 10. Tables and accessibility

문서 표는 `.zz-table-shell`로 감싸고 실제로 overflow할 때만 focusable region이 된다. 페이지 전체는 가로 스크롤하지 않는다.

의미 있는 heading을 쓰고 버튼/링크에는 접근 가능한 이름을 준다. 불필요한 카드/표를 Tab stop으로 만들지 않는다.

## 11. Required QA widths

테마/네비 변경 시 최소 다음 폭을 확인한다.

- 320
- 360
- 412
- 768
- 1024
- 1440

확인 페이지: `/`, `/guide/vanilla-differences`, `/mods/`, `/mods/simpleores`, `/recipes/`, `/troubleshooting/`, 검색.

## 12. Repository ownership

```text
docs/.vitepress/config.mts        metadata + local search
docs/.vitepress/navigation.mts    top nav + shared sidebar
docs/.vitepress/theme/index.ts    theme import order
docs/.vitepress/theme/tokens.css  tokens
docs/.vitepress/theme/base.css    reset/safety
docs/.vitepress/theme/components.css components
docs/.vitepress/theme/motion.css  motion
docs/.vitepress/theme/mobile.css  responsive adaptations
docs/.vitepress/theme/enhancements.ts progressive runtime behavior
docs/guide/**                     task-oriented guide
docs/mods/**                      mod detail + recipe/acquisition
docs/recipes/**                   recipe index / JEI help
scripts/validate.mjs              source/link/regression checks
scripts/verify-dist.mjs           built HTML/assets/search verification
```

## 13. Release procedure

Do not call a change deployed just because Markdown was edited.

```bash
npm ci
npm run docs:check
npm run docs:build
npm run docs:verify
```

GitHub Pages workflow must complete successfully. If it fails, inspect the failed job and fix the source before reporting completion.
