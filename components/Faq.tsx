"use client";

import { useState } from "react";
import { useApp } from "./Providers";
import { ui, t } from "@/lib/i18n";

export default function Faq() {
  const { lang } = useApp();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t(ui.faq.title, lang)}
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            {t(ui.faq.desc, lang)}
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {ui.faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl bg-white ring-1 ring-gray-100 transition dark:bg-[#141821] dark:ring-white/10"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {t(f.q, lang)}
                  </span>
                  <span
                    className={`shrink-0 text-xl text-gray-400 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {t(f.a, lang)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
