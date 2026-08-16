<span class="page-kicker">RECIPES</span>

# 조합법 & 제작 흐름

<p class="page-lead">이 서버에서 조합법을 찾는 가장 정확한 방법, 특수 제작대 사용법, 그리고 위키에 고정 레시피를 무작정 복제하지 않는 이유를 정리합니다.</p>

## 결론: 전체 레시피의 최종 기준은 JEI

현재 설치된 **정확한 모드 버전과 서버 레시피 데이터**를 그대로 보는 도구가 JEI입니다.

| 하고 싶은 것 | 조작 |
|---|---|
| 아이템 검색 | 인벤토리 오른쪽 JEI 검색창에 이름 일부 입력 |
| 어떻게 만드는지 | 아이템 위에 마우스를 올리고 `R` |
| 어디에 쓰이는지 | 아이템 위에 마우스를 올리고 `U` |
| 특정 모드만 좁혀 보기 | 검색창에서 모드 이름/아이템 이름을 함께 검색 |

## JEI 화면 읽는 법

| 화면 영역 | 의미 |
|---|---|
| 인벤토리 오른쪽 아이템 목록 | 현재 검색 조건에 맞는 아이템. 페이지가 많으면 목록의 이전/다음 조작 사용 |
| 아래쪽 검색창 | 아이템 이름과 현재 JEI가 지원하는 필터로 후보 좁히기 |
| 레시피 화면의 위쪽 탭 | 제작대, 화로, Cutting, Cooking처럼 **어디서 처리하는지** 구분 |
| 재료 칸 | 고정 재료 또는 태그로 묶인 대체 가능 재료. 순환하는 후보를 확인 |
| 화살표/시간/경험치 | 가공 시간이나 경험치가 있는 레시피에서 표시 |
| 출력 칸 | 결과 아이템과 수량. 현재 로드된 서버 레시피의 최종 기준 |

## 원하는 아이템을 찾는 전체 순서

1. 인벤토리를 열고 JEI 검색창을 클릭합니다.
2. 이름 전체보다 `tomato`, `rod`, `cabinet`처럼 구분되는 일부만 입력합니다.
3. 아이템에 마우스를 올린 상태에서 <kbd>R</kbd>을 눌러 만드는 법을 엽니다.
4. 레시피 유형이 여러 개면 위쪽 탭으로 제작대·도마·냄비·가열 방식을 바꿔 봅니다.
5. 재료 칸이 여러 아이템을 번갈아 보여 주면 마우스를 올려 허용 후보를 확인합니다.
6. 결과 아이템에 <kbd>U</kbd>를 눌러 다음 단계의 음식·장비·건축 재료까지 따라갑니다.

### 재료에서 시작할 때

새 물고기나 작물을 얻었으면 <kbd>R</kbd>보다 <kbd>U</kbd>가 먼저입니다. “이 재료로 무엇을 만들 수 있나”를 모두 본 뒤 원하는 결과에 <kbd>R</kbd>을 누르면 생산 흐름을 거꾸로 추적할 수 있습니다.

### 아이템 목록이 안 보일 때

- 검색창의 이전 입력을 모두 지웁니다.
- 검색 결과 페이지가 여러 장인지 확인합니다.
- JEI 목록 숨김 단축키가 눌렸는지 **설정 → 조작 설정 → JEI**에서 확인합니다.
- 한글 번역이 애매하면 영문 이름 일부를 검색합니다.
- 모드 이름 필터 문법은 현재 JEI 검색 도움말을 기준으로 사용합니다.

::: warning 키가 동작하지 않을 때
<kbd>R</kbd>/<kbd>U</kbd>는 아이템 스택 위에 마우스를 올린 상태에서 눌러야 합니다. 채팅창이나 검색 입력칸에 커서가 있으면 글자 입력이 되는 것이 정상입니다. 다른 모드와 키가 겹치면 현재 Minecraft 키 설정을 최종 기준으로 바꾸세요.
:::

