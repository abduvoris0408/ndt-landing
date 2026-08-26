import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SITE_URL } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import ContactCta from "@/components/ContactCta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.blog" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `${SITE_URL}/${locale}/blog` },
    openGraph: { title: t("title"), description: t("description"), url: `${SITE_URL}/${locale}/blog` },
  };
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <Blog standalone />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
