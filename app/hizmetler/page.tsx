import { PageHero } from "@/components/ui/PageHero";
import { ServicesGridAnimated } from "@/components/sections/ServicesPageGrid";
import { BreadcrumbJsonLd, ServicesItemListJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteImages } from "@/lib/constants/images";

export const metadata = createPageMetadata({
  title: "Hizmetlerimiz",
  description: "Derin temel kazısı, yıkım enkaz kaldırma, ekskavatör kiralama, kanal kazısı ve moloz nakliyesi. Denizli ve Ege Bölgesi.",
  path: "/hizmetler",
  image: siteImages.hero,
});

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Ana Sayfa", path: "/" }, { name: "Hizmetler", path: "/hizmetler" }]} />
      <ServicesItemListJsonLd />
      <PageHero
        eyebrow="Hizmetler"
        title="Ekskavatör ile hafriyat ve yıkım hizmetleri"
        description="Derin temelli enkaz kaldırma, kepçe kazısı, kanal hafriyatı ve moloz nakliyesi — 10 hizmet kategorisinde kendi filomuzla."
        image={siteImages.hero}
        imageAlt="Ekskavatör kepçe ile hafriyat kazısı — SMF Hafriyat"
      />
      <ServicesGridAnimated />
    </>
  );
}
