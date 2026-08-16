<span class="page-kicker">ECONOMY</span>

# 경제 시스템

<p class="page-lead">돈은 단순 점수판이 아니라 생활 콘텐츠, 거래와 편의 기능을 연결하는 서버의 핵심 시스템입니다.</p>

<div class="stat-grid">
  <div class="stat-card"><span class="stat-label">START</span><span class="stat-value">500</span><span class="stat-note">첫 시작 잔액</span></div>
  <div class="stat-card"><span class="stat-label">DAILY</span><span class="stat-value">100</span><span class="stat-note">일일 보상</span></div>
  <div class="stat-card"><span class="stat-label">SELL LIMIT</span><span class="stat-value">5,000</span><span class="stat-note">일일 서버 판매 한도</span></div>
  <div class="stat-card"><span class="stat-label">TAX</span><span class="stat-value">3%</span><span class="stat-note">거래 세율</span></div>
</div>

## 기본 기능

<span class="status-chip is-live">사용 중</span>

현재 경제는 EconomyCraft를 기반으로 합니다.

| 기능 | 사용 여부 | 설명 |
|---|---|---|
| 잔액 | 사용 | `/bal`로 확인 |
| 송금 | 사용 | `/pay`로 플레이어 간 송금 |
| 일일 보상 | 사용 | 하루 100 지급 |
| 서버 상점 | 사용 | 서버가 지정한 아이템을 사고/파는 역할 |
| 플레이어 상점 | 사용 | 유저가 직접 가격을 정해 판매 |
| 주문 | 사용 | 필요한 물건의 거래 요청에 활용 |
| 서버 판매 한도 | 사용 | 하루 5,000까지 서버에 판매 가능 |
| PvP 사망 금전 손실 | 없음 | PvP 때문에 잔액이 직접 감소하지 않음 |

## 돈은 어디서 생기고 어디로 사라지나요?

경제가 무한 인플레이션이 되지 않도록 **돈 생성**과 **돈 회수**를 분리해서 설계합니다.

<div class="flow-grid">
  <div class="flow-card"><span class="flow-number">01</span><strong>돈 생성</strong><p>일일 보상, 서버가 사들이는 일부 생산물/자원 등을 통해 돈이 들어옵니다.</p></div>
  <div class="flow-card"><span class="flow-number">02</span><strong>플레이어 거래</strong><p>개인 상점과 주문으로 돈이 플레이어 사이를 이동합니다.</p></div>
  <div class="flow-card"><span class="flow-number">03</span><strong>돈 회수</strong><p>세금, 서버 상점, 향후 편의 아이템 같은 소비처로 돈이 빠져나갑니다.</p></div>
</div>

## 서버 상점

서버 상점은 모든 아이템을 무제한으로 현금화하는 곳이 아닙니다. 주로 **지속 가능한 생산물/기초 자원**을 일부 매입하고, 반대로 건축·편의·소모품을 판매하는 역할을 맡습니다.

가격 설계 원칙:

1. 서버에서 살 수 있는 재료를 조합해 되팔아서 무한 이익이 나지 않게 합니다.
2. 탐험 전용 희귀 아이템은 서버가 무제한으로 사지 않도록 합니다.
3. 플레이어 상점이 의미를 가지도록 서버 상점은 모든 수요를 대신하지 않습니다.
4. 돈을 너무 쉽게 벌 수도, 너무 쓸 곳이 없지도 않게 조정합니다.

## 플레이어 상점

플레이어가 직접 아이템과 가격을 정해 거래할 수 있습니다.

```text
/shop
/shop list <가격> [수량]
```

희귀 아이템, 모드 아이템, 대량 주문처럼 서버 상점에서 다루기 어려운 거래는 플레이어 상점과 주문 기능을 사용하는 것이 좋습니다.

## 수표

<span class="status-chip is-plan">계획</span>

금액을 **아이템 형태의 수표**로 만들어 직접 보관하거나 다른 플레이어에게 전달할 수 있게 하는 서버 전용 기능을 설계 중입니다.

목표는 단순합니다.

- 선물/거래 시 돈을 아이템처럼 전달
- 이벤트 보상 지급
- 상자나 시설에 금액 보관
- 중복 사용/위조가 불가능하도록 서버에서 검증

## 인벤세이브권

<span class="status-chip is-plan">계획</span>

경제에서 중요한 **돈 소모처** 중 하나로 추가할 예정입니다. 사망 시 1장을 소비하고 인벤토리를 보존하는 방식이 목표이며, Universal Graves와 충돌하지 않도록 서버 전용 Core에서 처리할 계획입니다.

## 관련 명령어

→ [전체 경제 명령어 보기](/commands/#경제)

::: info 가격표는 계속 조정됩니다
현재 기본 경제 규칙은 적용되어 있지만, 개별 아이템 가격은 실제 플레이 데이터를 보면서 계속 밸런싱합니다.
:::
