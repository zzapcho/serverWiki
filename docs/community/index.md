<span class="page-kicker">COMMUNITY</span>

# Discord & Voice

<p class="page-lead">서버 입장 인증은 Discord에서, 텍스트 채팅은 Minecraft↔Discord로, 실시간 대화는 Simple Voice Chat으로 이어집니다.</p>

## Discord 인증 / 화이트리스트

<span class="status-chip is-live">사용 중</span>

Velocity 앞단의 DiscordIO가 계정 연결과 화이트리스트를 담당합니다. 인증이 완료된 Minecraft 계정으로 접속해야 합니다.

- Discord 안내 채널에서 계정 연결 절차 진행.
- 인증 후 역할/완료 안내 확인.
- 닉네임 변경 뒤 접속이 막히면 계정 연결 상태 재확인.
- 서버 주소는 Discord 최신 공지를 기준으로 사용.

## Minecraft ↔ Discord 채팅

<span class="status-chip is-live">사용 중</span>

메인 Fabric 서버의 Discord Integration이 다음 이벤트를 전달합니다.

- Minecraft 일반 채팅 → Discord
- Discord 채팅 → Minecraft
- 접속 / 퇴장
- 사망 메시지
- 발전과제
- 서버 시작 / 종료 상태

Minecraft 플레이어 채팅은 서버에서 적용한 로컬 패치 덕분에 Discord에서 **플레이어 닉네임과 스킨 아바타 기준**으로 보이도록 구성되어 있습니다.

## Simple Voice Chat 처음 설정

<span class="status-chip is-live">사용 중</span>

1. 서버에 접속합니다.
2. <kbd>V</kbd>로 Voice Chat GUI를 엽니다.
3. 첫 온보딩에서 마이크와 스피커 장치를 선택합니다.
4. **PTT** 또는 **Voice Activation** 방식을 고릅니다.
5. PTT를 쓴다면 여기서 사용할 키를 직접 지정합니다.
6. Voice Activation을 쓴다면 입력 감지 임계값을 테스트합니다.

현재 버전에서 PTT는 기본 고정키가 아니며, 그룹 메뉴도 최신 Minecraft 계열에서는 기본 미지정입니다.

## 자주 쓰는 Voice 키

| 키 | 기능 |
|---|---|
| `V` | Voice Chat GUI |
| `M` | Voice Activation 모드의 마이크 음소거 |
| `N` | Voice Chat 전체 활성/비활성 |
| `H` | 화면 Voice 아이콘 표시 전환 |
| 사용자 지정 | PTT / 그룹 메뉴 / Whisper 등 |

## Voice 그룹 명령어

```text
/voicechat help
/voicechat invite <플레이어>
/voicechat join <그룹이름>
/voicechat leave
```

그룹 기능에 키를 따로 할당하지 않아도 명령어로 사용할 수 있습니다.

## 음성채팅이 안 들릴 때

- 운영체제에서 Java/Minecraft 마이크 권한 확인.
- <kbd>V</kbd> → 설정에서 실제 사용 중인 입력/출력 장치 선택.
- `N`으로 Voice Chat이 꺼져 있지 않은지 확인.
- Voice Activation이면 `M` 음소거 상태 확인.
- PTT면 현재 **직접 지정한 PTT 키**가 무엇인지 확인.
- 특정 사람만 안 들리면 플레이어별 볼륨과 거리를 확인.

→ [Voice Chat 상세](/mods/voice-chat) · [문제 해결](/troubleshooting/)
