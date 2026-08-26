"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="glass flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-foreground transition-colors hover:border-accent/40"
    >
      {mounted ? isDark ? <Sun size={15} /> : <Moon size={15} /> : <span className="h-[15px] w-[15px]" />}
    </button>
  );
}
