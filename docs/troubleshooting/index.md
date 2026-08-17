<span class="page-kicker">TROUBLESHOOTING</span>

# 문제 해결

## 클라이언트가 시작부터 튕김

### `Duplicate Mod` / 같은 mod id 오류

`mods` 폴더에 같은 모드를 두 버전 넣으면 Fabric Loader가 거부할 수 있습니다. 특히 이 구성에서는 다음을 확인하세요.

- `fabric-api`는 한 JAR만
- `sodium`은 한 JAR만
- Nvidium 0.4.4-beta3 metadata는 **Sodium 0.9.1**을 요구

현재 사용하지 않을 Sodium alpha를 같이 넣지 마세요.

### 그래픽 관련 충돌

Sodium / Iris / Nvidium / Sodium Extra / Reese's Options는 서로 연동됩니다. 한 파일만 임의로 버전업한 뒤 문제가 생기면 묶음 전체 버전 호환을 확인하세요. NVIDIA가 아닌 GPU라면 Nvidium이 첫 점검 대상입니다.

## 서버 접속 후 블록/아이템이 이상함

클라이언트에 EVS, SimpleOres, Elytra Slot 등 서버 콘텐츠와 맞는 JAR이 있는지 확인합니다. [클라이언트 모드 목록](/guide/client)을 기준으로 비교하세요.

## 광물이 안 나옴

- 새 청크인지 확인
- 오닉스는 네더인지 확인
- [Y 범위와 배치 시도](/mods/simpleores#광물-생성-높이와-양) 확인

## FallingTree가 안 됨

1. **사용 중인 도끼에 Chopper 계열 인챈트가 붙어 있는지** 확인합니다. 현재 서버는 `requireEnchantment=true`입니다.
2. Shift를 누르고 있지 않은지 확인합니다.
3. `/fallingtree toggle`로 꺼 두지 않았는지 확인합니다.
4. 잎이 있는 실제 나무 형태인지 확인합니다.
5. 100블록을 넘는 거대 구조물인지 확인합니다.

## 무덤이 안 보임/아이템이 없음

1. `/graves` 확인
2. Grave Compass 확인
3. 사망 지점 주변과 차원 확인
4. 현재 서버는 무덤 자동 소멸 시간이 **14일**이므로 오래된 무덤은 만료 여부 확인
5. 현재 XP 저장 비율은 **80%**이므로 사망 전 XP가 100% 그대로 남는 설정은 아님
6. 서버 오류 의심 시 관리자에게 사망 시각·좌표·주요 아이템 전달

서버에는 관리자용 Death Backup도 설치되어 있어 운영자가 백업을 확인할 수 있습니다.

## Dungeons & Taverns 구조물이 안 보임

`spacing`은 보장 간격이 아닙니다. biome, exclusion zone, frequency를 통과해야 합니다. 새 청크를 더 넓게 탐색하세요.

## MES 구조물이 안 보임

먼저 **월드 원점 1000블록 밖**인지 확인하세요. MES의 25개 structure set 모두 이 최소 거리를 사용합니다.

## 보이스챗이 안 됨

- <kbd>V</kbd> 메뉴에서 연결 상태/장치 확인
- PTT 키가 기본 **미지정**이므로 직접 설정했는지 확인
- 서버/클라 Voice Chat 버전 확인
- 서버 음성 포트는 현재 config 기준 **UDP 24454**
- UDP 포트 문제는 서버 네트워크/방화벽 영역이므로 운영자에게 전달

## 서버 자체가 버벅임

서버에는 C2ME/Lithium/FerriteCore/Krypton/Noisium/ScalableLux/ServerCore 등 최적화 모드와 spark가 있습니다. 플레이어가 임의의 관리 명령을 실행할 필요는 없습니다. 발생 시각, 위치, 하던 행동, 접속 인원 수를 관리자에게 알려 주면 진단에 도움이 됩니다.
