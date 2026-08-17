# ZZAPCHO SERVER WIKI

`https://wiki.zzapcho.kr`에 배포되는 **Minecraft Java 26.2 + Fabric Vanilla+ 서버 플레이어 위키**입니다.

이 문서는 2026-08-17에 제공된 `서버모드.zip`과 `클라모드.zip`의 실제 JAR/데이터팩을 기준으로 다시 검수했습니다. 숫자, 조합법, 구조물 배치값, 기본 키처럼 플레이에 직접 영향을 주는 값은 가능한 한 설치된 파일의 데이터와 바이트코드를 우선합니다.

## 현재 플레이 콘텐츠

- Enchanted Vertical Slabs 2.7.0
- SimpleOres Fabric 1.9.10
- FallingTree 25 + FallingTree Enchantments 26.2.0-1 데이터팩
- Elytra Slot 2.0.0
- Terralith 2.6.4 + Tectonic 3.0.26
- Dungeons and Taverns 5.3.0
- Moog's End Structures 2.0.3 + Moog's Structure Lib 3.0.6
- Universal Graves 3.12.0+26.2
- Simple Voice Chat 2.6.22+26.2
- Discord Integration 3.2.0 + 프록시 측 Discord 인증

서버 성능/관리 모드는 플레이어가 알아야 할 부분만 문서에 노출합니다. 전체 설치 목록은 `/mods/`와 `/guide/client`에서 확인할 수 있습니다.

## 문서 원칙

1. 실제 서버/배포 클라이언트 설정
2. 제공된 설치 JAR·데이터팩의 기본값과 데이터
3. 설치 버전의 공식 소스/문서
4. 이 위키의 기존 설명

확인하지 못한 값을 추측해서 채우지 않습니다. 이번 검수에는 `config/` 폴더가 포함되지 않았으므로, 별도 표시가 없는 숫자는 **해당 설치 버전의 JAR 기본값**입니다.

## 개발 및 배포 확인

```bash
npm ci
npm run docs:check
npm run docs:build
npm run docs:verify
```

VitePress는 `2.0.0-alpha.19`에 고정되어 있으며 위 검증을 모두 통과한 뒤 GitHub Pages로 배포합니다.
