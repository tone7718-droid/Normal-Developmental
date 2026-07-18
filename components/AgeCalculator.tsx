"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
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

function parseLocalDate(value: string): Date | null {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  const date = new Date(year, month - 1, day);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatDateInputValue(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
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
  // max는 클라이언트에서만 계산 — 서버와 브라우저의 날짜가 다른 경우의 하이드레이션 불일치 방지
  const maxDate = useSyncExternalStore(
    () => () => {},
    () => formatDateInputValue(new Date()),
    () => undefined,
  );

  const result = useMemo(() => {
    if (!birth) return null;
    const birthDate = parseLocalDate(birth);
    if (!birthDate) return null;
    const now = new Date();
    const chronological = monthsBetween(birthDate, now);
    if (chronological < 0) return { status: "future" as const };

    const due = corrected && dueDate ? parseLocalDate(dueDate) : null;
    if (due) {
      // 예정일이 생년월일과 같거나 빠르면(만삭·과숙) 교정 연령이 무의미하다
      if (due.getTime() <= birthDate.getTime()) {
        if (chronological > 24)
          return { status: "over" as const, months: chronological };
        return {
          status: "ok" as const,
          months: chronological,
          stageId: matchStage(chronological),
          corrected: false,
          note: "notPreterm" as const,
        };
      }
      const correctedMonths = monthsBetween(due, now);
      // 태어났지만 아직 예정일 전인 이른둥이 → 교정 연령 0개월로 안내
      if (correctedMonths < 0) {
        return {
          status: "ok" as const,
          months: 0,
          stageId: matchStage(0),
          corrected: true,
          note: "beforeDue" as const,
        };
      }
      if (correctedMonths > 24)
        return { status: "over" as const, months: correctedMonths };
      return {
        status: "ok" as const,
        months: correctedMonths,
        stageId: matchStage(correctedMonths),
        corrected: true,
      };
    }

    if (chronological > 24)
      return { status: "over" as const, months: chronological };
    return {
      status: "ok" as const,
      months: chronological,
      stageId: matchStage(chronological),
      corrected: false,
    };
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
              <label htmlFor="baby-birth-date" className="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-gray-200">
                {t(ui.calculator.birthLabel, lang)}
              </label>
              <input
                id="baby-birth-date"
                type="date"
                value={birth}
                max={maxDate}
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
                <label htmlFor="baby-due-date" className="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {t(ui.calculator.dueDateLabel, lang)}
                </label>
                <input
                  id="baby-due-date"
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
            <div aria-live="polite" className="mt-6 animate-fade-up rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-gray-100 dark:bg-white/5 dark:ring-white/10">
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
                    {result.corrected && (
                      <span className="ml-1 text-xs text-gray-400">
                        ({t(ui.calculator.correctedNote, lang)})
                      </span>
                    )}
                  </p>
                  {result.note && (
                    <p className="mt-2 text-xs leading-relaxed text-amber-700 dark:text-amber-300">
                      {t(ui.calculator[result.note], lang)}
                    </p>
                  )}
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
