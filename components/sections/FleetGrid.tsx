"use client";

import Image from "next/image";
import { Container as PageContainer } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { FadeIn } from "@/components/motion/FadeIn";
import { fleet as staticFleet } from "@/lib/constants/content";
import type { FleetItem } from "@/lib/data/fleet";
import { brand } from "@/lib/constants/brand";
import { getFleetImage } from "@/lib/constants/images";

export function FleetGrid({ items }: { items?: readonly FleetItem[] }) {
  const fleet = items ?? staticFleet;
  return (
    <Section id="filo" variant="muted">
      <PageContainer>
        <FadeIn>
          <SectionHeading
            eyebrow="Filo & Ekipman"
            title={brand.pages.fleet.title}
            description={brand.pages.fleet.description}
            className="mb-14"
          />
        </FadeIn>

        <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((item, index) => {
            const img = getFleetImage(index);
            return (
              <StaggerItem key={item.name}>
                <Card className="group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={img.src}
                      alt={`${item.name} — ${img.alt}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width:768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/70 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-sm bg-accent px-2 py-1 font-mono text-xs font-bold text-accent-foreground">
                      {item.capacity}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="font-mono text-xs text-accent">{item.model}</p>
                    <h3 className="mt-1 font-heading text-base text-text-primary">{item.name}</h3>
                    <p className="mt-2 text-sm text-text-secondary">{item.specs}</p>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </PageContainer>
    </Section>
  );
}
