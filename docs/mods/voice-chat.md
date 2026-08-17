<span class="page-kicker">VOICE</span>

# 보이스챗 · Simple Voice Chat

Simple Voice Chat 2.6.22+26.2가 서버/클라이언트 양쪽에 들어 있습니다. 주변 플레이어와 거리 기반 음성으로 대화하고 그룹 기능을 사용할 수 있습니다.

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

Group Management 키는 기본 미지정입니다. Voice Chat 메뉴를 통해 그룹을 만들거나 참여할 수 있습니다. 그룹 타입은 Normal/Open/Isolated가 제공됩니다.

## 안 될 때

- 서버와 클라이언트 Voice Chat 버전이 맞는지 확인합니다.
- 마이크 OS 권한과 게임 입력 장치를 확인합니다.
- PTT인데 키를 아직 지정하지 않았는지 확인합니다.
- 서버 음성 포트가 방화벽/NAT에서 막힌 문제는 클라이언트 키 설정으로 해결되지 않습니다.

공식 자료: [Simple Voice Chat](https://github.com/henkelmax/simple-voice-chat)
