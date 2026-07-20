import { siteConfig } from "@/lib/constants/site";

/** Relative path veya tam URL → mutlak site URL'si (JSON-LD, OG için) */
export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
