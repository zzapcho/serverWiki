<span class="page-kicker">STRUCTURES</span>

# 구조물 · Dungeons & Taverns

Dungeons and Taverns 5.3.0은 오버월드·네더·엔드에 던전, 선술집, 일리저 거점, 동굴 구조물, 추가 마을 등을 넣는 **데이터 중심 구조물 모드**입니다. 설치 JAR에는 **32개의 structure set**이 확인됩니다.

## spacing / separation 읽는 법

`spacing/separation`은 청크 단위입니다.

- `spacing`: random-spread 후보 지역의 기본 격자 크기
- `separation`: 같은 set 후보들이 너무 가까워지지 않게 하는 최소 분리값
- 이것은 “spacing 청크마다 반드시 구조물 하나”가 아닙니다.
- biome 조건, exclusion zone, frequency, 지형 적합성 때문에 후보가 탈락할 수 있습니다.

## 구조물 배치표

| Structure set | 배치값 | 후보 구조/가중치 |
| --- | --- | --- |
| `badlands_miner_outpost` | 60/12 | badlands_miner_outpost |
| `badlands_miner_outpost_mineshafts` | 60/12 | mineshaft_mesa |
| `bunker` | 70/30 | bunker |
| `crypts` | 50/25 | undead_crypt×1, creeping_crypt×1, catacomb×1 |
| `desert_structures` | 80/12 | desert_ruins |
| `end_castle` | concentric rings · distance 32, spread 3, count 219 | end_castle |
| `end_lighthouses` | 70/22 | end_lighthouse |
| `end_ship` | 70/10 · frequency 0.25 | end_ship |
| `firewatch_towers` | 50/15 | firewatch_tower_birch×1, firewatch_tower_cherry×1, firewatch_tower_dark_oak×1, firewatch_tower_forest×1, firewatch_tower_jungle×1, firewatch_tower_savanna×1, firewatch_tower_mangrove×1, firewatch_tower_swamp×1, firewatch_tower_taiga×1, firewatch_tower_pale×1 |
| `illager_barracks` | 60/25 | illager_barracks×1, pillager_outpost×2, illager_camp×3 |
| `illager_camp` | 50/32 | illager_camp |
| `illager_hideout` | 200/12 | illager_hideout |
| `illager_manor` | 180/90 | illager_manor |
| `jungle_ruins` | 80/12 | jungle_ruins |
| `mangrove_witch_hut` | 32/8 | mangrove_witch_hut |
| `nether_encampments` | 32/16 | nether_skeleton_tower_fort×1, nether_skeleton_tower_warped×2, nether_skeleton_tower_crimson×2, nether_skeleton_tower_soul×2, piglin_camp×4, piglin_camp_collony×1 |
| `nether_structures` | 90/40 | nether_port×40, nether_keep×20, hamlet×60, piglin_outstation×30, piglin_donjon×3, sealing_halls×2 |
| `ocean_structures` | 140/90 | conduit_ruin |
| `pale_residence` | 60/15 | pale_residence |
| `remnants` | 80/30 | remnant_bundle_tent×1, remnant_bee_keeper×1, remnant_big_remnant×1, remnant_big_remnant_2×1, remnant_big_remnant_3×1, remnant_bridge_remnant×1, remnant_birch_graveyard×1, remnant_bunny_base×1, remnant_desert_remnant×1, remnant_forest_smith×1, remnant_frog_ranch×1, remnant_graveyard×1, remnant_medium_remnant×1, remnant_medium_remnant_2×1, remnant_miner_hut×1, remnant_mud_brick_constructor×1, remnant_ominous_shop×1, remnant_ruin_farmer×1, remnant_ruin_smith×1, remnant_sawmill×1, remnant_school_remnant×1, remnant_taiga_castle×1, remnant_woodland_hud×1, remnant_zombie_horse_ranch×1, remnant_classic_village×1, remnant_creeper_homestead×1 |
| `ruin_town` | 72/30 | ruin_town |
| `shrine_tower` | 150/100 | shrine_tower |
| `shrines` | 70/26 | shrine_biome_tier_1×2, shrine_biome_tier_2×2, shrine_biome_tier_3×5, shrine_biome_tier_4×4, shrine_biome_tier_5×3, shrine_combat_tier_1×2, shrine_combat_tier_2×2, shrine_combat_tier_3×5, shrine_combat_tier_4×4, shrine_combat_tier_5×3, shrine_combat_tier_6×1 |
| `small_cave_structures` | 16/6 | cave_chamber×3, cave_chamber_colony×1, cave_hut×1, cave_chamber_dungeon_colony×1, cave_chamber_archeology_ruins×1, deepslate_camp×3, underground_house×3, trial_dungeon×3 |
| `stray_big_structures` | 150/70 | stray_fort×9, lone_citadel×1, stray_outlook×18 |
| `strongholds_buinker` | concentric rings · distance 32, spread 3, count 219 | bunker |
| `swamp_structure` | 80/20 | witch_villa×3, toxic_lair×1 |
| `taverns` | 50/30 | tavern_acacia×1, tavern_birch×1, tavern_cherry×1, tavern_dark_oak×1, tavern_desert×1, tavern_jungle×1, tavern_mangrove×1, tavern_oak×1, tavern_snowy×1, tavern_spruce×1, tavern_swamp×1, tavern_pale×1 |
| `trident_trial_monument` | 200/190 | trident_trial_monument |
| `villages` | 51/16 | village_birch×1, village_jungle×1, village_swamp×1 |
| `wells` | 40/15 | well_spruce×1, well_birch×1, well_dark_oak×1, well_jungle×1, well_oak×1, well_savana×1 |
| `wild_ruin` | 40/18 | wild_ruin |

## 가중치가 있는 set의 조건부 확률

아래 비율은 **그 structure set의 후보가 실제로 구조를 고르는 단계에서의 상대 확률**입니다. 전체 월드에서 만날 확률과 같지 않습니다.

- `illager_barracks`: barracks 1 / outpost 2 / camp 3 → 약 **16.7% / 33.3% / 50.0%**
- `swamp_structure`: witch villa 3 / toxic lair 1 → **75% / 25%**
- `stray_big_structures`: stray fort 9 / lone citadel 1 / stray outlook 18 → 약 **32.1% / 3.6% / 64.3%**
- `nether_structures`: port 40, keep 20, hamlet 60, outstation 30, donjon 3, sealing halls 2 → 약 **25.8 / 12.9 / 38.7 / 19.4 / 1.94 / 1.29%**
- `nether_encampments`: skeleton fort 1, warped/crimson/soul tower 각 2, piglin camp 4, colony 1 → 총 weight 12
- `end_ship`은 placement `frequency=0.25`도 있어 후보 단계에서 추가 frequency 제한이 있습니다.

## 조합법

이 모드는 주로 월드젠입니다. JAR의 16 recipe JSON은 바닐라 **harness 염색 색상 레시피**이며, “던전 전용 장비 제작 모드”처럼 별도의 대규모 제작 트리를 추가하는 구조는 아닙니다.

## 구조물이 안 보일 때

1. 새 청크를 탐험합니다.
2. 원하는 구조물과 맞는 biome인지 확인합니다.
3. spacing을 보장 간격으로 오해하지 않습니다.
4. village/stronghold 등과의 exclusion zone이 있는 set은 근처 기존 구조물 때문에 후보가 탈락할 수 있습니다.

공식 자료: [Dungeons and Taverns](https://modrinth.com/datapack/dungeons-and-taverns)
