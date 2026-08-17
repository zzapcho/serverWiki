# ZZAPCHO SERVER WIKI

`https://wiki.zzapcho.kr`에 배포되는 Minecraft 26.2 Fabric Vanilla+ 서버 플레이 가이드입니다.

## 현재 문서 범위

- Enchanted Vertical Slabs
- SimpleOres
- Homeostatic Seasons
- Terralith + Tectonic
- MES - Moog's End Structures
- Universal Graves
- Simple Voice Chat / Discord 연동

큰 모드팩처럼 시스템을 많이 추가하기보다 **바닐라의 흐름을 유지하면서 필요한 기능만 설명**하는 것을 목표로 합니다. 조합법이 필요한 기능은 해당 모드 페이지에서 바로 설명하고, 전체 세부 레시피는 현재 클라이언트의 JEI를 최종 기준으로 합니다.

## 개발

```bash
npm ci
npm run docs:check
npm run docs:dev
npm run docs:build
npm run docs:verify
```

VitePress는 `2.0.0-alpha.19`에 고정되어 있으며 GitHub Pages 배포 전에 소스 검증, 프로덕션 빌드, 생성 결과 검증을 모두 통과해야 합니다.

## 문서 구조

- `docs/guide/` — 기능 중심 플레이 가이드
- `docs/mods/` — 모드별 사용법, 조합/획득법, 문제 해결
- `docs/recipes/` — 조합법 빠른 찾기와 JEI 안내
- `docs/controls/` — 키와 상호작용
- `docs/community/` — Discord / 보이스챗
- `docs/troubleshooting/` — 증상별 문제 해결
