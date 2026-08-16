<span class="page-kicker">SERVER SYSTEMS</span>

# 서버 시스템

<p class="page-lead">클라이언트에서 모드 이름을 볼 필요는 없지만, 플레이할 때 반드시 알아야 하는 서버 측 기능입니다.</p>

## EconomyCraft

<span class="status-chip is-live">사용 중</span>

서버의 화폐, 송금, 서버 상점, 플레이어 상점과 주문 시스템을 담당합니다.

| 기능 | 사용 방법 |
|---|---|
| 잔액 | `/bal` |
| 송금 | `/pay <플레이어> <금액>` |
| 일일 보상 | `/daily` |
| 서버 상점 | `/servershop` |
| 플레이어 상점 | `/shop`, `/shop list ...` |
| 주문 | `/orders` |

→ [경제 시스템 전체 보기](/economy/) · [명령어 전체 보기](/commands/)

## Universal Graves

<span class="status-chip is-live">사용 중</span>

사망 시 아이템을 바닥에 흩뿌리는 대신 **무덤 시스템**으로 보호합니다. 사망 위치와 무덤을 찾는 흐름이 생기므로, 죽기 전에 [생존 & 죽음 가이드](/guide/survival)를 확인하는 것을 권장합니다.

향후 인벤세이브권이 구현되면 **세이브권이 먼저 처리되고, 사용되지 않은 경우 무덤이 생성되는 구조**를 목표로 합니다.

## Simple Voice Chat

<span class="status-chip is-live">사용 중</span>

서버 안에서 거리 기반 음성채팅을 제공합니다. 클라이언트에도 음성채팅 모드가 있어야 하며, 서버 접속 후 음성 연결 상태를 확인할 수 있습니다.

주요 기본 키는 `V` 설정, `Caps Lock` 푸시투톡, `M` 마이크 음소거, `G` 그룹 메뉴입니다. 모든 키는 Minecraft 조작 설정에서 변경할 수 있습니다.

→ [Discord & Voice](/community/) · [조작법](/controls/)

## Discord Integration

<span class="status-chip is-live">사용 중</span>

Minecraft 채팅과 Discord 채널을 연결합니다.

- Minecraft 채팅 → Discord 전달
- Discord 메시지 → Minecraft 표시
- 접속/퇴장/사망/발전과제 알림
- 서버 시작/종료 상태 알림

플레이어는 별도 키를 누를 필요 없이 일반 채팅을 사용하면 됩니다.

## DiscordIO / Velocity 인증

<span class="status-chip is-live">사용 중</span>

프록시 앞단에서 Discord 계정 연동과 화이트리스트를 담당합니다. 서버 접속 전 Discord에서 인증이 완료되어야 정상적으로 입장할 수 있습니다.

→ [처음 접속하기](/getting-started)

## 서버 내부 / 관리자 계열

LuckPerms, FabricProxy-Lite, 백업·로그·성능 모드처럼 **일반 플레이어가 조작할 필요가 없는 구성요소**도 사용합니다. 이런 모드는 플레이에 직접 필요한 기능이나 명령어가 생길 때만 위키에 노출합니다.

::: info 왜 전부 나열하지 않나요?
의존성 라이브러리까지 전부 노출하면 플레이어가 필요한 정보를 찾기 어려워집니다. 이 위키의 기준은 **“플레이 중 알아야 하는가?”**입니다.
:::
