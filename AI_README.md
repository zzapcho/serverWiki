# ZZAPCHO SERVER WIKI — AI maintenance guide

Last reviewed: 2026-08-17

이 문서는 AI/자동화가 이 저장소를 수정할 때 따라야 하는 유지보수 계약이다. `AGENTS.md`와 함께 먼저 읽는다.

## 1. Product goal

`wiki.zzapcho.kr`은 **Minecraft Java 26.2 Fabric Vanilla+ 서버의 플레이어용 위키**다. 구현 용어보다 `어디서 찾는가`, `몇 Y에서 나오는가`, `무엇을 눌러야 하는가`, `기본값은 무엇인가`를 먼저 설명한다.

확률, 생성 높이, 기본 시간, 명령어처럼 플레이에 직접 영향을 주는 값은 가능한 한 표로 정리한다. 확인할 수 없는 숫자는 추측하지 않는다.

## 2. Verified server baseline

2026-08-17 제공 `서버모드.zip` 실물 기준.

### Player-facing content

| Area | Installed |
| --- | --- |
| Game | Minecraft Java 26.2 |
| Loader | Fabric |
| Building | Enchanted Vertical Slabs 2.7.0 |
| Ores / gear | SimpleOres Fabric 1.9.10 |
| Tree cutting | FallingTree 25 |
| Tree enchant datapack | FallingTree Enchantments 26.2.0-1 |
| Extra equipment slot | Elytra Slot 2.0.0 |
| Overworld terrain | Terralith 2.6.4 + Tectonic 3.0.26 |
| General structures | Dungeons and Taverns 5.3.0 |
| End structures | MES 2.0.3 + Moog's Structure Lib 3.0.6 |
| Death | Universal Graves 3.12.0+26.2 |
| Voice | Simple Voice Chat 2.6.22+26.2 |
| Discord | Discord Integration 3.2.0 + proxy-side auth |

### Server-only/admin/performance/support

Bkups, Death Backup, Chunky, C2ME, FerriteCore, Krypton, Lithium, Noisium, ScalableLux, ServerCore, spark, Ledger, InvView, LuckPerms, UniversalPerms, FabricProxy Lite, Polymer, Lithostitched, Fabric API/Kotlin, Cloth Config, Collective, BucketLib.

플레이어가 직접 써야 하는 기능이 아니면 개별 상세 페이지를 만들지 않는다. Death Backup은 운영자 복구 수단이지 플레이어 명령으로 설명하지 않는다.

## 3. Verified client snapshot

2026-08-17 제공 `클라모드.zip`에는 gameplay/client/performance/QoL 모드가 함께 들어 있다. `/guide/client`가 플레이어 안내의 기준이다.

검수상 주의:

- `fabric-api` mod id가 같은 JAR 2개가 포함되어 있다. 배포본에는 하나만 둔다.
- `sodium` mod id가 같은 0.9.1과 0.9.2-alpha.4가 동시에 있다. 배포본에는 하나만 둔다.
- Nvidium 0.4.4-beta3의 metadata는 Sodium `0.9.1`을 요구한다. 현재 조합을 유지한다면 Sodium 0.9.1이 일치한다.
- Chat Heads와 Simple Fog Control 파일명은 26.1 계열이지만 metadata는 각각 Minecraft `>=26.1`을 허용한다. 그래도 실제 26.2 실행 검증 전에는 완전 호환을 단정하지 않는다.

## 4. Configuration baseline

이번 제공물에는 live `config/`가 포함되지 않았다. 따라서 현재 문서의 `기본값`은 **설치된 JAR의 default config/code**를 뜻한다.

문서 숫자 우선순위:

1. live runtime/configuration 또는 사용자가 직접 알려 준 값
2. 제공된 설치 JAR/데이터팩의 default config/worldgen/recipe/loot data
3. 설치 버전 공식 문서/소스
4. 위키 기존 문서
5. 다른 버전 자료

중요한 verified defaults:

- FallingTree `requireEnchantment=false`; Enchantments 데이터팩 설치 자체와 인챈트 필수 설정은 별개다.
- Universal Graves `protectionTime=900`, `breakingTime=-1`; 기본 자동 만료 없음.
- Terralith `recipe_changes=false`; 선택형 레시피 변경은 기본 적용되지 않는다.
- Elytra Slot은 `DataComponents.GLIDER`가 있는 아이템을 전용 슬롯에 허용한다.

