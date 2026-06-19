"use client";

import { useApp } from "./Providers";
import { ui, t } from "@/lib/i18n";

export default function FacilitationPrinciples() {
  const { lang } = useApp();

  return (
    <section className="scroll-mt-20 bg-white py-16 dark:bg-[#141821] sm:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
            {t(ui.facilitation.badge, lang)}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t(ui.facilitation.title, lang)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            {t(ui.facilitation.desc, lang)}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {ui.facilitation.points.map((p, i) => (
            <div
              key={i}
              className="rounded-3xl bg-cream p-6 ring-1 ring-gray-100 dark:bg-white/5 dark:ring-white/10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-2xl dark:bg-emerald-950/40">
                  {p.emoji}
                </span>
                <h3 className="font-extrabold text-gray-900 dark:text-white">
                  {t(p.title, lang)}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {t(p.text, lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
