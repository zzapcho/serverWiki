# ZZAPCHO SERVER WIKI — AI maintenance guide

Last reviewed: 2026-08-17

이 문서는 AI/자동화가 이 저장소를 수정할 때 따라야 하는 유지보수 계약이다. `AGENTS.md`와 함께 먼저 읽는다.

## 1. Product goal

`wiki.zzapcho.kr`은 **Minecraft Java 26.2 Fabric Vanilla+ 서버의 플레이어용 위키**다. 구현 용어보다 `어디서 찾는가`, `몇 Y에서 나오는가`, `무엇을 눌러야 하는가`, `현재 서버값은 무엇인가`를 먼저 설명한다.

확률, 생성 높이, 시간, 명령어처럼 플레이에 직접 영향을 주는 값은 가능한 한 표로 정리한다. 확인할 수 없는 숫자는 추측하지 않는다.

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
- Chat Heads와 Simple Fog Control 파일명은 26.1 계열이지만 metadata는 각각 Minecraft `>=26.1`을 허용한다. 실제 26.2 실행 검증 전에는 완전 호환을 단정하지 않는다.

## 4. Live configuration baseline

2026-08-17 제공 `_config.zip`을 **현재 서버 설정의 최우선 근거**로 사용한다.

문서 숫자 우선순위:

1. live runtime/configuration 또는 사용자가 직접 알려 준 값
2. 제공된 설치 JAR/데이터팩의 default config/worldgen/recipe/loot data
3. 설치 버전 공식 문서/소스
4. 위키 기존 문서
5. 다른 버전 자료

### 현재 확인된 live 값

- **FallingTree:** `requireEnchantment=true`. Chopper 계열 인챈트가 붙은 도끼에서만 FallingTree가 발동한다. 이 값은 사용자가 의도적으로 바꾼 설정이다.
- FallingTree 나머지 핵심 값은 현재 config에서 기본 constructor 값과 일치한다: `INSTANTANEOUS`, `WHOLE_TREE`, max scan 500, max tree 100, `SNEAK_DISABLE`, durability `NORMAL`.
- **Universal Graves live config:** XP **80%**, `non_owner_protection_time=-1`, `self_destruction_time=1209600`(14일), expiration drop true, remote protection removal/breaking/unlocking false, `generate_on_top_of_fluids=true`.
- Universal Graves의 위 live 값 일부는 설치 JAR constructor 기본값(예: XP 100%, protection 900, breaking -1, remote actions true, fluid false)과 다르다. 사용자가 “나머지는 기본 설정”으로 인식하더라도 **실제 서버 동작 문서는 config를 우선**한다. 서버 config를 리셋했다는 확인이 있기 전까지 live 값을 유지한다.
- **Simple Voice Chat:** UDP `24454`, normal distance `48`, whisper `24`, groups enabled, recording allowed, `force_voice_chat=false`.
- **Terralith:** `recipe_changes=false`.
- **Elytra Slot:** `showInventoryPanel=false`.
- SimpleOres/Tectonic 등은 제공 config의 현재값을 사용하고, 별도 변경이 확인되지 않은 항목은 설치 버전 기본값으로 설명한다.

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

최소 320, 360, 412, 768, 1024, 1440 폭을 확인한다. 특히 `/mods/simpleores`, `/mods/dungeons-taverns`, `/mods/end-structures`, `/mods/graves`, `/mods/fallingtree`, `/mods/voice-chat`, `/guide/client`, `/troubleshooting/`의 표/outline/search를 확인한다.

```bash
npm ci
npm run docs:check
npm run docs:build
npm run docs:verify
```

GitHub Pages workflow와 production URL까지 성공해야 배포 완료로 보고한다.
