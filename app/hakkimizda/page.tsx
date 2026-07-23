import { PageHero } from "@/components/ui/PageHero";
import { ClientReferencesSection } from "@/components/sections/ClientReferencesSection";
import { StatsCounterSection } from "@/components/sections/StatsCounterSection";
import { TeamGridSection } from "@/components/sections/TeamGridSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { AboutStoryGrid } from "@/components/sections/AboutStoryGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ImageMarquee } from "@/components/sections/ImageMarquee";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import { localSeo, pageSeoDescription } from "@/lib/seo/local";
import { brand } from "@/lib/constants/brand";
import { siteImages } from "@/lib/constants/images";

export const metadata = createPageMetadata({
  title: "Denizli Hafriyat Firması — Hakkımızda",
  description: pageSeoDescription(brand.pages.about.description),
  path: "/hakkimizda",
  image: siteImages.about,
  keywords: ["denizli hafriyat firması", "smf hafriyat denizli", ...localSeo.defaultKeywords],
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Ana Sayfa", path: "/" }, { name: "Hakkımızda", path: "/hakkimizda" }]} />
      <PageHero
        eyebrow="Hakkımızda"
        title={brand.pages.about.title}
        description={brand.pages.about.description}
        image={siteImages.about}
        imageAlt="Ekskavatör hafriyat sahası — SMF Hafriyat Denizli"
      />
      <StatsCounterSection />
      <AboutStoryGrid />
      <ClientReferencesSection />
      <ImageMarquee />
      <TeamGridSection />
      <CertificatesSection />
      <CtaBanner />
    </>
  );
}
