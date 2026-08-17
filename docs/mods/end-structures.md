<span class="page-kicker">THE END</span>

# 엔드 구조물 · Moog's End Structures

Moog's End Structures 2.0.3(MES) + Moog's Structure Lib 3.0.6은 엔드에 바닐라 스타일 구조물을 추가합니다. 설치 JAR 기준 **25개 structure set**이 있습니다.

## 가장 중요한 조건: 원점 1000블록

25개 set 모두 placement에 `min_distance_from_world_origin: 1000`이 들어 있습니다. Moog's Structure Lib 구현은 chunk 좌표를 블록 좌표로 환산해 이 값을 비교하므로 **원점에서 최소 1000블록 밖**이라는 뜻입니다.

엔드 중앙 섬/입구 근처만 돌아다니면 구조물이 거의 안 보이는 것이 정상일 수 있습니다.

## 실제 spacing은 JSON보다 1.65배

Moog's Structure Lib의 `AdvancedRandomSpread`는 JSON의 `spacing`과 `separation`을 런타임에서 **1.65배 후 반올림**합니다. 따라서 아래 effective 값을 플레이 체감 기준으로 봐야 합니다.

| Structure set | JSON spacing/separation | 런타임 effective |
| --- | ---: | ---: |
| `astral_hideaway` | 40/18 | **66/30** |
| `astral_meteorite` | 27/12 | **45/20** |
| `ender_spire` | 46/38 | **76/63** |
| `enderbloom_grove` | 36/12 | **59/20** |
| `enderkeep_courtyard` | 44/25 | **73/41** |
| `enderpin_spikes` | 31/8 | **51/13** |
| `enderskog` | 52/22 | **86/36** |
| `enderwatch_tower` | 42/12 | **69/20** |
| `endscraps` | 37/7 | **61/12** |
| `manuscript_shrine` | 41/27 | **68/45** |
| `mega_ship` | 77/15 | **127/25** |
| `mega_ship_basic` | 80/60 | **132/99** |
| `mega_ship_crashed` | 75/46 | **124/76** |
| `mega_ship_crashed_2` | 72/48 | **119/79** |
| `mega_ship_crashed_deepslate` | 79/52 | **130/86** |
| `mega_ship_deepslate` | 88/65 | **145/107** |
| `mega_ship_deepslate_2` | 82/46 | **135/76** |
| `mega_ship_deepslate_3` | 84/52 | **139/86** |
| `monolith` | 36/21 | **59/35** |
| `mystical_archway` | 44/32 | **73/53** |
| `mythic_garden` | 38/27 | **63/45** |
| `phantom_citadel` | 31/14 | **51/23** |
| `placid_prairie` | 32/22 | **53/36** |
| `ruined_pillar` | 12/7 | **20/12** |
| `starlight_voyager` | 32/17 | **53/28** |

`spacing`은 보장 생성 간격이 아니며 biome/배치 조건을 통과해야 합니다.

## 전리품 확률 — JAR loot table 기준

### End common

2~4회 draw, 총 weight 112입니다. **한 draw 기준** 선택 확률:

| 항목 | weight | 1회 선택 확률 |
| --- | ---: | ---: |
| Chorus Fruit | 20 | 17.86% |
| Iron Ingot | 20 | 17.86% |
| Ender Pearl | 15 | 13.39% |
| Lapis Lazuli | 15 | 13.39% |
| Popped Chorus Fruit | 12 | 10.71% |
| Gold Ingot | 10 | 8.93% |
| Experience Bottle | 8 | 7.14% |
| Enchanted Book entry | 6 | 5.36% |
| End Crystal | 4 | 3.57% |
| Shulker Shell | 2 | 1.79% |

여러 번 draw하므로 “상자에서 한 번이라도 나올 확률”은 위 1회 확률과 다릅니다.

### End rare 보너스 pool

희귀 loot table의 두 번째 pool은 1회 draw:

- Netherite Scrap **4.76%**
- Gold Block **6.35%**
- Iron Block **9.52%**
- Empty **79.37%**

### Mega Ship treasure

Mega Ship treasure의 두 번째 pool은 **1회 확정 draw**이며:

- Netherite Ingot **50%**
- Iron Block **25%**
- Nether Star **25%**

첫 pool은 4~8회 draw이고 다이아 장비, 셜커 상자, 드래곤 머리, 황금 당근, 엔드 수정 등이 가중치로 섞입니다. 세 번째 pool은 0~2회 범위 + bonus roll 구조라 단일 고정 확률로 단순화하지 않습니다.

## 문제 해결

- 원점 1000블록 조건부터 확인합니다.
- 새 청크를 탐험합니다.
- `/locate` 같은 관리자 도구가 없는 일반 플레이에서는 넓은 범위를 이동해야 할 수 있습니다.
- Dungeons & Taverns의 엔드 구조물도 별도로 존재하므로 “새 엔드 구조물”이 모두 MES는 아닙니다.

공식 자료: [Moog's End Structures](https://modrinth.com/mod/mes-moogs-end-structures)
