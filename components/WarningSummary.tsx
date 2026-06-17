"use client";

import { stages, stageThemes, pick } from "@/lib/data";
import { useApp } from "./Providers";
import { ui, t } from "@/lib/i18n";

export default function WarningSummary() {
  const { lang } = useApp();

  return (
    <section
      id="warnings"
      className="scroll-mt-20 bg-gradient-to-b from-white to-orange-50/40 py-16 dark:from-[#141821] dark:to-[#0f1117] sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-5">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-700 dark:bg-orange-900/40 dark:text-orange-200">
            {t(ui.warnings.badge, lang)}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t(ui.warnings.title, lang)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            {t(ui.warnings.desc, lang)}
          </p>
        </div>

        {/* 어느 시기든 공통 강조 */}
        <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-orange-200 bg-orange-100/60 p-5 dark:border-orange-500/30 dark:bg-orange-950/30">
          <span className="text-xl">⚠️</span>
          <p className="text-sm font-semibold leading-relaxed text-orange-800 dark:text-orange-200">
            {t(ui.warnings.emphasis, lang)}
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((s) => {
            const theme = stageThemes[s.theme];
            return (
              <div
                key={s.id}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 dark:bg-[#141821] dark:ring-white/10"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{s.emoji}</span>
                  <h3 className={`text-sm font-extrabold ${theme.text}`}>
                    {pick(s.ageRange, lang)}
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {pick(s.watchOut, lang).map((w, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <span className="mt-1 text-orange-400">•</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
