import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Services Status",
  description: "Real-time status of major cloud platforms including AWS, Azure, GCP, GitHub, GitLab, and Oracle Cloud.",
  openGraph: {
    title: "Cloud Services Status | Vyomak",
    description: "Real-time status of major cloud platforms including AWS, Azure, GCP, GitHub, GitLab, and Oracle Cloud.",
    url: "https://vyomak.com/status",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Cloud Services Status" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Services Status | Vyomak",
    description: "Real-time status of major cloud platforms including AWS, Azure, GCP, GitHub, GitLab, and Oracle Cloud.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "https://vyomak.com/status/",
  },
};

export default function StatusLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
