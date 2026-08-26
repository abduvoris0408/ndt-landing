import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.home" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#08090a",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(124,92,255,0.35), transparent 50%), radial-gradient(circle at 10% 90%, rgba(79,209,255,0.2), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 28,
            color: "#94979f",
            fontFamily: "monospace",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#4fd1ff",
              display: "flex",
            }}
          />
          Next Developers Team_
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 64,
            fontWeight: 700,
            color: "#f2f3f5",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          {t("title")}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "#94979f",
            maxWidth: 860,
          }}
        >
          {t("description")}
        </div>
      </div>
    ),
    { ...size }
  );
}
