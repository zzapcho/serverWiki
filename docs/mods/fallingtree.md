<span class="page-kicker">TREE CUTTING</span>

# 벌목 · FallingTree

FallingTree 25는 통나무 하나를 부쉈을 때 감지된 나무 전체를 처리합니다. 아래 값은 설치 JAR의 실제 기본 config constructor를 확인한 값입니다.

## 바로 쓰는 법

- 평소: 도끼로 나무를 캐면 **Instantaneous** 방식으로 전체 나무를 즉시 처리합니다.
- 한 블록만 캐기: **Shift를 누른 채** 캐면 기본 `SNEAK_DISABLE` 때문에 FallingTree가 잠시 꺼집니다.
- 자기 기능 토글: `/fallingtree toggle`

## 기본 설정 상세

| 항목 | 기본값 | 의미 |
| --- | --- | --- |
| 벌목 방식 | `INSTANTANEOUS` | 감지된 나무를 즉시 처리 |
| 감지 방식 | `WHOLE_TREE` | 연결된 나무 전체 스캔 |
| 최대 스캔 | **500블록** | 한 번의 감지에서 조사 상한 |
| 최소 크기 | 0 | 작은 나무 별도 제한 없음 |
| 최대 나무 크기 | **100블록** | 넘으면 기본 동작 중단 |
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
| 크리에이티브 작동 | false | 크리에이티브에서는 기본 비활성 |
| 알림 | `ACTION_BAR` | 액션바 표시 |
| 인챈트 필수 | **false** | 기본값에서는 Chopper 없이 작동 |

## 도구와 내구도

| 항목 | 기본값 |
| --- | --- |
| durability mode | `NORMAL` |
| damage multiplicand | **1.0** |
| damage rounding | `ROUND_DOWN` |
| ignore tools | false |
| force tool usage | false |

한 번에 많이 베는 것이 공짜 내구도가 되도록 설정된 상태는 아닙니다.

## FallingTree Enchantments 데이터팩

서버 ZIP에는 `FallingTree Enchantments 26.2.0-1` 데이터팩이 **실제로 포함**되어 있습니다. 데이터팩은 도끼용 레벨 1 Chopper 변형 6종을 정의합니다.

- Chopper
- Chopper (fall all block)
- Chopper (fall block)
- Chopper (fall item)
- Chopper (instantaneous)
- Chopper (shift down)

각 인챈트는 `#minecraft:axes`, mainhand, 최대 레벨 1, anvil cost 6, weight 1이고 서로 배타적입니다.

::: warning 설치됨 ≠ 필수
데이터팩이 있어도 FallingTree JAR의 기본 `requireEnchantment=false`입니다. 실제 서버 `config/fallingtree.json`에서 이 값을 `true`로 바꾸지 않았다면 Chopper 없이도 기본 벌목이 작동합니다. 이번 제공물에는 live config가 없으므로 “현재 서버가 Chopper 필수”라고 단정하지 않습니다.
:::

## 플레이어 명령

```text
/fallingtree toggle
```

자기 FallingTree 상태만 켜고 끕니다.

## 작동하지 않을 때

1. Shift를 누르고 있지 않은지 확인합니다.
2. `/fallingtree toggle`로 꺼 둔 상태인지 확인합니다.
3. 통나무 주변에 잎이 최소 1개 있는 실제 나무 형태인지 확인합니다.
4. 감지 크기가 100블록을 넘는 거대 구조물인지 확인합니다.
5. 서로 다른 통나무가 섞였는지 확인합니다.

공식 자료: [FallingTree GitHub](https://github.com/RakambdaOrg/FallingTree)
