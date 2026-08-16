<span class="page-kicker">SERVER SYSTEMS</span>

# 서버 시스템 & 내부 구성

<p class="page-lead">플레이어 기능, 복구, 프록시, 성능, 라이브러리를 분리해 “무엇이 무엇을 담당하는지”가 꼬이지 않게 정리합니다.</p>

## 플레이어에게 직접 보이는 서버 기능

| 모드 / 시스템 | 역할 | 플레이어 사용법 |
|---|---|---|
| EconomyCraft | 가상 화폐·판매·상점·주문 | `/bal`, `/sell`, `/shop`, `/orders` 등 |
| Universal Graves | 사망 아이템 보호 | 사망 시 자동, `/graves` |
| Simple Voice Chat | 근거리 음성 | 클라이언트 설치 + `V` GUI |
| Discord Integration | MC↔Discord 채팅/이벤트 | 일반 채팅, 자동 이벤트 |
| DiscordIO / Velocity | 계정 연결·화이트리스트 | Discord에서 인증 |
| FabricProxy-Lite | Velocity 프록시 전달/직접 접속 보호 | 플레이어 조작 없음 |

→ [EconomyCraft](/mods/economycraft) · [Graves](/mods/graves) · [Voice](/mods/voice-chat) · [Discord](/mods/discord)

## 관리자 / 복구 계층

복구 도구는 한 모드가 모든 것을 책임지게 하지 않고 **문제 종류별로 역할을 분리**합니다.

| 도구 | 담당 |
|---|---|
| Universal Graves | 정상적인 플레이어 사망/아이템 회수 |
| Death Backup | 사망 시점 인벤토리 백업/관리 복구 보조 |
| InvView | 필요 시 플레이어 인벤토리 확인/관리 |
| Ledger | 블록/상호작용 기록 추적 |
| Bkups | 월드/서버 백업 |
| LuckPerms | 권한 그룹/노드 관리 |
| Universal Perms | Fabric 권한 연동 보조 |

이 구조 덕분에 “누가 블록을 바꿨는가”, “죽기 전 인벤토리가 무엇이었나”, “월드 전체를 되돌려야 하나”를 서로 다른 도구로 해결할 수 있습니다.

## 성능 / 진단

| 모드 | 역할 | 플레이어 조작 |
|---|---|---|
| Lithium | 게임 로직 최적화 | 없음 |
| FerriteCore | 메모리 사용량 절감 | 없음 |
| Krypton | 네트워크 처리 최적화 | 없음 |
| ServerCore | 서버 성능 관련 최적화 | 없음 |
| Chunky | 월드 사전 생성 | 관리자용 |
| spark | TPS/CPU/성능 프로파일링 | 관리자 진단 |

C2ME처럼 변경 범위가 큰 최적화는 무조건 넣지 않고, 실제 spark 프로파일에서 청크 병목이 확인될 때 검토하는 방식이 안전합니다.

## 기반 / 의존성

| 라이브러리 | 주 사용처 / 역할 |
|---|---|
| Fabric API | Fabric 공통 API |
| Architectury API | EconomyCraft 등 크로스플랫폼 기반 |
| Resourceful Lib | Friends&Foes 등 기반 |
| FactoryTools | Gone Fishing 의존성 |
| Polymer Bundled | 서버 측 가상 콘텐츠/리소스 기반, Universal Graves·Gone Fishing 계열에서 필요 |
| Lithostitched | 월드 생성 계열 기반 |
| Fabric Language Kotlin | Kotlin 기반 Fabric 모드 런타임 |
| Collective | 일부 Serilum 계열/공통 기능 기반 |

::: danger 의존성은 “안 쓰는 모드”가 아닙니다
직접 메뉴가 없다고 삭제하면 상위 모드가 로드되지 않을 수 있습니다. 특히 Polymer는 현재 서버 구성이 요구하므로 제거 대상이 아닙니다.
:::

## 현재 운영에서 확인할 경고

서버가 부팅된다는 사실과 “문제 없음”은 다릅니다. Resourceful Lib 권한 경고, Furniture 데이터 픽서 경고, Gone Fishing의 일부 차원 loot table 경고, Discord Integration refmap 경고 등은 [현재 알려진 문제](/troubleshooting/#현재-알려진-문제)에서 추적합니다.
