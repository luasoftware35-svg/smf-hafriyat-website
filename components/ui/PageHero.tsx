"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { TextReveal } from "@/components/motion/TextReveal";
import { brand } from "@/lib/constants/brand";
import { siteImages } from "@/lib/constants/images";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  variant?: "marketing" | "legal";
};

export function PageHero({
  eyebrow,
  title,
  description,
  image = siteImages.about,
  imageAlt,
  variant = "marketing",
}: PageHeroProps) {
  const reduceMotion = useReducedMotion();
  const showProof = variant === "marketing";
  const animateBackground = !reduceMotion && variant === "marketing";

  return (
    <div className="relative overflow-hidden border-b border-surface">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={animateBackground ? { scale: 1.04 } : { scale: 1 }}
        transition={{ duration: 14, ease: "linear" }}
      >
        <Image
          src={image}
          alt={imageAlt ?? `${title} — SMF Hafriyat`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/96 via-bg-primary/88 to-bg-primary/55" />
      {animateBackground ? (
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(245,160,32,0.08)_50%,transparent_100%)]"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />
      ) : null}

      <Container className="relative py-14 sm:py-20 lg:py-28">
        {eyebrow && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Badge>{eyebrow}</Badge>
          </motion.div>
        )}
        <TextReveal
          as="h1"
          text={title}
          className="mt-4 max-w-3xl text-balance font-heading text-[1.75rem] leading-tight text-text-primary sm:text-4xl md:text-5xl lg:text-6xl"
          delay={0.08}
        />
        <motion.div
          initial={reduceMotion ? false : { width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 h-1 gradient-accent-bar"
        />
        {description && (
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            {description}
          </motion.p>
        )}
        {showProof ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.45 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {brand.proofStrip.map((item) => (
              <span
                key={item}
                className="rounded-full border border-surface bg-bg-primary/80 px-3 py-1.5 text-xs font-medium text-text-secondary backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>
        ) : null}
      </Container>
    </div>
  );
}
