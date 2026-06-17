import type { ReactElement } from "react";

// 발달 시기별 아기 자세 일러스트 (픽토그램 스타일).
// 색은 currentColor를 사용하므로 부모 요소의 text-{theme} 색과 다크모드에 자동으로 맞춰집니다.

const stroke = {
  stroke: "currentColor",
  strokeWidth: 7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

const shapes: Record<string, ReactElement> = {
  // 0–1개월: 등 대고 눕기
  "0-1": (
    <g>
      <path {...stroke} d="M40 60 H88" />
      <path {...stroke} d="M58 60 L55 46" />
      <path {...stroke} d="M72 60 L75 47" />
      <path {...stroke} d="M84 60 L92 50" />
      <circle cx="30" cy="60" r="12" fill="currentColor" />
    </g>
  ),
  // 2개월: 엎드려 고개 들기
  "2": (
    <g>
      <path {...stroke} d="M40 54 Q64 70 96 70" />
      <path {...stroke} d="M50 60 L48 72" />
      <circle cx="32" cy="46" r="12" fill="currentColor" />
    </g>
  ),
  // 3–4개월: 팔로 상체 받치기
  "3-4": (
    <g>
      <path {...stroke} d="M42 50 Q70 66 98 68" />
      <path {...stroke} d="M50 54 L48 70 H60" />
      <circle cx="34" cy="42" r="12" fill="currentColor" />
    </g>
  ),
  // 5–6개월: 뒤집기
  "5-6": (
    <g>
      <path {...stroke} d="M48 46 Q40 64 58 72 Q80 76 78 58" />
      <path {...stroke} d="M58 72 L70 78" />
      <circle cx="44" cy="40" r="12" fill="currentColor" />
    </g>
  ),
  // 7–8개월: 혼자 앉기
  "7-8": (
    <g>
      <path {...stroke} d="M60 48 V66" />
      <path {...stroke} d="M60 68 Q44 70 40 76" />
      <path {...stroke} d="M60 68 Q76 70 82 76" />
      <path {...stroke} d="M60 54 L46 60" />
      <circle cx="60" cy="34" r="12" fill="currentColor" />
    </g>
  ),
  // 9–10개월: 기기
  "9-10": (
    <g>
      <path {...stroke} d="M44 52 Q62 40 82 54" />
      <path {...stroke} d="M48 54 L46 76" />
      <path {...stroke} d="M80 56 L86 76" />
      <path {...stroke} d="M62 47 L60 70" />
      <circle cx="34" cy="50" r="11" fill="currentColor" />
    </g>
  ),
  // 11–12개월: 혼자 서기
  "11-12": (
    <g>
      <path {...stroke} d="M60 40 V66" />
      <path {...stroke} d="M60 66 L52 80" />
      <path {...stroke} d="M60 66 L68 80" />
      <path {...stroke} d="M60 46 L46 58" />
      <path {...stroke} d="M60 46 L74 58" />
      <circle cx="60" cy="28" r="12" fill="currentColor" />
    </g>
  ),
  // 13–18개월: 걷기
  "13-18": (
    <g>
      <path {...stroke} d="M58 40 L60 64" />
      <path {...stroke} d="M60 64 L48 80" />
      <path {...stroke} d="M60 64 L74 78" />
      <path {...stroke} d="M58 46 L46 56" />
      <path {...stroke} d="M58 46 L72 52" />
      <circle cx="58" cy="28" r="12" fill="currentColor" />
    </g>
  ),
  // 19–24개월: 뛰기
  "19-24": (
    <g>
      <path {...stroke} d="M62 42 L54 64" />
      <path {...stroke} d="M54 64 L40 78" />
      <path {...stroke} d="M54 64 L76 74" />
      <path {...stroke} d="M58 48 L74 44" />
      <path {...stroke} d="M58 50 L44 60" />
      <circle cx="66" cy="30" r="12" fill="currentColor" />
    </g>
  ),
};

export default function BabyIllustration({
  stageId,
  className,
}: {
  stageId: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 90"
      className={className}
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 바닥 */}
      <ellipse cx="62" cy="82" rx="46" ry="5" fill="currentColor" opacity="0.12" />
      {shapes[stageId] ?? shapes["0-1"]}
    </svg>
  );
}
