<span class="page-kicker">WORLDGEN</span>

# 지형 · Terralith + Tectonic

Terralith 2.6.4와 Tectonic 3.0.26은 같은 일을 중복하는 모드가 아닙니다. **Tectonic이 지형의 큰 형태를 만들고, Terralith가 그 위에 다양한 바이옴과 세부 월드젠을 얹는 조합**으로 이해하면 편합니다.

## Terralith

설치 JAR의 `data/terralith/worldgen/biome/`에서 **95개의 커스텀 biome JSON**을 확인했습니다. 지상 바이옴뿐 아니라 cave/skylands 계열도 포함됩니다.

예시:

- Alpine Grove / Alpine Highlands
- Amethyst Canyon / Amethyst Rainforest
- Desert Canyon / Desert Oasis / Desert Spires
- Lavender Forest / Valley
- Moonlight Grove / Valley
- Sakura Grove / Valley
- Volcanic Crater / Peaks
- Yellowstone / Yosemite 계열
- Andesite/Deep/Diorite/Fungal/Granite/Thermal/Tuff Caves 등
- Skylands Spring/Summer/Autumn/Winter

## Terralith 기본 토글

설치 버전 코드의 기본값:

| 항목 | 기본값 |
| --- | --- |
| custom structures | true |
| fog tweaks | true |
| intro message | true |
| skylands | true |
| terrain slabs | true |
| vanilla stone gen | false |
| **recipe changes** | **false** |

따라서 `enable.recipe_changes` 아래에 들어 있는 dispenser/dropper/lever/observer/piston 등의 선택형 레시피 변경은 **기본값에서는 활성화되지 않습니다.**

## Tectonic

Tectonic은 terrain shaping을 크게 바꿔 산맥, 대륙, 계곡과 고저차를 더 다양하게 만듭니다. 플레이어 입장에서 특정 `%`나 Y 하나로 설명하는 기능이 아니라 지형 noise/router 수준의 변경입니다.

## 광물/구조물과의 관계

- SimpleOres 광물은 별도 placed feature로 배치되며 Y 범위는 [광물 표](/mods/simpleores#광물-생성-높이와-양)를 따릅니다.
- Dungeons & Taverns/MES 구조물은 별도 structure set 규칙을 사용합니다.
- 실제 노출 정도/발견 난이도는 새 지형과 바이옴 조건 때문에 달라질 수 있습니다.

공식 자료: [Terralith](https://github.com/Stardust-Labs-MC/Terralith) · [Tectonic](https://modrinth.com/project/tectonic)
