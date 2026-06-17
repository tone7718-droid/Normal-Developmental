"use client";

import { useApp } from "./Providers";
import { ui, t } from "@/lib/i18n";

export default function TummyTime() {
  const { lang } = useApp();

  return (
    <section
      id="tummy"
      className="scroll-mt-20 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-5">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-200">
            {t(ui.tummyTime.badge, lang)}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t(ui.tummyTime.title, lang)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            {t(ui.tummyTime.desc, lang)}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {ui.tummyTime.points.map((p, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-[#141821] dark:ring-white/10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-2xl dark:bg-amber-950/40">
                {p.emoji}
              </span>
              <div>
                <h3 className="font-extrabold text-gray-900 dark:text-white">
                  {t(p.title, lang)}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {t(p.text, lang)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-rose-100 bg-rose-50/60 p-5 dark:border-rose-500/20 dark:bg-rose-950/20">
          <span className="text-xl">🛏️</span>
          <p className="text-sm font-medium leading-relaxed text-rose-700 dark:text-rose-200">
            {t(ui.tummyTime.note, lang)}
          </p>
        </div>
      </div>
    </section>
  );
}
