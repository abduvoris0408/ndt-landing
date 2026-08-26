"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Lightbulb, PenTool, Terminal, Rocket } from "lucide-react";
import TechStack from "./TechStack";

const STEP_KEYS = ["s1", "s2", "s3", "s4"] as const;
const ICONS = [Lightbulb, PenTool, Terminal, Rocket];

export default function Process() {
  const t = useTranslations("process");

  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="glass mx-auto mb-5 flex w-fit items-center gap-2 rounded-full px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
            <span className="font-mono text-xs text-muted">{t("badge")}</span>
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            <span className="block">{t("titleLine1")}</span>
            <span className="block text-muted">{t("titleLine2")}</span>
          </h2>
          <p className="mt-5 text-sm text-muted sm:text-base">{t("description")}</p>
        </motion.div>

        <div className="mt-14">
          <TechStack />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {STEP_KEYS.map((key, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-2 text-foreground">
                    <Icon size={18} />
                  </span>
                  <span className="font-mono text-sm text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 font-mono text-[11px] text-accent-2">{t(`steps.${key}.phase`)}</p>
                <h3 className="mt-1 text-xl font-semibold">{t(`steps.${key}.title`)}</h3>
                <p className="mt-2 text-sm text-muted">{t(`steps.${key}.description`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
