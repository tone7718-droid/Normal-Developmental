"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
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

export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ko");
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // 초기값을 localStorage / 시스템 설정에서 복원
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang | null;
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedLang === "ko" || savedLang === "en" || savedLang === "vi")
      setLangState(savedLang);
    const initialTheme: Theme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : prefersDark
        ? "dark"
        : "light";
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

  // 언어를 html lang 속성에 반영
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang, mounted]);

  const order: Lang[] = ["ko", "en", "vi"];
  const setLang = (l: Lang) => setLangState(l);
  const toggleLang = () =>
    setLangState((p) => order[(order.indexOf(p) + 1) % order.length]);
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
