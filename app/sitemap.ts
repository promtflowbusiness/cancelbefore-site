import type { MetadataRoute } from "next";
import { services } from "./cancel/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const cancelGuides: MetadataRoute.Sitemap = services.map((service) => ({
    url: `https://cancelbefore.app/cancel/${service.slug}`,
    lastModified: new Date("2026-05-27"),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://cancelbefore.app",
      lastModified: new Date("2026-05-27"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://cancelbefore.app/pricing",
      lastModified: new Date("2026-05-27"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://cancelbefore.app/privacy",
      lastModified: new Date("2026-05-27"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://cancelbefore.app/cancel",
      lastModified: new Date("2026-05-27"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...cancelGuides,
  ];
}
