import { DiggerHero } from "@/components/hero/DiggerHero";
import { FieldShowcaseSection } from "@/components/sections/FieldShowcaseSection";
import { ActionSpotlightCards } from "@/components/sections/ActionSpotlightCards";
import { ImagePromoBanner } from "@/components/sections/ImagePromoBanner";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { faqItems } from "@/lib/constants/content";
import { createPageMetadata } from "@/lib/seo/metadata";
import { localSeo } from "@/lib/seo/local";
import { midPagePromoSlides } from "@/lib/constants/images";

export const metadata = createPageMetadata({
  title: localSeo.homeTitle,
  description: localSeo.homeDescription,
  path: "/",
  keywords: [...localSeo.defaultKeywords],
});

export default function HomePage() {
  return (
    <>
      <FaqJsonLd items={faqItems.slice(0, 4)} />
      <DiggerHero />
      <WhyUsSection />
      <ServicesGrid limit={6} showAllLink />
      <ProcessTimeline />
      <ProjectGallery limit={2} showFilters={false} />
      <FieldShowcaseSection />
      <ImagePromoBanner slides={midPagePromoSlides} size="md" align="left" />
      <ActionSpotlightCards />
      <FaqSection limit={4} showContactLink />
      <CtaBanner />
    </>
  );
}
