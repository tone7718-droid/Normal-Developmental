"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import type { Lang } from "@/lib/data";

type Theme = "light" | "dark";

interface AppContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

const AppContext = createContext<AppContextValue | null>(null);

const order: Lang[] = ["ko", "en", "vi"];

export function Providers({
  initialLang,
  children,
}: {
  initialLang: Lang;
  children: ReactNode;
}) {
  // 언어는 URL(/ko·/en·/vi)이 단일 출처 — 서버가 첫 페인트부터 올바른 언어로 렌더한다
  const lang = initialLang;
  const router = useRouter();
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // 테마 초기값을 localStorage / 시스템 설정에서 복원
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme: Theme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : prefersDark
        ? "dark"
        : "light";
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage 테마는 클라이언트에서만 읽을 수 있어 마운트 후 복원이 필요
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  // 테마를 html 클래스에 반영
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  // 언어 전환 = 해당 로케일 경로로 이동 (현재 섹션 해시 유지)
  const setLang = (l: Lang) => {
    if (l === lang) return;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(`/${l}${hash}`);
  };
  const toggleLang = () =>
    setLang(order[(order.indexOf(lang) + 1) % order.length]);
  const toggleTheme = () => setTheme((p) => (p === "light" ? "dark" : "light"));

  return (
    <AppContext.Provider
      value={{ lang, setLang, toggleLang, theme, toggleTheme, mounted }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within Providers");
  return ctx;
}
