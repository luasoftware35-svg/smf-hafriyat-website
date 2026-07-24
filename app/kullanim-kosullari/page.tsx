import { LegalDocumentLayout } from "@/components/sections/LegalDocumentLayout";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import { buildTermsSections } from "@/lib/constants/legal";
import { siteConfig } from "@/lib/constants/site";
import { getContactInfo } from "@/lib/data/contact-settings";
import { siteImages } from "@/lib/constants/images";

export const metadata = createPageMetadata({
  title: "Kullanım Koşulları",
  description: `${siteConfig.name} web sitesi kullanım koşulları ve sorumluluk sınırları.`,
  path: "/kullanim-kosullari",
  image: siteImages.legal,
  noIndex: true,
});

export default async function TermsPage() {
  const contactInfo = await getContactInfo();
  const sections = buildTermsSections(contactInfo);

  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Ana Sayfa", path: "/" }, { name: "Kullanım Koşulları", path: "/kullanim-kosullari" }]}
      />
      <PageHero
        eyebrow="Yasal"
        title="Kullanım Koşulları"
        description="Web sitemizin kullanımına ilişkin kurallar, fikri mülkiyet ve sorumluluk hükümleri."
        image={siteImages.legal}
        imageAlt="Kullanım koşulları"
        variant="legal"
      />
      <LegalDocumentLayout
        currentPath="/kullanim-kosullari"
        intro={`${siteConfig.url} alan adlı web sitesini kullanmadan önce lütfen bu koşulları okuyunuz.`}
        sections={sections}
        contactInfo={contactInfo}
      />
    </>
  );
}
