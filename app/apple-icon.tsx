import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS 홈 화면 아이콘 (둥근 모서리는 iOS가 자동 적용하므로 꽉 채운다)
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 120,
          background: "linear-gradient(160deg, #fff3e8 0%, #ffe2ec 100%)",
        }}
      >
        🐣
      </div>
    ),
    { ...size },
  );
}
