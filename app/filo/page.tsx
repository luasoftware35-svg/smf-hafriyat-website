import { PageHero } from "@/components/ui/PageHero";
import { FleetGrid } from "@/components/sections/FleetGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteImages } from "@/lib/constants/images";

export const metadata = createPageMetadata({
  title: "Filo & Ekipman",
  description: "SMF Hafriyat ekskavatör filosu — kepçe, loder, damper, mini ekskavatör. Hafriyat, yıkım ve enkaz kaldırma için Denizli.",
  path: "/filo",
  image: siteImages.fleetHero,
});

export default function FleetPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Ana Sayfa", path: "/" }, { name: "Filo", path: "/filo" }]} />
      <PageHero
        eyebrow="Filo & Ekipman"
        title="Ekskavatör, kepçe ve damper filomuz"
        description="Hafriyat kazısı, yıkım enkaz kaldırma ve moloz nakliyesi için bakımlı, sigortalı ve operatörlü makineler — taşeron yok."
        image={siteImages.fleetHero}
        imageAlt="Ekskavatör hafriyat filosu — SMF Hafriyat"
      />
      <FleetGrid />
      <CtaBanner />
    </>
  );
}
