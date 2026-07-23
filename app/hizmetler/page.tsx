import { PageHero } from "@/components/ui/PageHero";
import { ServicesPageSection } from "@/components/sections/ServicesPageSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BreadcrumbJsonLd, ServicesItemListJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import { localSeo, pageSeoDescription } from "@/lib/seo/local";
import { brand } from "@/lib/constants/brand";
import { siteImages } from "@/lib/constants/images";

export const metadata = createPageMetadata({
  title: "Denizli Hafriyat Hizmetleri",
  description: pageSeoDescription(brand.pages.services.description),
  path: "/hizmetler",
  image: siteImages.hero,
  keywords: ["denizli hafriyat hizmetleri", ...localSeo.defaultKeywords],
});

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Ana Sayfa", path: "/" }, { name: "Hizmetler", path: "/hizmetler" }]} />
      <ServicesItemListJsonLd />
      <PageHero
        eyebrow="Hizmetler"
        title={brand.pages.services.title}
        description={brand.pages.services.description}
        image={siteImages.hero}
        imageAlt="Ekskavatör kepçe ile hafriyat kazısı — SMF Hafriyat"
      />
      <ServicesPageSection />
      <ProcessTimeline />
      <CtaBanner />
    </>
  );
}
