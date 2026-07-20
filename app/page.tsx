import { DiggerHero } from "@/components/hero/DiggerHero";
import { ImageMarquee } from "@/components/sections/ImageMarquee";
import { TrustBar } from "@/components/sections/TrustBar";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { FleetGrid } from "@/components/sections/FleetGrid";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { ClientReferencesSection } from "@/components/sections/ClientReferencesSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "SMF Hafriyat | Denizli Hafriyat ve Kazı Hizmetleri",
  description:
    "Denizli ve Ege Bölgesi'nde ekskavatör ile hafriyat, yıkım, derin temel kazısı, enkaz kaldırma ve kepçe kiralama. Kendi filomuzla zamanında teslimat.",
  path: "/",
  keywords: [
    "hafriyat denizli",
    "ekskavatör kazı denizli",
    "yıkım firması denizli",
    "derin temel kazısı",
    "enkaz kaldırma",
    "moloz nakliyesi",
    "kepçe kiralama",
    "SMF Hafriyat",
  ],
});

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      <DiggerHero />
      <TrustBar />
      <ImageMarquee />
      <StatsCounter />
      <WhyUsSection />
      <ServicesGrid />
      <ProcessTimeline />
      <ProjectGallery />
      <FleetGrid />
      <ServiceAreasSection />
      <ClientReferencesSection />
      <CtaBanner />
      <Testimonials />
      <CertificatesSection />
      <FaqSection />
      <TeamGrid />
      <ContactSection />
    </>
  );
}
