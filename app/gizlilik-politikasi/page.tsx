import { LegalDocumentLayout } from "@/components/sections/LegalDocumentLayout";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildPrivacySections } from "@/lib/constants/legal";
import { siteConfig } from "@/lib/constants/site";
import { getContactInfo } from "@/lib/data/contact-settings";
import { siteImages } from "@/lib/constants/images";

export const metadata = createPageMetadata({
  title: "Gizlilik Politikası",
  description: `${siteConfig.name} gizlilik politikası — kişisel verilerin toplanması, kullanımı ve korunması.`,
  path: "/gizlilik-politikasi",
  image: siteImages.legal,
  noIndex: true,
});

export default async function PrivacyPage() {
  const contactInfo = await getContactInfo();
  const sections = buildPrivacySections(contactInfo);

  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Ana Sayfa", path: "/" }, { name: "Gizlilik Politikası", path: "/gizlilik-politikasi" }]}
      />
      <PageHero
        eyebrow="Yasal"
        title="Gizlilik Politikası"
        description="Web sitemiz ve iletişim kanallarımız üzerinden işlenen kişisel verilerin korunmasına ilişkin kurumsal taahhütlerimiz."
        image={siteImages.legal}
        imageAlt="Gizlilik politikası"
        variant="legal"
      />
      <LegalDocumentLayout
        currentPath="/gizlilik-politikasi"
        intro={`${siteConfig.name} dijital kanallarında paylaştığınız bilgileri yalnızca hizmet sunumu, teklif hazırlama ve yasal yükümlülükler kapsamında işler.`}
        sections={sections}
        contactInfo={contactInfo}
      />
    </>
  );
}
