<span class="page-kicker">MOD REFERENCE</span>

# 모드 & 시스템 전체보기

<p class="page-lead">“어떤 모드가 깔렸나”에서 끝내지 않고, 플레이어에게 보이는 변화·필요한 클라이언트·상호작용·키·문제 해결 위치까지 연결합니다.</p>

<div class="content-grid">
  <a class="content-card" href="/mods/gameplay"><span class="card-icon">⚒</span><strong>플레이 콘텐츠</strong><span>농사·요리·낚시·건축·몹·월드 생성처럼 직접 플레이를 바꾸는 모드</span></a>
  <a class="content-card" href="/mods/server"><span class="card-icon">S</span><strong>서버 시스템</strong><span>경제, 무덤, Discord, 인증, 복구, 성능처럼 서버가 제공하는 기능</span></a>
  <a class="content-card" href="/mods/client"><span class="card-icon">C</span><strong>클라이언트 & QoL</strong><span>JEI, JourneyMap, HUD, 그래픽과 성능 모드 및 조작</span></a>
  <a class="content-card" href="/recipes/"><span class="card-icon">R</span><strong>조합법</strong><span>특수 제작 흐름과 JEI로 현재 설치 버전의 전체 레시피를 찾는 방법</span></a>
</div>

## 현재 서버의 주요 버전

| 모드 / 시스템 | 현재 서버 기준 | 플레이어에게 보이는 핵심 |
|---|---|---|
| Farmer's Delight Refabricated | `26.2-3.6.15+refabricated` | 농사·도마·조리도구·음식 |
| Gone Fishing | `1.12.0+26.2` | 추가 낚시 전리품·장비·음식·차원 낚시 |
| Enchanted Vertical Slabs | `2.7.0` | 바닐라 재료의 세로 반블록 |
| Skniro's Furniture | `1.5.2-26.2-Fabric` | 가구·장식·일부 수납/상호작용 |
| Friends&Foes | `4.0.27` | 바닐라풍 추가 몹·구조·아이템 |
| Elytra Slot | `2.0.0` | 흉갑과 겉날개 동시 장착 |
| Terralith | `2.6.4` | 바이옴/오버월드 다양화 |
| Tectonic | `3.0.26` | 대규모 지형 형태 변경 |
| Dungeons and Taverns | `5.3.0` | 탐험 구조물 확장 |
| EconomyCraft | `1.7.1` | 잔액·상점·판매·주문 |
| Universal Graves | `3.12.0+26.2` | 사망 무덤·무덤 목록 |
| Simple Voice Chat | `2.6.22+26.2` | 근거리 음성채팅 |
| Discord Integration | `3.2.0 + local patch` | MC↔Discord 채팅/이벤트 |
| FabricProxy-Lite | `2.12.0` | Velocity 뒤 백엔드 연결/보호 |

::: info 버전 표의 의미
이 표는 **현재 서버에서 실제로 사용 중인 파일 기준**입니다. 공개 프로젝트 사이트의 최신 버전과 다를 수 있으며, 업데이트는 테스트 후 반영합니다.
:::

## 플레이어가 직접 알아야 하는 상세 문서

| 기능 | 상세 문서 | 별도 키 |
|---|---|---|
| 농사·요리 | [Farmer's Delight](/mods/farmers-delight) | 대부분 없음, 블록/GUI 상호작용 |
| 낚시 | [Gone Fishing](/mods/gone-fishing) | 없음 |
| 세로 반블록 | [Vertical Slabs](/mods/vertical-slabs) | 없음 |
| 가구 | [Skniro Furniture](/mods/furniture) | 없음, 우클릭 중심 |
| 추가 몹 | [Friends&Foes](/mods/friends-and-foes) | 없음 |
| 겉날개 슬롯 | [Elytra Slot](/mods/elytra-slot) | 없음 |
| 월드/구조물 | [월드 생성](/mods/worldgen) | 없음 |
| 경제 | [EconomyCraft](/mods/economycraft) | 명령어 |
| 사망 무덤 | [Universal Graves](/mods/graves) | `/graves`, 무덤 상호작용 |
| 음성 | [Simple Voice Chat](/mods/voice-chat) | `V`, `M`, `N`, `H` + 사용자 지정 |
| Discord | [Discord 연동](/mods/discord) | 일반 채팅 사용 |

## 의존성은 왜 따로 조작하지 않나요?

Fabric API, Architectury API, Resourceful Lib, FactoryTools, Lithostitched, Polymer, Fabric Language Kotlin, Collective 같은 모드는 다른 기능이 동작하기 위한 **기반/라이브러리** 역할이 큽니다. 플레이어가 직접 “사용”하는 UI가 없더라도 제거하면 상위 모드가 시작하지 않을 수 있습니다.

특히 이 서버에서는 **Polymer가 필요한 구성요소가 있으므로 임의로 제거하면 안 됩니다.**

## 정확성 우선순위

1. **현재 서버 런타임과 서버 설정**
2. **현재 배포 클라이언트의 키 설정 / JEI 데이터**
3. 이 위키의 설명
4. 공개 모드 사이트의 일반 설명

모드 업데이트로 레시피·키·세부 동작이 바뀔 수 있는 부분은 이 순서를 사용합니다.
