import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { BLOG_SLUGS, BLOG_META, isBlogSlug, type BlogSlug } from "@/lib/blog";
import { formatDate } from "@/lib/formatDate";
import { SITE_URL } from "@/lib/site";
import BlogIllustration from "@/components/BlogIllustration";

const POST_IMAGES: Partial<Record<BlogSlug, string>> = {
  "face-id-attendance-case-study": "/portfolio/eavtotalim.png",
  "eavtotalim-case-study": "/portfolio/intalim.png",
  "ustalar-marketplace-case-study": "/portfolio/ustalar.jpg",
};

const GRADIENTS: Record<string, string> = {
  "face-id-attendance-case-study":
    "from-[#d7f5e3] via-[#c3eed6] to-[#a9e3c3] dark:from-[#0f2e1e] dark:via-[#0b2317] dark:to-[#0a140f]",
  "eavtotalim-case-study":
    "from-[#e4defc] via-[#d7cffb] to-[#c9bef8] dark:from-[#3a2f6b] dark:via-[#241c3f] dark:to-[#0f0c1a]",
  "ustalar-marketplace-case-study":
    "from-[#fbe9d3] via-[#f5dcb8] to-[#eecda0] dark:from-[#3a2a12] dark:via-[#241a0c] dark:to-[#140f0a]",
};

const ICON_COLORS: Record<string, string> = {
  "face-id-attendance-case-study": "text-[#1e6b46] dark:text-white/90",
  "eavtotalim-case-study": "text-[#4a3d8f] dark:text-white/90",
  "ustalar-marketplace-case-study": "text-[#7a4f24] dark:text-white/90",
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

  const otherSlugs = BLOG_SLUGS.filter((s) => s !== slug).slice(0, 2);

  return (
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
                <Calendar size={13} /> {formatDate(meta.date, locale)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} /> {meta.readTime} {t("readTime")}
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t(`posts.${slug}.title`)}
            </h1>

            {POST_IMAGES[slug] ? (
              <div className="glass relative mt-8 h-56 overflow-hidden rounded-2xl sm:h-96">
                <Image
                  src={POST_IMAGES[slug]!}
                  alt={t(`posts.${slug}.title`)}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
              </div>
            ) : (
              <div
                className={`mt-8 flex h-56 items-center justify-center rounded-2xl bg-gradient-to-br p-10 sm:h-72 ${GRADIENTS[slug]} ${ICON_COLORS[slug]}`}
              >
                <BlogIllustration slug={slug} />
              </div>
            )}

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
  );
}
