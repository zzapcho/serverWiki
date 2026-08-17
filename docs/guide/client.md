<span class="page-kicker">CLIENT</span>

# 클라이언트 모드

2026-08-17 제공 `클라모드.zip`을 실제로 검사한 기준입니다. 플레이 콘텐츠, 성능, 화면 편의, 라이브러리가 섞여 있습니다.

::: warning 배포 전에 중복 JAR 정리
같은 mod id의 JAR을 두 개 넣으면 Fabric Loader가 충돌할 수 있습니다. 검수본에는 `fabric-api` 2개와 `sodium` 2개가 들어 있었습니다. 특히 Nvidium 0.4.4-beta3 metadata가 **Sodium 0.9.1**을 요구하므로 현재 구성에서는 Sodium 0.9.1 하나만 두는 것이 metadata와 일치합니다.
:::

## 서버 콘텐츠/통신

| 모드 | 버전 | 플레이어에게 하는 일 |
| --- | --- | --- |
| Enchanted Vertical Slabs | 2.7.0 | 세로 반블록 렌더링/아이템/배치 |
| SimpleOres Fabric | 1.9.10 | 추가 광물·아이템·장비 |
| Elytra Slot | 2.0.0 | 겉날개 전용 슬롯 |
| FallingTree | 25 | 서버 FallingTree와 클라이언트 기능/인챈트 호환 |
| Simple Voice Chat | 2.6.22 | 근접 음성채팅 |
| Fabric API | 0.157.0 | 여러 Fabric 모드의 공통 API |
| BucketLib | 5.2.0.1 | SimpleOres 등의 커스텀 버킷 라이브러리 |
| Polymer | 0.17.3 | 서버 주도 콘텐츠 호환 라이브러리 묶음 |

## 성능/그래픽

| 모드 | 역할 |
| --- | --- |
| Sodium 0.9.1 | 렌더링/FPS 최적화. **현재 Nvidium 요구 버전과 일치** |
| Sodium Extra 0.9.3 | Sodium에 추가 그래픽 옵션 |
| Reese's Sodium Options 2.2.3 | Sodium 설정 화면 개선 |
| Nvidium 0.4.4-beta3 | NVIDIA GPU용 Sodium 렌더링 엔진 확장 |
| Iris 1.11.2 | 셰이더팩 지원; Sodium 0.9.x 의존 |
| ImmediatelyFast 1.16.2 | immediate mode 렌더링 최적화 |
| EntityCulling 1.10.5 | 보이지 않는 엔티티/블록 엔티티 렌더링 생략 |
| More Culling 1.8.1 | 추가 culling 최적화 |
| BadOptimizations 2.4.1 | 렌더링 이외 클라이언트 최적화 |
| Lithium 0.25.3 | 게임 로직 성능 최적화 |
| FerriteCore 9.0.0 | 메모리 사용량 절감 |
| Continuity 3.0.1 | OptiFine 형식 connected/emissive texture 리소스팩 호환 |
| Simple Fog Control 2.0.14 | 지형/네더/수중 안개 조절 |

## HUD·지도·인벤토리 편의

| 모드 | 역할 |
| --- | --- |
| JourneyMap 6.0.4 | 탐험하면서 실시간 지도 기록 |
| AppleSkin 3.0.10 | 음식/허기 관련 HUD 정보 |
| BetterF3 19.0.0 | F3 디버그 화면을 읽기 쉽게 재구성 |
| Better Advancements 0.6.0.72 | 발전과제 화면 개선 |
| Chat Heads 1.2.8 | 채팅 메시지 옆 플레이어 머리 표시 |
| Mouse Tweaks 2.31 | 인벤토리 드래그/마우스 조작 개선 |
| Shulker Box Tooltip 5.4.0 | 셜커 상자 내용 미리보기 |
| Simple Armor HUD 1.10.0 | HUD에 장비 상태 표시 |
| Simple HUD Enhanced 4.7.5 beta14 | 좌표/상태 등 HUD 커스터마이즈 |
| Gamma Utils 3.1.1 | 밝기/감마/나이트비전 편의 |
| Mod Menu 20.0.1 | 설치 모드 목록/설정 진입 |
| Essential 1.4.1.1 container | 소셜/클라이언트 편의 기능 묶음 |

## 라이브러리

`Resourceful Lib` 등 일부 파일은 다른 클라이언트 모드가 사용하는 라이브러리입니다. “화면에 기능이 안 보인다”는 이유로 임의 삭제하지 않는 편이 안전합니다.

## 호환성 체크

- Java 요구가 있는 26.2 모드들이 `java >=25`를 선언하므로 런처 Java가 너무 오래되면 시작 전에 막힐 수 있습니다.
- Chat Heads와 Simple Fog Control 파일명은 26.1 계열이지만 metadata는 Minecraft `>=26.1`을 허용합니다. 그래도 실제 배포본에서는 한 번 실행 검증하는 것이 안전합니다.
- Nvidium은 NVIDIA GPU용입니다. 다른 GPU에서 문제가 생기면 Nvidium을 첫 점검 대상으로 봅니다.
- Sodium/Iris/Nvidium처럼 서로 직접 의존하는 그래픽 모드는 버전을 따로 올리지 말고 **묶음으로 검증**하세요.
