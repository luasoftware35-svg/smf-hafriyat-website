import { LegalDocumentLayout } from "@/components/sections/LegalDocumentLayout";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildKvkkSections } from "@/lib/constants/legal";
import { siteConfig } from "@/lib/constants/site";
import { getContactInfo } from "@/lib/data/contact-settings";
import { siteImages } from "@/lib/constants/images";

export const metadata = createPageMetadata({
  title: "KVKK Aydınlatma Metni",
  description: `${siteConfig.legalName} Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aydınlatma metni.`,
  path: "/kvkk",
  image: siteImages.legal,
  noIndex: true,
});

export default async function KvkkPage() {
  const contactInfo = await getContactInfo();
  const sections = buildKvkkSections(contactInfo);

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Ana Sayfa", path: "/" }, { name: "KVKK Aydınlatma Metni", path: "/kvkk" }]} />
      <PageHero
        eyebrow="Yasal"
        title="KVKK Aydınlatma Metni"
        description="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu bilgilendirmesi."
        image={siteImages.legal}
        imageAlt="KVKK aydınlatma metni"
        variant="legal"
      />
      <LegalDocumentLayout
        currentPath="/kvkk"
        intro={`${siteConfig.legalName} olarak kişisel verilerinizin güvenliği ve gizliliği kurumsal önceliklerimiz arasındadır. Aşağıdaki metin, veri işleme faaliyetlerimiz hakkında KVKK m. 10 uyarınca hazırlanmıştır.`}
        sections={sections}
        contactInfo={contactInfo}
      />
    </>
  );
}
