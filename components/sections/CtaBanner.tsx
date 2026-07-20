"use client";

import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { FloatingOrbs } from "@/components/motion/FloatingOrbs";
import { ctaLinks } from "@/lib/constants/site";
import { siteImages } from "@/lib/constants/images";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden border-b border-surface">
      <div className="absolute inset-0">
        <Image src={siteImages.hero} alt="" fill className="object-cover" sizes="100vw" aria-hidden="true" />
        <div className="absolute inset-0 bg-accent-foreground/85" />
      </div>
      <FloatingOrbs className="opacity-60" />

      <motion.div
        className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(245,160,32,0.12)_50%,transparent_100%)]"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      <Container className="relative py-16 lg:py-20">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <motion.p
            className="font-mono text-sm uppercase tracking-widest text-accent"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            Hemen Başlayalım
          </motion.p>
          <h2 className="mt-4 font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
            Projeniz için <span className="text-accent">ücretsiz keşif</span> planlayın
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Hafriyat, yıkım veya derin temel kazısı projeniz için aynı gün ekskavatör keşfi planlayın.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Button href={ctaLinks.quote.href}>
                {ctaLinks.quote.label}
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Button href={ctaLinks.call.href} variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Phone size={18} aria-hidden="true" />
                {ctaLinks.call.label}
              </Button>
            </motion.div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
