import { ContactSection } from "@/components/sections/ContactSection";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbJsonLd, ContactPageJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import { localSeo, pageSeoDescription } from "@/lib/seo/local";
import { brand } from "@/lib/constants/brand";
import { siteImages } from "@/lib/constants/images";

export const metadata = createPageMetadata({
  title: "Denizli Hafriyat İletişim",
  description: pageSeoDescription(`${brand.pages.contact.description} Adres: Yeni Mah. Menderes Bulvarı No:7/A D:3, Merkezefendi, Denizli.`),
  path: "/iletisim",
  image: siteImages.contact,
  keywords: ["denizli hafriyat iletişim", "denizli hafriyat telefon", ...localSeo.defaultKeywords],
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Ana Sayfa", path: "/" }, { name: "İletişim", path: "/iletisim" }]} />
      <ContactPageJsonLd />
      <PageHero
        eyebrow="İletişim"
        title={brand.pages.contact.title}
        description={brand.pages.contact.description}
        image={siteImages.contact}
        imageAlt="Kepçe ile enkaz kaldırma — SMF Hafriyat iletişim"
        variant="legal"
      />
      <ContactSection />
    </>
  );
}
