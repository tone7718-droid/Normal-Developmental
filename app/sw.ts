// 서비스 워커 소스. 빌드 시 @serwist/turbopack 라우트가 esbuild로 번들하고
// self.__SW_MANIFEST 자리에 빌드 산출물 프리캐시 목록을 주입한다.
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist } from "serwist";
import { defaultCache } from "@serwist/turbopack/worker";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
  fallbacks: {
    // 오프라인에서 캐시에 없는 페이지 요청은 프리캐시된 한국어 홈으로 폴백
    entries: [
      {
        url: "/ko",
        matcher({ request }) {
          return request.destination === "document";
        },
      },
    ],
  },
});

serwist.addEventListeners();
