import { PageHero } from "@/components/ui/PageHero";
import { FleetGrid } from "@/components/sections/FleetGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import { localSeo, pageSeoDescription } from "@/lib/seo/local";
import { brand } from "@/lib/constants/brand";
import { siteImages } from "@/lib/constants/images";

export const metadata = createPageMetadata({
  title: "Denizli Hafriyat Ekskavatör Filosu",
  description: pageSeoDescription(brand.pages.fleet.description),
  path: "/filo",
  image: siteImages.fleetHero,
  keywords: ["denizli ekskavatör kiralama", "denizli hafriyat filo", ...localSeo.defaultKeywords],
});

export default function FleetPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Ana Sayfa", path: "/" }, { name: "Filo", path: "/filo" }]} />
      <PageHero
        eyebrow="Filo & Ekipman"
        title={brand.pages.fleet.title}
        description={brand.pages.fleet.description}
        image={siteImages.fleetHero}
        imageAlt="Ekskavatör hafriyat filosu — SMF Hafriyat"
      />
      <FleetGrid />
      <CtaBanner />
    </>
  );
}
