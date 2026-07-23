import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "SMF Hafriyat",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#f5a020",
    lang: "tr",
    orientation: "portrait-primary",
    categories: ["business", "utilities"],
    icons: [
      {
        src: siteConfig.logo,
        sizes: "1024x1024",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