## 5. Player commands only

일반 플레이 문서에는 일반 플레이어가 실제로 사용할 명령만 노출한다.

- `/graves` — 자기 무덤 목록
- `/fallingtree toggle` — 자기 FallingTree 토글

Death Backup, Ledger, LuckPerms, InvView, reload/config/다른 플레이어 조작 명령은 일반 플레이어 명령처럼 노출하지 않는다.

## 6. Worldgen/probability wording

- `count`는 광맥 보장 개수가 아니라 배치 **시도 횟수**다.
- `spacing`/`separation`은 구조물의 random-spread 후보 지역 간격/최소 분리값(청크)이지 “N청크마다 반드시 하나”가 아니다.
- 구조물 내부 `weight`는 해당 structure set 후보가 선택됐을 때의 **조건부 가중치**다.
- biome 조건, exclusion zone, frequency reduction, 지형 적합성 때문에 실제 발견 확률은 더 낮아질 수 있다.
- MES는 Moog's Structure Lib가 JSON spacing/separation을 런타임에서 1.65배 반올림하므로 플레이 문서에는 raw와 effective를 구분한다.

## 7. Recipe rule

현재 검수본에는 JEI/REI가 없다. 위키가 모드 레시피의 플레이어 기준이다.

- 실제 설치 JAR `data/*/recipe/*.json`에 존재하는 것만 확정 레시피로 쓴다.
- SimpleOres에는 202 recipe JSON이 있으며 조건부 Energized Power pulverizer 레시피 12개는 해당 모드가 서버에 없으므로 현재 플레이 핵심 레시피로 안내하지 않는다.
- Vertical Slabs에는 146 recipe JSON이 있으며 재료별 반복 패턴은 대표 패턴 + 지원 계열로 정리한다.
- Dungeons & Taverns의 16 recipe JSON은 바닐라 harness 염색 레시피 대체/확장 성격이다.
- Universal Graves에는 `visual_grave` 제작 레시피가 실제로 존재한다. “무덤 제작법 없음”이라고 쓰지 않는다.

## 8. Search contract

`docs/.vitepress/config.mts` local MiniSearch:

- query persistence 비활성화
- `prefix: true`
- `fuzzy: 0.22`, `maxFuzzy: 2`
- compact bigram + 자주 쓰는 한국어 오타/영문명 alias
- `combineWith: 'OR'`

예: `세로반블럭`, `미쓰릴`, `아다만튬`, `곡갱이`, `나무베기`, `템복구`, `던전`, `선술집`, `겉날개`, `엔드구조물`, `디코`, `렉`.

## 9. Navigation contract

하나의 전체 sidebar:

- 플레이 가이드
- 모드 가이드
- 도움말

현재 모드 가이드: Vertical Slabs, SimpleOres, FallingTree, Elytra Slot, Terralith/Tectonic, Dungeons & Taverns, MES, Universal Graves, Voice Chat, Discord.

## 10. Visual architecture

```text
tokens.css → base.css → components.css → outline-fix.css → motion.css → mobile.css
```

- 320px에서 페이지 가로 스크롤 금지
- 모바일 터치 대상 약 44px
- safe-area 고려
- `prefers-reduced-motion` 존중
- global `overflow-x:hidden`으로 layout bug를 숨기지 않음
- focus ring 중복 금지

## 11. Runtime safety

`enhancements.ts`는 VitePress SPA에서 반복 실행될 수 있다.

- listener 중복 설치 금지
- observer 교체 전 disconnect
- obsolete RAF/timer 정리
- clipboard 실패를 성공으로 표시하지 않음
- route change 후 강제 `scrollTo({top:0})` 금지

## 12. QA and release

최소 320, 360, 412, 768, 1024, 1440 폭을 확인한다. 특히 `/mods/simpleores`, `/mods/dungeons-taverns`, `/mods/end-structures`, `/mods/graves`, `/guide/client`, `/troubleshooting/`의 표/outline/search를 확인한다.

```bash
npm ci
npm run docs:check
npm run docs:build
npm run docs:verify
```

GitHub Pages workflow와 production URL까지 성공해야 배포 완료로 보고한다.
