// 나이 계산 유틸 — AgeCalculator와 StageExplorer(자동 단계 선택)가 공유한다.
import { stageMonthRange } from "./data";

export const BIRTH_STORE_KEY = "baby-birth";

export type SavedBirth = {
  birth: string; // YYYY-MM-DD
  corrected: boolean;
  dueDate: string; // YYYY-MM-DD | ""
};

export function monthsBetween(start: Date, end: Date): number {
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  if (end.getDate() < start.getDate()) months -= 1;
  return months;
}

export function parseLocalDate(value: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? date : null;
}

export function formatDateInputValue(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function matchStage(months: number): string | null {
  for (const [id, [lo, hi]] of Object.entries(stageMonthRange)) {
    if (months >= lo && months <= hi) return id;
  }
  return null;
}

export type AgeResult =
  | { status: "future" }
  | { status: "over"; months: number }
  | {
      status: "ok";
      months: number;
      stageId: string | null;
      corrected: boolean;
      note?: "notPreterm" | "beforeDue";
    };

export function computeAge(
  birth: string,
  corrected: boolean,
  dueDate: string,
): AgeResult | null {
  if (!birth) return null;
  const birthDate = parseLocalDate(birth);
  if (!birthDate) return null;
  const now = new Date();
  const chronological = monthsBetween(birthDate, now);
  if (chronological < 0) return { status: "future" };

  const due = corrected && dueDate ? parseLocalDate(dueDate) : null;
  if (due) {
    // 예정일이 생년월일과 같거나 빠르면(만삭·과숙) 교정 연령이 무의미하다
    if (due.getTime() <= birthDate.getTime()) {
      if (chronological > 24) return { status: "over", months: chronological };
      return {
        status: "ok",
        months: chronological,
        stageId: matchStage(chronological),
        corrected: false,
        note: "notPreterm",
      };
    }
    const correctedMonths = monthsBetween(due, now);
    // 태어났지만 아직 예정일 전인 이른둥이 → 교정 연령 0개월로 안내
    if (correctedMonths < 0) {
      return {
        status: "ok",
        months: 0,
        stageId: matchStage(0),
        corrected: true,
        note: "beforeDue",
      };
    }
    if (correctedMonths > 24) return { status: "over", months: correctedMonths };
    return {
      status: "ok",
      months: correctedMonths,
      stageId: matchStage(correctedMonths),
      corrected: true,
    };
  }

  if (chronological > 24) return { status: "over", months: chronological };
  return {
    status: "ok",
    months: chronological,
    stageId: matchStage(chronological),
    corrected: false,
  };
}

export function loadSavedBirth(): SavedBirth | null {
  try {
    const raw = localStorage.getItem(BIRTH_STORE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<SavedBirth>;
    if (typeof parsed.birth !== "string" || !parsed.birth) return null;
    return {
      birth: parsed.birth,
      corrected: !!parsed.corrected,
      dueDate: typeof parsed.dueDate === "string" ? parsed.dueDate : "",
    };
  } catch {
    return null;
  }
}

export function saveBirth(value: SavedBirth) {
  try {
    if (!value.birth) localStorage.removeItem(BIRTH_STORE_KEY);
    else localStorage.setItem(BIRTH_STORE_KEY, JSON.stringify(value));
  } catch {
    /* ignore */
  }
}
