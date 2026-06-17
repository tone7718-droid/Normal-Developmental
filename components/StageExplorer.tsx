"use client";

import { useEffect, useState } from "react";
import { stages, stageThemes, reflexById, pick } from "@/lib/data";
import { useApp } from "./Providers";
import { ui, t } from "@/lib/i18n";
import BabyIllustration from "./BabyIllustration";

const STORAGE_KEY = "dev-checklist";

export default function StageExplorer() {
  const { lang } = useApp();
  const [activeId, setActiveId] = useState(stages[0].id);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  // 체크리스트 복원
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, []);

  // 체크리스트 저장
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {}
  }, [checked, loaded]);

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

  const gross = pick(active.grossMotor, lang);
  const fine = pick(active.fineMotor, lang);
  const allKeys = [
    ...gross.map((_, i) => `${active.id}:g:${i}`),
    ...fine.map((_, i) => `${active.id}:f:${i}`),
  ];
  const doneCount = allKeys.filter((k) => checked[k]).length;
  const progress = allKeys.length
    ? Math.round((doneCount / allKeys.length) * 100)
    : 0;

  const toggle = (key: string) =>
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

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
      </div>

      {/* 연령 선택 타임라인 */}
      <div className="mt-10">
        <div className="flex gap-2 overflow-x-auto pb-3 sm:flex-wrap sm:justify-center">
          {stages.map((s) => {
            const tt = stageThemes[s.theme];
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
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
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg dark:bg-white/10">
                <BabyIllustration
                  stageId={active.id}
                  className={`h-16 w-16 ${theme.text}`}
                />
              </div>
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
                {progress}%
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {doneCount}/{allKeys.length}
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-700 dark:text-gray-200">
            {pick(active.summary, lang)}
          </p>
          {/* 진행률 바 */}
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/60 dark:bg-black/20">
            <div
              className={`h-full rounded-full ${theme.bg} transition-all duration-500`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            ✅ {t(ui.stages.checklistDesc, lang)}
          </p>
        </div>

        {/* 본문 — 체크리스트 */}
        <div className="grid gap-px bg-gray-100 dark:bg-white/10 sm:grid-cols-2">
          <CheckBlock
            title={t(ui.stages.grossTitle, lang)}
            subtitle={t(ui.stages.grossSub, lang)}
            icon="💪"
            items={gross}
            keyPrefix={`${active.id}:g`}
            checked={checked}
            toggle={toggle}
            dotClass={theme.dot}
          />
          <CheckBlock
            title={t(ui.stages.fineTitle, lang)}
            subtitle={t(ui.stages.fineSub, lang)}
            icon="🖐️"
            items={fine}
            keyPrefix={`${active.id}:f`}
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
  keyPrefix,
  checked,
  toggle,
  dotClass,
}: {
  title: string;
  subtitle: string;
  icon: string;
  items: string[];
  keyPrefix: string;
  checked: Record<string, boolean>;
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
        {items.map((item, i) => {
          const key = `${keyPrefix}:${i}`;
          const isOn = !!checked[key];
          return (
            <li key={i}>
              <button
                onClick={() => toggle(key)}
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
                  {item}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
