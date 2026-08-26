"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Calendar, Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { BLOG_SLUGS, BLOG_META } from "@/lib/blog";
import { formatDate } from "@/lib/formatDate";
import BlogIllustration from "./BlogIllustration";

const GRADIENTS = [
  "from-[#e4defc] via-[#d7cffb] to-[#c9bef8] dark:from-[#3a2f6b] dark:via-[#241c3f] dark:to-[#0f0c1a]",
  "from-[#d3ecf7] via-[#bfe3f3] to-[#a9d8ee] dark:from-[#0d2b3e] dark:via-[#0b2130] dark:to-[#0a0f14]",
  "from-[#ecdff5] via-[#e2cdf0] to-[#d6b9ea] dark:from-[#2f1e3f] dark:via-[#1c1330] dark:to-[#0c0a14]",
];

const ICON_COLORS = [
  "text-[#4a3d8f] dark:text-white/90",
  "text-[#0d6e94] dark:text-white/90",
  "text-[#6b2e8f] dark:text-white/90",
];

export default function Blog({ standalone = false }: { standalone?: boolean }) {
  const t = useTranslations("blog");
  const tNav = useTranslations("nav");
  const locale = useLocale();

  const posts = BLOG_SLUGS.map((slug) => ({
    slug,
    ...BLOG_META[slug],
    title: t(`posts.${slug}.title`),
    excerpt: t(`posts.${slug}.excerpt`),
  }));

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-app">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass mb-5 flex w-fit items-center gap-2 rounded-full px-3 py-1.5">
              <ChevronRight size={12} className="text-accent-2" />
              <span className="font-mono text-xs text-muted">{t("badge")}</span>
            </div>
            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t("title")} <span className="text-muted">{t("titleAccent")}</span>
            </h2>
            {!standalone && (
              <p className="mt-4 max-w-xl text-sm text-muted sm:text-base">{t("description")}</p>
            )}
          </motion.div>

          {!standalone && (
            <Link
              href="/blog"
              className="glass flex w-fit shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
            >
              {tNav("blog")} <ArrowRight size={14} />
            </Link>
          )}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="glass group flex h-full flex-col overflow-hidden rounded-[18px] transition-colors hover:border-accent/30"
              >
                <div
                  className={`relative flex h-40 items-center justify-center bg-gradient-to-br p-6 ${GRADIENTS[i % GRADIENTS.length]} ${ICON_COLORS[i % ICON_COLORS.length]}`}
                >
                  <BlogIllustration slug={post.slug} />
                  <span className="absolute left-4 top-4 rounded-full bg-white/40 px-3 py-1 font-mono text-[10px] text-black/70 backdrop-blur-sm dark:bg-black/30 dark:text-white/80">
                    {t(`categories.${post.category}`)}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center gap-4 font-mono text-[11px] text-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} /> {formatDate(post.date, locale)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} /> {post.readTime} {t("readTime")}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold leading-snug sm:text-xl">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>

                  <span className="mt-5 flex w-fit items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent-2">
                    {t("readMore")} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
