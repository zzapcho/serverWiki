# Discord 연동

서버는 Discord를 **접속 인증/화이트리스트와 Minecraft 채팅 연결**에 사용합니다.

## 무엇이 연결되나요?

- 프록시 쪽 Discord 시스템: 계정 인증과 화이트리스트 흐름
- Minecraft 서버 쪽 Discord Integration: Minecraft ↔ Discord 채팅 및 서버 이벤트 연결

플레이어는 봇 이름이나 내부 채널 ID를 알 필요가 없습니다. 서버 Discord에서 안내되는 인증 절차만 따르면 됩니다.

## Minecraft 채팅

서버에서 보낸 일반 채팅이 Discord 채널에 표시될 수 있고, 허용된 Discord 채널의 메시지가 Minecraft 안에 표시될 수 있습니다.

## 조합법 / 단축키

없습니다. Discord 연동은 서버 통신 기능입니다.

## 문제가 생기면

- 인증은 됐는데 접속이 거절됨 → Discord 역할/화이트리스트 상태를 확인
- Discord 메시지만 Minecraft에 안 보임 → 다른 사람도 같은지 확인 후 관리자에게 알림
- Minecraft 채팅만 Discord에 안 감 → 보낸 시각과 Minecraft 닉네임을 함께 알림

관련: [Discord & Voice](/community/) · [문제 해결](/troubleshooting/)
