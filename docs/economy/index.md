<span class="page-kicker">ECONOMY</span>

# 경제 시스템

<p class="page-lead">돈은 생활 콘텐츠에서 만들어지고 플레이어 거래를 거쳐 편의·건축·소모품에 다시 쓰이도록 설계합니다.</p>

<div class="stat-grid">
  <div class="stat-card"><span class="stat-label">START</span><span class="stat-value">500</span><span class="stat-note">첫 시작 잔액</span></div>
  <div class="stat-card"><span class="stat-label">DAILY</span><span class="stat-value">100</span><span class="stat-note">일일 보상</span></div>
  <div class="stat-card"><span class="stat-label">SELL LIMIT</span><span class="stat-value">5,000</span><span class="stat-note">일일 서버 판매 수익 한도</span></div>
  <div class="stat-card"><span class="stat-label">TAX</span><span class="stat-value">3%</span><span class="stat-note">거래 세율</span></div>
</div>

## 현재 적용된 기본값

<span class="status-chip is-live">사용 중</span>

| 항목 | 값 / 상태 | 의미 |
|---|---|---|
| 시작 잔액 | 500 | 새 플레이어의 초기 자금 |
| 일일 보상 | 100 | `/daily`로 받는 기본 보상 |
| 일일 서버 판매 한도 | 5,000 | 무한 파밍에 의한 통화 과잉 생성 제한 |
| 거래 세율 | 3% | 거래 과정에서 일부 통화를 회수 |
| PvP 사망 금전 손실 | 0 | PvP 사망만으로 잔액이 깎이지 않음 |
| 서버 상점 | 켜짐 | `/servershop` |
| 서버 판매 | 켜짐 | `/sell` |
| 플레이어 상점 | 켜짐 | `/shop` |
| 구매 주문 | 켜짐 | `/orders` |
| 잔액 스코어보드 | 꺼짐 | 화면을 덜 복잡하게 유지 |

## 돈의 흐름

<div class="flow-grid">
  <div class="flow-card"><span class="flow-number">01</span><strong>생산</strong><p>농사·낚시·광질 등 일부 반복 가능한 활동과 일일 보상으로 통화가 생성됩니다.</p></div>
  <div class="flow-card"><span class="flow-number">02</span><strong>거래</strong><p>플레이어 상점과 주문을 통해 희귀품·모드 아이템·대량 물량의 가격을 유저가 만듭니다.</p></div>
  <div class="flow-card"><span class="flow-number">03</span><strong>회수</strong><p>세금, 서버 판매 상품, 향후 편의 아이템 같은 소비처가 통화를 회수합니다.</p></div>
</div>

## 서버에 아이템 팔기

손에 판매할 아이템을 든 뒤 `/sell`을 사용합니다.

```text
/sell
/sell 16
/sell all
/sell everything
```

- `/sell 16`: 지정 수량 판매.
- `/sell all`: 같은 아이템을 인벤토리에서 모두 판매.
- `/sell everything`: 판매 가능한 인벤토리 아이템을 한 번에 처리.
- 하루 서버 판매 수익은 현재 5,000 한도의 영향을 받습니다.

### 주문이 서버 판매보다 비싸면

열린 `/orders` 구매 주문이 서버 매입가보다 높은 단가라면, EconomyCraft는 **가장 높은 주문을 우선 충족**한 뒤 남는 물량을 서버 가격으로 처리할 수 있습니다. 그래서 대량 판매 전 `/orders`를 한 번 보는 것이 좋습니다.

## 플레이어 상점

`/shop`은 플레이어가 보유 아이템을 직접 가격을 정해 등록하는 마켓입니다.

```text
/shop
/shop list <가격> [수량]
```

희귀 탐험품, 모드 아이템, 대량 건축 자재처럼 서버 상점이 가격을 고정하기 어려운 품목은 플레이어 상점이 핵심입니다.

## 구매 주문

원하는 물건을 직접 “삽니다”라고 등록할 수 있습니다.

```text
/orders
/orders request <아이템> <수량> <가격>
/orders claim
```

오프라인 동안 체결된 물건은 `/orders claim`으로 수령할 수 있습니다.

## 서버 상점 설계 원칙

서버 상점은 모든 것을 무제한으로 사고파는 창구가 아닙니다.

1. **돈 생성 품목**은 지속 생산 가능한 작물·기초 자원·생활 생산물 중심.
2. **돈 회수 품목**은 편의·건축·장식·소모품 중심.
3. 서버에서 산 재료를 조합해 즉시 되팔아 무한 차익이 생기지 않도록 출력 판매가를 제한.
4. 탐험 희귀품은 서버가 무제한 매입하지 않아 플레이어 거래 가치 유지.
5. 경제가 너무 빨리 끝나지 않도록 고급 편의 기능에는 의미 있는 비용 부여.

현재 가격 데이터는 많은 항목을 포함하므로, 아이템별 최종 가격은 실제 `/servershop`, `/sell` UI가 가장 정확합니다.

## 앞으로 추가할 돈 소모처

### 인벤세이브권

<span class="status-chip is-plan">계획</span>

사망할 때 1장을 소비해 인벤토리를 보존하고, 사용되지 않은 경우에만 Universal Graves가 처리하도록 서버 전용 로직으로 설계할 예정입니다. 구현 전에는 **무덤 시스템만 현재 기능**입니다.

### 수표

<span class="status-chip is-plan">계획</span>

금액을 검증 가능한 아이템 형태로 발행해 선물, 이벤트, 상자 보관 등에 사용할 수 있는 기능을 계획 중입니다. 중복 사용/위조 방지가 전제입니다.

→ [EconomyCraft 상세](/mods/economycraft) · [전체 명령어](/commands/)
