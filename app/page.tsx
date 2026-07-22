import { DiggerHero } from "@/components/hero/DiggerHero";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { FleetMiniSection } from "@/components/sections/FleetMiniSection";
import { ServiceAreasBand } from "@/components/sections/ServiceAreasBand";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { FaqSection } from "@/components/sections/FaqSection";
import { HomeContactSection } from "@/components/sections/HomeContactSection";
import { HomeSeoIntro } from "@/components/sections/HomeSeoIntro";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { faqItems, HOME_FAQ_COUNT } from "@/lib/constants/content";
import { createPageMetadata } from "@/lib/seo/metadata";
import { localSeo } from "@/lib/seo/local";

export const metadata = createPageMetadata({
  title: localSeo.homeTitle,
  description: localSeo.homeDescription,
  path: "/",
  keywords: [...localSeo.defaultKeywords],
});

export default function HomePage() {
  return (
    <>
      <FaqJsonLd items={faqItems.slice(0, HOME_FAQ_COUNT)} />
      <DiggerHero />
      <HomeSeoIntro />
      <WhyUsSection />
      <ServicesGridSection limit={6} showAllLink />
      <FleetMiniSection />
      <ServiceAreasBand />
      <SocialProofSection />
      <ProjectGallery limit={2} showFilters={false} />
      <FaqSection limit={HOME_FAQ_COUNT} showContactLink={false} />
      <HomeContactSection />
    </>
  );
}
