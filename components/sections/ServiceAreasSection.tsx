"use client";

import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { serviceAreas } from "@/lib/constants/content";
import { getServiceAreaImage } from "@/lib/constants/images";

type ServiceAreasSectionProps = {
  showCta?: boolean;
};

export function ServiceAreasSection({ showCta = true }: ServiceAreasSectionProps) {
  return (
    <Section id="hizmet-bolgeleri">
      <Container>
        <FadeIn>
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Hizmet Bölgeleri"
              title="Denizli'den Ege Bölgesi'ne geniş hizmet ağı"
              description="Denizli merkezli ekskavatör filomuzla Ege Bölgesi'nde hafriyat, yıkım ve kanal kazısı hizmeti."
            />
            {showCta && (
              <Button href="/hizmet-bolgeleri" variant="secondary">
                Tüm Bölgeler
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            )}
          </div>
        </FadeIn>

        <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area, index) => {
            const img = getServiceAreaImage(index);
            return (
              <StaggerItem key={area.name}>
                <Card className="group overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={img.src}
                      alt={`${area.name} hafriyat hizmeti — ${img.alt}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/70 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                      <MapPin size={16} className="text-accent" aria-hidden="true" />
                      <span className="font-heading text-lg">{area.name}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-accent">{area.districts}</p>
                    <p className="mt-2 text-sm text-text-secondary">{area.description}</p>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </Container>
    </Section>
  );
}
