import { PageHero } from "@/components/ui/PageHero";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { AboutStoryGrid } from "@/components/sections/AboutStoryGrid";
import { ImageMarquee } from "@/components/sections/ImageMarquee";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import { aboutContent } from "@/lib/constants/content";
import { siteImages } from "@/lib/constants/images";

export const metadata = createPageMetadata({
  title: "Hakkımızda",
  description: "SMF Hafriyat — Denizli'de ekskavatör ile hafriyat, yıkım, derin temel kazısı ve enkaz kaldırma. 1998'den bu yana Ege Bölgesi.",
  path: "/hakkimizda",
  image: siteImages.about,
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Ana Sayfa", path: "/" }, { name: "Hakkımızda", path: "/hakkimizda" }]} />
      <PageHero
        eyebrow="Hakkımızda"
        title="Toprağın altında bıraktığımız imza"
        description={`${aboutContent.foundedYear}'den bu yana ekskavatör filomuzla derin temel kazısı, yıkım ve enkaz kaldırma — Ege'nin güvenilir hafriyat markası.`}
        image={siteImages.about}
        imageAlt="Ekskavatör hafriyat sahası — SMF Hafriyat Denizli"
      />
      <StatsCounter />
      <AboutStoryGrid />
      <ImageMarquee />
      <TeamGrid />
      <CertificatesSection />
    </>
  );
}
