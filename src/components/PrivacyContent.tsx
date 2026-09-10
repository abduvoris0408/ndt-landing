import { getTranslations } from "next-intl/server";
import { ShieldCheck } from "lucide-react";

const SECTION_KEYS = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"] as const;
const DEV_INFO_KEYS = ["developer", "product", "country", "address", "status", "website", "privacyContact", "supportContact", "phone"] as const;

export default async function PrivacyContent() {
  const t = await getTranslations("privacy");

  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-app max-w-3xl">
        <div className="glass mb-5 flex w-fit items-center gap-2 rounded-full px-3 py-1.5">
          <ShieldCheck size={14} className="text-accent-2" />
          <span className="font-mono text-xs text-muted">{t("badge")}</span>
        </div>

        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-3 font-mono text-xs text-muted">{t("updated")}</p>
        <p className="mt-5 text-sm text-muted sm:text-base">{t("intro")}</p>

        <div className="mt-12 flex flex-col gap-10">
          <div>
            <h2 className="text-lg font-bold tracking-tight sm:text-xl">
              {t("devInfo.title")}
            </h2>
            <div className="glass mt-4 grid grid-cols-1 gap-x-8 gap-y-3 rounded-2xl p-5 sm:grid-cols-2 sm:p-6">
              {DEV_INFO_KEYS.map((key) => (
                <div key={key} className="flex flex-col gap-0.5 text-sm sm:text-base">
                  <span className="text-xs text-muted">{t(`devInfo.${key}.label`)}</span>
                  <span className="font-medium text-foreground/90">{t(`devInfo.${key}.value`)}</span>
                </div>
              ))}
            </div>
          </div>

          {SECTION_KEYS.map((key) => {
            const paragraphs = t.raw(`sections.${key}.content`) as string[];
            return (
              <div key={key}>
                <h2 className="text-lg font-bold tracking-tight sm:text-xl">
                  {t(`sections.${key}.title`)}
                </h2>
                <div className="mt-3 flex flex-col gap-3">
                  {paragraphs.map((p, i) => (
                    <p key={i} className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
