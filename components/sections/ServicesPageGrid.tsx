"use client";

import {
  ArrowDown,
  ArrowRight,
  Container as ContainerIcon,
  Droplets,
  Hammer,
  HardHat,
  Mountain,
  Package,
  Shovel,
  Truck,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { TextReveal } from "@/components/motion/TextReveal";
import { AnimatedButton } from "@/components/motion/AnimatedButton";
import { ServiceShowcaseCard } from "@/components/sections/ServiceShowcaseCard";
import { brand } from "@/lib/constants/brand";
import { services } from "@/lib/constants/services";

const iconMap: Record<string, LucideIcon> = {
  Shovel,
  Hammer,
  HardHat,
  Truck,
  ArrowDown,
  Package,
  Mountain,
  Waves,
  Droplets,
  Container: ContainerIcon,
};

export function ServicesGridAnimated() {
  const sorted = [...services].sort((a, b) => a.orderIndex - b.orderIndex);

  return (
    <div className="relative overflow-hidden border-b border-surface mesh-muted">
      <motion.div
        className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        animate={{ y: [0, 30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute -right-24 bottom-32 h-72 w-72 rounded-full bg-accent/8 blur-3xl"
        animate={{ y: [0, -24, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <Container className="relative py-16 lg:py-24">
        <FadeIn className="mx-auto mb-14 max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">{brand.sections.servicesPage.eyebrow}</p>
          <TextReveal
            as="h2"
            text={brand.sections.servicesPage.title}
            className="mt-4 font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl"
            delay={0.05}
            highlightLast={2}
          />
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">{brand.sections.servicesPage.description}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {brand.proofStrip.map((item) => (
              <span
                key={item}
                className="rounded-full border border-surface bg-bg-primary/85 px-3 py-1.5 text-xs font-medium text-text-secondary"
              >
                {item}
              </span>
            ))}
          </div>
        </FadeIn>

        <div className="flex flex-col gap-10 lg:gap-14">
          {sorted.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Shovel;
            return <ServiceShowcaseCard key={service.slug} service={service} index={index} Icon={Icon} />;
          })}
        </div>

        <FadeIn delay={0.15} className="mt-14 flex justify-center">
          <AnimatedButton href="/iletisim" glow>
            Keşif Talep Edin
            <ArrowRight size={18} aria-hidden="true" />
          </AnimatedButton>
        </FadeIn>
      </Container>
    </div>
  );
}
