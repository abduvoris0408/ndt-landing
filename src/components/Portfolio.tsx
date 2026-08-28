"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PROJECT_KEYS, PROJECT_IMAGES } from "@/lib/projects";
import PortfolioIllustration from "./PortfolioIllustration";

const FILTER_KEYS = ["all", "education", "marketplace", "ai", "corporate"] as const;

const STATUS_COLORS: Record<string, string> = {
  Deployed: "#4fd1ff",
  Active: "#3ddc84",
  Scaling: "#ffb84f",
  Stable: "#7c5cff",
};

const CATEGORY_GRADIENTS: Record<string, string> = {
  education:
    "from-[#e4defc] via-[#d7cffb] to-[#c9bef8] dark:from-[#3a2f6b] dark:via-[#241c3f] dark:to-[#0f0c1a]",
  marketplace:
    "from-[#d3ecf7] via-[#bfe3f3] to-[#a9d8ee] dark:from-[#0d2b3e] dark:via-[#0b2130] dark:to-[#0a0f14]",
  ai: "from-[#ecdff5] via-[#e2cdf0] to-[#d6b9ea] dark:from-[#2f1e3f] dark:via-[#1c1330] dark:to-[#0c0a14]",
  corporate:
    "from-[#f1e4d3] via-[#ecd8bd] to-[#e5c9a3] dark:from-[#3a2a1e] dark:via-[#241a12] dark:to-[#0f0c0a]",
};

const ICON_COLOR: Record<string, string> = {
  education: "text-[#4a3d8f] dark:text-white/90",
  marketplace: "text-[#0d6e94] dark:text-white/90",
  ai: "text-[#6b2e8f] dark:text-white/90",
  corporate: "text-[#7a4f24] dark:text-white/90",
};

type Project = {
  key: (typeof PROJECT_KEYS)[number];
  category: string;
  tag: string;
  index: string;
  status: string;
  title: string;
  description: string;
  stack: string[];
};

export default function Portfolio({ standalone = false }: { standalone?: boolean }) {
  const t = useTranslations("portfolio");
  const tNav = useTranslations("nav");
  const [filter, setFilter] = useState<(typeof FILTER_KEYS)[number]>("all");

  const projects = PROJECT_KEYS.map((key) => ({
    key,
    category: t(`items.${key}.category`),
    tag: t(`items.${key}.tag`),
    index: t(`items.${key}.index`),
    status: t(`items.${key}.status`),
    title: t(`items.${key}.title`),
    description: t(`items.${key}.description`),
    stack: t.raw(`items.${key}.stack`) as string[],
  }));

  const visible = standalone
    ? projects.filter((p) => filter === "all" || p.category === filter)
    : projects.slice(0, 3);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="container-app">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="glass mb-5 flex w-fit items-center gap-2 rounded-full px-3 py-1.5">
              <ChevronRight size={12} className="text-accent-2" />
              <span className="font-mono text-xs text-muted">{t("badge")}</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t("title")} <span className="text-muted">{t("titleAccent")}</span>
            </h2>
            {!standalone && (
              <p className="mt-4 max-w-xl text-sm text-muted sm:text-base">{t("description")}</p>
            )}
          </div>

          {standalone ? (
            <div className="flex flex-wrap gap-2">
              {FILTER_KEYS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    filter === f
                      ? "bg-foreground text-background"
                      : "glass text-muted hover:text-foreground"
                  }`}
                >
                  {t(`filters.${f}`)}
                </button>
              ))}
            </div>
          ) : (
            <Link
              href="/portfolio"
              className="glass flex w-fit shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
            >
              {tNav("portfolio")} <ArrowRight size={14} />
            </Link>
          )}
        </div>

        {standalone ? (
          <>
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {visible.slice(0, 2).map((p, i) => (
                  <ProjectCard key={p.key} p={p} i={i} large />
                ))}
              </AnimatePresence>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {visible.slice(2).map((p, i) => (
                  <ProjectCard key={p.key} p={p} i={i} />
                ))}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((p, i) => (
                <ProjectCard key={p.key} p={p} i={i} />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ p, i, large }: { p: Project; i: number; large?: boolean }) {
  const t = useTranslations("portfolio");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      className={`glass group flex flex-col justify-between overflow-hidden rounded-[18px] transition-colors hover:border-accent/30 ${
        large ? "min-h-[300px]" : "min-h-[240px]"
      }`}
    >
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${
          PROJECT_IMAGES[p.key] ? "h-40" : "h-28 p-6"
        } ${CATEGORY_GRADIENTS[p.category] ?? CATEGORY_GRADIENTS.education}`}
      >
        {PROJECT_IMAGES[p.key] ? (
          <Image
            src={PROJECT_IMAGES[p.key]!}
            alt={p.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div
            className={`h-full w-28 opacity-80 ${ICON_COLOR[p.category] ?? ICON_COLOR.education}`}
          >
            <PortfolioIllustration category={p.category} />
          </div>
        )}
        <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[11px] text-black/60 dark:text-white/70">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/40 backdrop-blur-sm dark:bg-black/30">
            <ArrowUpRight size={12} />
          </span>
          FILE: {p.index}
        </div>
        <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-black/10 bg-white/40 px-3 py-1 font-mono text-[10px] text-black/60 backdrop-blur-sm dark:border-white/20 dark:bg-black/30 dark:text-white/70">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: STATUS_COLORS[p.status] ?? "var(--accent-2)" }}
          />
          {p.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
        <div>
          <span className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[10px] text-muted">
            {p.tag}
          </span>
          <h3 className="mt-4 text-xl font-bold sm:text-2xl">{p.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-full bg-surface-2 px-3 py-1 font-mono text-[11px] text-foreground/80"
              >
                {s}
              </span>
            ))}
          </div>

          <Link
            href={`/portfolio/${p.key}`}
            className="mt-6 flex w-fit items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent-2"
          >
            {t("viewProject")} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
