<span class="page-kicker">EQUIPMENT</span>

# 겉날개 슬롯 · Elytra Slot

Elytra Slot 2.0.0은 **겉날개 전용 장비 슬롯**을 추가해 흉갑과 겉날개를 동시에 장착할 수 있게 합니다. 서버와 클라이언트 ZIP 양쪽에 같은 2.0.0 JAR이 들어 있습니다.

## 사용법

1. 인벤토리를 엽니다.
2. 별도의 Elytra 슬롯을 찾습니다.
3. 겉날개를 그 슬롯에 넣습니다.
4. 흉갑은 기존 chest slot에 그대로 장착합니다.

내부 inventory backend를 사용할 때 슬롯은 인벤토리 왼쪽 패널 쪽에 추가되도록 구현되어 있습니다.

## 무엇을 넣을 수 있나요?

코드는 아이템이 Minecraft의 **`GLIDER` data component**를 갖는지 검사합니다. 따라서 바닐라 Elytra뿐 아니라 다른 모드가 같은 glider component를 사용하는 장비도 호환될 수 있습니다.

## 무덤과의 관계

Elytra Slot JAR에는 Universal Graves 호환 코드가 포함되어 있습니다. 별도 슬롯의 장비도 사망 인벤토리 처리에 참여하도록 연동됩니다.

## 조합법과 명령어

Elytra Slot 자체는 새 겉날개 제작법을 추가하는 모드가 아닙니다. 전용 슬롯 기능이 핵심이며 플레이어 명령도 필요하지 않습니다.

## 슬롯이 안 보일 때

- 클라이언트에 `elytraslot-fabric-26.2-2.0.0.jar`가 있는지 확인합니다.
- 서버/클라이언트 버전이 같은지 확인합니다.
- 다른 장비 슬롯 모드와 UI 충돌이 없는지 확인합니다.

공식 자료: [Elytra Slot](https://modrinth.com/mod/elytraslot)
