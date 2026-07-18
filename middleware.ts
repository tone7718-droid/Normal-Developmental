import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["ko", "en", "vi"] as const;
type Locale = (typeof LOCALES)[number];

function isLocale(v: string): v is Locale {
  return (LOCALES as readonly string[]).includes(v);
}

/** Accept-Language 헤더에서 지원 언어 중 가장 선호되는 것을 고른다 */
function fromAcceptLanguage(header: string): Locale | null {
  const entries = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params
        .map((p) => p.trim().match(/^q=([\d.]+)$/)?.[1])
        .find(Boolean);
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const { tag } of entries) {
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }
  return null;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const seg = pathname.split("/")[1];

  // 이미 로케일 경로면 통과하면서 선호 언어 쿠키만 갱신
  if (isLocale(seg)) {
    const res = NextResponse.next();
    if (req.cookies.get("lang")?.value !== seg) {
      res.cookies.set("lang", seg, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    }
    return res;
  }

  // "/" 등 로케일 없는 경로 → 쿠키 → Accept-Language → ko 순으로 결정해 리다이렉트
  const cookie = req.cookies.get("lang")?.value ?? "";
  const preferred: Locale = isLocale(cookie)
    ? cookie
    : fromAcceptLanguage(req.headers.get("accept-language") ?? "") ?? "ko";

  const url = req.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // 정적 파일(점 포함)·_next·serwist 제외
  matcher: ["/((?!_next|serwist|.*\\..*).*)"],
};
