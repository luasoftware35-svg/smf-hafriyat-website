"use client";

import Image from "next/image";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { FloatingOrbs } from "@/components/motion/FloatingOrbs";
import { ctaLinks, siteConfig } from "@/lib/constants/site";
import { siteImages } from "@/lib/constants/images";

const trustPoints = ["Ücretsiz keşif", "Ekskavatör filomuz", "Enkaz kaldırma", "Kendi operatörlerimiz"];

export function DiggerHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-b border-surface mesh-hero">
      <FloatingOrbs />

      <Container className="relative grid min-h-0 items-center gap-10 py-12 sm:gap-12 sm:py-16 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-2 lg:gap-16 lg:py-24">
        <FadeIn className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="text-[11px] sm:text-xs">Hafriyat · Yıkım · Kepçe · Ekskavatör</Badge>
          </motion.div>

          <h1 className="mt-5 font-heading text-[1.75rem] leading-[1.1] text-text-primary sm:mt-6 sm:text-4xl md:text-5xl lg:text-[3.75rem]">
            Hafriyat, yıkım ve{" "}
            <motion.span
              className="inline-block text-gradient-accent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              derin temel kazısı
            </motion.span>
            {" "}— ekskavatör filomuzla
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:mt-6 sm:text-lg">
            {siteConfig.name}; kepçe ile hafriyat kazısı, kontrollü yıkım, derin temelli enkaz kaldırma ve
            damper nakliyesinde Denizli ve Ege Bölgesi&apos;nde kendi filomuz ve operatör kadromuzla hizmet verir.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {trustPoints.map((point, index) => (
              <motion.span
                key={point}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.08 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-surface bg-bg-primary/80 px-3 py-1.5 text-xs font-medium text-text-secondary"
              >
                <CheckCircle2 size={12} className="text-accent" aria-hidden="true" />
                {point}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={ctaLinks.quote.href}>
              {ctaLinks.quote.label}
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href={ctaLinks.call.href} variant="secondary">
              <Phone size={18} aria-hidden="true" />
              {ctaLinks.call.label}
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Tecrübe", value: "21+ Yıl" },
              { label: "Proje", value: "900+" },
              { label: "Firma", value: "150+" },
              { label: "Kuruluş", value: "1998" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.08 }}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(245,160,32,0.15)" }}
                className="rounded-md border border-surface/80 bg-bg-primary/90 p-4 shadow-card backdrop-blur-sm"
              >
                <dt className="text-xs uppercase tracking-wider text-text-secondary">{item.label}</dt>
                <dd className="mt-1 font-mono text-xl font-bold text-accent sm:text-2xl">{item.value}</dd>
              </motion.div>
            ))}
          </dl>
        </FadeIn>

        <FadeIn delay={0.12} direction="left" className="relative">
          <div className="absolute -inset-6 rounded-xl bg-accent/10 blur-3xl animate-pulse-soft" aria-hidden="true" />
          <motion.div
            className="relative overflow-hidden rounded-lg border border-surface shadow-card-hover"
            whileHover={{ y: -6, rotate: -0.5 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <motion.div style={{ y: imageY }} className="relative aspect-[4/3] lg:aspect-[5/4]">
              <Image
                src={siteImages.hero}
                alt={siteImages.heroAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/60 via-accent-foreground/10 to-transparent" />
              <motion.div
                className="absolute left-4 top-4 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold text-accent-foreground"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                Ekskavatör saha görseli
              </motion.div>
            </motion.div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <motion.div
                className="rounded-md glass p-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="font-heading text-lg text-text-primary">Kepçe, dozer ve damper — kendi filomuz</p>
                <p className="mt-1 text-sm text-text-secondary">Derin temel kazısı, yıkım ve enkaz kaldırma</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 hidden rounded-md glass p-4 shadow-card-hover lg:block animate-float"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="font-mono text-2xl font-bold text-accent">900+</p>
            <p className="text-xs text-text-secondary">Tamamlanan Proje</p>
          </motion.div>

          <motion.div
            className="absolute -right-3 top-8 hidden h-16 w-16 rounded-full border-2 border-accent/30 lg:block"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            aria-hidden="true"
          />
        </FadeIn>
      </Container>
    </section>
  );
}
