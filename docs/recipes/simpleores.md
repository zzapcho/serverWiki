<span class="page-kicker">202 VERIFIED RECIPES</span>

# SimpleOres 조합법

SimpleOres 1.9.10 JAR에서 **202개의 recipe JSON**을 확인했습니다. 여기서는 플레이어가 실제로 외우기 쉬운 패턴 단위로 정리합니다.

## 재료 기호

- `R`: 해당 재료 — 주석/미스릴/아다만티움 주괴 또는 오닉스 보석
- `S`: 막대기
- 도구/방어구 기본 패턴은 주석·미스릴·아다만티움·오닉스에 공통 적용됩니다.

## 기본 도구

### 곡괭이

```text
[R][R][R]
[ ][S][ ]
[ ][S][ ]
```

### 도끼

```text
[R][R][ ]
[R][S][ ]
[ ][S][ ]
```

### 삽 / 검 / 괭이

```text
삽        검        괭이
[R]       [R]       [R][R]
[S]       [R]       [ ][S]
[S]       [S]       [ ][S]
```

### Spear

```text
[ ][ ][R]
[ ][S][ ]
[S][ ][ ]
```

## 방어구

바닐라 방어구와 같은 자리 배치를 사용합니다.

```text
투구      흉갑      레깅스     부츠
RRR       R R       RRR         R R
R R       RRR       R R         R R
          RRR       R R
```

## 재료별 추가 제작

| 제작물 | 패턴/재료 | 결과 |
| --- | --- | ---: |
| Bars | 주괴 3×2 직사각형 | 16 |
| Door | 주괴 2×3 | 3 |
| Pressure Plate | 주괴 2개 가로 | 1 |
| Shears | 주괴 2개 대각선 | 1 |
| Material Furnace | 바닐라 Furnace 중앙 + 재료 8개 둘레 | 1 |
| Bricks | 재료 2×2 | 4 |
| Brick Slab | Bricks 3개 가로 | 6 |
| Brick Stairs | 바닐라 계단 패턴 | 4 |

## 미스릴/오닉스 활

미스릴과 오닉스에는 전용 Rod와 Bow가 있습니다.

### Rod

재료 2개를 세로로 배치 → Rod 1개.

### Bow

JAR 실제 패턴:

```text
[ ][Rod][String]
[Iron][ ][String]
[ ][Rod][String]
```

즉 Rod 2, String 3, Iron Ingot 1개를 사용합니다.

## 구리 추가 장비

SimpleOres는 바닐라 구리에 다음 제작을 추가합니다.

- Copper Bucket: 구리 주괴 3개, 바닐라 bucket 모양
- Copper Furnace: Furnace 1 + Copper Ingot 8
- Copper Pressure Plate: Copper Ingot 2
- Copper Shears: Copper Ingot 2 대각선

## 저장 블록

- 재료 9개 3×3 → material block 1
- material block 1 → 재료 9개 (shapeless)
- 주석/미스릴/아다만티움 ingot 1 → nugget 9 (shapeless)
- nugget 9 → ingot 1
- raw material 9 → raw block 1
- raw block 1 → raw material 9

오닉스는 nugget 계열 대신 **Onyx Gem ↔ Onyx Block** 압축을 사용합니다.

## 제련/블라스팅

| 재료 | 광석/원석/가루 → | 경험치 |
| --- | --- | ---: |
| Tin ore/raw | Tin Ingot | 0.4 |
| Tin dust | Tin Ingot | 0.7 |
| Mythril ore/raw/dust | Mythril Ingot | 0.7 |
| Adamantium ore/raw/dust | Adamantium Ingot | 0.7 |
| Onyx ore | Onyx Gem | 1.0 |

주석·미스릴·아다만티움의 axe/boots/chestplate/helmet/hoe/leggings/pickaxe/shovel/sword는 화로 또는 blast furnace에 넣어 **nugget 1개**로 재활용할 수 있으며 경험치는 0.1입니다.

## 조건부 Pulverizer 레시피

JAR에는 `energizedpower:pulverizer` 타입 12개가 있지만 `fabric:all_mods_loaded` 조건으로 **Energized Power가 있을 때만** 로드됩니다. 현재 서버 ZIP에는 Energized Power가 없으므로 이 서버의 일반 제작 루트로 보지 않습니다.
