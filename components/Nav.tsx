"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#intro", label: "소개" },
  { href: "#timeline", label: "개월별 발달" },
  { href: "#reflexes", label: "원시 반사" },
  { href: "#faq", label: "자주 묻는 질문" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-cream/90 backdrop-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-bold text-gray-800">
          <span className="text-2xl">🐣</span>
          <span className="hidden sm:inline">아기 발달 가이드</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-white hover:text-gray-900"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="메뉴 열기"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-gray-700 md:hidden"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </div>
        </button>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-gray-100 bg-cream px-5 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-white"
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
