<span class="page-kicker">START HERE</span>

# 처음 접속하기

<p class="page-lead">처음 들어오는 사람 기준으로, 필요한 것만 순서대로 정리했습니다. 아래 4단계만 끝내면 바로 플레이를 시작할 수 있습니다.</p>

<div class="flow-grid">
  <div class="flow-card"><span class="flow-number">01</span><strong>클라이언트 준비</strong><p>Minecraft 26.2와 서버에서 배포한 Fabric 클라이언트 구성을 적용합니다.</p></div>
  <div class="flow-card"><span class="flow-number">02</span><strong>Discord 인증</strong><p>서버 Discord에서 계정 인증/화이트리스트 절차를 완료합니다.</p></div>
  <div class="flow-card"><span class="flow-number">03</span><strong>첫 접속 점검</strong><p>추가 슬롯, 레시피 검색, 지도와 음성채팅이 정상인지 확인합니다.</p></div>
</div>

## 1. 클라이언트 준비

서버는 **Minecraft Java 26.2 + Fabric**을 사용합니다. 서버 전용 콘텐츠가 포함되어 있으므로 배포된 클라이언트 구성을 기준으로 접속하는 것을 권장합니다.

필수 확인 항목은 다음과 같습니다.

| 항목 | 기준 | 왜 필요한가 |
|---|---|---|
| Minecraft | `26.2` | 서버와 게임 버전을 맞추기 위해 필요합니다. |
| Fabric Loader | 서버 배포 기준 | 모드 로딩에 필요합니다. |
| Fabric API | 서버 배포 기준 | 대부분의 Fabric 모드가 사용하는 공통 API입니다. |
| 콘텐츠 모드 | 서버 배포 기준 | 아이템/블록/기능 레지스트리를 맞추기 위해 필요합니다. |
| Simple Voice Chat | 설치 권장 | 인게임 근거리 음성채팅에 사용합니다. |

::: warning 버전은 임의로 섞지 마세요
같은 모드 이름이라도 Minecraft 버전이나 빌드가 다르면 접속 오류가 날 수 있습니다. 서버에서 배포한 구성을 그대로 쓰는 것이 가장 안전합니다.
:::

## 2. Discord 인증

서버 입장은 Discord 인증과 화이트리스트를 기준으로 관리합니다. Discord 안내 채널에서 인증 절차를 완료한 뒤 서버에 접속하세요.

- 인증이 끝났는데 접속이 안 되면 Minecraft 닉네임을 다시 확인합니다.
- 닉네임을 변경했다면 다시 인증이 필요한지 관리자에게 확인합니다.
- 서버 주소는 Discord의 최신 안내를 기준으로 합니다.

## 3. 접속 직후 확인

| 체크 | 정상 상태 |
|---|---|
| 인벤토리 | 겉날개 전용 추가 슬롯을 사용할 수 있음 |
| 음성채팅 | 접속 후 Voice Chat 연결이 정상으로 표시됨 |
| 레시피 | 인벤토리에서 JEI 아이템/레시피 목록이 표시됨 |
| 지도 | JourneyMap 전체 지도가 열림 |
| Discord | Minecraft 채팅이 Discord와 정상 연동됨 |

## 4. 첫 플레이 전에 읽을 것

<div class="content-grid">
  <a class="content-card" href="/guide/vanilla-differences"><span class="card-icon">V</span><strong>바닐라와 달라진 점</strong><span>추가된 시스템과 콘텐츠를 먼저 훑어봅니다.</span></a>
  <a class="content-card" href="/guide/survival"><span class="card-icon">☠</span><strong>죽음 & 무덤</strong><span>죽었을 때 아이템이 어떻게 처리되는지 확인합니다.</span></a>
  <a class="content-card" href="/economy/"><span class="card-icon">₩</span><strong>경제 시스템</strong><span>잔액, 상점, 일일 보상과 판매 한도를 확인합니다.</span></a>
  <a class="content-card" href="/controls/"><span class="card-icon">⌨</span><strong>조작법</strong><span>Voice Chat, 지도, JEI 등 자주 쓰는 조작을 확인합니다.</span></a>
</div>

::: tip 막히면 검색
상단 검색 또는 <kbd>Ctrl</kbd> + <kbd>K</kbd>를 사용하면 문서 제목뿐 아니라 본문 내용까지 검색할 수 있습니다.
:::
