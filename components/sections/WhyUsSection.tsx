"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HardHat, ShieldCheck, Timer, Users, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { brand } from "@/lib/constants/brand";
import { FadeIn } from "@/components/motion/FadeIn";
import { AnimatedButton } from "@/components/motion/AnimatedButton";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { whyUsItems } from "@/lib/constants/content";
import { whyUsSpotlightSlides } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

const iconMap = { HardHat, ShieldCheck, Timer, Users };
const SLIDE_MS = 6500;

export function WhyUsSection() {
  const [active, setActive] = useState(0);
  const slideCount = whyUsSpotlightSlides.length;
  const reduceMotion = useReducedMotion();

  const next = useCallback(() => setActive((prev) => (prev + 1) % slideCount), [slideCount]);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(next, SLIDE_MS);
    return () => clearInterval(timer);
  }, [next, reduceMotion]);

  const slide = whyUsSpotlightSlides[active];

  return (
    <Section id="neden-biz">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <SectionHeading
              eyebrow={brand.sections.whyUs.eyebrow}
              title={brand.sections.whyUs.title}
              description={brand.sections.whyUs.description}
            />
            <div className="relative mt-8 overflow-hidden rounded-lg border border-surface shadow-card-hover">
              <div className="relative aspect-[16/10] min-h-[220px]">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.75 }}
                    className="absolute inset-0"
                  >
                    <motion.div
                      className="relative h-full w-full"
                      initial={{ scale: 1 }}
                      animate={{ scale: reduceMotion ? 1 : 1.04 }}
                      transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                    >
                      <Image src={slide.src} alt={slide.alt} fill className="object-cover" sizes="600px" />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/85 via-accent-foreground/25 to-transparent" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 p-5 sm:p-6"
                  >
                    <p className="font-mono text-xs uppercase tracking-widest text-accent">{slide.tag}</p>
                    <p className="mt-1 font-heading text-xl text-white sm:text-2xl">{slide.title}</p>
                    <p className="mt-2 text-sm text-white/80">{slide.subtitle}</p>
                  </motion.div>
                </AnimatePresence>
                <div className="absolute left-4 top-4 flex gap-1.5">
                  {whyUsSpotlightSlides.map((_, index) => (
                    <span
                      key={whyUsSpotlightSlides[index].src}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        index === active ? "w-6 bg-accent" : "w-1.5 bg-white/40",
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {brand.proofStrip.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-surface bg-bg-secondary/70 px-3 py-1.5 text-xs font-medium text-text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <AnimatedButton href="/hakkimizda" variant="secondary">
                Hakkımızda
                <ArrowRight size={16} aria-hidden="true" />
              </AnimatedButton>
            </div>
          </FadeIn>

          <StaggerGrid className="grid gap-4 sm:grid-cols-2">
            {whyUsItems.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? HardHat;
              return (
                <StaggerItem key={item.title}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group h-full rounded-md border border-surface bg-bg-secondary/50 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-bg-primary hover:shadow-card"
                  >
                    <motion.div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-accent/15 text-accent transition-all group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-glow"
                      whileHover={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.45 }}
                    >
                      <Icon size={22} aria-hidden="true" />
                    </motion.div>
                    <h3 className="font-heading text-lg text-text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
      </Container>
    </Section>
  );
}
