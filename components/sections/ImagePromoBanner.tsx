"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedButton } from "@/components/motion/AnimatedButton";
import { TextReveal } from "@/components/motion/TextReveal";
import { useSiteContact } from "@/components/providers/SiteContactProvider";
import { cn } from "@/lib/utils";
import type { PromoSlide } from "@/lib/constants/images";

type ImagePromoBannerProps = {
  slides: readonly PromoSlide[];
  size?: "lg" | "md" | "sm";
  align?: "left" | "center";
  interval?: number;
  className?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  showDots?: boolean;
  primaryIcon?: LucideIcon;
};

const sizeClasses = {
  lg: "min-h-[min(72vh,640px)]",
  md: "min-h-[min(52vh,480px)]",
  sm: "min-h-[min(40vh,360px)]",
};

export function ImagePromoBanner({
  slides,
  size = "md",
  align = "left",
  interval = 5500,
  className,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  showDots = true,
  primaryIcon: PrimaryIcon = ArrowRight,
}: ImagePromoBannerProps) {
  const { ctaLinks } = useSiteContact();
  const resolvedPrimaryHref = primaryHref ?? ctaLinks.quote.href;
  const resolvedPrimaryLabel = primaryLabel ?? ctaLinks.quote.label;
  const resolvedSecondaryHref = secondaryHref ?? ctaLinks.call.href;
  const resolvedSecondaryLabel = secondaryLabel ?? ctaLinks.call.label;
  const [active, setActive] = useState(0);
  const slideCount = slides.length;
  const reduceMotion = useReducedMotion();

  const goTo = useCallback(
    (index: number) => setActive((index + slideCount) % slideCount),
    [slideCount],
  );

  const next = useCallback(() => setActive((prev) => (prev + 1) % slideCount), [slideCount]);

  useEffect(() => {
    if (slideCount <= 1 || reduceMotion) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval, slideCount, reduceMotion]);

  const slide = slides[active];
  const centered = align === "center";

  return (
    <section className={cn("relative overflow-hidden border-b border-surface", className)}>
      <div className={cn("relative w-full", sizeClasses[size])}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <motion.div
              className="relative h-full w-full"
              initial={{ scale: 1 }}
              animate={{ scale: reduceMotion ? 1 : 1.06 }}
              transition={{ duration: interval / 1000, ease: "linear" }}
            >
              <Image src={slide.src} alt={slide.alt} fill className="object-cover" sizes="100vw" />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-accent-foreground/90 via-accent-foreground/50 to-accent-foreground/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/80 via-transparent to-accent-foreground/10" />

        <motion.div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(245,160,32,0.14)_50%,transparent_100%)]"
          animate={reduceMotion ? { opacity: 0.2 } : { x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: reduceMotion ? 0 : Infinity, ease: "linear" }}
          aria-hidden="true"
        />

        <Container
          className={cn(
            "relative z-10 flex h-full flex-col justify-center py-14",
            sizeClasses[size],
            centered && "items-center text-center",
          )}
        >
          <div className={cn("max-w-3xl", centered && "mx-auto")}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent sm:text-sm">{slide.tag}</p>
                <TextReveal
                  as="h2"
                  text={slide.title}
                  className="mt-3 font-heading text-3xl leading-tight text-white sm:text-4xl lg:text-5xl"
                  delay={0.05}
                />
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{slide.subtitle}</p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn("mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4", centered && "justify-center")}
            >
              <AnimatedButton href={resolvedPrimaryHref} glow>
                {resolvedPrimaryLabel}
                <PrimaryIcon size={18} aria-hidden="true" />
              </AnimatedButton>
              <AnimatedButton
                href={resolvedSecondaryHref}
                variant="secondary"
                glow={false}
                className="border-white/20 bg-white/8 text-white/92 hover:border-accent hover:bg-white/12 hover:text-white"
              >
                <Phone size={18} aria-hidden="true" />
                {resolvedSecondaryLabel}
              </AnimatedButton>
            </motion.div>
          </div>

          {showDots && slideCount > 1 && (
            <div className={cn("mt-10 flex gap-2", centered ? "justify-center" : "justify-start")}>
              {slides.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => goTo(index)}
                  className={cn(
                    "relative h-2 overflow-hidden rounded-full transition-all duration-300",
                    index === active ? "w-10 bg-white/25 sm:w-12" : "w-2 bg-white/40 hover:bg-white/60",
                  )}
                  aria-label={`Slayt ${index + 1}`}
                  aria-current={index === active ? "true" : undefined}
                >
                  {index === active && (
                    <motion.span
                      key={active}
                      className="absolute inset-y-0 left-0 rounded-full bg-accent"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: interval / 1000, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>
          )}
        </Container>
      </div>
    </section>
  );
}
