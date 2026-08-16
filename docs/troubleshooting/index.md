<span class="page-kicker">SUPPORT</span>

# 문제 해결

<p class="page-lead">무작정 재설치하기 전에 증상에 맞는 항목부터 확인하세요. 대부분은 버전, 인증, 키 설정 또는 장치 선택 문제입니다.</p>

## 서버에 접속이 안 돼요

<div class="flow-grid">
  <div class="flow-card"><span class="flow-number">01</span><strong>버전</strong><p>Minecraft 26.2와 서버 배포 Fabric 구성이 맞는지 확인합니다.</p></div>
  <div class="flow-card"><span class="flow-number">02</span><strong>인증</strong><p>Discord 인증/화이트리스트가 완료됐는지 확인합니다.</p></div>
  <div class="flow-card"><span class="flow-number">03</span><strong>주소</strong><p>Discord 공지의 최신 서버 주소를 사용하고 있는지 확인합니다.</p></div>
</div>

### 레지스트리/모드 오류가 뜰 때

서버는 콘텐츠 모드가 많아, 클라이언트에서 필요한 모드가 빠지면 접속 중 레지스트리 동기화 오류가 날 수 있습니다.

1. 서버에서 배포한 클라이언트 모드팩과 비교
2. Fabric Loader / Fabric API 확인
3. 콘텐츠 모드 버전 확인
4. 직접 추가한 모드를 잠시 빼고 재시도

## 음성채팅이 안 돼요

| 증상 | 먼저 확인할 것 |
|---|---|
| 아예 연결이 안 됨 | Simple Voice Chat 버전, 서버 접속 상태 |
| 내 목소리만 안 들어감 | 운영체제 마이크 권한, 입력 장치 |
| 다른 사람만 안 들림 | 출력 장치, 플레이어별 볼륨, 거리 |
| PTT가 안 됨 | Voice Chat 설정에서 현재 PTT 키 확인 |

## 키가 겹쳐요

Minecraft **설정 → 조작 설정**에서 충돌하는 키를 확인하고, 덜 사용하는 기능부터 다른 키로 옮기세요.

## 가구/모드 아이템이 이상해요

- JEI에서 레시피가 정상적으로 표시되는지 확인
- 재접속 후에도 같은지 확인
- 서버 재시작 이후부터 생긴 문제라면 관리자에게 위치와 아이템 이름을 알려주세요

## 낚시가 이상해요

현재 Go Fish의 **네더/엔드 일부 낚시 테이블**은 Minecraft 26.2에서 경고가 확인되어 조정 중입니다. 오버월드와 다른 차원에서 증상이 다르면 차원까지 함께 알려주세요.

## 문의할 때 같이 보내면 좋은 것

- 어떤 행동을 했는지
- 화면에 나온 정확한 오류 문구
- 문제가 생긴 시간
- 클라이언트 로그의 `ERROR` 또는 `Caused by` 근처
- 가능하면 스크린샷

::: tip 로그 전체를 설명하려고 하지 않아도 됩니다
오류 문구와 발생 직전 행동만 정확히 알려줘도 원인 찾는 속도가 훨씬 빨라집니다.
:::
