"use client";

import { useState } from "react";

const faqs = [
  {
    q: "발달이 또래보다 느린 것 같아요. 괜찮을까요?",
    a: "아기마다 발달 속도는 다릅니다. 예를 들어 혼자 걷는 시기는 9개월부터 16개월까지도 모두 정상 범위예요. 한두 가지가 조금 늦더라도 전반적으로 꾸준히 나아가고 있다면 대개 괜찮습니다. 다만 여러 영역이 동시에 늦거나, 하던 동작을 갑자기 못 하게 되면 전문가 상담을 권합니다.",
  },
  {
    q: "이른둥이(미숙아)는 어떻게 봐야 하나요?",
    a: "이른둥이는 '교정 연령'으로 발달을 봅니다. 예정일보다 2개월 일찍 태어났다면, 실제 4개월일 때 교정 연령은 2개월이에요. 보통 만 2세 무렵까지 교정 연령을 기준으로 발달을 평가합니다.",
  },
  {
    q: "터미타임(엎드려 놀기)은 꼭 해야 하나요?",
    a: "네, 권장됩니다. 깨어 있고 보호자가 지켜보는 동안 엎드려 노는 시간은 목·어깨·등 근육을 길러 뒤집기와 앉기의 바탕이 돼요. 신생아기에는 하루 몇 분씩 짧게 시작해 점차 늘려가면 됩니다. (단, 잠은 반드시 등을 대고 똑바로 눕혀 재우세요.)",
  },
  {
    q: "보행기를 쓰면 더 빨리 걷나요?",
    a: "그렇지 않습니다. 많은 전문가 단체가 영아용 보행기를 권장하지 않아요. 걷기를 앞당기지 못할뿐더러 넘어짐·계단 추락 등 안전사고 위험이 있습니다. 붙잡고 설 수 있는 안정적인 가구와 안전한 바닥 공간이 더 도움이 돼요.",
  },
  {
    q: "까치발(발끝)로 걸어요. 문제인가요?",
    a: "걷기를 막 배운 아기가 가끔 까치발을 하는 것은 흔한 일이에요. 보통은 자라면서 자연스럽게 발 전체로 걷게 됩니다. 다만 '항상' 까치발로만 걷거나, 다리가 뻣뻣하게 느껴진다면 한 번 진료받아 보는 것이 좋습니다.",
  },
  {
    q: "이 사이트 정보로 진단해도 되나요?",
    a: "아니요. 이 가이드는 부모의 이해를 돕는 교육용 정보일 뿐, 의학적 진단이나 치료를 대신하지 않습니다. 걱정되는 부분이 있다면 소아청소년과 의사나 영유아 건강검진을 통해 상담하세요.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            자주 묻는 질문
          </h2>
          <p className="mt-4 text-gray-600">
            부모님들이 가장 많이 궁금해하시는 내용을 모았어요.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl bg-white ring-1 ring-gray-100 transition"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-gray-900">{f.q}</span>
                  <span
                    className={`shrink-0 text-xl text-gray-400 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
