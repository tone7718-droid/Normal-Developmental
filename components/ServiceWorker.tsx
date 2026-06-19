"use client";

import { useEffect } from "react";

// 서비스 워커 등록 (오프라인 지원). 프로덕션에서만 동작시켜
// 개발 중 캐시로 인한 혼란을 막는다.
export default function ServiceWorker() {
  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" ||
      !("serviceWorker" in navigator)
    )
      return;
    const onLoad = () =>
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return null;
}
