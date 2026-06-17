"use client";

import { useApp } from "./Providers";
import { ui, t } from "@/lib/i18n";

const phaseColors = [
  "bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-300",
  "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-300",
  "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300",
  "bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-300",
];

export default function Overview() {
  const { lang } = useApp();

  return (
    <section
      id="intro"
      className="scroll-mt-20 bg-white py-16 dark:bg-[#141821] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t(ui.overview.title, lang)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            {t(ui.overview.desc, lang)}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ui.overview.phases.map((p, i) => (
            <div key={i} className="relative">
              <div className="h-full rounded-3xl bg-cream p-6 text-center ring-1 ring-gray-100 dark:bg-white/5 dark:ring-white/10">
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${phaseColors[i]}`}
                >
                  {p.emoji}
                </div>
                <h3 className="mt-4 font-extrabold text-gray-900 dark:text-white">
                  {t(p.title, lang)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {t(p.desc, lang)}
                </p>
              </div>
              {i < ui.overview.phases.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-gray-300 dark:text-gray-600 lg:block">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
