<span class="page-kicker">COMMUNITY</span>

# Discord 연동

서버 ZIP에는 **Discord Integration 3.2.0**이 설치되어 있으며 metadata상 server-side 모드입니다. 역할은 Minecraft 서버 채팅과 지정 Discord 채널을 연결하는 것입니다.

## 플레이어가 체감하는 것

- 게임에서 친 채팅이 설정된 Discord 채널로 전달될 수 있습니다.
- Discord 채널의 메시지가 게임 채팅으로 전달될 수 있습니다.
- 서버 시작/종료, 접속/퇴장 등 어떤 이벤트를 Discord로 보낼지는 서버 설정에 따라 달라집니다.

## 계정 인증과는 구분

현재 서버 구조에서 Discord 계정 인증/화이트리스트 흐름은 **Velocity/프록시 측 기능**과 분리해서 봐야 합니다. Discord Integration JAR 자체의 설명은 채팅 브리지이며, 이번 ZIP에는 프록시의 실제 Discord 인증 config가 포함되지 않았습니다.

따라서 이 위키는 확인되지 않은 `/link` 같은 명령을 임의로 만들어 안내하지 않습니다. 실제 인증 명령/버튼이 확정되면 live 프록시 설정을 기준으로 추가해야 합니다.

## 채팅이 안 넘어갈 때

플레이어가 확인할 수 있는 것은 많지 않습니다.

1. Minecraft 채팅 자체가 전송되는지 확인합니다.
2. Discord 서버/채널이 정상인지 확인합니다.
3. 브리지 봇이 오프라인이면 운영자에게 알립니다.
4. 인증 문제와 채팅 브리지 문제를 구분합니다.

Discord/Voice를 한 번에 보려면 [Discord & Voice](/community/)를 확인하세요.
