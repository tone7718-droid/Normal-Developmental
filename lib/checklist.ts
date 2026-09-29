import { stages } from "./data";
import { parseLocalDate } from "./age";
import legacyIds from "./legacy-milestone-ids.json";

export const CHECKLIST_KEY = "dev-checklist";
export type Checked = Record<string, true | string>;
const ids = new Set(stages.flatMap((s) => [...s.grossMotor, ...s.fineMotor].map((m) => m.id)));

/** Read legacy index keys without changing the frozen migration map. */
export function parseChecklist(raw: string | null): Checked {
  const result: Checked = {};
  try {
    const parsed: unknown = JSON.parse(raw ?? "null");
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return result;
    const record = parsed as Record<string, unknown>;
    const versioned = record.version === 2;
    if ("version" in record && !versioned) return result;
    const entries = versioned ? record.entries : record;
    if (!entries || typeof entries !== "object" || Array.isArray(entries)) return result;
    for (const [key, value] of Object.entries(entries)) {
      const id = versioned ? key : (legacyIds as Record<string, string>)[key];
      if (!id || !ids.has(id)) continue;
      if (value === true || (typeof value === "string" && parseLocalDate(value))) result[id] = value;
    }
  } catch { /* Malformed storage must never prevent reading the guide. */ }
  return result;
}

export function serializeChecklist(entries: Checked): string {
  return JSON.stringify({ version: 2, entries });
}
