"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedButton } from "@/components/motion/AnimatedButton";
import { TextReveal } from "@/components/motion/TextReveal";
import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/constants/brand";
import { ctaLinks, contactInfo, siteConfig } from "@/lib/constants/site";
import { homeHeroBanners } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

const SLIDE_MS = 6000;

export function DiggerHero() {
  const [active, setActive] = useState(0);
  const slideCount = homeHeroBanners.length;
  const reduceMotion = useReducedMotion();
  const heroStats = [
    { label: "Tecrübe", value: `${siteConfig.yearsInBusiness}+ Yıl` },
    { label: "Proje", value: "900+" },
    { label: "Firma", value: "150+" },
    { label: "Kuruluş", value: "1998" },
  ];

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

  const slide = homeHeroBanners[active];

  return (
    <section className="relative overflow-hidden border-b border-surface">
      <div className="relative min-h-[min(92vh,880px)] w-full sm:min-h-[min(88vh,920px)]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <motion.div
              className="relative h-full w-full"
              initial={{ scale: 1 }}
              animate={{ scale: reduceMotion ? 1 : 1.12 }}
              transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={active === 0}
                className={cn(
                  "object-cover",
                  active === 0
                    ? "object-[center_45%] sm:object-[center_40%]"
                    : "object-[center_25%] sm:object-[center_20%]",
                )}
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-accent-foreground/92 via-accent-foreground/55 to-accent-foreground/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/85 via-accent-foreground/15 to-transparent" />

        <motion.div
          className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
          animate={reduceMotion ? { opacity: 0.3 } : { opacity: [0.24, 0.4, 0.24] }}
          transition={{ duration: 8, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <Container className="relative z-10 flex min-h-[min(92vh,880px)] flex-col justify-end pb-8 pt-28 sm:min-h-[min(88vh,920px)] sm:justify-center sm:pb-12 sm:pt-32 lg:pb-16">
          <h1 className="sr-only">
            Denizli hafriyat, Denizli kazı ve inşaat hafriyat hizmetleri — {siteConfig.name}
          </h1>
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent sm:text-sm">{slide.tag}</p>
                <TextReveal
                  as="p"
                  text={slide.slogan}
                  className="mt-4 font-heading text-[2rem] leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
                  delay={0.05}
                />
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
                  {slide.highlight}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-2xl text-sm leading-relaxed text-white/65 sm:mt-7 sm:text-[15px]"
            >
              {brand.heroTrustPoints.join(" · ")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <AnimatedButton href={ctaLinks.quote.href} glow className="shadow-[0_12px_40px_rgba(245,160,32,0.28)]">
                {ctaLinks.quote.label}
                <ArrowRight size={18} aria-hidden="true" />
              </AnimatedButton>
              <p className="mt-4 text-sm text-white/70">
                veya{" "}
                <a href={ctaLinks.call.href} className="font-semibold text-white underline-offset-4 hover:text-accent hover:underline">
                  {contactInfo.phoneDisplay}
                </a>{" "}
                numarasından hemen ulaşın
              </p>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap items-start gap-x-8 gap-y-5 border-t border-white/15 pt-8 sm:gap-x-10"
            >
              {heroStats.map((item, index) => (
                <div key={item.label} className="flex items-start gap-8 sm:gap-10">
                  {index > 0 && (
                    <span className="hidden h-10 w-px shrink-0 bg-white/20 sm:block" aria-hidden="true" />
                  )}
                  <div>
                    <dd className="font-mono text-xl font-bold text-accent sm:text-2xl">{item.value}</dd>
                    <dt className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/55">{item.label}</dt>
                  </div>
                </div>
              ))}
            </motion.dl>
          </div>

          <div className="mt-8 flex items-end justify-end sm:mt-10">
            <div className="flex items-center gap-2 sm:gap-2.5">
              {homeHeroBanners.map((_, index) => (
                <button
                  key={homeHeroBanners[index].src}
                  type="button"
                  onClick={() => goTo(index)}
                  className={cn(
                    "group relative h-2 overflow-hidden rounded-full transition-all duration-300",
                    index === active ? "w-10 bg-white/25 sm:w-12" : "w-2 bg-white/35 hover:bg-white/55",
                  )}
                  aria-label={`Banner ${index + 1}`}
                  aria-current={index === active ? "true" : undefined}
                >
                  {index === active && (
                    <motion.span
                      key={active}
                      className="absolute inset-y-0 left-0 rounded-full bg-accent"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
