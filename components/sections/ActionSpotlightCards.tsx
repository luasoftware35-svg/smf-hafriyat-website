"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { TextReveal } from "@/components/motion/TextReveal";
import { AnimatedButton } from "@/components/motion/AnimatedButton";
import { actionSpotlights } from "@/lib/constants/images";
import { brand } from "@/lib/constants/brand";

export function ActionSpotlightCards() {
  return (
    <section className="border-b border-surface bg-bg-secondary/40 py-10 lg:py-14">
      <Container>
        <FadeIn className="mb-8 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{brand.sections.actionSpotlight.eyebrow}</p>
          <TextReveal
            as="h2"
            text={brand.sections.actionSpotlight.title}
            className="mt-3 font-heading text-2xl text-text-primary sm:text-3xl"
            delay={0.05}
          />
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            Hizmet, filo ve referans sayfalarını teklif kararını hızlandıracak net başlıklarla öne çıkarıyoruz.
          </p>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-3">
          {actionSpotlights.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative min-h-[280px] overflow-hidden rounded-lg border border-surface shadow-card hover:shadow-card-hover"
            >
              <Link href={item.href} className="absolute inset-0 z-10" aria-label={item.title}>
                <span className="sr-only">{item.title}</span>
              </Link>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width:768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/90 via-accent-foreground/40 to-accent-foreground/10" />
              <motion.div
                className="absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/10"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{item.tag}</p>
                <h3 className="mt-2 font-heading text-xl text-white sm:text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{item.subtitle}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-transform group-hover:translate-x-1">
                  {item.ctaLabel}
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
              <motion.span
                className="pointer-events-none absolute right-4 top-4 h-10 w-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
                animate={{ opacity: [0.4, 0.12, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-8 flex justify-center">
          <AnimatedButton href="/iletisim" glow>
            Keşif Talep Edin
            <ArrowRight size={18} aria-hidden="true" />
          </AnimatedButton>
        </FadeIn>
      </Container>
    </section>
  );
}
