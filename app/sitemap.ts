import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants/site";
import { services } from "@/lib/constants/services";
import { projects } from "@/lib/constants/projects";
import { districtPages } from "@/lib/constants/districts";
import { seoLandingPages } from "@/lib/constants/seo-pages";

const BUILD_DATE = new Date("2026-07-22");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const corePages: MetadataRoute.Sitemap = [
    { url: `${base}`, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/hizmetler`, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/filo`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projeler`, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/hizmet-bolgeleri`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/hakkimizda`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iletisim`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.95 },
  ];

  const seoPages = seoLandingPages.map((page) => ({
    url: `${base}${page.path}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.92,
  }));

  const districtLandingPages = districtPages.map((district) => ({
    url: `${base}/hizmet-bolgeleri/${district.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.88,
  }));

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

  return [...corePages, ...seoPages, ...districtLandingPages, ...servicePages, ...projectPages];
}
