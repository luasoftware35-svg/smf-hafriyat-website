"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/SectionHeading";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { brand } from "@/lib/constants/brand";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { whyUsItems } from "@/lib/constants/content";
import { whyUsSpotlightSlides } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

const SLIDE_MS = 8000;

export function WhyUsSection() {
  const [active, setActive] = useState(0);
  const slideCount = whyUsSpotlightSlides.length;
  const reduceMotion = useReducedMotion();

  const goTo = useCallback((index: number) => {
    setActive((index + slideCount) % slideCount);
  }, [slideCount]);

  const next = useCallback(() => setActive((prev) => (prev + 1) % slideCount), [slideCount]);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(next, SLIDE_MS);
    return () => clearInterval(timer);
  }, [next, reduceMotion]);

  const slide = whyUsSpotlightSlides[active];

  return (
    <Section id="neden-biz" variant="muted" className="py-16 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-14">
          <FadeIn>
            <SectionIntro
              label={brand.sections.whyUs.eyebrow}
              title={brand.sections.whyUs.title}
              description={brand.sections.whyUs.description}
            />

            <div className="mt-8 overflow-hidden rounded-sm border border-surface/80 bg-bg-primary shadow-card">
              <div className="relative aspect-[4/3] min-h-[240px]">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover object-center saturate-[0.92] contrast-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 560px"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/35 via-transparent to-transparent" />
              </div>

              <div className="border-t border-surface/80 bg-bg-primary px-5 py-4 sm:px-6 sm:py-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{slide.tag}</p>
                    <p className="mt-2 font-heading text-lg text-text-primary sm:text-xl">{slide.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{slide.subtitle}</p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-4 flex items-center gap-3">
                  {whyUsSpotlightSlides.map((item, index) => (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => goTo(index)}
                      className={cn(
                        "h-px flex-1 transition-colors duration-300",
                        index === active ? "bg-accent" : "bg-surface hover:bg-accent/40",
                      )}
                      aria-label={`Görsel ${index + 1}`}
                      aria-current={index === active ? "true" : undefined}
                    />
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/hakkimizda"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-text-primary transition-colors hover:text-accent"
            >
              Kurumsal profilimizi inceleyin
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </FadeIn>

          <StaggerGrid className="divide-y divide-surface border-y border-surface bg-bg-primary/70" stagger={0.1}>
            {whyUsItems.map((item, index) => (
              <StaggerItem key={item.title}>
                <motion.article
                  className="group relative grid gap-4 overflow-hidden px-1 py-7 sm:grid-cols-[3.5rem_1fr] sm:px-2"
                  whileHover={reduceMotion ? undefined : { x: 4 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.span
                    className="absolute inset-y-0 left-0 w-0.5 origin-top bg-accent"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden="true"
                  />
                  <motion.p
                    className="font-mono text-sm text-accent/80 transition-colors duration-300 group-hover:text-accent"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.p>
                  <div>
                    <motion.h3
                      className="font-heading text-xl text-text-primary transition-colors duration-300 group-hover:text-accent"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.45, delay: 0.05 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className="mt-2 text-sm leading-relaxed text-text-secondary"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.45, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </Container>
    </Section>
  );
}
