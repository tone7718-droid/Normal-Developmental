# 🐣 아기 운동 발달 가이드 (Normal-Developmental)

신생아부터 두 돌까지, **아기의 정상 운동 발달 과정**과 **원시 반사**를 일반인 부모도 쉽고 직관적으로 이해할 수 있도록 설명하는 웹사이트입니다.

🔗 **배포 주소: [normal-developmental.vercel.app](https://normal-developmental.vercel.app)**

## ✨ 주요 내용

- **발달의 큰 그림** — 머리에서 발끝으로, 중심에서 바깥으로 이어지는 발달의 방향을 한눈에
- **단계별 자세 일러스트** — 각 시기 아기 자세를 직접 그린 SVG로 보여줘 글을 읽기 전에 직관적으로 이해 (테마색·다크모드 자동 적응)
- **터미타임 미니 가이드 + 발달 촉진 원칙** — 엎드려 놀기의 시간·안전·요령과, 근거 기반 발달 돕기 4원칙(한 단계 위 과제·적정 난이도·다양한 자세·스스로 할 기회)
- **근거 기반 오해 바로잡기** — 반사 유발 불필요, 보행기·점퍼 주의, 기기 건너뛰기, 걷기 정상범위(9~18개월) 등 흔한 육아 오해를 '오해 vs 사실' 카드로 정리
- **우리 아기 나이 계산기** — 생년월일을 넣으면 현재 개월 수와 해당 발달 시기를 찾아주고, 이른둥이 **교정 연령**까지 지원 (입력값은 기기에만 저장)
- **개월별 운동 발달 + 체크리스트 + 놀이** — 9개 시기(0개월~24개월)별 대근육·소근육 발달, 부모 팁, **발달 촉진 놀이**, 주의 신호. 항목을 체크하면 진행률이 표시되고 브라우저에 저장
- **원시 반사 11종 + 타임라인** — 모로·찾기·빨기·쥐기·걷기·ATNR·바빈스키·발바닥 잡기·갈란트·STNR·긴장성 미로 반사가 언제 나타나고 사라지는지 간트차트로 시각화하고, 각 반사의 의미를 설명
- **영유아 건강검진 연계** — 한국 국가 무료 건강검진 시기를 발달 단계와 함께 안내
- **위험 신호 요약** — 시기별 주의 신호를 한곳에 모아 빠르게 점검
- **자주 묻는 질문** — 발달 속도, 이른둥이 교정 연령, 터미타임, 보행기, 까치발 등 부모들이 가장 궁금해하는 내용
- **한국어 / 영어 / 베트남어(Tiếng Việt) 전환 · 다크 모드** — 우측 상단 언어 메뉴와 테마 토글로 바꿀 수 있고, 선택은 기기에 저장
- **앱처럼 설치 + 오프라인 보기 (PWA)** — 스마트폰 홈 화면에 추가해 앱처럼 쓸 수 있고, 서비스 워커가 화면을 캐시해 인터넷이 불안정해도 다시 볼 수 있어요
- **공유 친화적 메타데이터 (SEO)** — 카카오톡·SNS로 링크를 보내면 깔끔한 미리보기 카드(자동 생성 OG 이미지)가 뜨고, 검색엔진용 구조화 데이터(FAQ)·사이트맵·robots를 제공
- **참고 자료** — WHO·CDC·미국소아과학회(AAP)·국민건강보험공단 출처 링크

> 이 사이트는 부모의 이해를 돕는 **교육용 자료**이며, 의학적 진단·치료를 대신하지 않습니다.
> 아기 발달이 걱정될 때는 소아청소년과 전문의와 상담하세요.

## 🛠 기술 스택

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- TypeScript

## 🚀 로컬 실행

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버 실행 → http://localhost:3000
npm run build    # 프로덕션 빌드
npm start        # 빌드 결과 실행
```

## ▲ Vercel 배포

이 프로젝트는 Vercel에 바로 배포할 수 있도록 구성되어 있습니다.

1. [vercel.com](https://vercel.com)에서 이 GitHub 저장소를 import 합니다.
2. Framework Preset이 **Next.js**로 자동 감지됩니다 (별도 설정 불필요).
3. **Deploy**를 누르면 빌드 후 공개 URL이 발급됩니다.

> 별도의 환경 변수나 데이터베이스가 필요 없는 정적 사이트라 추가 설정 없이 바로 배포됩니다.

## 📁 구조

```
app/
  layout.tsx          # 전역 레이아웃 · 메타데이터 · 구조화 데이터(JSON-LD) · 서비스워커
  page.tsx            # 메인 페이지 (섹션 조합)
  globals.css         # 전역 스타일
  manifest.ts         # PWA 매니페스트
  icon.svg            # 파비콘 · PWA 아이콘 (병아리 SVG)
  apple-icon.tsx      # iOS 홈 화면 아이콘 (PNG 자동 생성)
  opengraph-image.tsx # SNS 공유 썸네일 (PNG 자동 생성)
  twitter-image.tsx   # 트위터 카드 이미지 (OG 재사용)
  sitemap.ts          # 사이트맵
  robots.ts           # robots.txt
components/
  Providers.tsx       # 언어(ko/en/vi) · 다크모드 전역 상태
  Nav.tsx             # 상단 네비게이션 · 언어/테마 토글
  ServiceWorker.tsx   # 서비스 워커 등록 (오프라인 지원)
  Hero.tsx            # 첫 화면
  Overview.tsx        # 발달의 방향 소개
  TummyTime.tsx       # 터미타임 미니 가이드
  FacilitationPrinciples.tsx # 발달 촉진 4원칙
  AgeCalculator.tsx   # 나이 계산기 (교정 연령 지원)
  StageExplorer.tsx   # 개월별 발달 탐색 + 체크리스트
  ReflexSection.tsx   # 원시 반사 카드 + 타임라인
  Checkups.tsx        # 영유아 건강검진 일정
  WarningSummary.tsx  # 위험 신호 요약
  MythBusting.tsx     # 근거 기반 오해 바로잡기
  Faq.tsx             # 자주 묻는 질문
  Footer.tsx          # 안내 문구 · 면책 · 참고 자료
lib/
  data.ts             # 발달 단계 · 반사 · 검진 데이터 (한/영/베)
  i18n.ts             # UI 문자열 · FAQ · 참고 자료 (한/영/베)
  site.ts             # 사이트 전역 메타 정보 (SEO · PWA 공통)
```

콘텐츠를 수정하려면 **`lib/data.ts`**(발달·반사 데이터)와 **`lib/i18n.ts`**(UI 문구)를 고치면 됩니다. 각 텍스트는 `{ ko, en, vi }` 형태라 세 언어를 함께 관리합니다.

> 배포 도메인을 바꾸려면 환경 변수 `NEXT_PUBLIC_SITE_URL`을 설정하세요. 없으면 Vercel 프로덕션 도메인을 자동으로 사용합니다 (OG 이미지·사이트맵·canonical 링크의 절대 URL에 쓰입니다).
