<span class="page-kicker">DEATH & RECOVERY</span>

# 무덤 · Universal Graves

Universal Graves 3.12.0+26.2는 죽었을 때 아이템과 경험치를 무덤에 보관합니다. 아래 값은 2026-08-17 제공 `_config.zip`의 **현재 서버 `universal-graves/config.json`** 기준입니다. JAR 내부 기본 생성값보다 live config가 우선합니다.

## 현재 저장 설정

| 항목 | 현재값 | 의미 |
| --- | ---: | --- |
| XP 저장 방식 | `percent_points` | 경험치 포인트 비율 저장 |
| XP 저장 비율 | **80%** | 사망 시 무덤에 저장되는 XP 비율 |
| XP만 있는 무덤 허용 | false | XP만 따로 저장하는 무덤은 만들지 않음 |
| 제외 인챈트 | 없음 | 별도 blocked enchant 없음 |

즉 현재 서버에서는 사망 당시 저장 대상 XP의 **80%를 무덤에 보관**합니다.

## 보호와 만료

| 항목 | 현재값 | 의미 |
| --- | ---: | --- |
| 타인 보호 시간 | **-1** | 일반적인 보호 만료 타이머를 사용하지 않음 |
| 자동 소멸 시간 | **1,209,600초 = 14일** | 무덤이 14일 뒤 만료 대상으로 처리됨 |
| 만료 시 아이템 드롭 | true | 만료 시 내용물을 삭제하지 않고 드롭 |
| 공격자 보호 우회 | false | PvP 공격자가 자동으로 보호를 무시하지 않음 |
| 실제 시간 사용 | false | wall-clock이 아닌 서버/게임 진행 기준 |
| 플레이어당 무덤 제한 | **-1** | 개수 제한 없음 |

::: warning 현재 서버에서는 14일 만료가 있음
이전 위키의 “자동 만료 없음” 설명은 live config와 맞지 않습니다. 현재 `self_destruction_time=1209600`이므로 **14일 뒤 무덤이 만료되고 아이템을 드롭**하도록 설정되어 있습니다.
:::

## 찾기와 회수

현재 interaction 설정:

- Grave Compass 지급: **true**
- Death Compass로 GUI 열기: **true**
- 무덤 클릭 GUI: **true**
- 빈손 + Shift 상호작용 빠른 회수: **true**
- 무덤 부수기로 빠른 회수: **true**
- 원격 보호 해제: **false**
- 원격 무덤 부수기: **false**
- 원격 잠금 해제: **false**
- 잠금 해제 비용: **FREE**

회수는 `사망 → Grave Compass 또는 /graves로 위치 확인 → 무덤으로 이동 → 클릭/빠른 회수` 흐름으로 생각하면 됩니다.

## 배치 설정

| 항목 | 현재값 |
| --- | ---: |
| 사망 지점에서 최대 배치 거리 | 8 |
| 배치 실패 시 위치 이동 | true |
| 최대 재시도 | 5 |
| 이동 거리 설정 | 40 |
| 아무 블록 강제 대체 | false |
| **fluid 위 생성** | **true** |
| ground 강제 생성 | false |
| 빈 무덤 장식 자동 생성 | false |
| 월드보더 안쪽 이동 | true |

사망 지점 정확히 한 칸에 놓을 수 없으면 주변의 가능한 위치를 찾습니다. 물/용암 같은 fluid 주변에서도 현재 `generate_on_top_of_fluids=true`입니다.

## 순간이동 기능

현재 teleport cost type은 `creative`, 대기 시간은 **5초**, 도착 후 무적 시간은 **2초**입니다. 일반 생존 플레이어가 언제나 자유롭게 사용할 수 있는 무료 순간이동 기능으로 안내하지 않습니다.

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

`표지판`은 `#minecraft:signs` 태그를 사용합니다. 이것은 사망 시 자동 생성되는 무덤과 별개의 장식용 visual grave입니다.

## 복구가 이상할 때

1. `/graves`로 자신의 무덤 목록을 확인합니다.
2. Grave Compass를 확인합니다.
3. 사망 차원과 좌표, 주변 8블록 이상을 확인합니다.
4. 오래된 무덤이라면 **14일 만료** 여부도 확인합니다.
5. 서버 오류가 의심되면 관리자에게 사망 시각·좌표·주요 아이템을 전달합니다.
6. 서버에는 관리자용 Death Backup도 설치되어 있어 운영자가 사망 직전 인벤토리 백업을 확인할 수 있습니다.

공식 자료: [Universal Graves](https://github.com/Patbox/UniversalGraves)
