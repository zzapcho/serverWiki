<span class="page-kicker">CHANGELOG</span>

# 업데이트

## 2026-08-17 — live config 동기화

`_config.zip`의 실제 서버 설정을 위키에 반영했습니다.

### FallingTree

- 현재 서버 `requireEnchantment=true` 확인
- **Chopper 계열 인챈트가 붙은 도끼에서만 벌목 작동**하도록 문서 수정
- FallingTree Enchantments 데이터팩의 6개 Chopper 변형, 레벨/지원 아이템/획득 태그 정리
- `/fallingtree toggle`이 인챈트 조건을 우회하지 않는 점 명시

### Universal Graves

live config가 기존 JAR 기본값 설명과 달라 실제 서버값으로 교정했습니다.

- XP 저장: **80%**
- 타인 보호 타이머: `-1`
- 자동 소멸: **1,209,600초 = 14일**
- 만료 시 아이템 드롭: true
- 원격 보호 해제/무덤 부수기/잠금 해제: false
- fluid 위 생성: true

### Simple Voice Chat

- UDP 포트 **24454**
- 일반 음성 거리 **48블록**
- 속삭임 거리 **24블록**
- 그룹/녹음 허용, Voice Chat 미설치 강제퇴장 비활성 상태 반영

## 2026-08-17 — 실제 모드 묶음 전면 재검수

`서버모드.zip`과 `클라모드.zip`의 JAR/데이터팩을 직접 검사해 위키 전체를 현재 구성에 맞췄습니다.

### 추가/복원

- Elytra Slot 2.0.0 문서 추가
- Dungeons & Taverns 5.3.0 구조물 배치표 추가
- FallingTree Enchantments 데이터팩 실제 설치 상태 반영
- 클라이언트 모드 전체 역할/호환성 가이드 추가
- SimpleOres 202개 recipe JSON을 패턴 단위로 재정리
- Universal Graves의 Emptied Grave 실제 제작법 추가

### 중요 정정

- Terralith 선택형 `recipe_changes=false` 기본값 명시
- Simple Voice Chat PTT/그룹 키를 임의 기본키로 고정하지 않고 26.2 JAR 실제 key registration 반영
- MES spacing이 Moog's Structure Lib에서 1.65배 적용되는 점 반영

### 배포 전 클라이언트 검수 메모

제공된 클라 ZIP에는 Fabric API 중복 JAR과 Sodium 중복 버전이 발견되었습니다. Nvidium 0.4.4-beta3가 Sodium 0.9.1을 요구하므로 배포 모드팩은 중복을 제거해 검증해야 합니다.
