import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";
import ServiceWorker from "@/components/ServiceWorker";
import { ui } from "@/lib/i18n";
import {
  siteUrl,
  siteName,
  siteTagline,
  siteDescription,
  themeColor,
} from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | ${siteTagline}`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "아기 발달",
    "운동 발달",
    "발달 이정표",
    "원시 반사",
    "개월별 발달",
    "영아 발달",
    "터미타임",
    "교정 연령",
    "영유아 건강검진",
  ],
  authors: [{ name: siteName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: `${siteName} | ${siteTagline}`,
    description:
      "개월별 아기의 정상 운동 발달 과정과 반사를 한눈에. 부모를 위한 쉬운 안내.",
    locale: "ko_KR",
    alternateLocale: ["en_US", "vi_VN"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | ${siteTagline}`,
    description:
      "개월별 아기의 정상 운동 발달 과정과 반사를 한눈에. 부모를 위한 쉬운 안내.",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "아기 발달",
  },
  formatDetection: { telephone: false },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: themeColor },
    { media: "(prefers-color-scheme: dark)", color: "#0f1117" },
  ],
  width: "device-width",
  initialScale: 1,
};

// 검색엔진·SNS용 구조화 데이터 (사이트 정보 + FAQ).
// FAQ는 화면과 같은 출처(lib/i18n.ts)의 한국어 텍스트를 사용한다.
function structuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        inLanguage: ["ko", "en", "vi"],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: ui.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q.ko,
          acceptedAnswer: { "@type": "Answer", text: item.a.ko },
        })),
      },
    ],
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark');}var l=localStorage.getItem('lang');if(l==='en'||l==='ko'||l==='vi'){document.documentElement.lang=l;}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData()),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <ServiceWorker />
      </body>
    </html>
  );
}
