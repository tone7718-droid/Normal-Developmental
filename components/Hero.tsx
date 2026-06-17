"use client";

import { useApp } from "./Providers";
import { ui, t } from "@/lib/i18n";

export default function Hero() {
  const { lang } = useApp();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* 배경 장식 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-rose-100 opacity-60 blur-3xl dark:bg-rose-500/10" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-sky-100 opacity-60 blur-3xl dark:bg-sky-500/10" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-100 opacity-50 blur-3xl dark:bg-amber-500/10" />
      </div>

      <div className="mx-auto max-w-3xl px-5 text-center">
        <span className="inline-flex animate-fade-up items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-600 shadow-sm ring-1 ring-gray-100 dark:bg-white/5 dark:text-gray-300 dark:ring-white/10">
          {t(ui.hero.badge, lang)}
        </span>

        <h1 className="mt-6 animate-fade-up text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          {t(ui.hero.title1, lang)}
          <br />
          <span className="bg-gradient-to-r from-rose-500 via-amber-500 to-sky-500 bg-clip-text text-transparent">
            {t(ui.hero.title2, lang)}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
          {t(ui.hero.desc, lang)}
        </p>

        <div className="mt-9 flex animate-fade-up flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#timeline"
            className="w-full rounded-full bg-gray-900 px-7 py-3.5 text-center font-semibold text-white shadow-lg transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 sm:w-auto"
          >
            {t(ui.hero.ctaPrimary, lang)}
          </a>
          <a
            href="#reflexes"
            className="w-full rounded-full bg-white px-7 py-3.5 text-center font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50 dark:bg-white/5 dark:text-gray-200 dark:ring-white/10 dark:hover:bg-white/10 sm:w-auto"
          >
            {t(ui.hero.ctaSecondary, lang)}
          </a>
        </div>

        <p className="mt-8 animate-fade-up text-xs text-gray-400 dark:text-gray-500">
          {t(ui.hero.note, lang)}
        </p>
      </div>
    </section>
  );
}
