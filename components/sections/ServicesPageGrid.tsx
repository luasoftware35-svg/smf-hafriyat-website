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
import { motion, useReducedMotion, type Variants } from "framer-motion";
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

const pillVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

export function ServicesGridAnimated() {
  const reduceMotion = useReducedMotion();
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
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs uppercase tracking-[0.22em] text-accent"
          >
            {brand.sections.servicesPage.eyebrow}
          </motion.p>
          <TextReveal
            as="h2"
            text={brand.sections.servicesPage.title}
            className="mt-4 font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl"
            delay={0.05}
            highlightLast={2}
          />
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mt-4 text-lg leading-relaxed text-text-secondary"
          >
            {brand.sections.servicesPage.description}
          </motion.p>
          <motion.ul
            className="mt-5 flex flex-wrap justify-center gap-2"
            variants={reduceMotion ? undefined : { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}
            initial={reduceMotion ? undefined : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ once: true }}
          >
            {brand.proofStrip.map((item) => (
              <motion.li
                key={item}
                variants={reduceMotion ? undefined : pillVariants}
                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.03 }}
              >
                <span className="block rounded-full border border-surface bg-bg-primary/85 px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors duration-300 hover:border-accent/25 hover:text-text-primary">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
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
