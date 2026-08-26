import { getTranslations } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <>
      <Navbar />
      <main className="flex flex-1 items-center justify-center py-24">
        <div className="container-app text-center">
          <div className="glass mx-auto mb-6 flex w-fit items-center gap-2 rounded-full px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
            <span className="font-mono text-xs text-muted">{t("badge")}</span>
          </div>

          <h1 className="font-mono text-7xl font-bold tracking-tight sm:text-9xl">
            <span className="text-gradient">404</span>
          </h1>

          <h2 className="mt-6 text-2xl font-bold sm:text-3xl">{t("title")}</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted sm:text-base">
            {t("description")}
          </p>

          <Link
            href="/"
            className="glow group mx-auto mt-9 flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
            {t("cta")}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