## 실제 아이콘으로 보는 3×3 제작대

Minecraft 제작대는 **가로 3칸 × 세로 3칸, 총 9칸**입니다. 아래 그림은 게임 인벤토리에서 보이는 실제 아이템 모양과 같은 텍스처를 사용합니다.

<div class="recipe-visuals">
  <div class="recipe-visual">
    <div class="recipe-craft" role="img" aria-label="다이아몬드 강화 낚싯대 조합: 가운데 낚싯대, 위 아래 왼쪽 오른쪽에 다이아몬드">
      <span class="recipe-slot"></span>
      <span class="recipe-slot"><img src="/items/minecraft-diamond.png" alt="다이아몬드"></span>
      <span class="recipe-slot"></span>
      <span class="recipe-slot"><img src="/items/minecraft-diamond.png" alt="다이아몬드"></span>
      <span class="recipe-slot"><img src="/items/minecraft-fishing-rod.png" alt="낚싯대"></span>
      <span class="recipe-slot"><img src="/items/minecraft-diamond.png" alt="다이아몬드"></span>
      <span class="recipe-slot"></span>
      <span class="recipe-slot"><img src="/items/minecraft-diamond.png" alt="다이아몬드"></span>
      <span class="recipe-slot"></span>
    </div>
    <div class="recipe-arrow" aria-hidden="true">→</div>
    <div class="recipe-result">
      <span class="recipe-result-icon"><img src="/items/gofish-diamond-reinforced-rod.png" alt="다이아몬드 강화 낚싯대"></span>
      <span><strong>다이아몬드 강화 낚싯대</strong><span>모양 고정 · 내구도 300</span></span>
    </div>
  </div>

  <div class="recipe-visual">
    <div class="recipe-craft" role="img" aria-label="블레이즈 낚싯대 조합: 오른쪽 위부터 대각선으로 블레이즈 막대 3개, 오른쪽 가운데와 아래에 실 2개">
      <span class="recipe-slot"></span>
      <span class="recipe-slot"></span>
      <span class="recipe-slot"><img src="/items/minecraft-blaze-rod.png" alt="블레이즈 막대"></span>
      <span class="recipe-slot"></span>
      <span class="recipe-slot"><img src="/items/minecraft-blaze-rod.png" alt="블레이즈 막대"></span>
      <span class="recipe-slot"><img src="/items/minecraft-string.png" alt="실"></span>
      <span class="recipe-slot"><img src="/items/minecraft-blaze-rod.png" alt="블레이즈 막대"></span>
      <span class="recipe-slot"></span>
      <span class="recipe-slot"><img src="/items/minecraft-string.png" alt="실"></span>
    </div>
    <div class="recipe-arrow" aria-hidden="true">→</div>
    <div class="recipe-result">
      <span class="recipe-result-icon"><img src="/items/gofish-blaze-rod.png" alt="블레이즈 낚싯대"><b class="recipe-count" aria-hidden="true">2</b></span>
      <span><strong>블레이즈 낚싯대</strong><span>모양 고정 · 2개 제작 · 잡은 결과 자동 가열</span></span>
    </div>
  </div>

  <div class="recipe-visual">
    <div class="recipe-craft" role="img" aria-label="간단한 루어 조합: 왼쪽 위에 깃털, 위 가운데와 오른쪽, 가운데 왼쪽과 오른쪽에 철 조각">
      <span class="recipe-slot"><img src="/items/minecraft-feather.png" alt="깃털"></span>
      <span class="recipe-slot"><img src="/items/minecraft-iron-nugget.png" alt="철 조각"></span>
      <span class="recipe-slot"><img src="/items/minecraft-iron-nugget.png" alt="철 조각"></span>
      <span class="recipe-slot"><img src="/items/minecraft-iron-nugget.png" alt="철 조각"></span>
      <span class="recipe-slot"></span>
      <span class="recipe-slot"><img src="/items/minecraft-iron-nugget.png" alt="철 조각"></span>
      <span class="recipe-slot"></span>
      <span class="recipe-slot"></span>
      <span class="recipe-slot"></span>
    </div>
    <div class="recipe-arrow" aria-hidden="true">→</div>
    <div class="recipe-result">
      <span class="recipe-result-icon"><img src="/items/gofish-simple-lure.png" alt="간단한 루어"></span>
      <span><strong>간단한 루어</strong><span>모양 고정 · 인벤토리에서 루어 +1</span></span>
    </div>
  </div>

  <div class="recipe-visual">
    <div class="recipe-craft" role="img" aria-label="영혼 루어 무형 조합: 영혼 연어 2마리와 간단한 루어 1개를 아무 칸에 배치">
      <span class="recipe-slot"><img src="/items/gofish-soul-salmon.png" alt="영혼 연어"></span>
      <span class="recipe-slot"><img src="/items/gofish-soul-salmon.png" alt="영혼 연어"></span>
      <span class="recipe-slot"><img src="/items/gofish-simple-lure.png" alt="간단한 루어"></span>
      <span class="recipe-slot"></span><span class="recipe-slot"></span><span class="recipe-slot"></span>
      <span class="recipe-slot"></span><span class="recipe-slot"></span><span class="recipe-slot"></span>
    </div>
    <div class="recipe-arrow" aria-hidden="true">→</div>
    <div class="recipe-result">
      <span class="recipe-result-icon"><img src="/items/gofish-soul-lure.png" alt="영혼 루어"></span>
      <span><strong>영혼 루어</strong><span>무형 조합 · 세 재료는 어느 칸이어도 됨</span></span>
    </div>
  </div>
