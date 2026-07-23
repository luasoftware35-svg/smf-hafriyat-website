import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig, contactInfo } from "@/lib/constants/site";
import { siteImages } from "@/lib/constants/images";

export const metadata = createPageMetadata({
  title: "KVKK Aydınlatma Metni",
  description: "SMF Hafriyat Kişisel Verilerin Korunması Kanunu aydınlatma metni.",
  path: "/kvkk",
  image: siteImages.legal,
  noIndex: true,
});

export default function KvkkPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Ana Sayfa", path: "/" }, { name: "KVKK", path: "/kvkk" }]} />
      <PageHero eyebrow="Yasal" title="KVKK Aydınlatma Metni" image={siteImages.legal} imageAlt="KVKK aydınlatma metni" variant="legal" />
      <Container className="max-w-3xl py-16 lg:py-24">
        <div className="space-y-6 text-text-secondary">
          <p>
            {siteConfig.legalName} (&ldquo;Şirket&rdquo;) olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu
            (&ldquo;KVKK&rdquo;) kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi aşağıda açıklanan
            çerçevede işlemekteyiz.
          </p>
          <h2 className="font-heading text-xl text-text-primary">Veri Sorumlusu</h2>
          <p>
            {siteConfig.legalName} ({siteConfig.tradeName}) — {contactInfo.address.full}
            <br />
            Telefon: {contactInfo.phoneDisplay} · E-posta: {contactInfo.email}
            <br />
            İletişim sorumlusu: {contactInfo.contactPerson}
          </p>
          <h2 className="font-heading text-xl text-text-primary">İşlenen Veriler</h2>
          <p>
            İletişim formu aracılığıyla ad soyad, telefon numarası, e-posta adresi, proje türü, proje adresi,
            tahmini hacim bilgisi, tercih edilen keşif tarihi ve mesaj içeriği toplanmaktadır.
          </p>
          <h2 className="font-heading text-xl text-text-primary">İşleme Amaçları</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Teklif hazırlama ve proje değerlendirme</li>
            <li>Müşteri ilişkileri yönetimi</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          </ul>
          <h2 className="font-heading text-xl text-text-primary">İletişim</h2>
          <p>
            KVKK kapsamındaki talepleriniz için {contactInfo.email} adresine veya {contactInfo.address.full}{" "}
            adresine yazılı başvuruda bulunabilirsiniz.
          </p>
        </div>
      </Container>
    </>
  );
}
