import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants/site";
import { services } from "@/lib/constants/services";
import { projects } from "@/lib/constants/projects";

const BUILD_DATE = new Date("2026-07-20");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const corePages: MetadataRoute.Sitemap = [
    { url: `${base}`, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/hizmetler`, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/filo`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projeler`, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/hizmet-bolgeleri`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/hakkimizda`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iletisim`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.9 },
  ];

  const servicePages = services.map((service) => ({
    url: `${base}/hizmetler/${service.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projectPages = projects.map((project) => ({
    url: `${base}/projeler/${project.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...corePages, ...servicePages, ...projectPages];
}
