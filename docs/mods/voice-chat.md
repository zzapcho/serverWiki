<span class="page-kicker">MOD · VOICE</span>

# Simple Voice Chat

<p class="page-lead">Discord 통화에 따로 들어가지 않아도 게임 안에서 거리 기반 음성으로 대화할 수 있습니다. 최신 키 정책을 기준으로 설명합니다.</p>

<span class="status-chip is-live">사용 중</span>

## 서버 기준

현재 서버/클라이언트 팩은 `2.6.22+26.2` 계열을 사용합니다. Voice Chat은 클라이언트에도 있어야 실제 음성 기능을 사용할 수 있습니다.

## 첫 실행

<kbd>V</kbd>를 눌러 온보딩을 시작합니다.

1. 사용할 마이크 선택.
2. 사용할 스피커/헤드셋 선택.
3. **PTT** 또는 **Voice Activation** 선택.
4. PTT라면 사용할 키를 직접 지정.
5. Voice Activation이라면 감지 임계값을 조절.
6. 친구 가까이에서 입력/출력 테스트.

## 현재 기본 키

| 기능 | 기본값 |
|---|---|
| Voice Chat GUI | `V` |
| Voice Chat Settings 별도 바로가기 | 기본 미지정 |
| Push To Talk | 기본 미지정, 온보딩에서 지정 |
| Group Chats | 1.21.6+ 기본 미지정 |
| Mute Microphone | `M` |
| Disable Voice Chat | `N` |
| Hide Voice Chat Icons | `H` |
| Recording / Whisper | 기본 미지정 |

::: warning `Caps Lock`/`G`를 서버 기본키로 가정하지 마세요
과거 버전이나 개인 설정에서는 그렇게 쓸 수 있지만, 현재 계열에서는 PTT와 그룹 키가 기본 미지정입니다. **설정 → 조작 설정**의 실제 값을 최종 기준으로 사용합니다.
:::

## 그룹 명령어

```text
/voicechat help
/voicechat invite <플레이어>
/voicechat join <그룹이름>
/voicechat leave
```

관리자 진단용 `/voicechat test <플레이어>`는 별도 관리자 권한이 필요합니다.

## 잘 안 들릴 때 체크 순서

1. `N`으로 전체 Voice가 꺼져 있지 않은지.
2. OS 마이크 권한.
3. Voice 설정의 입력 장치.
4. Voice 설정의 출력 장치.
5. PTT 모드라면 실제 지정한 PTT 키.
6. Voice Activation이면 `M` 음소거와 감지 임계값.
7. 특정 플레이어만 안 들리면 개인 볼륨/거리.

## 보안 관련 운영 메모

서버 백엔드가 offline/insecure 모드로 실행되면 Voice Chat이 암호화 보안 관련 경고를 표시할 수 있습니다. 이건 플레이어가 키 설정으로 고칠 문제가 아니라 **프록시/백엔드 인증 구조를 운영 측에서 바로잡아야 하는 항목**입니다.

→ [Discord & Voice](/community/) · [조작법](/controls/) · [문제 해결](/troubleshooting/#voice-chat-문제)
