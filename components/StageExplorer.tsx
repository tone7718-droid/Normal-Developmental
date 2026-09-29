"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { stages, stageThemes, reflexById, pick, type Milestone } from "@/lib/data";
import { useApp } from "./Providers";
import { ui, t } from "@/lib/i18n";
import { computeAge, formatDateInputValue } from "@/lib/age";

import { CHECKLIST_KEY, parseChecklist, serializeChecklist, type Checked } from "@/lib/checklist";

export default function StageExplorer() {
  const { lang, birthInfo, today } = useApp();
  const [activeId, setActiveId] = useState(stages[0].id);
  const [checked, setChecked] = useState<Checked>({});
  const [loaded, setLoaded] = useState(false);
  const age = computeAge(birthInfo.birth, birthInfo.corrected, birthInfo.dueDate);
  const autoMonths = age?.status === "ok" ? age.months : null;
  const automaticStage = age?.status === "ok" ? age.stageId : null;

  // 체크리스트 복원 + 저장된 생일이 있으면 현재 시기를 자동 선택
  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Restore validated browser storage after mount.
      setChecked(parseChecklist(localStorage.getItem(CHECKLIST_KEY)));
    } catch {}
    setLoaded(true);
  }, []);

  // 체크리스트 저장
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(CHECKLIST_KEY, serializeChecklist(checked));
    } catch {}
  }, [checked, loaded]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Synchronize selection with the shared age calculator.
    if (automaticStage) setActiveId(automaticStage);
  }, [automaticStage, today]);

  // 나이 계산기 등에서 보낸 시기 선택 이벤트 수신
  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent).detail as string;
      if (stages.some((s) => s.id === id)) setActiveId(id);
    };
    window.addEventListener("selectstage", handler);
    return () => window.removeEventListener("selectstage", handler);
  }, []);

  const active = stages.find((s) => s.id === activeId)!;
  const theme = stageThemes[active.theme];

  const gross = active.grossMotor;
  const fine = active.fineMotor;
  const allKeys = [
    ...gross.map((item) => item.id),
    ...fine.map((item) => item.id),
  ];
  const doneCount = allKeys.filter((k) => checked[k]).length;
  const progress = allKeys.length
    ? Math.round((doneCount / allKeys.length) * 100)
    : 0;

  // 체크하는 순간의 날짜를 기록한다 (해제하면 기록도 삭제)
  const toggle = (key: string) =>
    setChecked((prev) => {
      const next = { ...prev };
      if (next[key]) delete next[key];
      else next[key] = formatDateInputValue(new Date());
      return next;
    });

  // 체크한 항목 전체(모든 시기)를 날짜와 함께 텍스트로 내보내기
  const exportRecords = () => {
    const lines: string[] = [`${t(ui.meta.title, lang)} — ${formatDateInputValue(new Date())}`];
    let total = 0;
    for (const s of stages) {
      const g = s.grossMotor;
      const f = s.fineMotor;
      const items = [
        ...g.map((item) => ({ text: pick(item.text, lang), key: item.id })),
        ...f.map((item) => ({ text: pick(item.text, lang), key: item.id })),
      ].filter((it) => checked[it.key]);
      if (!items.length) continue;
      lines.push("", `■ ${pick(s.ageRange, lang)}`);
      for (const it of items) {
        const v = checked[it.key];
        lines.push(`  ✓ ${it.text}${typeof v === "string" ? ` (${v})` : ""}`);
        total++;
      }
    }
    if (!total) {
      alert(t(ui.stages.exportEmpty, lang));
      return;
    }
    const text = lines.join("\n");
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "baby-milestones.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="timeline"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:py-24"
    >
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          {t(ui.stages.title, lang)}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
          {t(ui.stages.desc, lang)}
        </p>
        {autoMonths != null && (
          <p className="mx-auto mt-3 inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-4 py-1.5 text-sm font-semibold text-rose-600 ring-1 ring-rose-100 dark:bg-rose-950/40 dark:text-rose-300 dark:ring-rose-500/20">
            🎂 {t(ui.stages.autoNote, lang)} {autoMonths}
            {t(ui.calculator.monthsUnit, lang)}
          </p>
        )}
      </div>

      {/* 연령 선택 타임라인 */}
      <div className="mt-10">
        <p className="mb-2 text-center text-xs text-gray-400 sm:hidden">
          {t(ui.stages.swipeHint, lang)}
        </p>
        <div
          role="group"
          aria-label={t(ui.stages.periodLabel, lang)}
          className="flex gap-2 overflow-x-auto pb-3 sm:flex-wrap sm:justify-center"
        >
          {stages.map((s) => {
            const tt = stageThemes[s.theme];
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                aria-pressed={isActive}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? `${tt.bg} text-white shadow-md`
                    : "bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50 dark:bg-white/5 dark:text-gray-300 dark:ring-white/10 dark:hover:bg-white/10"
                }`}
              >
                <span className="text-base">{s.emoji}</span>
                {pick(s.ageRange, lang)}
              </button>
            );
          })}
        </div>
      </div>

      {/* 상세 패널 */}
      <div
        key={active.id + lang}
        className="mt-8 animate-fade-up overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 dark:bg-[#141821] dark:ring-white/10"
      >
        {/* 헤더 */}
        <div className={`${theme.soft} px-6 py-7 sm:px-10`}>
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-md dark:bg-white/10">
                    {active.emoji}
                  </span>
                  <div>
                    <div className={`text-sm font-bold ${theme.text}`}>
                      {pick(active.shortAge, lang)}
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                      {pick(active.ageRange, lang)}
                    </h3>
                  </div>
                </div>
                {/* 진행률 링 */}
                <div className="hidden shrink-0 text-right sm:block">
                  <div className={`text-2xl font-extrabold ${theme.text}`}>
                    {doneCount}/{allKeys.length}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {t(ui.stages.observedCount, lang)}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-200">
                {pick(active.summary, lang)}
              </p>
              {/* 진행률 바 */}
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/60 dark:bg-black/20">
                <div
                  role="progressbar"
                  aria-label={t(ui.stages.observedCount, lang)}
                  aria-valuemin={0}
                  aria-valuemax={allKeys.length}
                  aria-valuenow={doneCount}
                  className={`h-full rounded-full ${theme.bg} transition-all duration-500`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                {t(ui.stages.checklistDesc, lang)}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                {t(ui.stages.checklistNote, lang)}
              </p>
              <div className="mt-3">
                <button
                  onClick={exportRecords}
                  title={t(ui.stages.exportHint, lang)}
                  className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-600 transition hover:bg-gray-50 dark:border-white/15 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10"
                >
                  {t(ui.stages.exportLabel, lang)}
                </button>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[280px]">
              <div className="overflow-hidden rounded-3xl bg-white/70 p-2 shadow-lg ring-1 ring-white/80 dark:bg-white/10 dark:ring-white/10">
                <Image
                  src={`/illustrations/stages/stage-${active.id}.webp`}
                  alt={pick(active.summary, lang)}
                  width={512}
                  height={512}
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 40vw, 80vw"
                  className="h-auto w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 본문 — 체크리스트 */}
        <div className="grid gap-px bg-gray-100 dark:bg-white/10 sm:grid-cols-2">
          <CheckBlock
            title={t(ui.stages.grossTitle, lang)}
            subtitle={t(ui.stages.grossSub, lang)}
            icon="💪"
            items={gross}
            lang={lang}
            checked={checked}
            toggle={toggle}
            dotClass={theme.dot}
          />
          <CheckBlock
            title={t(ui.stages.fineTitle, lang)}
            subtitle={t(ui.stages.fineSub, lang)}
            icon="🖐️"
            items={fine}
            lang={lang}
            checked={checked}
            toggle={toggle}
            dotClass={theme.dot}
          />
        </div>

        {/* 반사 + 팁 + 주의신호 */}
        <div className="space-y-6 px-6 py-7 sm:px-10">
          {active.reflexes.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400">
                {t(ui.stages.reflexLabel, lang)}
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {active.reflexes.map((rid) => {
                  const r = reflexById(rid);
                  if (!r) return null;
                  return (
                    <a
                      key={rid}
                      href="#reflexes"
                      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition hover:scale-105 ${theme.chip}`}
                    >
                      <span>{r.emoji}</span>
                      {pick(r.name, lang)}
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          <div className={`rounded-2xl ${theme.soft} p-5`}>
            <div className="flex items-start gap-3">
              <span className="text-xl">💡</span>
              <div>
                <h4 className={`text-sm font-bold ${theme.text}`}>
                  {t(ui.stages.tipLabel, lang)}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                  {pick(active.parentTip, lang)}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-cream p-5 dark:bg-white/5">
            <div className="flex items-start gap-3">
              <span className="text-xl">🧸</span>
              <div>
                <h4 className="text-sm font-bold text-gray-700 dark:text-gray-200">
                  {t(ui.stages.activitiesLabel, lang)}
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {pick(active.activities, lang).map((a, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${theme.dot}`}
                      />
                      <span className="leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-orange-50/60 p-5 dark:border-orange-500/20 dark:bg-orange-950/20">
            <div className="flex items-start gap-3">
              <span className="text-xl">🩺</span>
              <div>
                <h4 className="text-sm font-bold text-orange-700 dark:text-orange-300">
                  {t(ui.stages.watchLabel, lang)}
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {pick(active.watchOut, lang).map((w, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className="mt-1 text-orange-400">•</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckBlock({
  title,
  subtitle,
  icon,
  items,
  lang,
  checked,
  toggle,
  dotClass,
}: {
  title: string;
  subtitle: string;
  icon: string;
  items: Milestone[];
  lang: "ko" | "en" | "vi";
  checked: Checked;
  toggle: (key: string) => void;
  dotClass: string;
}) {
  return (
    <div className="bg-white px-6 py-7 dark:bg-[#141821] sm:px-10">
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white">{title}</h4>
          <p className="text-xs text-gray-400 dark:text-gray-500">{subtitle}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-1">
        {items.map((item) => {
          const key = item.id;
          const value = checked[key];
          const isOn = !!value;
          const date = typeof value === "string" ? value : null;
          return (
            <li key={key}>
              <button
                onClick={() => toggle(key)}
                role="checkbox"
                aria-checked={isOn}
                className="flex w-full items-start gap-3 rounded-xl px-2 py-2 text-left transition hover:bg-gray-50 dark:hover:bg-white/5"
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition ${
                    isOn
                      ? `${dotClass} border-transparent text-white`
                      : "border-gray-300 text-transparent dark:border-gray-600"
                  }`}
                >
                  ✓
                </span>
                <span
                  className={`text-sm leading-relaxed transition ${
                    isOn
                      ? "text-gray-400 line-through dark:text-gray-500"
                      : "text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {pick(item.text, lang)}
                </span>
                {date && (
                  <span className="ml-auto shrink-0 self-center rounded-full bg-gray-100 px-2 py-0.5 text-[11px] tabular-nums text-gray-500 dark:bg-white/10 dark:text-gray-400">
                    {date.slice(5).replace("-", "/")}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
