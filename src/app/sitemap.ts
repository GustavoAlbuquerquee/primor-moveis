import type { MetadataRoute } from "next";

const baseUrl = "https://primormoveis.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${baseUrl}/projetos`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
