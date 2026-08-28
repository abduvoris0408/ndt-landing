import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FaTelegram } from "react-icons/fa";
import Logo from "./Logo";

const SOCIALS = [
  { href: "https://t.me/avtointalim", icon: FaTelegram, label: "Telegram" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const links = [
    { href: "/services", label: tNav("services") },
    { href: "/portfolio", label: tNav("portfolio") },
    { href: "/about", label: tNav("about") },
    { href: "/blog", label: tNav("blog") },
  ];

  return (
    <footer className="relative border-t border-border py-14">
      <div className="container-app">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center">
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted">{t("description")}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted">
              {t("navTitle")}
            </h4>
            <div className="mt-4 flex flex-col gap-2.5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="w-fit text-sm text-muted transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted">
              {t("contactTitle")}
            </h4>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
              <a href="mailto:info@nextdevteam.uz" className="w-fit hover:text-foreground">
                info@nextdevteam.uz
              </a>
              <a href="tel:+998900994477" className="w-fit hover:text-foreground">
                +998 90 099 44 77
              </a>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Next Developers Team. {t("rights")}</span>
        </div>
      </div>
    </footer>
  );
}
