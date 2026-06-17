"use client";

import { useApp } from "./Providers";
import { ui, t, sources } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useApp();

  return (
    <footer className="border-t border-gray-100 bg-white dark:border-white/10 dark:bg-[#141821]">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="rounded-2xl bg-amber-50 p-6 text-center dark:bg-amber-950/20">
          <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">
            {t(ui.footer.remember, lang)}
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-amber-700 dark:text-amber-200/80">
            {t(ui.footer.disclaimer, lang)}
          </p>
        </div>

        {/* 참고 자료 */}
        <div className="mt-8 rounded-2xl bg-cream p-6 dark:bg-white/5">
          <p className="text-sm font-bold text-gray-700 dark:text-gray-200">
            📚 {t(ui.footer.sourcesTitle, lang)}
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 underline-offset-2 transition hover:text-rose-500 hover:underline dark:text-gray-400 dark:hover:text-rose-300"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-2 font-bold text-gray-800 dark:text-gray-100">
            <span className="text-2xl">🐣</span>
            {t(ui.footer.brand, lang)}
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            {t(ui.footer.tagline, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
}
