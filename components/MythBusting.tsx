"use client";

import { useApp } from "./Providers";
import { ui, t } from "@/lib/i18n";

export default function MythBusting() {
  const { lang } = useApp();

  return (
    <section
      id="myths"
      className="scroll-mt-20 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-5">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200">
            {t(ui.mythBusting.badge, lang)}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t(ui.mythBusting.title, lang)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            {t(ui.mythBusting.desc, lang)}
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {ui.mythBusting.items.map((item, i) => (
            <div
              key={i}
              className="grid gap-px overflow-hidden rounded-3xl bg-gray-100 shadow-sm ring-1 ring-gray-100 dark:bg-white/10 dark:ring-white/10 md:grid-cols-2"
            >
              {/* 오해 */}
              <div className="bg-rose-50/70 p-6 dark:bg-rose-950/20">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-200 text-sm text-rose-700 dark:bg-rose-900/60 dark:text-rose-200">
                    ✕
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide text-rose-500 dark:text-rose-300">
                    {t(ui.mythBusting.mythLabel, lang)}
                  </span>
                </div>
                <p className="mt-2 font-semibold leading-relaxed text-gray-800 dark:text-gray-100">
                  “{t(item.myth, lang)}”
                </p>
              </div>
              {/* 사실 */}
              <div className="bg-white p-6 dark:bg-[#141821]">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-sm text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-200">
                    ✓
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">
                    {t(ui.mythBusting.factLabel, lang)}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                  {t(item.fact, lang)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
