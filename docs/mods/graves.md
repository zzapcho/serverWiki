<span class="page-kicker">DEATH & RECOVERY</span>

# 무덤 · Universal Graves

Universal Graves 3.12.0+26.2는 죽었을 때 아이템과 경험치를 무덤에 보관합니다. 아래 값은 설치 JAR의 실제 기본 config constructor 기준입니다.

## 저장되는 것

| 항목 | 기본값 |
| --- | --- |
| XP storage type | `PERCENT_POINTS` |
| XP percent | **100%** |
| XP만 저장하는 무덤 | false |
| 제외 enchant 목록 | 비어 있음 |

기본값에서는 무덤 시스템이 받은 XP points를 100% 저장합니다.

## 보호 시간과 만료 — 중요 정정

| 항목 | 기본값 | 의미 |
| --- | ---: | --- |
| 다른 플레이어 접근 보호 | **900초 = 15분** | 사망 직후 소유자 보호 |
| 자동 만료 `breakingTime` | **-1** | **자동 만료 꺼짐** |
| 만료 시 아이템 드롭 | true | 만료 기능을 따로 켰을 때 drop |
| 공격자가 아이템 가져가기 | false | PvP 공격자가 자동 우회하지 않음 |
| 실제 시간 사용 | false | 기본 월드/서버 시간 방식 |
| 플레이어당 무덤 제한 | **-1** | 제한 없음 |

::: tip 기본값에서는 30분 뒤 사라지지 않습니다
이전 위키의 “30분 자동 만료” 설명은 설치된 3.12.0+26.2 JAR 기본값과 맞지 않아 수정했습니다. live config에서 `breakingTime`을 바꿨다면 서버 실제 설정이 우선입니다.
:::

## 찾기와 회수

기본 interaction:

- Grave Compass 지급: **true**
- Death Compass로 GUI 열기: **true**
- 무덤 클릭 GUI: **true**
- Shift-click/빠른 회수: **true**
- 무덤 부수기로 회수: **true**
- 원격 보호 해제: **true**
- 원격 grave breaking: **true**
- 원격 grave unlocking: **false**
- 일반 회수 cost: **FREE**

## 배치 기본값

| 항목 | 기본값 |
| --- | ---: |
| max placement distance | 8 |
| shift location on failure | true |
| max shift count | 5 |
| shift distance | 40 |
| replace any block | false |
| fluid 위 생성 | false |
| ground 강제 생성 | false |
| 월드보더 안쪽 이동 | true |

사망 지점 정확히 한 칸에 놓을 수 없으면 안전한 위치를 찾으면서 주변으로 이동할 수 있습니다.

## 순간이동 기능

기본 teleport cost type은 `CREATIVE`, teleport time 5초, invincible time 2초입니다. 따라서 일반 생존 플레이어가 항상 자유롭게 무덤 순간이동을 쓸 수 있는 기능으로 안내하지 않습니다.

## 플레이어 명령

```text
/graves
```

자기 무덤 목록을 확인하는 기본 플레이어 명령입니다.

## 제작 가능한 빈 무덤

설치 JAR에는 `universal_graves:visual_grave`(Emptied Grave) 제작 레시피가 실제로 있습니다.

```text
[석재벽돌] [석재벽돌] [석재벽돌]
[석재벽돌] [   표지판   ] [석재벽돌]  → Emptied Grave ×1
[   빈칸   ] [   빈칸   ] [   빈칸   ]
```

`표지판`은 `#minecraft:signs` 태그를 사용합니다. 이것은 사망 시 자동 생성되는 무덤 시스템과 별개로 제작 가능한 visual grave입니다.

## 복구가 이상할 때

1. `/graves`로 자신의 무덤 목록을 확인합니다.
2. 사망 차원/좌표와 주변 8블록 이상을 확인합니다.
3. Grave Compass를 확인합니다.
4. 서버 오류로 무덤 자체가 이상하다면 관리자에게 사망 시각·좌표·주요 아이템을 전달합니다.
5. 서버에는 관리자용 Death Backup도 설치되어 있으므로 운영자가 사망 직전 인벤토리 백업을 확인할 수 있습니다.

공식 자료: [Universal Graves](https://github.com/Patbox/UniversalGraves)
