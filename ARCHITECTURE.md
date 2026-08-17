# Wiki architecture

## Product goal

이 위키는 개발자용 모드 문서가 아니라 **처음 접속한 플레이어가 바로 행동할 수 있는 ZZAPCHO SERVER 가이드**다.

각 페이지는 아래 질문을 우선 해결한다.

1. 바닐라와 무엇이 달라졌는가?
2. 어디서 얻고, 어느 높이/차원에서 찾는가?
3. 어떻게 제작하고 어떤 키/명령을 쓰는가?
4. 확률이나 배치값은 정확히 무엇을 의미하는가?
5. 문제가 생기면 무엇을 먼저 확인하는가?

## Verified snapshot — 2026-08-17

`서버모드.zip` / `클라모드.zip` / `_config.zip`을 현재 스냅샷 근거로 사용한다. 플레이 콘텐츠 기준은 `AI_README.md`의 verified baseline을 따른다.

핵심 live 설정:

- FallingTree `requireEnchantment=true` — Chopper 계열 인챈트 도끼 필수
- Universal Graves — XP 80%, 타인 보호 타이머 `-1`, 14일 자동 만료, 만료 시 아이템 드롭
- Simple Voice Chat — UDP 24454, 일반 거리 48, 속삭임 24
- Terralith `recipe_changes=false`

Universal Graves처럼 live config가 JAR constructor 기본값과 다르면 **실제 config를 우선**한다.

## Source of truth

1. live runtime/configuration
2. 제공된 설치 JAR/데이터팩
3. 설치 버전 공식 소스/문서
4. wiki prose
5. 다른 버전 자료 또는 추측

## Information architecture

- `docs/guide/` — 서버 전체 흐름, 클라이언트, 활동별 가이드
- `docs/mods/` — 플레이 콘텐츠 모드의 동작·수치·확률·문제 해결
- `docs/recipes/` — 실제 JAR에서 확인한 제작/제련 패턴
- `docs/controls/` — 플레이어 키·명령·상호작용
- `docs/community/` — Voice/Discord
- `docs/troubleshooting/` — 증상 중심 해결

`navigation.mts`가 모든 페이지에서 하나의 전체 sidebar를 소유한다.

## Theme ownership

```text
tokens.css → base.css → components.css → outline-fix.css → motion.css → mobile.css
```

- `tokens.css`: 색, 간격, radius, motion 상수
- `base.css`: 안전성/focus/overflow 기본 규칙
- `components.css`: 기본 컴포넌트
- `outline-fix.css`: 긴 한글 outline 줄바꿈
- `motion.css`: 상태 전환, reduced-motion
- `mobile.css`: 반응형 적응
- `enhancements.ts`: SPA에서 필요한 점진적 기능

## Search

VitePress local MiniSearch를 사용한다.

- `prefix: true`
- `fuzzy: 0.22`, `maxFuzzy: 2`
- compact bigram + 한글 오타/영문명 alias
- `combineWith: 'OR'`
- query persistence 비활성화

실제로 설치되지 않은 오래된 콘텐츠 alias는 넣지 않는다.

## Responsive & release contract

최소 320, 360, 412, 768, 1024, 1440 CSS px에서 표/검색/sidebar/오른쪽 outline을 확인한다. 페이지 자체 가로 스크롤은 만들지 않고 넓은 표만 `.zz-table-shell` 내부에서 스크롤한다.

```bash
npm ci
npm run docs:check
npm run docs:build
npm run docs:verify
```
