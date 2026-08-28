export const BLOG_SLUGS = [
  "face-id-attendance-case-study",
  "eavtotalim-case-study",
  "ustalar-marketplace-case-study",
] as const;
export type BlogSlug = (typeof BLOG_SLUGS)[number];

export function isBlogSlug(value: string): value is BlogSlug {
  return (BLOG_SLUGS as readonly string[]).includes(value);
}

export const BLOG_META: Record<BlogSlug, { date: string; readTime: string; category: string }> = {
  "face-id-attendance-case-study": { date: "2026-08-20", readTime: "7", category: "Case Study" },
  "eavtotalim-case-study": { date: "2026-08-24", readTime: "6", category: "Case Study" },
  "ustalar-marketplace-case-study": { date: "2026-08-27", readTime: "7", category: "Case Study" },
};
