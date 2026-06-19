// 사이트 전역 메타 정보 (SEO · PWA · OG 이미지에서 공통 사용)

// 배포 URL: 환경 변수로 덮어쓸 수 있고, Vercel 프로덕션 도메인을 자동 감지한다.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://normal-developmental.vercel.app")
).replace(/\/$/, "");

export const siteName = "아기 운동 발달 가이드";
export const siteTagline = "우리 아기, 지금 어디쯤일까요?";
export const siteDescription =
  "신생아부터 두 돌까지, 개월별 아기의 정상 운동 발달 과정과 원시 반사를 부모가 쉽게 이해할 수 있도록 정리한 가이드입니다.";

// 테마 색 (globals.css의 cream 배경과 rose 포인트 색에 맞춤)
export const themeColor = "#fdfaf5";
export const accentColor = "#f43f5e";
