"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Cpu, Handshake, Target, ArrowRight, BadgeCheck, Expand } from "lucide-react";
import { Link } from "@/i18n/navigation";
import DocumentPreviewModal from "./DocumentPreviewModal";

const VALUE_KEYS = ["v1", "v2", "v3", "v4"] as const;
const ICONS = [ShieldCheck, Cpu, Handshake, Target];

const DOCUMENTS = [
  { src: "/shartnoma.jpg", key: "registration" },
  { src: "/certificate.jpg", key: "itpark" },
] as const;

export default function About({ standalone = false }: { standalone?: boolean }) {
  const t = useTranslations("about");
  const tNav = useTranslations("nav");
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);

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

        {standalone && (
          <div className="mt-16">
            <span className="flex w-fit items-center gap-2 rounded-full bg-surface-2 px-3 py-1.5 text-accent-2">
              <BadgeCheck size={14} />
              <span className="font-mono text-xs">{t("documents.badge")}</span>
            </span>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {DOCUMENTS.map((doc, i) => (
                <motion.div
                  key={doc.src}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass flex flex-col items-center gap-6 rounded-3xl p-6 sm:flex-row sm:p-8"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setPreview({ src: doc.src, alt: t(`documents.${doc.key}.alt`) })
                    }
                    className="group relative aspect-1280/905 w-full max-w-56 shrink-0 overflow-hidden rounded-2xl border border-border"
                  >
                    <Image
                      src={doc.src}
                      alt={t(`documents.${doc.key}.alt`)}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 220px"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100">
                      <Expand size={20} className="text-white" />
                    </span>
                  </button>
                  <div className="flex flex-1 flex-col justify-center text-center sm:text-left">
                    <h3 className="text-lg font-bold tracking-tight sm:text-xl">
                      {t(`documents.${doc.key}.title`)}
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      {t(`documents.${doc.key}.description`)}
                    </p>
                    <p className="mt-3 font-mono text-xs text-muted">
                      {t(`documents.${doc.key}.meta`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {preview && (
        <DocumentPreviewModal
          src={preview.src}
          alt={preview.alt}
          onClose={() => setPreview(null)}
        />
      )}
    </section>
  );
}
