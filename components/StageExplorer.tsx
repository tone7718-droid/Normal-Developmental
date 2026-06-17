"use client";

import { useState } from "react";
import { stages, stageThemes, reflexById } from "@/lib/data";

export default function StageExplorer() {
  const [activeId, setActiveId] = useState(stages[0].id);
  const active = stages.find((s) => s.id === activeId)!;
  const theme = stageThemes[active.theme];

  return (
    <section id="timeline" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          개월별 운동 발달
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          궁금한 시기를 눌러보세요. 그 시기 아기가 보이는 대근육·소근육 발달과
          활발한 반사, 부모를 위한 팁을 한눈에 정리했어요.
        </p>
      </div>

      {/* 연령 선택 타임라인 */}
      <div className="mt-10">
        <div className="flex gap-2 overflow-x-auto pb-3 sm:flex-wrap sm:justify-center">
          {stages.map((s) => {
            const t = stageThemes[s.theme];
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? `${t.bg} text-white shadow-md`
                    : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50"
                }`}
              >
                <span className="text-base">{s.emoji}</span>
                {s.ageRange}
              </button>
            );
          })}
        </div>
      </div>

      {/* 상세 패널 */}
      <div
        key={active.id}
        className="mt-8 animate-fade-up overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-100"
      >
        {/* 헤더 */}
        <div className={`${theme.soft} px-6 py-7 sm:px-10`}>
          <div className="flex items-center gap-4">
            <div
              className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${theme.bg} text-3xl shadow-lg`}
            >
              {active.emoji}
            </div>
            <div>
              <div className={`text-sm font-bold ${theme.text}`}>
                {active.shortAge}
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900">
                {active.ageRange}
              </h3>
            </div>
          </div>
          <p className="mt-4 text-gray-700">{active.summary}</p>
        </div>

        {/* 본문 */}
        <div className="grid gap-px bg-gray-100 sm:grid-cols-2">
          <DetailBlock
            title="대근육 운동"
            subtitle="몸 전체를 쓰는 큰 움직임"
            icon="💪"
            items={active.grossMotor}
            dotClass={theme.dot}
          />
          <DetailBlock
            title="소근육 운동"
            subtitle="손과 손가락의 정교한 움직임"
            icon="🖐️"
            items={active.fineMotor}
            dotClass={theme.dot}
          />
        </div>

        {/* 반사 + 팁 + 주의신호 */}
        <div className="space-y-6 px-6 py-7 sm:px-10">
          {active.reflexes.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-gray-500">
                이 시기에 활발한 반사
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.reflexes.map((rid) => {
                  const r = reflexById(rid);
                  if (!r) return null;
                  return (
                    <a
                      key={rid}
                      href="#reflexes"
                      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition hover:scale-105 ${theme.chip}`}
                    >
                      <span>{r.emoji}</span>
                      {r.name}
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          <div className={`rounded-2xl ${theme.soft} p-5`}>
            <div className="flex items-start gap-3">
              <span className="text-xl">💡</span>
              <div>
                <h4 className={`text-sm font-bold ${theme.text}`}>
                  부모님을 위한 팁
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-gray-700">
                  {active.parentTip}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-orange-50/60 p-5">
            <div className="flex items-start gap-3">
              <span className="text-xl">🩺</span>
              <div>
                <h4 className="text-sm font-bold text-orange-700">
                  이럴 땐 전문가와 상담해 보세요
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {active.watchOut.map((w, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="mt-1 text-orange-400">•</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailBlock({
  title,
  subtitle,
  icon,
  items,
  dotClass,
}: {
  title: string;
  subtitle: string;
  icon: string;
  items: string[];
  dotClass: string;
}) {
  return (
    <div className="bg-white px-6 py-7 sm:px-10">
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <div>
          <h4 className="font-bold text-gray-900">{title}</h4>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
            <span
              className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dotClass}`}
            />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
