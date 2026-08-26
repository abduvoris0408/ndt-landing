"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Server, LayoutPanelLeft, Database, ShieldCheck, Gauge } from "lucide-react";

export default function ServicesHero() {
  const t = useTranslations("services.hero");

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at 100% 0%, rgba(124,92,255,0.14), transparent 70%)",
        }}
      />

      <div className="container-app relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass flex w-fit items-center gap-2 rounded-full px-3 py-1.5"
          >
            <ChevronRight size={12} className="text-accent-2" />
            <span className="font-mono text-xs text-muted">{t("badge")}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
          >
            <span className="block">{t("titleLine1")}</span>
            <span className="block">
              {t("titleLine2")}
              <span className="text-muted">_</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-lg text-sm leading-relaxed text-muted sm:text-base"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-9"
          >
            <a
              href="#contact"
              className="glow group flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
            >
              [ {t("cta")} ]
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex items-center gap-8 border-t border-border pt-6"
          >
            <div>
              <div className="text-2xl font-bold sm:text-3xl">{t("stat1Value")}</div>
              <div className="mt-1 font-mono text-xs text-muted">// {t("stat1Label")}</div>
            </div>
            <div>
              <div className="text-2xl font-bold sm:text-3xl">{t("stat2Value")}</div>
              <div className="mt-1 font-mono text-xs text-muted">// {t("stat2Label")}</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto h-[380px] w-full max-w-md sm:h-[440px]"
        >
          <div className="glass absolute right-4 top-0 w-64 rounded-2xl p-4 sm:w-72">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 font-mono text-xs font-semibold">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-2">
                  <Server size={14} />
                </span>
                CORE.BACKEND
              </span>
              <Gauge size={14} className="text-accent-2" />
            </div>
            <div className="mt-4 flex gap-2">
              <div className="h-8 flex-1 rounded-lg bg-surface-2" />
              <div className="h-8 flex-1 rounded-lg bg-surface-2" />
            </div>
            <div className="mt-2 h-8 w-2/3 rounded-lg bg-surface-2" />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-strong absolute left-1/2 top-24 w-72 -translate-x-1/2 rounded-2xl p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] sm:w-80"
          >
            <div className="flex items-center gap-2 font-mono text-sm font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-background">
                <LayoutPanelLeft size={16} />
              </span>
              SYS.FRONTEND
            </div>
            <div className="mt-4 h-24 rounded-xl bg-surface-2" />
            <div className="mt-3 flex gap-2">
              <div className="h-2 w-1/3 rounded-full bg-surface-2" />
              <div className="h-2 w-1/4 rounded-full bg-surface-2" />
            </div>
          </motion.div>

          <div className="glass absolute bottom-16 left-0 w-40 rounded-2xl p-3">
            <div className="flex items-center gap-2 font-mono text-[10px] text-muted">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface-2 text-accent">
                <ShieldCheck size={13} />
              </span>
              // SEC.LVL
            </div>
            <div className="mt-2 text-sm font-bold">Optimal</div>
          </div>

          <div className="glass absolute right-0 top-40 w-36 rounded-2xl p-3">
            <div className="flex items-center gap-2 font-mono text-[10px] text-muted">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-2 text-accent-2">
                <Gauge size={13} />
              </span>
              // SYS.PERF
            </div>
            <div className="mt-2 text-sm font-bold">100%</div>
          </div>

          <div className="glass absolute bottom-0 left-8 w-56 rounded-2xl p-4">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-2">
                <Database size={14} />
              </span>
              DATABASE_NODE
            </div>
            <div className="mt-3 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-surface-2" />
              <div className="h-1.5 w-4/5 rounded-full bg-surface-2" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
