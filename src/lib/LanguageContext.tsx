"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations, type Lang } from "./translations";

interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof translations)["de"];
}

const LanguageContext = createContext<LanguageCtx>({
  lang: "de",
  setLang: () => {},
  t: translations.de,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  // On mount, restore saved preference
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && saved in translations) {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  return useContext(LanguageContext);
}
