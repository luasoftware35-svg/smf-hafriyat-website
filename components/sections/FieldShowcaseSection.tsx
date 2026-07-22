"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { AnimatedButton } from "@/components/motion/AnimatedButton";
import { TextReveal } from "@/components/motion/TextReveal";
import { showcaseSlides } from "@/lib/constants/images";
import { brand } from "@/lib/constants/brand";
import { stats } from "@/lib/constants/content";
import { cn } from "@/lib/utils";

const SLIDE_MS = 7000;

export function FieldShowcaseSection() {
  const [active, setActive] = useState(0);
  const slideCount = showcaseSlides.length;
  const reduceMotion = useReducedMotion();

  const goTo = useCallback(
    (index: number) => {
      setActive((index + slideCount) % slideCount);
    },
    [slideCount],
  );

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(next, SLIDE_MS);
    return () => clearInterval(timer);
  }, [next, reduceMotion]);

  const slide = showcaseSlides[active];

  return (
    <section className="relative overflow-hidden border-b border-surface mesh-muted">
      <Container className="relative py-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-lg border border-surface shadow-card-hover">
              <div className="relative aspect-[16/10] sm:aspect-[16/9]">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <motion.div
                      className="relative h-full w-full"
                      initial={{ scale: 1 }}
                      animate={{ scale: reduceMotion ? 1 : 1.06 }}
                      transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width:1024px) 100vw, 58vw"
                        priority={active === 0}
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent-foreground/85 via-accent-foreground/25 to-accent-foreground/5" />

                <div className="absolute left-0 right-0 top-0 h-0.5 bg-white/10">
                  <motion.div
                    key={active}
                    className="h-full bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                  />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-0 left-0 right-0 p-5 sm:p-6"
                  >
                    <p className="font-mono text-xs uppercase tracking-widest text-accent">{slide.tag}</p>
                    <h2 className="mt-1 font-heading text-xl text-white sm:text-2xl">{slide.title}</h2>
                    <p className="mt-1 max-w-lg text-sm leading-relaxed text-white/80">{slide.subtitle}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex gap-2 overflow-x-auto border-t border-surface bg-bg-secondary/60 p-3">
                {showcaseSlides.map((item, index) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => goTo(index)}
                    className={cn(
                      "relative h-14 w-20 shrink-0 overflow-hidden rounded-md border transition-all duration-300 sm:h-16 sm:w-24",
                      index === active
                        ? "border-accent shadow-glow"
                        : "border-transparent opacity-55 hover:opacity-100",
                    )}
                    aria-label={item.title}
                    aria-current={index === active ? "true" : undefined}
                  >
                    <Image src={item.src} alt="" fill className="object-cover" sizes="96px" aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-widest text-accent"
            >
              {brand.sections.fieldShowcase.eyebrow}
            </motion.p>
            <TextReveal
              as="h2"
              text={brand.sections.fieldShowcase.title}
              className="mt-3 font-heading text-2xl text-text-primary sm:text-3xl"
              delay={0.05}
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-sm leading-relaxed text-text-secondary"
            >
              {brand.sections.fieldShowcase.description}
            </motion.p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 + index * 0.06 }}
                  className="rounded-lg border border-surface bg-bg-primary/88 p-4 shadow-card backdrop-blur-sm transition-shadow hover:shadow-card-hover"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-1 text-xs font-medium text-text-secondary">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {brand.trustPills.map((label, index) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + index * 0.05 }}
                  className="rounded-full border border-surface bg-bg-primary/80 px-3 py-1.5 text-xs font-medium text-text-secondary"
                >
                  {label}
                </motion.span>
              ))}
            </div>

            <div className="mt-8">
              <AnimatedButton href="/iletisim" variant="secondary" glow={false}>
                Denizli&apos;de kesif planlayin
                <ArrowRight size={16} aria-hidden="true" />
              </AnimatedButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