</div>

::: tip 모양 고정과 무형 조합
“모양 고정”은 그림과 같은 위치 관계를 지켜야 합니다. “무형 조합”은 재료 종류와 개수만 맞으면 9칸 어디에 놓아도 됩니다. 서버 데이터팩이 바뀌었으면 JEI 화면을 최종 기준으로 확인하세요.
:::

::: tip 위키와 JEI의 역할
**JEI = 모든 실제 레시피 데이터의 색인**, **위키 = 어떤 블록을 어떻게 상호작용하고 왜 쓰는지 설명**입니다. 모드가 업데이트되면 출력 수량·재료가 달라질 수 있으므로 수백 개 레시피를 복제해 오래된 정보를 만드는 것보다 이 구조가 안전합니다.
:::

## Enchanted Vertical Slabs

기본 원리는 바닐라 반블록 레시피를 90도 돌린 것입니다.

```text
[ 같은 재료 ]
[ 같은 재료 ]
[ 같은 재료 ]
```

- 제작대에서 세로 한 줄 패턴을 사용합니다.
- 일부 석재 계열은 **석재 절단기**에서도 제작할 수 있습니다.
- 세로 반블록은 가로 반블록과 별도의 아이템입니다.
- 같은 계열 세로 반블록끼리 바닐라 반블록처럼 결합할 수 있습니다.
- 구리 세로 반블록은 산화/왁스 시스템을 따르고, 나무 계열은 불에 탈 수 있습니다.

정확한 출력 수량과 해당 재료 지원 여부는 JEI의 현재 레시피를 확인하세요.

→ [Vertical Slabs 상세](/mods/vertical-slabs)

## Farmer's Delight: “조합”보다 조리 과정이 중요

### 도마

1. 도마를 설치합니다.
2. 가공할 식재료를 도마에 올립니다.
3. JEI 레시피에 표시된 칼/도구로 상호작용합니다.
4. 잘린 재료와 부산물을 회수합니다.

### 요리 냄비

1. 요리 냄비를 적절한 열원 위에 설치합니다.
2. GUI를 엽니다.
3. JEI의 **Cooking Pot** 유형 레시피를 확인합니다.
4. 재료를 넣고 조리가 끝날 때까지 기다립니다.
5. 레시피가 그릇/용기를 요구한다면 출력 슬롯의 요구 조건을 맞춰 회수합니다.

