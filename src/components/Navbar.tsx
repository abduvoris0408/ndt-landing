"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

export default function Navbar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/services", label: t("services") },
    { href: "/portfolio", label: t("portfolio") },
    { href: "/about", label: t("about") },
    { href: "/blog", label: t("blog") },
  ];

  return (
    <header className="glass-strong sticky inset-x-0 top-0 z-50 w-full border-b border-border">
      <div className="relative">
        <div className="container-app flex items-center justify-between gap-4 py-3">
          <Link href="/" className="flex shrink-0 items-center">
            <Logo className="h-7 w-auto sm:h-8" />
          </Link>

          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="whitespace-nowrap text-sm text-muted transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2.5 md:flex lg:gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link
              href="/#contact"
              className="whitespace-nowrap rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {t("contact")}
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="flex items-center justify-center rounded-lg p-2 text-foreground"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="glass-strong absolute inset-x-0 top-full mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] md:hidden">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3 px-3">
              <LanguageSwitcher />
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-foreground px-4 py-2 text-center text-sm font-medium text-background"
              >
                {t("contact")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
