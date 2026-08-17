<span class="page-kicker">TREE CUTTING</span>

# 벌목 · FallingTree

FallingTree 25는 통나무 하나를 부쉈을 때 감지된 나무 전체를 처리합니다. **ZZAPCHO SERVER에서는 Chopper 계열 인챈트가 붙은 도끼에서만 FallingTree가 작동하도록 설정되어 있습니다.** 아래 값은 2026-08-17 제공 `_config.zip`의 실제 `fallingtree.json`과 설치 데이터팩을 기준으로 합니다.

## 바로 쓰는 법

1. 도끼에 **Chopper 계열 인챈트**를 붙입니다.
2. 그 도끼로 실제 나무의 통나무를 캡니다.
3. 감지된 나무는 기본 `INSTANTANEOUS` 방식으로 즉시 처리됩니다.
4. 한 블록만 평범하게 캐고 싶으면 **Shift를 누른 채** 캡니다.

::: warning 인챈트 없는 도끼는 작동하지 않음
현재 서버 설정은 `requireEnchantment=true`입니다. 일반 도끼로 나무를 캐면 FallingTree가 발동하지 않습니다.
:::

## 현재 서버 설정

| 항목 | 현재값 | 의미 |
| --- | --- | --- |
| 벌목 방식 | `INSTANTANEOUS` | 감지된 나무를 즉시 처리 |
| 감지 방식 | `WHOLE_TREE` | 연결된 나무 전체 스캔 |
| 최대 스캔 | **500블록** | 한 번의 감지에서 조사 상한 |
| 최소 크기 | 0 | 작은 나무 별도 제한 없음 |
| 최대 나무 크기 | **100블록** | 넘으면 동작 중단 |
| 초과 동작 | `ABORT` | 거대 구조물을 통째로 베는 실수 방지 |
| 잎 최대 거리 | **15** | 나무 판정용 잎 탐색 범위 |
| 최소 주변 잎 | **1** | 나무 판정에 필요한 잎 수 |
| persistent 잎 포함 | true | 플레이어 설치 잎도 판정 수에 포함 가능 |
| 나뭇잎 함께 처리 | true | 잎도 같이 처리 |
| 서로 다른 통나무 혼합 | false | 혼합 수종을 한 나무로 취급하지 않음 |
| 네더 wart tree 대응 | true | 네더 나무형 식생 대응 |
| 맹그로브 뿌리 대응 | true | 맹그로브 뿌리 대응 |
| 아이템을 첫 타격점에 모음 | false | 드롭은 기본 위치 규칙 |
| 통나무 loot 비율 | **1.0** | 100% loot 처리 |
| 크리에이티브 작동 | false | 크리에이티브에서는 비활성 |
| 알림 | `ACTION_BAR` | 액션바 표시 |
| **인챈트 필수** | **true** | Chopper 계열이 있어야 발동 |

## Chopper 인챈트

서버에는 `FallingTree Enchantments 26.2.0-1` 데이터팩이 설치되어 있습니다. 데이터팩의 여섯 인챈트는 모두 FallingTree의 `chopper_all` 태그에 들어 있으므로 **어느 Chopper 변형이든 현재 인챈트 필수 조건을 만족**합니다.

| 인챈트 | 역할 |
| --- | --- |
| Chopper | 서버 기본 벌목 방식 사용 — 현재는 `INSTANTANEOUS` |
| Chopper (instantaneous) | 즉시 벌목 방식 지정 |
| Chopper (fall item) | `FALL_ITEM` 방식 지정 |
| Chopper (fall block) | `FALL_BLOCK` 방식 지정 |
| Chopper (fall all block) | `FALL_ALL_BLOCK` 방식 지정 |
| Chopper (shift down) | `SHIFT_DOWN` 방식 지정 |

공통 데이터:

- 지원 아이템: `#minecraft:axes`
- 최대 레벨: **1**
- 슬롯: main hand
- anvil cost: **6**
- weight: **1**
- enchanting cost 범위: **15 ~ 65**
- 서로 **상호 배타적**이라 한 도끼에 Chopper 변형 여러 개를 동시에 붙이는 구성은 아닙니다.
- 데이터팩이 `minecraft:non_treasure`와 `minecraft:tradeable` 태그에도 추가하므로 일반 인챈트 시스템/거래 시스템에서 선택될 수 있습니다.

## 도구와 내구도

| 항목 | 현재값 |
| --- | --- |
| durability mode | `NORMAL` |
| damage multiplicand | **1.0** |
| damage rounding | `ROUND_DOWN` |
| ignore tools | false |
| force tool usage | false |

한 번에 많이 베는 것이 공짜 내구도가 되는 설정은 아닙니다.

## 플레이어 명령

```text
/fallingtree toggle
```

자기 FallingTree 상태를 켜거나 끕니다. **토글을 켜도 Chopper 인챈트 조건을 우회하지는 않습니다.**

## 작동하지 않을 때

1. **도끼에 Chopper 계열 인챈트가 붙어 있는지** 먼저 확인합니다.
2. Shift를 누르고 있지 않은지 확인합니다.
3. `/fallingtree toggle`로 자기 기능을 꺼 두지 않았는지 확인합니다.
4. 통나무 주변에 잎이 최소 1개 있는 실제 나무 형태인지 확인합니다.
5. 감지 크기가 100블록을 넘는 거대 구조물인지 확인합니다.
6. 서로 다른 통나무가 섞였는지 확인합니다.

공식 자료: [FallingTree GitHub](https://github.com/RakambdaOrg/FallingTree)
