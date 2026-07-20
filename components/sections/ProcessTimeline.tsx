"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search, FileCheck, HardHat, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { processSteps } from "@/lib/constants/content";
import { siteImages } from "@/lib/constants/images";

const stepIcons = [Search, FileCheck, HardHat, CheckCircle];

export function ProcessTimeline() {
  return (
    <Section id="surec">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Süreç"
            title="Keşiften teslimata dört adım"
            description="Her hafriyat projesinde aynı disiplin — şeffaf iletişim, belgeli süreç, zamanında teslim."
            className="mb-14"
          />
        </FadeIn>

        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[4.5rem] hidden h-0.5 bg-gradient-to-r from-accent/20 via-accent/60 to-accent/20 lg:block" aria-hidden="true">
            <motion.div
              className="h-full w-full origin-left bg-accent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {processSteps.map((step, index) => {
            const Icon = stepIcons[index] ?? CheckCircle;
            const image = siteImages.process[index] ?? siteImages.process[0];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-md border border-surface bg-bg-primary shadow-card"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={`${step.title} — ${image.alt}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/80 via-accent-foreground/30 to-transparent" />
                  <motion.div
                    className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-card"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </motion.div>
                  <motion.span
                    className="absolute right-3 top-3 rounded-full bg-white/15 px-2 py-0.5 font-mono text-xs text-white backdrop-blur-sm"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {String(step.step).padStart(2, "0")}
                  </motion.span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl text-text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
