# 🐣 아기 운동 발달 가이드 (Normal-Developmental)

신생아부터 두 돌까지, **아기의 정상 운동 발달 과정**과 **원시 반사**를 일반인 부모도 쉽고 직관적으로 이해할 수 있도록 설명하는 웹사이트입니다.

## ✨ 주요 내용

- **발달의 큰 그림** — 머리에서 발끝으로, 중심에서 바깥으로 이어지는 발달의 방향을 한눈에
- **개월별 운동 발달** — 9개 시기(0개월~24개월)별 대근육·소근육 발달, 부모 팁, 주의 신호를 인터랙티브하게 탐색
- **원시 반사 7종** — 모로·찾기·빨기·쥐기·걷기·ATNR·바빈스키 반사가 언제 나타나고 사라지는지, 왜 중요한지 설명
- **자주 묻는 질문** — 발달 속도, 이른둥이 교정 연령, 터미타임, 보행기, 까치발 등 부모들이 가장 궁금해하는 내용

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
  layout.tsx          # 전역 레이아웃 · 메타데이터 · 폰트
  page.tsx            # 메인 페이지 (섹션 조합)
  globals.css         # 전역 스타일
components/
  Nav.tsx             # 상단 네비게이션
  Hero.tsx            # 첫 화면
  Overview.tsx        # 발달의 방향 소개
  StageExplorer.tsx   # 개월별 발달 인터랙티브 탐색
  ReflexSection.tsx   # 원시 반사 카드
  Faq.tsx             # 자주 묻는 질문
  Footer.tsx          # 안내 문구 · 면책
lib/
  data.ts             # 발달 단계 · 반사 데이터 (콘텐츠)
```

콘텐츠를 수정하려면 대부분 **`lib/data.ts`** 한 곳만 고치면 됩니다.
