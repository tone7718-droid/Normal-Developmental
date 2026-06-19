import { ImageResponse } from "next/og";
import { siteName, siteTagline } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteName;

// 카카오톡·SNS 공유 시 보이는 썸네일.
// Satori 기본 폰트는 한글을 지원하지 않으므로 필요한 글자만 담은 한글 폰트를
// Google Fonts에서 받아 사용한다. 실패해도 라우트가 죽지 않도록 try/catch로 감싼다.
async function loadKoreanFont(text: string): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@800&text=${encodeURIComponent(
      text,
    )}`;
    const css = await (await fetch(url)).text();
    const src = css.match(
      /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
    );
    if (!src) return null;
    const res = await fetch(src[1]);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OgImage() {
  const fontText = siteName + siteTagline + "신생아부터 두 돌까지";
  const font = await loadKoreanFont(fontText);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(150deg, #fff7ef 0%, #ffe7ef 55%, #ffe0ec 100%)",
          fontFamily: font ? "Noto Sans KR" : "sans-serif",
          padding: "0 80px",
        }}
      >
        <div style={{ fontSize: 150, marginBottom: 8 }}>🐣</div>
        <div
          style={{
            fontSize: 78,
            fontWeight: 800,
            color: "#1f2937",
            letterSpacing: -2,
          }}
        >
          {siteName}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 40,
            color: "#e11d63",
            fontWeight: 800,
          }}
        >
          {siteTagline}
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 30,
            color: "#6b7280",
            fontWeight: 800,
          }}
        >
          신생아부터 두 돌까지
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font
        ? [{ name: "Noto Sans KR", data: font, weight: 800, style: "normal" }]
        : [],
    },
  );
}
