"use client";

import { useMemo, useState } from "react";
import { useApp } from "./Providers";
import { ui, t } from "@/lib/i18n";
import { stages, stageMonthRange, pick } from "@/lib/data";

function monthsBetween(start: Date, end: Date): number {
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  if (end.getDate() < start.getDate()) months -= 1;
  return months;
}

function matchStage(months: number): string | null {
  for (const [id, [lo, hi]] of Object.entries(stageMonthRange)) {
    if (months >= lo && months <= hi) return id;
  }
  return null;
}

export default function AgeCalculator() {
  const { lang } = useApp();
  const [birth, setBirth] = useState("");
  const [corrected, setCorrected] = useState(false);
  const [dueDate, setDueDate] = useState("");

  const result = useMemo(() => {
    const baseStr = corrected && dueDate ? dueDate : birth;
    if (!baseStr) return null;
    const base = new Date(baseStr);
    const now = new Date();
    if (isNaN(base.getTime())) return null;
    const months = monthsBetween(base, now);
    if (months < 0) return { status: "future" as const };
    if (months > 24) return { status: "over" as const, months };
    return { status: "ok" as const, months, stageId: matchStage(months) };
  }, [birth, dueDate, corrected]);

  const goToStage = (id: string) => {
    window.dispatchEvent(new CustomEvent("selectstage", { detail: id }));
    const el = document.getElementById("timeline");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-rose-50 via-amber-50 to-sky-50 p-1 shadow-lg dark:from-rose-950/30 dark:via-amber-950/20 dark:to-sky-950/30">
        <div className="rounded-[1.4rem] bg-white/80 p-6 backdrop-blur dark:bg-[#141821]/80 sm:p-8">
          <h2 className="text-center text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
            {t(ui.calculator.title, lang)}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-gray-600 dark:text-gray-300">
            {t(ui.calculator.desc, lang)}
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-gray-200">
                {t(ui.calculator.birthLabel, lang)}
              </label>
              <input
                type="date"
                value={birth}
                max={new Date().toISOString().split("T")[0]}
                onChange={(e) => setBirth(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none ring-rose-200 transition focus:ring-2 dark:border-white/10 dark:bg-white/5 dark:text-gray-100"
              />
            </div>

            <label className="flex cursor-pointer items-center gap-2.5 text-sm font-medium text-gray-700 dark:text-gray-200">
              <input
                type="checkbox"
                checked={corrected}
                onChange={(e) => setCorrected(e.target.checked)}
                className="h-4 w-4 rounded accent-rose-500"
              />
              {t(ui.calculator.correctedToggle, lang)}
            </label>

            {corrected && (
              <div className="animate-fade-up">
                <label className="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {t(ui.calculator.dueDateLabel, lang)}
                </label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none ring-rose-200 transition focus:ring-2 dark:border-white/10 dark:bg-white/5 dark:text-gray-100"
                />
              </div>
            )}
          </div>

          {/* 결과 */}
          {result && (
            <div className="mt-6 animate-fade-up rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-gray-100 dark:bg-white/5 dark:ring-white/10">
              {result.status === "future" && (
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t(ui.calculator.future, lang)}
                </p>
              )}
              {result.status === "over" && (
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t(ui.calculator.over, lang)}
                </p>
              )}
              {result.status === "ok" && (
                <>
                  <p className="text-gray-700 dark:text-gray-200">
                    {t(ui.calculator.resultPrefix, lang)}{" "}
                    <span className="text-2xl font-extrabold text-rose-500">
                      {result.months}
                    </span>{" "}
                    {t(ui.calculator.monthsUnit, lang)}
                    {corrected && dueDate && (
                      <span className="ml-1 text-xs text-gray-400">
                        ({t(ui.calculator.correctedNote, lang)})
                      </span>
                    )}
                  </p>
                  {result.stageId && (
                    <button
                      onClick={() => goToStage(result.stageId!)}
                      className="mt-3 inline-flex items-center gap-1 rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-rose-600"
                    >
                      {pick(
                        stages.find((s) => s.id === result.stageId)!.ageRange,
                        lang
                      )}{" "}
                      · {t(ui.calculator.goToStage, lang)}
                    </button>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
