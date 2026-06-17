import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "아기 운동 발달 가이드 | 우리 아기, 지금 어디쯤일까요?",
  description:
    "신생아부터 두 돌까지, 개월별 아기의 정상 운동 발달 과정과 원시 반사를 부모가 쉽게 이해할 수 있도록 정리한 가이드입니다.",
  keywords: [
    "아기 발달",
    "운동 발달",
    "발달 이정표",
    "원시 반사",
    "개월별 발달",
    "영아 발달",
  ],
  openGraph: {
    title: "아기 운동 발달 가이드",
    description:
      "개월별 아기의 정상 운동 발달 과정과 반사를 한눈에. 부모를 위한 쉬운 안내.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fdfaf5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
