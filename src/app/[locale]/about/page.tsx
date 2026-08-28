import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SITE_URL } from "@/lib/site";
import TerminalStats from "@/components/TerminalStats";
import About from "@/components/About";
import ContactCta from "@/components/ContactCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.about" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `${SITE_URL}/${locale}/about` },
    openGraph: { title: t("title"), description: t("description"), url: `${SITE_URL}/${locale}/about` },
  };
}

export default function AboutPage() {
  return (
    <main className="flex-1 pt-16">
      <TerminalStats />
      <About standalone />
      <ContactCta />
    </main>
  );
}
