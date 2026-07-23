import { DiggerHero } from "@/components/hero/DiggerHero";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { FleetMiniSection } from "@/components/sections/FleetMiniSection";
import { ServiceAreasBand } from "@/components/sections/ServiceAreasBand";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FaqSection } from "@/components/sections/FaqSection";
import { HomeContactSection } from "@/components/sections/HomeContactSection";
import { HomeSeoIntro } from "@/components/sections/HomeSeoIntro";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { HOME_FAQ_COUNT } from "@/lib/constants/content";
import { getFaqItems } from "@/lib/data/faq";
import { getFleetItems } from "@/lib/data/fleet";
import { getProjects } from "@/lib/data/projects";
import { getSiteStats } from "@/lib/data/stats";
import { createPageMetadata } from "@/lib/seo/metadata";
import { localSeo } from "@/lib/seo/local";

export const metadata = createPageMetadata({
  title: localSeo.homeTitle,
  description: localSeo.homeDescription,
  path: "/",
  keywords: [...localSeo.defaultKeywords],
});

export default async function HomePage() {
  const [stats, faqItems, fleetItems, projects] = await Promise.all([
    getSiteStats(),
    getFaqItems(),
    getFleetItems(),
    getProjects(),
  ]);
  const homeFaq = faqItems.slice(0, HOME_FAQ_COUNT);

  return (
    <>
      <FaqJsonLd items={homeFaq} />
      <DiggerHero />
      <HomeSeoIntro />
      <WhyUsSection />
      <ServicesGridSection limit={6} showAllLink />
      <FleetMiniSection items={fleetItems} />
      <ServiceAreasBand />
      <SocialProofSection stats={stats} />
      <ProcessTimeline />
      <ProjectGallery limit={2} showFilters={false} projects={projects} />
      <FaqSection limit={HOME_FAQ_COUNT} showContactLink items={faqItems} />
      <HomeContactSection />
    </>
  );
}
