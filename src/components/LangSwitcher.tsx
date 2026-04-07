"use client";

import { useLang } from "@/lib/LangContext";
import type { Lang } from "@/lib/i18n";

const langs: Lang[] = ["tr", "en", "ar"];

export default function LangSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 z-[200] flex flex-col gap-1 bg-white border border-[var(--color-beige)] rounded-3xl p-1 shadow-sm max-md:top-auto max-md:bottom-20 max-md:right-3 max-md:flex-row max-md:translate-y-0">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`w-8 h-8 rounded-full text-[0.68rem] font-semibold transition-all cursor-pointer border-none ${
            lang === l
              ? "bg-[var(--color-brown-dark)] text-white"
              : "bg-transparent text-[var(--color-olive)] hover:text-[var(--color-brown-dark)]"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
