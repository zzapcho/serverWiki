<span class="page-kicker">VOICE</span>

# 보이스챗 · Simple Voice Chat

Simple Voice Chat 2.6.22+26.2가 서버/클라이언트 양쪽에 들어 있습니다. 주변 플레이어와 거리 기반 음성으로 대화하고 그룹 기능을 사용할 수 있습니다. 아래 서버 수치는 2026-08-17 제공 `_config.zip`의 `voicechat-server.properties` 기준입니다.

## 현재 서버 음성 설정

| 항목 | 현재값 | 의미 |
| --- | ---: | --- |
| UDP 포트 | **24454** | Minecraft TCP 포트와 별도로 사용하는 음성 UDP 포트 |
| 최대 일반 음성 거리 | **48블록** | 일반 대화가 들리는 최대 거리 |
| 속삭임 거리 | **24블록** | whisper 최대 거리 |
| codec | `VOIP` | 음성 대화용 Opus 모드 |
| 그룹 기능 | true | 그룹 보이스챗 허용 |
| 녹음 허용 | true | 클라이언트 녹음 기능 허용 |
| spectator interaction | false | 관전자 일반 대화 제한 |
| Voice Chat 미설치 강제 퇴장 | false | 모드가 없어도 서버 접속 자체는 가능 |
| 외부 ping 응답 | true | voice server ping 허용 |

::: info 네트워크에서 중요한 포트
음성 패킷은 **UDP 24454**를 사용합니다. Minecraft 접속이 정상이어도 이 UDP 포트가 NAT/방화벽에서 막히면 보이스챗만 연결되지 않을 수 있습니다.
:::

## 설치 JAR 기본 키

26.2 JAR의 `KeyEvents`에서 확인한 기본값입니다.

| 기능 | 기본키 |
| --- | --- |
| Voice Chat Menu | <kbd>V</kbd> |
| Mute Microphone | <kbd>M</kbd> |
| Disable Voice Chat | <kbd>N</kbd> |
| Hide Voice Chat Icons | <kbd>H</kbd> |
| Push to Talk | **미지정** |
| Whisper | **미지정** |
| Voice Chat Settings | **미지정** |
| Group Management | **미지정** |
| Toggle Recording | **미지정** |
| Adjust Volumes | **미지정** |

::: info PTT 기본키를 추측하지 마세요
이 버전은 Push to Talk 키를 `UNKNOWN`으로 등록합니다. 처음 설정/onboarding에서 원하는 키를 정하거나 Minecraft `설정 → 조작`에서 지정해야 합니다.
:::

## 처음 설정

1. <kbd>V</kbd>로 Voice Chat 메뉴를 엽니다.
2. 입력/출력 장치를 확인합니다.
3. 활성화 방식을 PTT 또는 음성 감지 등 원하는 방식으로 설정합니다.
4. PTT를 쓴다면 조작 설정에서 키를 지정합니다.
5. 마이크 아이콘/연결 상태를 확인합니다.

## 그룹

Group Management 키는 기본 미지정입니다. Voice Chat 메뉴를 통해 그룹을 만들거나 참여할 수 있습니다. 서버는 `enable_groups=true` 상태입니다.

## 안 될 때

- 서버와 클라이언트 Voice Chat 버전이 맞는지 확인합니다.
- 마이크 OS 권한과 게임 입력 장치를 확인합니다.
- PTT인데 키를 아직 지정하지 않았는지 확인합니다.
- **UDP 24454**가 서버 방화벽/NAT/포트포워딩에서 열려 있는지 운영자에게 확인합니다.

공식 자료: [Simple Voice Chat](https://github.com/henkelmax/simple-voice-chat)
