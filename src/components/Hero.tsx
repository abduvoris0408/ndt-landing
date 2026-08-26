"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import CodeWindow from "./CodeWindow";

const AVATAR_SEEDS = [12, 47, 65, 33];

export default function Hero() {
  const t = useTranslations("hero");

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px circle at 10% 0%, rgba(124,92,255,0.16), transparent 70%)",
        }}
      />

      <div className="container-app relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass flex w-fit items-center gap-2 rounded-full px-4 py-1.5"
          >
            <Sparkles size={14} className="text-accent-2" />
            <span className="font-mono text-xs text-muted">{t("badge")}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
          >
            <span className="block">{t("titleLine1")}</span>
            <span className="text-gradient block">{t("titleLine2")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-base text-muted sm:text-lg"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="glow group flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
            >
              {t("ctaPrimary")}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#portfolio"
              className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
            >
              <Play size={14} />
              {t("ctaSecondary")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {AVATAR_SEEDS.map((seed) => (
                <Image
                  key={seed}
                  src={`https://i.pravatar.cc/72?img=${seed}`}
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-muted">
              <span className="font-semibold text-foreground">{stats[1].value}</span>{" "}
              {stats[1].label}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg px-6 py-6 sm:px-10 sm:py-8"
        >
          <CodeWindow />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass absolute left-0 top-0 rounded-2xl px-4 py-3"
          >
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted">
              {stats[0].label}
            </div>
            <div className="mt-1 text-xl font-bold text-accent-2 sm:text-2xl">{stats[0].value}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="glass absolute bottom-0 right-0 rounded-2xl px-4 py-3"
          >
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted">
              {stats[1].label}
            </div>
            <div className="mt-1 text-xl font-bold text-accent sm:text-2xl">{stats[1].value}</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
