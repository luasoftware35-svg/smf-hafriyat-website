import { LegalDocumentLayout } from "@/components/sections/LegalDocumentLayout";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildCookieSections } from "@/lib/constants/legal";
import { siteConfig } from "@/lib/constants/site";
import { getContactInfo } from "@/lib/data/contact-settings";
import { siteImages } from "@/lib/constants/images";

export const metadata = createPageMetadata({
  title: "Çerez Politikası",
  description: `${siteConfig.name} çerez politikası — zorunlu ve analitik çerezlerin kullanımı.`,
  path: "/cerez-politikasi",
  image: siteImages.legal,
  noIndex: true,
});

export default async function CookiePolicyPage() {
  const contactInfo = await getContactInfo();
  const sections = buildCookieSections();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Ana Sayfa", path: "/" }, { name: "Çerez Politikası", path: "/cerez-politikasi" }]} />
      <PageHero
        eyebrow="Yasal"
        title="Çerez Politikası"
        description="Web sitemizde kullanılan çerez türleri, amaçları ve tercih yönetimi."
        image={siteImages.legal}
        imageAlt="Çerez politikası"
        variant="legal"
      />
      <LegalDocumentLayout
        currentPath="/cerez-politikasi"
        intro={`${siteConfig.name} web sitesinde kullanıcı deneyimini iyileştirmek ve (onayınızla) anonim istatistik toplamak için çerezler kullanılmaktadır.`}
        sections={sections}
        contactInfo={contactInfo}
      />
    </>
  );
}
