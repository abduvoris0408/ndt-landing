import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowLeft, ArrowRight, Terminal } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { PROJECT_KEYS, isProjectKey } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return PROJECT_KEYS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isProjectKey(slug)) return {};

  const t = await getTranslations({ locale, namespace: "portfolio" });
  const title = t(`items.${slug}.title`);
  const description = t(`items.${slug}.description`);

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${locale}/portfolio/${slug}` },
    openGraph: { title, description, url: `${SITE_URL}/${locale}/portfolio/${slug}` },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isProjectKey(slug)) {
    notFound();
  }

  const t = await getTranslations("portfolio");
  const stack = t.raw(`items.${slug}.stack`) as string[];
  const results = t.raw(`items.${slug}.results`) as { value: string; label: string }[];

  return (
    <main className="flex-1 pt-16">
        <section className="relative py-20 sm:py-28">
          <div className="container-app">
            <Link
              href="/portfolio"
              className="glass flex w-fit items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
            >
              <ArrowLeft size={14} /> {t("backToPortfolio")}
            </Link>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <span className="rounded-full bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted">
                {t(`items.${slug}.tag`)}
              </span>
              <span className="flex items-center gap-2 font-mono text-xs text-muted">
                <Terminal size={13} /> FILE: {t(`items.${slug}.index`)}
              </span>
            </div>

            <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t(`items.${slug}.title`)}
            </h1>
            <p className="mt-5 max-w-2xl text-sm text-muted sm:text-base">
              {t(`items.${slug}.description`)}
            </p>

            <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="glass rounded-2xl p-7 sm:p-8">
                <p className="font-mono text-xs text-accent-2">{t("challengeLabel")}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 sm:text-base">
                  {t(`items.${slug}.challenge`)}
                </p>
              </div>
              <div className="glass rounded-2xl p-7 sm:p-8">
                <p className="font-mono text-xs text-accent-2">{t("solutionLabel")}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90 sm:text-base">
                  {t(`items.${slug}.solution`)}
                </p>
              </div>
            </div>

            <div className="mt-5 glass rounded-2xl p-7 sm:p-8">
              <p className="font-mono text-xs text-accent-2">{t("stackLabel")}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-surface-2 px-3 py-1.5 font-mono text-xs text-foreground/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-14">
              <p className="font-mono text-xs text-accent-2">{t("resultsLabel")}</p>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {results.map((r) => (
                  <div key={r.label} className="glass rounded-2xl p-6 text-center sm:p-7">
                    <div className="text-3xl font-bold text-gradient sm:text-4xl">{r.value}</div>
                    <div className="mt-2 text-sm text-muted">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-strong mt-16 flex flex-col items-center gap-5 rounded-2xl px-6 py-12 text-center sm:px-12">
              <h2 className="text-2xl font-bold sm:text-3xl">{t("ctaTitle")}</h2>
              <Link
                href="/#contact"
                className="glow group flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
              >
                {t("ctaButton")}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
    </main>
  );
}
