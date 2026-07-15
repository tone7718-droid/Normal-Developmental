const { withSerwist } = require("@serwist/turbopack");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // /serwist/sw.js가 사이트 전체("/") 스코프를 제어할 수 있도록 허용
        source: "/serwist/:path*",
        headers: [{ key: "Service-Worker-Allowed", value: "/" }],
      },
    ];
  },
};

module.exports = withSerwist(nextConfig);
