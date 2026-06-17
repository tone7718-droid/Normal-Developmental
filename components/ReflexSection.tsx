"use client";

import { reflexes, stageThemes, pick } from "@/lib/data";
import { useApp } from "./Providers";
import { ui, t } from "@/lib/i18n";

const MAX_MONTH = 24;
const barColors = [
  "bg-rose-400",
  "bg-amber-400",
  "bg-emerald-400",
  "bg-sky-400",
  "bg-violet-400",
  "bg-fuchsia-400",
  "bg-teal-400",
];

export default function ReflexSection() {
  const { lang } = useApp();

  return (
    <section
      id="reflexes"
      className="scroll-mt-20 bg-gradient-to-b from-white to-rose-50/40 py-16 dark:from-[#141821] dark:to-[#0f1117] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-sm font-semibold text-rose-700 dark:bg-rose-900/40 dark:text-rose-200">
            {t(ui.reflexSection.badge, lang)}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t(ui.reflexSection.title, lang)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            {t(ui.reflexSection.desc, lang)}
            <strong className="text-gray-800 dark:text-gray-100">
              {t(ui.reflexSection.descStrong, lang)}
            </strong>
            {t(ui.reflexSection.descEnd, lang)}
          </p>
        </div>

        {/* 반사 타임라인 (간트차트) */}
        <div className="mt-12 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-[#141821] dark:ring-white/10 sm:p-8">
          <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">
            {t(ui.reflexSection.timelineTitle, lang)}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {t(ui.reflexSection.timelineDesc, lang)}
          </p>

          <div className="mt-6 space-y-2.5">
            {reflexes.map((r, i) => {
              const left = (r.appearsMonth / MAX_MONTH) * 100;
              const width =
                ((r.disappearsMonth - r.appearsMonth) / MAX_MONTH) * 100;
              return (
                <div key={r.id} className="flex items-center gap-3">
                  <div className="flex w-28 shrink-0 items-center gap-1.5 sm:w-36">
                    <span className="text-sm">{r.emoji}</span>
                    <span className="truncate text-xs font-medium text-gray-700 dark:text-gray-200 sm:text-sm">
                      {pick(r.name, lang)}
                    </span>
                  </div>
                  <div className="relative h-6 flex-1 rounded-full bg-gray-100 dark:bg-white/5">
                    <div
                      className={`absolute top-0 flex h-6 items-center justify-end rounded-full ${
                        barColors[i % barColors.length]
                      } pr-2`}
                      style={{ left: `${left}%`, width: `${width}%` }}
                    >
                      <span className="text-[10px] font-bold text-white/90">
                        {r.disappearsMonth}
                        {t(ui.reflexSection.monthAxis, lang)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 개월 눈금 */}
          <div className="mt-3 flex items-center gap-3">
            <div className="w-28 shrink-0 sm:w-36" />
            <div className="flex flex-1 justify-between text-[10px] font-medium text-gray-400 dark:text-gray-500">
              {[0, 6, 12, 18, 24].map((m) => (
                <span key={m}>
                  {m}
                  {t(ui.reflexSection.monthAxis, lang)}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 반사 카드 */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reflexes.map((r) => (
            <article
              key={r.id}
              className="group flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg dark:bg-[#141821] dark:ring-white/10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-2xl dark:bg-rose-950/40">
                  {r.emoji}
                </span>
                <div>
                  <h3 className="font-extrabold text-gray-900 dark:text-white">
                    {pick(r.name, lang)}
                  </h3>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {r.englishName}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                  {t(ui.reflexSection.appearLabel, lang)} · {pick(r.appears, lang)}
                </span>
                <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700 dark:bg-sky-950/40 dark:text-sky-300">
                  {t(ui.reflexSection.disappearLabel, lang)} ·{" "}
                  {pick(r.disappears, lang)}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                {pick(r.whatHappens, lang)}
              </p>

              <div className="mt-4 space-y-3 border-t border-gray-100 pt-4 dark:border-white/10">
                <div>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400">
                    {t(ui.reflexSection.howLabel, lang)}
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {pick(r.howToSee, lang)}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400">
                    {t(ui.reflexSection.whyLabel, lang)}
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {pick(r.whyItMatters, lang)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
