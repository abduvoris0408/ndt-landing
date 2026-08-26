export const BLOG_SLUGS = ["why-nextjs", "mvp-for-startups", "web-design-trends-2026"] as const;
export type BlogSlug = (typeof BLOG_SLUGS)[number];

export function isBlogSlug(value: string): value is BlogSlug {
  return (BLOG_SLUGS as readonly string[]).includes(value);
}

export const BLOG_META: Record<BlogSlug, { date: string; readTime: string; category: string }> = {
  "why-nextjs": { date: "2026-06-12", readTime: "6", category: "Engineering" },
  "mvp-for-startups": { date: "2026-07-03", readTime: "8", category: "Strategy" },
  "web-design-trends-2026": { date: "2026-08-01", readTime: "5", category: "Design" },
};
