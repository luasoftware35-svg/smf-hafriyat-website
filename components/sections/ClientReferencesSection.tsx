"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { industrySectors } from "@/lib/constants/content";
import { getClientImage } from "@/lib/constants/images";

export function ClientReferencesSection() {
  return (
    <Section id="sektorler" variant="muted">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Hizmet Verdiğimiz Sektörler"
            title="150'den fazla firmaya destek"
            description="Fabrika yıkımı, derin temel kazısı, enkaz kaldırma ve altyapı hafriyatında 150'den fazla firmaya destek."
            className="mb-12"
          />
        </FadeIn>

        <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industrySectors.map((item, index) => {
            const img = getClientImage(index);
            return (
              <StaggerItem key={item.sector}>
                <Card hover={false} className="group overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={img.src} alt={item.sector} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="300px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/80 via-accent-foreground/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-heading text-base">{item.sector}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-text-secondary">{item.description}</p>
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
