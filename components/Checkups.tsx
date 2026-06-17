"use client";

import { checkups, pick } from "@/lib/data";
import { useApp } from "./Providers";
import { ui, t } from "@/lib/i18n";

export default function Checkups() {
  const { lang } = useApp();

  return (
    <section
      id="checkup"
      className="scroll-mt-20 bg-white py-16 dark:bg-[#141821] sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-5">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
            🩺 {t(ui.checkup.badge, lang)}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t(ui.checkup.title, lang)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            {t(ui.checkup.desc, lang)}
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl ring-1 ring-gray-100 dark:ring-white/10">
          {/* 헤더 행 */}
          <div className="grid grid-cols-[auto_1fr_2fr] gap-3 bg-emerald-50 px-5 py-3 text-xs font-bold text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200 sm:px-7">
            <div>{t(ui.checkup.periodLabel, lang)}</div>
            <div>{t(ui.checkup.ageColLabel, lang)}</div>
            <div>{t(ui.checkup.focusColLabel, lang)}</div>
          </div>
          {checkups.map((c, i) => (
            <div
              key={i}
              className="grid grid-cols-[auto_1fr_2fr] items-center gap-3 border-t border-gray-100 bg-white px-5 py-4 dark:border-white/10 dark:bg-[#141821] sm:px-7"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                {pick(c.period, lang)}
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                {pick(c.ageLabel, lang)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {pick(c.focus, lang)}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500">
          {t(ui.checkup.note, lang)}
        </p>
      </div>
    </section>
  );
}
