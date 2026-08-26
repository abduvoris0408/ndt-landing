"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Globe, ChevronDown } from "lucide-react";

const LABELS: Record<string, string> = {
  uz: "UZ",
  ru: "RU",
  en: "EN",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-3 py-2 text-sm text-foreground/90 transition-colors hover:border-accent/40 hover:text-foreground"
        aria-label="Change language"
      >
        <Globe size={15} />
        <span className="font-mono text-xs">{LABELS[locale]}</span>
        <ChevronDown size={13} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="glass-strong absolute right-0 top-full z-50 mt-2 w-24 overflow-hidden rounded-xl">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => {
                setOpen(false);
                router.replace(pathname, { locale: loc });
              }}
              className={`block w-full px-3 py-2 text-left font-mono text-xs transition-colors hover:bg-white/5 ${
                loc === locale ? "text-accent-2" : "text-foreground/80"
              }`}
            >
              {LABELS[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
