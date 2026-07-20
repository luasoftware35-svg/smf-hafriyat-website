import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/constants/site";
import { siteImages } from "@/lib/constants/images";

export const metadata = createPageMetadata({
  title: "Gizlilik Politikası",
  description: "SMF Hafriyat gizlilik politikası ve çerez kullanım bilgileri.",
  path: "/gizlilik-politikasi",
  image: siteImages.legal,
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Ana Sayfa", path: "/" }, { name: "Gizlilik Politikası", path: "/gizlilik-politikasi" }]} />
      <PageHero eyebrow="Yasal" title="Gizlilik Politikası" image={siteImages.legal} imageAlt="Gizlilik politikası" />
      <Container className="max-w-3xl py-16 lg:py-24">
        <div className="space-y-6 text-text-secondary">
          <p>
            {siteConfig.legalName} ({siteConfig.name}) web sitesini ziyaret ettiğinizde, hizmet kalitemizi artırmak amacıyla sınırlı
            teknik veriler (IP adresi, tarayıcı türü, ziyaret süresi) otomatik olarak toplanabilir.
          </p>
          <h2 className="font-heading text-xl text-text-primary">Çerezler</h2>
          <p>
            Sitemizde yalnızca zorunlu oturum çerezleri ve onay sonrası analitik çerezler kullanılmaktadır.
            Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz.
          </p>
          <h2 className="font-heading text-xl text-text-primary">Veri Güvenliği</h2>
          <p>
            Kişisel verileriniz SSL şifrelemesi ile korunmakta ve yetkisiz erişime karşı teknik ve idari
            önlemler alınmaktadır.
          </p>
        </div>
      </Container>
    </>
  );
}
