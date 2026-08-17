# ZZAPCHO SERVER WIKI — AI maintenance guide

Last reviewed: 2026-08-17

이 문서는 AI가 이 저장소를 수정할 때 따라야 하는 유지보수 계약이다. `AGENTS.md`와 함께 먼저 읽는다.

## 1. Product goal

`wiki.zzapcho.kr`은 **Minecraft 26.2 Fabric Vanilla+ 서버의 플레이어용 위키**다. 구현 용어보다 `어디서 찾는가`, `몇 Y에서 나오는가`, `무엇을 눌러야 하는가`, `기본값은 무엇인가`를 먼저 설명한다.

확률, 생성 높이, 기본 시간, 명령어처럼 플레이에 직접 영향을 주는 값은 가능한 한 표로 정리한다. 확인할 수 없는 숫자는 추측하지 않는다.

## 2. Current server baseline

현재 플레이 문서의 기준:

| Area | Current role |
| --- | --- |
| Game | Minecraft Java 26.2 |
| Loader | Fabric |
| Building | Enchanted Vertical Slabs 2.7.0 |
| Ores | SimpleOres Fabric |
| Tree cutting | FallingTree 26.2 line |
| Overworld | Terralith 2.6.4 + Tectonic 3.0.26 |
| End | MES - Moog's End Structures 2.0.3 + Moog's Structure Lib |
| Death | Universal Graves 3.12.0+26.2 + Polymer |
| Voice | Simple Voice Chat 26.2 line |
| Discord | DiscordIO/Velocity-side auth + patched Discord Integration chat bridge |

현재 플레이 문서에서 제거된 기능:

- Homeostatic Seasons
- Farmer's Delight
- Gone Fishing / Go Fish
- Skniro Furniture
- Friends&Foes
- EconomyCraft
- Elytra Slot
- Dungeons & Taverns
- inventory-save ticket / cheque
- JEI / REI recipe viewer dependency

사용자가 실제 서버에 다시 넣었다고 명시하기 전에는 제거된 기능을 현재 기능으로 되살리지 않는다.

서버 운영/성능 모드(Lithium, FerriteCore, ServerCore, Chunky, spark, LuckPerms, Ledger, backup/recovery tools 등)는 플레이어가 알아야 할 일이 있을 때만 노출한다. 추천만 했고 설치 확인이 없는 최적화 모드를 설치된 것으로 쓰지 않는다.

## 3. Configuration baseline

사용자가 현재 플레이 모드는 **기본 설정**이라고 명시했다. 따라서 문서 숫자는 다음 순서로 확인한다.

1. live server runtime/configuration 또는 사용자가 직접 알려 준 값
2. 설치 버전과 일치하는 공식 소스의 default config / worldgen data
3. 설치 버전의 공식 문서
4. 위키 기존 문서
5. 다른 버전 문서

기본값을 바꾸는 기능은 `선택 설정`으로 분리하고 현재 기본값인 것처럼 쓰지 않는다. FallingTree의 `requireEnchantment=true` 같은 항목이 그 예다.

## 4. Player commands only

위키에는 일반 플레이어가 실제로 사용할 명령만 노출한다. 현재 확인된 대표 명령:

- `/graves` — 자기 무덤 목록
- `/fallingtree toggle` — 자기 FallingTree 켜기/끄기

reload, 다른 플레이어 조회/수정, 관리자 teleport/permission/config 명령은 일반 플레이 가이드에서 제외한다.

## 5. Content model

모드 상세 페이지는 해당되는 항목을 사용한다.

- 한 문단 개요
- 기본 설정 요약
- 확률/시도 횟수/Y좌표/시간 등 실제 숫자
- 획득/사용 순서
- 플레이어 명령
- 조합법
- 문제 해결
- 공식 자료

월드젠처럼 하나의 `% 확률`이나 Y값으로 표현할 수 없는 기능은 왜 그런지 설명한다.

### Recipe rule

