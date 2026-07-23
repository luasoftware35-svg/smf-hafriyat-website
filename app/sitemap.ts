import type { MetadataRoute } from "next";
import { districtPages } from "@/lib/constants/districts";
import { projects } from "@/lib/constants/projects";
import { seoLandingPages } from "@/lib/constants/seo-pages";
import { services } from "@/lib/constants/services";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://smfhafriyat.com";

function entry(
  path: string,
  options: {
    lastModified?: Date;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  },
): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}${path}`,
    lastModified: options.lastModified ?? new Date(),
    changeFrequency: options.changeFrequency,
    priority: options.priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    entry("/", { changeFrequency: "weekly", priority: 1 }),
    entry("/hakkimizda", { changeFrequency: "monthly", priority: 0.8 }),
    entry("/hizmetler", { changeFrequency: "weekly", priority: 0.9 }),
    entry("/filo", { changeFrequency: "monthly", priority: 0.8 }),
    entry("/projeler", { changeFrequency: "weekly", priority: 0.8 }),
    entry("/hizmet-bolgeleri", { changeFrequency: "monthly", priority: 0.8 }),
    entry("/iletisim", { changeFrequency: "monthly", priority: 0.9 }),
  ];

  const seoPages = seoLandingPages.map((page) =>
    entry(page.path, { changeFrequency: "monthly", priority: 0.85 }),
  );

  const servicePages = services.map((service) =>
    entry(`/hizmetler/${service.slug}`, { changeFrequency: "monthly", priority: 0.8 }),
  );

  const districtLandingPages = districtPages.map((district) =>
    entry(`/hizmet-bolgeleri/${district.slug}`, { changeFrequency: "monthly", priority: 0.75 }),
  );

  const projectPages = projects.map((project) =>
    entry(`/projeler/${project.slug}`, { changeFrequency: "monthly", priority: 0.7 }),
  );

  const legalPages: MetadataRoute.Sitemap = [
    entry("/gizlilik-politikasi", { changeFrequency: "yearly", priority: 0.5 }),
    entry("/kvkk", { changeFrequency: "yearly", priority: 0.5 }),
  ];

  return [
    ...corePages,
    ...seoPages,
    ...servicePages,
    ...districtLandingPages,
    ...projectPages,
    ...legalPages,
  ];
}
