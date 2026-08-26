import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";
import { PROJECT_KEYS } from "@/lib/projects";
import { BLOG_SLUGS } from "@/lib/blog";

const PATHS = [
  "",
  "/services",
  "/portfolio",
  "/about",
  "/blog",
  ...PROJECT_KEYS.map((k) => `/portfolio/${k}`),
  ...BLOG_SLUGS.map((s) => `/blog/${s}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`])
        ),
      },
    }))
  );
}
