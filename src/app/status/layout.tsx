import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Services Status",
  description: "Real-time status of major cloud platforms including AWS, Azure, GCP, GitHub, GitLab, and Oracle Cloud.",
  openGraph: {
    title: "Cloud Services Status | Vyomak",
    description: "Real-time status of major cloud platforms including AWS, Azure, GCP, GitHub, GitLab, and Oracle Cloud.",
    url: "https://vyomak.com/status",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Services Status | Vyomak",
    description: "Real-time status of major cloud platforms including AWS, Azure, GCP, GitHub, GitLab, and Oracle Cloud.",
  },
  alternates: {
    canonical: "https://vyomak.com/status/",
  },
};

export default function StatusLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
