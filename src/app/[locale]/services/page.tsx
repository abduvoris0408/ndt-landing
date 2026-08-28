import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SITE_URL } from "@/lib/site";
import ServicesHero from "@/components/ServicesHero";
import Services from "@/components/Services";
import ContactCta from "@/components/ContactCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.services" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `${SITE_URL}/${locale}/services` },
    openGraph: { title: t("title"), description: t("description"), url: `${SITE_URL}/${locale}/services` },
  };
}

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <ServicesHero />
      <Services standalone />
      <ContactCta />
    </main>
  );
}
