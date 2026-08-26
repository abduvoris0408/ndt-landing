"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Handshake, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

const VALUE_KEYS = ["v1", "v2", "v3"] as const;
const ICONS = [ShieldCheck, Cpu, Handshake];

export default function About({ standalone = false }: { standalone?: boolean }) {
  const t = useTranslations("about");
  const tNav = useTranslations("nav");

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-app">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass mb-5 flex w-fit items-center gap-2 rounded-full px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
              <span className="font-mono text-xs text-muted">{t("badge")}</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              <span className="block">{t("titleLine1")}</span>
              <span className="block text-muted">{t("titleLine2")}</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm text-muted sm:text-base">{t("description")}</p>

            {!standalone && (
              <Link
                href="/about"
                className="glass mt-6 flex w-fit items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
              >
                {tNav("about")} <ArrowRight size={14} />
              </Link>
            )}
          </motion.div>

          <div className="flex flex-col gap-4">
            {VALUE_KEYS.map((key, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass flex items-start gap-4 rounded-2xl p-5 sm:p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-accent-2">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-semibold">{t(`values.${key}.title`)}</h3>
                    <p className="mt-1 text-sm text-muted">{t(`values.${key}.description`)}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
