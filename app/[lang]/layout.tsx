import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { Providers } from "@/components/Providers";
import ServiceWorker from "@/components/ServiceWorker";
import { ui, t } from "@/lib/i18n";
import type { Lang } from "@/lib/data";
import { siteUrl, themeColor } from "@/lib/site";

const LANGS: Lang[] = ["ko", "en", "vi"];
const OG_LOCALE: Record<Lang, string> = {
  ko: "ko_KR",
  en: "en_US",
  vi: "vi_VN",
};

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  if (!LANGS.includes(raw as Lang)) return {};
  const lang = raw as Lang;
  const title = t(ui.meta.title, lang);
  const tagline = t(ui.meta.tagline, lang);
  const description = t(ui.meta.description, lang);
  const languages = {
    ko: "/ko",
    en: "/en",
    vi: "/vi",
    "x-default": "/ko",
  };

  return {
    metadataBase: new URL(siteUrl),
    title: { default: `${title} | ${tagline}`, template: `%s | ${title}` },
    description,
    applicationName: title,
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
    authors: [{ name: title }],
    alternates: { canonical: `/${lang}`, languages },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: title,
      title: `${title} | ${tagline}`,
      description,
      locale: OG_LOCALE[lang],
      alternateLocale: LANGS.filter((l) => l !== lang).map(
        (l) => OG_LOCALE[l],
      ),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${tagline}`,
      description,
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "아기 발달",
    },
    formatDetection: { telephone: false },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: themeColor },
    { media: "(prefers-color-scheme: dark)", color: "#0f1117" },
  ],
  width: "device-width",
  initialScale: 1,
};

// 검색엔진·SNS용 구조화 데이터 (사이트 정보 + 언어별 FAQ)
function structuredData(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/${lang}#website`,
        url: `${siteUrl}/${lang}`,
        name: t(ui.meta.title, lang),
        description: t(ui.meta.description, lang),
        inLanguage: lang,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/${lang}#faq`,
        mainEntity: ui.faq.items.map((item) => ({
          "@type": "Question",
          name: t(item.q, lang),
          acceptedAnswer: { "@type": "Answer", text: t(item.a, lang) },
        })),
      },
    ],
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  if (!LANGS.includes(raw as Lang)) notFound();
  const lang = raw as Lang;

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        {/* 자체 호스팅 Pretendard (동적 서브셋 — 필요한 글리프 조각만 내려받음).
            unicode-range 서브셋 CSS는 번들러를 거치면 92개 폰트가 전부 프리캐시에
            잡히므로 public에서 직접 링크한다. */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link
          rel="stylesheet"
          href="/fonts/pretendard/pretendardvariable-dynamic-subset.css"
        />
        {/* Pretendard에는 베트남어 성조 글리프(U+1Exx)가 없어 vi용 폰트를 함께 제공 */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link
          rel="stylesheet"
          href="/fonts/be-vietnam-pro/be-vietnam-pro.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData(lang)),
          }}
        />
      </head>
      <body className={lang === "vi" ? "font-vi" : undefined}>
        <Providers initialLang={lang}>{children}</Providers>
        <ServiceWorker />
      </body>
    </html>
  );
}
