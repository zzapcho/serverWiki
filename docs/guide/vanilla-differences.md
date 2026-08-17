<span class="page-kicker">QUICK DIFF</span>

# 바닐라와 달라진 점

## 플레이에 직접 영향을 주는 변경

| 바닐라에서 | 이 서버에서는 |
| --- | --- |
| 반블록은 수평 배치 중심 | **세로 반블록**을 제작·배치 가능 |
| 광물 종류가 바닐라 재료 중심 | 주석·미스릴·아다만티움·오닉스와 장비 추가 |
| 나무를 한 블록씩 벰 | FallingTree가 나무 전체를 감지해 즉시 처리 |
| 흉갑과 겉날개 중 하나 선택 | 겉날개 전용 슬롯으로 **동시 장착** 가능 |
| 기본 지형/바이옴 | Terralith 95개 커스텀 바이옴 + Tectonic 대규모 지형 |
| 구조물 종류 제한 | Dungeons & Taverns의 던전·선술집·요새·마을 계열 추가 |
| 엔드 구조물 제한 | MES의 25개 structure set 추가 |
| 죽으면 아이템 바닥 드롭 | Universal Graves가 무덤에 아이템/XP 저장 |
| 텍스트 채팅 중심 | Simple Voice Chat 근접 음성 + Discord 채팅 브리지 |

## 그대로인 것 또는 오해하기 쉬운 것

- Terralith는 **기본값에서 recipe changes가 꺼져 있어** 바닐라 레드스톤 레시피를 임의로 바꾸지 않습니다.
- FallingTree Enchantments 데이터팩은 설치되어 있지만 **기본 `requireEnchantment=false`**라 Chopper가 없다고 벌목이 막히는 설정은 아닙니다.
- Universal Graves 기본값은 **30분 자동 소멸이 아닙니다.** `breakingTime=-1`이라 자동 만료가 꺼져 있습니다.
- Dungeons & Taverns/MES 구조물의 `spacing`은 “그 거리마다 무조건 생성”이라는 뜻이 아닙니다. 바이옴·제외구역·frequency 조건이 추가로 적용됩니다.
- 서버에 성능/관리 모드가 많아도 일반 플레이어가 별도 명령을 배워야 하는 것은 아닙니다.

## 다음으로 보기

- [클라이언트 모드](/guide/client)
- [조합법 빠른 찾기](/recipes/)
- [문제 해결](/troubleshooting/)
