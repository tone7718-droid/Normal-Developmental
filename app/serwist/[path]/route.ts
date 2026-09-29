import { createSerwistRoute } from "@serwist/turbopack";

// /serwist/sw.js 로 서비스 워커를 정적 생성해 서빙한다.
// 폰트 서브셋(92개, 3MB)은 프리캐시에서 제외 — 런타임 캐시(defaultCache)가 담당.
export const { dynamic, dynamicParams, revalidate, generateStaticParams, GET } =
  createSerwistRoute({
    swSrc: "app/sw.ts",
    useNativeEsbuild: true,
    globIgnores: ["public/fonts/**/*"],
    // 정적 자산 글롭에는 페이지 HTML이 없으므로 홈 문서를 직접 프리캐시해
    // 오프라인 내비게이션 폴백("/ko")이 동작하게 한다. revision은 빌드마다 갱신.
    additionalPrecacheEntries: ["/ko", "/en", "/vi"].map((url) => ({ url, revision: Date.now().toString() })),
  });
