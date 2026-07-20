import { ContactSection } from "@/components/sections/ContactSection";
import { PageHero } from "@/components/ui/PageHero";
import { ImageMarquee } from "@/components/sections/ImageMarquee";
import { BreadcrumbJsonLd, ContactPageJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteImages } from "@/lib/constants/images";

export const metadata = createPageMetadata({
  title: "İletişim",
  description: "SMF Hafriyat ile iletişime geçin — hafriyat, yıkım ve derin temel kazısı için ekskavatör keşfi planlayın.",
  path: "/iletisim",
  image: siteImages.contact,
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Ana Sayfa", path: "/" }, { name: "İletişim", path: "/iletisim" }]} />
      <ContactPageJsonLd />
      <PageHero
        eyebrow="İletişim"
        title="Hafriyat projeniz için teklif alın"
        description="Derin temel kazısı, yıkım enkaz kaldırma veya kepçe kiralama — form, telefon veya WhatsApp ile ulaşın."
        image={siteImages.contact}
        imageAlt="Kepçe ile enkaz kaldırma — SMF Hafriyat iletişim"
      />
      <ContactSection />
      <ImageMarquee />
    </>
  );
}
