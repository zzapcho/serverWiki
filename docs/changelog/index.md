<span class="page-kicker">CHANGELOG</span>

# 업데이트

<p class="page-lead">서버 기능과 위키에서 플레이에 영향을 주는 변경을 기록합니다. 계획과 실제 적용을 구분합니다.</p>

## 2026-08-16 · Wiki v1.0 hardening

- 모바일 검색창의 중복 포커스 테두리와 작은 화면 레이아웃 문제 정리.
- 모바일 사이드바를 현재 문맥 중심으로 축소하고 터치 영역을 44px 이상으로 정리.
- CSS를 **tokens → base → components → motion → mobile** 계층으로 재구성.
- 해시/검색 결과 링크를 깨뜨리던 강제 scroll-to-top 동작 제거.
- 표가 실제로 가로 스크롤될 때만 키보드 포커스 영역이 되도록 접근성 개선.
- 명령어 복사 토스트 race와 실패 처리 개선.
- 내부 링크/금지 패턴을 검사하는 `docs:check` 배포 게이트 추가.
- VitePress 버전을 명시적으로 고정해 의도치 않은 `next` 업데이트 위험 축소.
- Simple Voice Chat의 최신 키 정책에 맞춰 PTT/그룹 기본키 설명 수정.
- EconomyCraft 명령어, 무덤, Voice Chat, 모드 상세 문서 대폭 확장.

## 문서 상태 표기

- <span class="status-chip is-live">사용 중</span> 현재 서버에 적용된 기능.
- <span class="status-chip is-beta">베타</span> 동작하지만 알려진 문제/검증 항목이 남은 기능.
- <span class="status-chip is-plan">계획</span> 아직 구현 또는 공개되지 않은 기능.

::: info 변경 기록의 기준
“계획했다”와 “서버에 실제 반영됐다”를 같은 항목으로 취급하지 않습니다. 서버 설정이 바뀌면 가이드와 명령어 문서도 함께 갱신합니다.
:::
