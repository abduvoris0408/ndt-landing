export const PROJECT_KEYS = ["p1", "p2", "p3", "p4", "p5"] as const;
export type ProjectKey = (typeof PROJECT_KEYS)[number];

export function isProjectKey(value: string): value is ProjectKey {
  return (PROJECT_KEYS as readonly string[]).includes(value);
}
