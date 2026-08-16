<span class="page-kicker">MOD · COMMUNITY</span>

# Discord 연동

<p class="page-lead">ZZAPCHO SERVER는 “입장 인증”과 “게임 채팅 연동”을 서로 다른 계층으로 나눕니다. 그래서 한 봇/모드가 모든 권한을 떠안지 않습니다.</p>

<span class="status-chip is-live">사용 중</span>

## 구조

```text
Discord
  ├─ DiscordIO / Velocity → 계정 연결 · 화이트리스트 · 역할
  └─ Discord Integration / Fabric → Minecraft 채팅 · 이벤트
```

## DiscordIO / Velocity

서버에 들어오기 **전**의 인증 계층입니다.

- Discord 계정과 Minecraft 계정 연결.
- 화이트리스트 처리.
- 인증 완료 역할 부여.
- 백엔드 Fabric 서버가 아니라 Velocity 입구에서 접근을 관리.

플레이어는 Discord 안내 채널의 절차만 따르면 됩니다.

## Discord Integration / Fabric

서버에 들어온 **후**의 커뮤니티 계층입니다.

- Minecraft 채팅 → Discord.
- Discord 채팅 → Minecraft.
- 접속/퇴장.
- 사망.
- 발전과제.
- 서버 시작/종료 상태.

## 플레이어 스킨 웹훅

현재 26.2용 Discord Integration 3.2.0의 플레이어 채팅 웹훅 동작을 서버에서 로컬 패치해, Minecraft 채팅이 Discord에 **서버 공용 이름이 아니라 플레이어 닉네임 + UUID 기반 스킨 아바타**로 표시되도록 수정해 사용 중입니다.

업스트림 모드를 업데이트할 때는 이 로컬 패치가 공식 버전에 반영됐는지 확인한 뒤 교체해야 합니다.

## 보안 / 권한 분리

- DiscordIO가 화이트리스트/역할을 담당.
- Discord Integration은 채팅/이벤트를 담당.
- 역할 관리가 필요 없는 채팅 봇에 불필요한 Manage Roles 권한을 주지 않는 방향이 안전합니다.
- 봇 토큰은 위키/로그/스크린샷에 공개하지 않습니다.

## 플레이어가 할 일

별도 Minecraft 단축키는 없습니다. 일반 채팅을 사용하고, 서버 입장 전 Discord 인증만 완료하면 됩니다.

→ [Discord & Voice](/community/) · [처음 접속하기](/getting-started)
