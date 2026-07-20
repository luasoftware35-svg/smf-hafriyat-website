"use client";

import Image from "next/image";
import { HardHat, ShieldCheck, Timer, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { whyUsItems } from "@/lib/constants/content";
import { siteImages } from "@/lib/constants/images";

const iconMap = { HardHat, ShieldCheck, Timer, Users };

export function WhyUsSection() {
  return (
    <Section id="neden-biz">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <SectionHeading
              eyebrow="Neden SMF?"
              title="1998'den bu yana hafriyat ve yıkım uzmanı"
              description="Ekskavatör, kepçe ve damper filomuzla derin temel kazısı, enkaz kaldırma ve altyapı hafriyatı."
            />
            <div className="relative mt-8 overflow-hidden rounded-lg border border-surface shadow-card-hover">
              <div className="relative aspect-[16/10]">
                <Image src={siteImages.fleet[0].src} alt="Ekskavatör ile hafriyat kazısı — SMF filo" fill className="object-cover" sizes="600px" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/70 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 rounded-md glass px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-xl font-bold text-accent sm:text-2xl">900+</p>
                  <p className="text-xs text-text-secondary">Tamamlanan proje</p>
                </div>
                <div className="sm:text-right">
                  <p className="font-mono text-xl font-bold text-accent sm:text-2xl">150+</p>
                  <p className="text-xs text-text-secondary">Hizmet verilen firma</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <StaggerGrid className="grid gap-4 sm:grid-cols-2">
            {whyUsItems.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? HardHat;
              return (
                <StaggerItem key={item.title}>
                  <div className="group h-full rounded-md border border-surface bg-bg-secondary/50 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-bg-primary hover:shadow-card">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-accent/15 text-accent transition-all group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-glow">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-lg text-text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
      </Container>
    </Section>
  );
}
