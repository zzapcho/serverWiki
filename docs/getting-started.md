<span class="page-kicker">START HERE</span>

# 처음 접속하기

<p class="page-lead">새 플레이어가 서버에 들어오기 전부터 첫 5분까지 필요한 순서를 정리했습니다.</p>

<div class="flow-grid">
  <div class="flow-card"><span class="flow-number">01</span><strong>클라이언트 준비</strong><p>Minecraft 26.2와 서버에서 배포한 Fabric 클라이언트 구성을 그대로 적용합니다.</p></div>
  <div class="flow-card"><span class="flow-number">02</span><strong>Discord 인증</strong><p>Discord에서 Minecraft 계정을 연결하고 화이트리스트 절차를 완료합니다.</p></div>
  <div class="flow-card"><span class="flow-number">03</span><strong>첫 접속 점검</strong><p>JEI, 지도, Voice Chat, 추가 장비 슬롯이 정상인지 확인합니다.</p></div>
</div>

## 1. 클라이언트 준비

서버는 **Minecraft Java 26.2 + Fabric** 환경입니다. 콘텐츠 레지스트리를 추가하는 모드가 있으므로, 개인이 비슷해 보이는 버전을 따로 모으기보다 **서버 배포 클라이언트 팩을 기준**으로 맞추는 것이 가장 안전합니다.

| 항목 | 기준 | 이유 |
|---|---|---|
| Minecraft | `26.2` | 게임 프로토콜과 콘텐츠 버전을 맞춤 |
| Fabric Loader / API | 배포 팩 기준 | Fabric 모드 로딩과 공통 API |
| 콘텐츠 모드 | 배포 팩 기준 | 아이템·블록·몹 레지스트리 일치 |
| Simple Voice Chat | 배포 팩 포함 | 인게임 근거리 음성 사용 |
| JEI / JourneyMap | 배포 팩 포함 | 레시피와 지도 편의 기능 |

::: warning 버전을 임의로 섞지 마세요
“같은 모드 이름”이어도 Minecraft 버전이나 빌드가 다르면 접속 단계에서 레지스트리 오류가 날 수 있습니다. 직접 추가한 클라이언트 모드는 문제가 생겼을 때 가장 먼저 분리 테스트하세요.
:::

## 2. Discord 인증

서버 입장은 Velocity 앞단의 Discord 인증/화이트리스트를 기준으로 관리합니다.

1. 서버 Discord의 인증 안내로 이동합니다.
2. 안내된 방식으로 Minecraft 닉네임/계정을 연결합니다.
3. 인증 완료 안내와 역할 부여를 확인합니다.
4. Discord 공지에 있는 최신 서버 주소로 접속합니다.

닉네임을 바꾼 뒤 접속이 막혔다면 새 닉네임으로 다시 연결해야 하는지 관리자에게 확인하세요.

## 3. 첫 접속 직후 체크

| 체크 | 정상 상태 |
|---|---|
| JEI | 인벤토리에서 아이템 목록/검색이 보이고 `R`, `U`가 동작 |
| JourneyMap | <kbd>J</kbd>로 전체 지도를 열 수 있음 |
| Voice Chat | <kbd>V</kbd>로 GUI를 열어 초기 설정 가능 |
| Elytra Slot | 겉날개 전용 추가 슬롯을 확인 가능 |
| Discord 연동 | 일반 Minecraft 채팅이 Discord 채널과 연동됨 |

### Voice Chat 첫 설정

<kbd>V</kbd>를 열어 온보딩을 진행합니다. 여기서 **마이크 장치, 스피커 장치, PTT/Voice Activation 방식, PTT를 쓸 경우 사용할 키, 음성 감지 임계값**을 설정합니다. PTT를 특정 키로 고정했다고 가정하지 마세요.

## 4. 첫 플레이 전에 딱 3개

<div class="content-grid">
  <a class="content-card" href="/quick-reference"><span class="card-icon">30</span><strong>30초 빠른 참조</strong><span>죽음·경제·Voice·JEI에서 바로 필요한 것만 봅니다.</span></a>
  <a class="content-card" href="/guide/vanilla-differences"><span class="card-icon">V</span><strong>바닐라와 달라진 점</strong><span>서버의 전체 변화 범위를 먼저 파악합니다.</span></a>
  <a class="content-card" href="/guide/survival"><span class="card-icon">☠</span><strong>죽음 & 무덤</strong><span>죽었을 때 아이템이 어떻게 처리되는지 확인합니다.</span></a>
  <a class="content-card" href="/controls/"><span class="card-icon">⌨</span><strong>조작법</strong><span>Voice Chat, 지도, JEI 등 자주 쓰는 조작을 확인합니다.</span></a>
</div>

::: tip 막히면 검색
상단 검색 또는 <kbd>Ctrl</kbd> + <kbd>K</kbd>를 사용하면 문서 제목뿐 아니라 본문 내용까지 검색할 수 있습니다. 입력창이 활성화된 상태에서는 `/` 검색 단축키가 가로채지 않습니다.
:::
