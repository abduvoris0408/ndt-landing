"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

export default function ContactCta() {
  const t = useTranslations("contact");
  const tCta = useTranslations("cta");

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass-strong relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(500px circle at 50% 0%, rgba(124,92,255,0.2), transparent 70%)",
            }}
          />

          <div className="relative">
            <div className="glass mx-auto mb-6 flex w-fit items-center gap-2 rounded-full px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
              <span className="font-mono text-xs text-muted">{t("badge")}</span>
            </div>

            <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              {tCta("title")}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm text-muted sm:text-base">
              {tCta("description")}
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-10 flex max-w-xl flex-col gap-4 text-left"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder={t("formName")}
                  className="glass rounded-xl border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent/50 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder={t("formEmail")}
                  className="glass rounded-xl border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent/50 focus:outline-none"
                />
              </div>
              <textarea
                placeholder={t("formMessage")}
                rows={4}
                className="glass rounded-xl border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent/50 focus:outline-none"
              />
              <button
                type="submit"
                className="glow group mx-auto mt-2 flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
              >
                <Send size={15} />
                {t("formSubmit")}
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
