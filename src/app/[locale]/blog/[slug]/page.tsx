import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { BLOG_SLUGS, BLOG_META, isBlogSlug } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogIllustration from "@/components/BlogIllustration";

const GRADIENTS: Record<string, string> = {
  "why-nextjs":
    "from-[#e4defc] via-[#d7cffb] to-[#c9bef8] dark:from-[#3a2f6b] dark:via-[#241c3f] dark:to-[#0f0c1a]",
  "mvp-for-startups":
    "from-[#d3ecf7] via-[#bfe3f3] to-[#a9d8ee] dark:from-[#0d2b3e] dark:via-[#0b2130] dark:to-[#0a0f14]",
  "web-design-trends-2026":
    "from-[#ecdff5] via-[#e2cdf0] to-[#d6b9ea] dark:from-[#2f1e3f] dark:via-[#1c1330] dark:to-[#0c0a14]",
};

const ICON_COLORS: Record<string, string> = {
  "why-nextjs": "text-[#4a3d8f] dark:text-white/90",
  "mvp-for-startups": "text-[#0d6e94] dark:text-white/90",
  "web-design-trends-2026": "text-[#6b2e8f] dark:text-white/90",
};

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isBlogSlug(slug)) return {};

  const t = await getTranslations({ locale, namespace: "blog" });
  const title = t(`posts.${slug}.title`);
  const description = t(`posts.${slug}.excerpt`);

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${locale}/blog/${slug}` },
    openGraph: { title, description, url: `${SITE_URL}/${locale}/blog/${slug}`, type: "article" },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isBlogSlug(slug)) {
    notFound();
  }

  const t = await getTranslations("blog");
  const locale = await getLocale();
  const meta = BLOG_META[slug];
  const paragraphs = t.raw(`posts.${slug}.content`) as string[];

  const dateFormatter = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const otherSlugs = BLOG_SLUGS.filter((s) => s !== slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <article className="relative py-20 sm:py-28">
          <div className="container-app max-w-3xl">
            <Link
              href="/blog"
              className="glass flex w-fit items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
            >
              <ArrowLeft size={14} /> {t("backToBlog")}
            </Link>

            <div className="mt-8 flex items-center gap-4 font-mono text-xs text-muted">
              <span className="rounded-full bg-surface-2 px-3 py-1.5 text-foreground/80">
                {t(`categories.${meta.category}`)}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={13} /> {dateFormatter.format(new Date(meta.date))}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} /> {meta.readTime} {t("readTime")}
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t(`posts.${slug}.title`)}
            </h1>

            <div
              className={`mt-8 flex h-56 items-center justify-center rounded-2xl bg-gradient-to-br p-10 sm:h-72 ${GRADIENTS[slug]} ${ICON_COLORS[slug]}`}
            >
              <BlogIllustration slug={slug} />
            </div>

            <div className="prose-content mt-10 flex flex-col gap-5">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                  {p}
                </p>
              ))}
            </div>

            {otherSlugs.length > 0 && (
              <div className="mt-16 border-t border-border pt-10">
                <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
                  {t("relatedTitle")}
                </h2>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {otherSlugs.map((s) => (
                    <Link
                      key={s}
                      href={`/blog/${s}`}
                      className="glass group flex items-center justify-between gap-3 rounded-2xl p-5 transition-colors hover:border-accent/30"
                    >
                      <span className="text-sm font-semibold">{t(`posts.${s}.title`)}</span>
                      <ArrowRight
                        size={16}
                        className="shrink-0 transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
