import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants/site";
import { siteImages } from "@/lib/constants/images";
import { absoluteUrl } from "@/lib/seo/urls";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
};

function buildSocialTitle(title: string, path: string): string {
  if (path === "/") return title;
  if (title.includes(siteConfig.name)) return title;
  return `${title} | ${siteConfig.name}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = siteImages.og,
  noIndex = false,
  keywords,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const socialTitle = buildSocialTitle(title, path);

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    keywords: keywords ?? [
      "hafriyat denizli",
      "ekskavatör kazı",
      "yıkım denizli",
      "enkaz kaldırma",
      "SMF Hafriyat",
    ],
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: socialTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageUrl],
    },
  };
}
