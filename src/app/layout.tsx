import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Developers Team",
  description: "Next Developers Team — digital solutions studio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
