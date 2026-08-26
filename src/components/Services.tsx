"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code2, Smartphone, Bot, Layers, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function Services({ standalone = false }: { standalone?: boolean }) {
  const t = useTranslations("services");
  const tNav = useTranslations("nav");

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-app">
        {standalone ? (
          <SectionHeader
            badge={t("badge")}
            line1={t("titleLine1")}
            line2={t("titleLine2")}
            description={t("description")}
          />
        ) : (
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              badge={t("badge")}
              line1={t("titleLine1")}
              line2={t("titleLine2")}
              description={t("description")}
            />
            <Link
              href="/services"
              className="glass flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
            >
              {tNav("services")} <ArrowRight size={14} />
            </Link>
          </div>
        )}

        <div className="mt-14 flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-[2fr_1.1fr]">
            <ServiceCard
              icon={<Code2 size={20} />}
              tag={t("items.web.tag")}
              title={t("items.web.title")}
              description={t("items.web.description")}
              details={t("items.web.details")}
              delay={0}
            />
            <ServiceCard
              icon={<Smartphone size={20} />}
              tag={t("items.mobile.tag")}
              title={t("items.mobile.title")}
              description={t("items.mobile.description")}
              details={t("items.mobile.details")}
              compact
              delay={0.1}
            />
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <ServiceCard
              icon={<Bot size={20} />}
              title={t("items.bot.title")}
              description={t("items.bot.description")}
              compact
              delay={0.2}
            />
            <ServiceCard
              icon={<Layers size={20} />}
              tag={t("items.uiux.tag")}
              title={t("items.uiux.title")}
              description={t("items.uiux.description")}
              arrow
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  badge,
  line1,
  line2,
  description,
}: {
  badge: string;
  line1: string;
  line2: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass mb-5 flex w-fit items-center gap-2 rounded-full px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
        <span className="font-mono text-xs text-muted">{badge}</span>
      </div>
      <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
        <span className="block">{line1}</span>
        <span className="block text-muted">{line2}</span>
      </h2>
      <p className="mt-5 max-w-xl text-sm text-muted sm:text-base">{description}</p>
    </motion.div>
  );
}

function ServiceCard({
  icon,
  tag,
  title,
  description,
  details,
  compact,
  arrow,
  delay,
  className,
}: {
  icon: React.ReactNode;
  tag?: string;
  title: string;
  description: string;
  details?: string;
  compact?: boolean;
  arrow?: boolean;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={`glass group relative flex flex-col justify-between overflow-hidden rounded-[18px] p-7 transition-colors hover:border-accent/30 sm:p-9 ${
        compact ? "min-h-[220px]" : "min-h-[340px]"
      } ${className ?? ""}`}
    >
      <div className="flex items-start justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-2 text-foreground">
          {icon}
        </span>
        {tag && (
          <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] tracking-wide text-muted">
            {tag}
          </span>
        )}
        {arrow && (
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight size={16} />
          </span>
        )}
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{description}</p>

        {details && (
          <button className="mt-6 flex items-center gap-1.5 text-sm font-medium text-foreground/90 transition-colors hover:text-accent-2">
            [ {details} ] <ArrowRight size={14} />
          </button>
        )}
      </div>
    </motion.div>
  );
}
