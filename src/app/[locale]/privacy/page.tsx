import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SITE_URL } from "@/lib/site";
import PrivacyContent from "@/components/PrivacyContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.privacy" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `${SITE_URL}/${locale}/privacy` },
    openGraph: { title: t("title"), description: t("description"), url: `${SITE_URL}/${locale}/privacy` },
  };
}

export default function PrivacyPage() {
  return (
    <main className="flex-1 pt-16">
      <PrivacyContent />
    </main>
  );
}
