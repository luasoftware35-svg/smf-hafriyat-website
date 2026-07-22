"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { FadeIn } from "@/components/motion/FadeIn";
import { TextReveal } from "@/components/motion/TextReveal";
import { aboutContent } from "@/lib/constants/content";
import { brand } from "@/lib/constants/brand";
import { siteImages } from "@/lib/constants/images";

const sections = [
  {
    key: "history" as const,
    id: "tarihce",
    title: "Tarihçe",
    subtitle: "1998'den bugüne",
    content: aboutContent.history,
    alt: "Enkaz kaldırma sahası — SMF Hafriyat tarihçe",
  },
  {
    key: "mission" as const,
    id: "misyon",
    title: "Misyon",
    subtitle: "Vazgeçilmez ilkeler",
    content: aboutContent.mission,
    alt: "Bina yıkımı ekskavatör — SMF Hafriyat misyon",
  },
  {
    key: "vision" as const,
    id: "vizyon",
    title: "Vizyon",
    subtitle: "Geleceğe bakış",
    content: aboutContent.vision,
    alt: "Havadan ekskavatör kazısı — SMF Hafriyat vizyon",
  },
];

export function AboutStoryGrid() {
  return (
    <Container className="py-16 lg:py-24">
      <FadeIn className="mb-14 max-w-2xl">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">{brand.sections.aboutStory.eyebrow}</p>
        <TextReveal
          as="h2"
          text={brand.sections.aboutStory.title}
          className="mt-4 font-heading text-3xl leading-tight text-text-primary sm:text-4xl"
          delay={0.05}
        />
        <p className="mt-4 text-lg leading-relaxed text-text-secondary">{brand.sections.aboutStory.description}</p>
      </FadeIn>

      <StaggerGrid className="grid gap-8 lg:grid-cols-3">
        {sections.map((section) => (
          <StaggerItem key={section.key}>
            <div id={section.id} className="scroll-mt-32">
            <Card hover={false} className="group flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={siteImages.aboutSections[section.key]}
                  alt={section.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/75 via-accent-foreground/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">{section.subtitle}</p>
                  <h3 className="mt-1 font-heading text-2xl text-white">{section.title}</h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-8">
                <p className="flex-1 text-base leading-[1.75] text-text-secondary">{section.content}</p>
                <div className="mt-6 h-px w-12 bg-accent/40" aria-hidden="true" />
              </div>
            </Card>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </Container>
  );
}
