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
    const register = () =>
      navigator.serviceWorker
        .register("/serwist/sw.js", { scope: "/" })
        .catch(() => {});
    // 하이드레이션이 load 이벤트 이후에 끝나면 리스너가 불리지 않으므로
    // 이미 로드가 끝난 상태면 즉시 등록한다.
    if (document.readyState === "complete") {
      register();
      return;
    }
    window.addEventListener("load", register);
    return () => window.removeEventListener("load", register);
  }, []);

  return null;
}
