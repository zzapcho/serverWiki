<span class="page-kicker">SUPPORT</span>

# 문제 해결

<p class="page-lead">재설치부터 하지 말고 “언제, 무엇을 했을 때, 어떤 문구가 나왔는지”를 기준으로 좁혀가세요. 현재 서버에서 이미 알고 있는 이슈도 함께 정리합니다.</p>

## 서버에 접속이 안 돼요

<div class="flow-grid">
  <div class="flow-card"><span class="flow-number">01</span><strong>버전</strong><p>Minecraft 26.2와 서버 배포 Fabric 구성인지 확인합니다.</p></div>
  <div class="flow-card"><span class="flow-number">02</span><strong>인증</strong><p>Discord 계정 연결/화이트리스트가 완료됐는지 확인합니다.</p></div>
  <div class="flow-card"><span class="flow-number">03</span><strong>팩 비교</strong><p>직접 추가·삭제한 모드를 잠시 원상복구하고 배포 팩과 비교합니다.</p></div>
</div>

### 레지스트리 / unknown registry 오류

콘텐츠 모드가 클라이언트에서 빠졌거나 버전이 달라질 때 가장 먼저 의심합니다.

1. 서버 배포 클라이언트 팩을 새 폴더에 그대로 적용.
2. Fabric Loader / Fabric API 버전 확인.
3. Farmer's Delight, Furniture, Friends&Foes, Elytra Slot처럼 콘텐츠/기능을 추가하는 모드 확인.
4. 개인 추가 모드를 잠시 제거하고 재시도.
5. 그래도 실패하면 오류의 `Unknown registry`, `Registry sync`, `Caused by` 줄을 전달.

## Voice Chat 문제

| 증상 | 먼저 볼 것 |
|---|---|
| Voice GUI가 안 열림 | 클라이언트에 Simple Voice Chat이 로드됐는지 |
| 연결 표시가 이상함 | 재접속 후 상태, 서버 Voice 연결 상태 |
| 내 목소리만 안 나감 | OS 마이크 권한, 입력 장치, PTT/Voice Activation 방식 |
| PTT가 안 됨 | 현재 지정한 PTT 키. 기본 고정키라고 가정하지 않기 |
| 다른 사람만 안 들림 | 출력 장치, 플레이어별 볼륨, 거리 |
| 아이콘이 사라짐 | `H`로 숨김 상태인지 |
| 전체가 꺼짐 | `N` 비활성 상태인지 |

`/voicechat help`로 현재 사용할 수 있는 명령도 확인할 수 있습니다.

## 키가 겹쳐요

**설정 → 조작 설정 → 키 지정**에서 충돌을 확인합니다. `V`, `J`, 웨이포인트, JEI `R/U`처럼 자주 쓰는 키를 우선 살리고 덜 쓰는 HUD/지도 보조 기능을 이동하세요.

## 가구가 이상해요

- JEI에서 해당 가구가 정상 검색되는지 확인.
- 설치 → 상호작용/아이템 보관 → 재접속으로 재현 여부 확인.
- 서버 재시작 뒤에만 발생하면 **좌표, 가구 이름, 넣어둔 아이템 유무**를 같이 전달.
- 엔티티형/수납형 가구는 장식 블록보다 재현 정보를 더 자세히 남겨 주세요.

## 낚시가 이상해요

오버월드와 네더/엔드를 구분해서 확인합니다. 현재 Gone Fishing은 서버 로그에서 **네더/엔드 일부 낚시 loot table 파싱 경고**가 관찰된 적이 있습니다. 다른 차원에서만 보상이 이상하다면 이 알려진 이슈와 관련될 수 있습니다.

## 죽었는데 무덤을 못 찾겠어요

1. `/graves`로 자신의 무덤 목록을 확인합니다.
2. 마지막 사망 위치/차원을 확인합니다.
3. 무덤을 찾았지만 열리지 않으면 보호/비용/권한 관련 메시지를 그대로 전달합니다.
4. 무덤 자체가 생성되지 않았다면 사망 원인과 차원을 알려주세요.

## 현재 알려진 문제

| 범위 | 증상 | 현재 판단 / 대응 |
|---|---|---|
| Gone Fishing | 네더/엔드 일부 낚시 loot table 경고 | 차원별 낚시를 오픈 전/업데이트 후 재테스트 |
| Skniro's Furniture | 일부 데이터 픽서 경고 | 수납/엔티티형 가구의 재시작 후 유지 테스트 |
| Resourceful Lib | `/home/crafty` 캐시/데이터 디렉터리 권한 경고 | 서버는 부팅되지만 실행 계정 HOME/권한을 별도로 정리해야 함 |
| Discord Integration | Fabric refmap 경고 | 현재 시작/채팅 기능은 동작. 업데이트 시 로컬 패치 보존 여부 확인 |
| Voice Chat / backend | 서버가 offline/insecure 모드로 뜰 때 암호화 경고 | 프록시/백엔드 인증 설정을 운영 측에서 별도 수정 대상 |
| spark | 종료 중 CancellationException이 보일 수 있음 | 정상 종료 흐름에서만 발생하는지 확인, 플레이 중 오류와 구분 |

::: warning 알려진 문제 = 무시해도 된다는 뜻이 아닙니다
서버가 켜진다고 해서 데이터 보존까지 안전하다는 뜻은 아닙니다. 특히 가구 보관, 죽음/무덤, 월드 생성은 백업 후 재현 테스트를 우선합니다.
:::

## 문의할 때 같이 보내면 좋은 것

- 발생 시간
- 서버에 들어온 뒤 어떤 행동을 했는지
- 차원과 좌표가 관련되면 함께 기록
- 화면에 나온 **정확한 오류 문구**
- 클라이언트 로그의 `ERROR`, `Exception`, `Caused by` 근처
- 가능하면 스크린샷 또는 짧은 영상

::: tip 로그 전체를 해석할 필요는 없습니다
“무슨 행동 직후 + 정확한 오류 한 줄 + 시간”만 있어도 서버 로그와 대조하기 훨씬 쉽습니다.
:::
