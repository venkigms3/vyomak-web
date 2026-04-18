import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vyomak.com";
  const today = new Date().toISOString().split("T")[0];

  return [
    {
      url: `${baseUrl}/`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/getting-started-nextjs/`,
      lastModified: "2024-02-13",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/cloud-solutions/`,
      lastModified: "2024-02-12",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/status/`,
      lastModified: today,
      changeFrequency: "daily",
      priority: 0.6,
    },
  ];
}