### 스토브 / 프라이팬

스토브는 조리용 열원으로 쓰이고, 프라이팬은 직접 가열 조리에 쓰이는 흐름이 있습니다. 어떤 음식이 어느 조리 블록을 요구하는지는 해당 음식에 <kbd>R</kbd>을 눌러 레시피 **유형**까지 확인하세요.

→ [Farmer's Delight 상세](/mods/farmers-delight)

대표 음식의 재료와 프라이팬·큰 접시 음식 사용법은 [요리 방법 & 대표 레시피](/guide/cooking-catalog)에서 단계별로 확인할 수 있습니다.

## Skniro's Furniture

가구 종류가 많기 때문에 이름을 JEI에서 검색한 뒤 <kbd>R</kbd>이 가장 빠릅니다. 제작 뒤에는 블록별 기능이 다릅니다.

- 장식 전용: 설치가 핵심.
- 수납형: 우클릭해 보관 UI 확인.
- 문/개폐형: 일반 블록 상호작용과 비슷하게 사용.
- 조명 등 상호작용형: 우클릭으로 상태가 변하는지 확인.

→ [Furniture 상세](/mods/furniture)

거실·주방·침실별 카테고리와 검색어는 [가구·건축 카탈로그](/guide/building-catalog)에 정리되어 있습니다.

## Friends&Foes

몹 관련 아이템은 제작대 레시피뿐 아니라 **월드에서 몹을 만나 얻거나 특정 상호작용으로 얻는 것**도 많습니다. 그래서 원하는 결과 아이템을 JEI에서 먼저 찾고 <kbd>R</kbd>/<kbd>U</kbd>로 제작 가능 여부와 사용처를 구분하는 것이 좋습니다.

→ [Friends&Foes 상세](/mods/friends-and-foes)

## Gone Fishing

낚시 전리품은 “제작하는 아이템”과 “낚시로만 얻는 아이템”이 섞여 있습니다.

1. 잡은 아이템 이름을 JEI 검색.
2. <kbd>U</kbd>로 식재료/장비/기타 사용처 확인.
3. 제작 가능한 아이템이면 <kbd>R</kbd>로 레시피 확인.
4. 레시피가 없다면 낚시/전리품 획득 계열일 가능성을 고려.

→ [Gone Fishing 상세](/mods/gone-fishing)

낚시 전용 획득물은 JEI에 제작법이 없어도 정상입니다. 바이옴·날씨·차원별 가중치와 낚싯대 획득 상자는 [물고기 확률 & 낚싯대](/guide/fishing-catalog)에서 확인하세요.

## 레시피가 안 보일 때

- 아이템 이름의 일부만 검색.
- 한글 번역명이 애매하면 영문 이름/모드 이름으로도 검색.
- `R`로 아무것도 안 나오면 `U`로 먼저 사용처 확인.
- 서버 배포 팩과 클라이언트 모드 버전 비교.
- 레시피가 서버 설정/데이터팩으로 비활성화된 것은 아닌지 확인.
- 제작법이 없는 낚시·상자·몹 전리품·월드 생성 전용 아이템인지 상세 문서에서 확인.
- 검색 목록은 보이지만 레시피가 다르면 서버와 클라이언트의 모드/데이터팩 버전을 비교.

## “웹에 모든 레시피”가 꼭 필요할 때

최종 배포 JAR 세트가 고정되면 JAR 내부의 `data/*/recipe`와 관련 데이터팩을 읽어 **서버 버전 고정 레시피 카탈로그를 자동 생성**할 수 있습니다. 그 방식이라면 수작업 복붙이 아니라 실제 배포물에서 생성하므로 업데이트 누락을 줄일 수 있습니다.

현재는 JEI가 이미 그 역할을 게임 안에서 더 정확하게 수행하므로, 위키는 특수 상호작용과 제작 흐름을 우선합니다.
