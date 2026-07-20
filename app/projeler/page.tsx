import { PageHero } from "@/components/ui/PageHero";
import { ProjectsPageContent } from "@/components/sections/ProjectsPageContent";
import { ImageMarquee } from "@/components/sections/ImageMarquee";
import { BreadcrumbJsonLd, ProjectsItemListJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteImages } from "@/lib/constants/images";

export const metadata = createPageMetadata({
  title: "Projelerimiz",
  description: "Denizli ve Ege Bölgesi'nde tamamladığımız hafriyat, yıkım ve altyapı projeleri. Öncesi/sonrası görselleri.",
  path: "/projeler",
  image: siteImages.fleetHero,
});

export default function ProjectsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Ana Sayfa", path: "/" }, { name: "Projeler", path: "/projeler" }]} />
      <ProjectsItemListJsonLd />
      <PageHero
        eyebrow="Projeler"
        title="Tamamlanan hafriyat ve yıkım projeleri"
        description="Ekskavatör kazısı, enkaz kaldırma ve kepçe tesviye — öncesi/sonrası saha görselleri."
        image={siteImages.fleetHero}
        imageAlt="Ekskavatör hafriyat projesi — SMF Hafriyat"
      />
      <ProjectsPageContent />
      <ImageMarquee />
    </>
  );
}
