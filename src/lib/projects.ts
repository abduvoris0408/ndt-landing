export const PROJECT_KEYS = ["p1", "p2", "p3", "p4", "p5"] as const;
export type ProjectKey = (typeof PROJECT_KEYS)[number];

export function isProjectKey(value: string): value is ProjectKey {
  return (PROJECT_KEYS as readonly string[]).includes(value);
}

export const PROJECT_IMAGES: Partial<Record<ProjectKey, string>> = {
  p1: "/portfolio/intalim.png",
  p2: "/portfolio/eavtotalim.png",
  p3: "/portfolio/ustalar.jpg",
};
