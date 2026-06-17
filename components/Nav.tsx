"use client";

import { useEffect, useState } from "react";
import { useApp } from "./Providers";
import { ui, t } from "@/lib/i18n";

export default function Nav() {
  const { lang, toggleLang, theme, toggleTheme, mounted } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#intro", label: t(ui.nav.intro, lang) },
    { href: "#timeline", label: t(ui.nav.timeline, lang) },
    { href: "#reflexes", label: t(ui.nav.reflexes, lang) },
    { href: "#checkup", label: t(ui.nav.checkup, lang) },
    { href: "#faq", label: t(ui.nav.faq, lang) },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-cream/90 shadow-sm backdrop-blur dark:bg-[#0f1117]/90 dark:shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a
          href="#top"
          className="flex items-center gap-2 font-bold text-gray-800 dark:text-gray-100"
        >
          <span className="text-2xl">🐣</span>
          <span className="hidden sm:inline">{t(ui.nav.brand, lang)}</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-gray-600 transition hover:bg-white hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* 언어 / 테마 토글 */}
          <button
            onClick={toggleLang}
            aria-label="언어 전환 / Switch language"
            className="ml-1 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-bold text-gray-600 transition hover:bg-white dark:border-white/15 dark:text-gray-200 dark:hover:bg-white/10"
          >
            {lang === "ko" ? "EN" : "한국어"}
          </button>
          <button
            onClick={toggleTheme}
            aria-label="다크 모드 전환 / Toggle dark mode"
            className="rounded-full border border-gray-200 p-2 text-base transition hover:bg-white dark:border-white/15 dark:hover:bg-white/10"
          >
            {mounted ? (theme === "dark" ? "🌙" : "☀️") : "☀️"}
          </button>

          <button
            aria-label="메뉴 열기"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-gray-700 dark:text-gray-200 md:hidden"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-gray-100 bg-cream px-5 py-3 dark:border-white/10 dark:bg-[#0f1117] md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-white dark:text-gray-200 dark:hover:bg-white/10"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
