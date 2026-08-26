import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTelegram,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import Logo from "./Logo";

const SOCIALS = [
  { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
  { href: "https://facebook.com", icon: FaFacebookF, label: "Facebook" },
  { href: "https://linkedin.com", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://t.me", icon: FaTelegram, label: "Telegram" },
  { href: "https://github.com", icon: FaGithub, label: "GitHub" },
  { href: "https://youtube.com", icon: FaYoutube, label: "YouTube" },
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
              <a href="mailto:hello@nextdevteam.io" className="w-fit hover:text-foreground">
                hello@nextdevteam.io
              </a>
              <a href="tel:+998900000000" className="w-fit hover:text-foreground">
                +998 90 000 00 00
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
