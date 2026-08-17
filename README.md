# ZZAPCHO SERVER WIKI

`https://wiki.zzapcho.kr`에 배포되는 **Minecraft Java 26.2 + Fabric Vanilla+ 서버 플레이어 위키**입니다.

이 문서는 2026-08-17 제공 `서버모드.zip`, `클라모드.zip`, `_config.zip`의 실제 JAR/데이터팩/현재 서버 설정을 기준으로 검수했습니다. 숫자, 조합법, 구조물 배치값, 키와 플레이 설정은 가능한 한 **현재 config → 설치 파일 데이터 → 공식 소스** 순서로 확인합니다.

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

## 현재 설정에서 중요한 값

- FallingTree는 **Chopper 계열 인챈트 필수** (`requireEnchantment=true`)
- Universal Graves live config는 **XP 80%**, 타인 보호 타이머 `-1`, **14일 자동 만료 후 아이템 드롭**
- Simple Voice Chat은 **UDP 24454**, 일반 거리 48블록, 속삭임 24블록
- Terralith `recipe_changes=false`

Universal Graves처럼 live config가 설치 JAR constructor 기본값과 다른 경우에는 **실제 서버 config를 우선**합니다.

## 문서 원칙

1. 실제 서버 runtime/configuration
2. 제공된 설치 JAR·데이터팩의 데이터와 기본값
3. 설치 버전의 공식 소스/문서
4. 이 위키의 기존 설명

확인하지 못한 값을 추측해서 채우지 않습니다.

## 개발 및 배포 확인

```bash
npm ci
npm run docs:check
npm run docs:build
npm run docs:verify
```

VitePress는 `2.0.0-alpha.19`에 고정되어 있으며 위 검증을 모두 통과한 뒤 GitHub Pages로 배포합니다.