현재 클라이언트는 JEI/REI를 사용하지 않는다. 위키가 레시피 확인의 기준이다.

- 조합법은 가능한 한 제작 슬롯이 바로 보이는 **그림형 도식**으로 제공한다.
- 실제 26.2 레시피 데이터와 1:1 검증하지 못한 특수 레시피는 추측해 만들지 않는다.
- `/recipes/`는 모드별 조합법 위치로 빠르게 이동하는 인덱스다.

## 6. Beginner writing

좋은 문장:

- `주석 일반 광맥은 Y 44~83에서 청크당 10회 배치를 시도합니다.`
- `Shift를 누르면 기본 설정에서 FallingTree가 잠시 꺼집니다.`
- `무덤은 기본 15분 동안 다른 플레이어로부터 보호되고 30분 뒤 만료됩니다.`

피할 문장:

- registry ID만 설명 없이 나열
- `알아서`, `적당히` 같은 모호한 지시
- 확인하지 않은 Y좌표/드롭률
- 다른 버전의 기본키를 현재 기본키라고 단정
- 관리자 명령을 일반 플레이어 명령처럼 노출

## 7. Search contract

`docs/.vitepress/config.mts`의 local MiniSearch는 작은 위키에서 즉시 반응하면서 한글 검색을 잘 잡아야 한다.

- query persistence 비활성화
- `prefix: true`
- `maxFuzzy: 2`
- 너무 높은 fuzzy 비율 대신 자주 쓰는 한국어 오타/영문명 alias 사용
- 공백으로 나뉜 인접 단어의 compact bigram도 index/query token에 포함
- `combineWith: 'OR'`

예: `세로반블럭`, `미쓰릴`, `아다만튬`, `곡갱이`, `나무베기`, `템복구`, `엔드구조물`, `디코`, `렉`.

제거된 계절/JEI/REI alias는 검색 결과를 오염시키지 않는다.

## 8. Navigation contract

`navigation.mts`는 하나의 전체 sidebar를 제공한다. `시작하기`, `처음 접속하기`, `30초 빠른 참조`는 사용하지 않는다.

구조:

- 플레이 가이드
- 모드 가이드
- 도움말

현재 모드 가이드에는 Vertical Slabs, SimpleOres, FallingTree, Terralith/Tectonic, MES, Universal Graves, Voice Chat, Discord를 둔다.

## 9. Visual architecture

CSS ownership order:

```text
tokens.css → base.css → components.css → outline-fix.css → motion.css → mobile.css
```

`outline-fix.css`는 오른쪽 `이 페이지에서` 목차의 긴 한글 제목이 VitePress 기본 ellipsis에 잘리지 않도록 줄바꿈을 허용한다.

기타 원칙:

- 320px에서 페이지 가로 스크롤 금지
- 모바일 터치 대상 약 44px
- safe-area 고려
- `prefers-reduced-motion` 존중
- global `overflow-x:hidden`로 layout bug를 숨기지 않음
- focus ring 중복 금지

## 10. Runtime safety

`enhancements.ts`는 VitePress SPA에서 반복 실행될 수 있다.

- listener 중복 설치 금지
- observer 교체 전 disconnect
- obsolete RAF/timer 정리
- clipboard 실패를 성공으로 표시하지 않음
- route change 후 강제 `scrollTo({top:0})` 금지

## 11. Tables and accessibility

문서 표는 `.zz-table-shell`로 감싸고 실제 overflow할 때만 focusable region이 된다. 의미 있는 heading과 접근 가능한 버튼/링크 이름을 유지한다.

## 12. Required QA widths

테마/네비 변경 시 최소 320, 360, 412, 768, 1024, 1440 폭을 확인한다.

특히 `/mods/simpleores`, `/mods/fallingtree`, `/troubleshooting/`의 오른쪽 outline과 검색을 확인한다.

## 13. Release procedure

```bash
npm ci
npm run docs:check
npm run docs:build
npm run docs:verify
```

GitHub Pages workflow까지 성공해야 배포 완료로 보고한다.
