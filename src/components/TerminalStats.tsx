"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function TerminalStats() {
  const t = useTranslations("hero");

  const rows = [
    { label: t("stat1Label"), value: t("stat1Value"), color: "#4fd1ff" },
    { label: t("stat2Label"), value: t("stat2Value"), color: "#a5e075" },
    { label: t("stat3Label"), value: t("stat3Value"), color: "#7c5cff" },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-app grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass mb-5 flex w-fit items-center gap-2 rounded-full px-3 py-1.5">
            <ChevronRight size={12} className="text-accent-2" />
            <span className="font-mono text-xs text-muted">{t("terminalBadge")}</span>
          </div>
          <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            {t("terminalTitle")}
          </h2>
          <p className="mt-5 max-w-md text-sm text-muted sm:text-base">
            {t("terminalDescription")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-strong mx-auto w-full max-w-lg overflow-hidden rounded-2xl shadow-[0_30px_80px_-25px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-muted">zsh — ndt-stats</span>
          </div>

          <div className="px-5 py-5 font-mono text-[13px] leading-relaxed sm:px-6 sm:text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-accent-2">➜</span>
              <span className="text-muted">~/next-developers-team</span>
              <span className="text-foreground">npm run stats</span>
            </div>

            <div className="mt-4 space-y-2.5">
              {rows.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.12 }}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-muted">// {row.label}</span>
                  <span className="font-bold" style={{ color: row.color }}>
                    {row.value}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + rows.length * 0.12 }}
              className="mt-2.5 flex items-center justify-between gap-4"
            >
              <span className="text-muted">// {t("terminalFactLabel")}</span>
              <span className="font-bold text-foreground">{t("terminalFactValue")}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-4 flex items-center gap-2 border-t border-border pt-4"
            >
              <span className="text-accent-2">✓</span>
              <span className="text-muted">Build successful — 0 errors, 0 warnings.</span>
            </motion.div>

            <div className="mt-3 flex items-center gap-2">
              <span className="text-accent-2">➜</span>
              <span className="text-muted">~/next-developers-team</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block h-3.5 w-[7px] bg-accent-2"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
