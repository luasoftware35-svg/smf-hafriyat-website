"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Search, FileCheck, HardHat, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { brand } from "@/lib/constants/brand";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { processSteps } from "@/lib/constants/content";
import { siteImages } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

const stepIcons = [Search, FileCheck, HardHat, CheckCircle];
const cardOffsets = ["lg:translate-y-0", "lg:translate-y-8", "lg:translate-y-3", "lg:translate-y-11"];

type ProcessCardProps = {
  step: (typeof processSteps)[number];
  index: number;
  image: { src: string; alt: string };
};

function ProcessCard({ step, index, image }: ProcessCardProps) {
  const reduceMotion = useReducedMotion();
  const Icon = stepIcons[index] ?? CheckCircle;

  return (
    <StaggerItem className={cn("group relative h-full", cardOffsets[index])}>
      <motion.article
        className="relative h-full overflow-hidden rounded-sm border border-surface/80 bg-bg-primary shadow-card transition-shadow duration-300 group-hover:shadow-card-hover"
        whileHover={reduceMotion ? undefined : { y: -6 }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
      >
        <div className="relative aspect-[5/4] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={reduceMotion ? false : { scale: 1.12, y: 24 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={image.src}
              alt={`${step.title} — ${image.alt}`}
              fill
              className="object-cover object-center saturate-[0.9] contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/70 via-accent-foreground/10 to-transparent" />

          <motion.span
            className="pointer-events-none absolute -right-1 top-1 font-heading text-[5rem] leading-none text-white/12 sm:text-[5.5rem]"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.12 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            {String(step.step).padStart(2, "0")}
          </motion.span>

          <motion.div
            className="absolute bottom-4 left-4 flex items-center gap-2.5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.18 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-accent backdrop-blur-sm">
              <Icon size={17} aria-hidden="true" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/85">
              Adım {String(step.step).padStart(2, "0")}
            </span>
          </motion.div>
        </div>

        <div className="relative p-5 sm:p-6">
          <motion.div
            className="absolute inset-x-0 top-0 h-px origin-left bg-accent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
          <h3 className="font-heading text-xl text-text-primary sm:text-2xl">{step.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">{step.description}</p>
        </div>
      </motion.article>
    </StaggerItem>
  );
}

export function ProcessTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="surec">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={brand.sections.process.eyebrow}
            title={brand.sections.process.title}
            description={brand.sections.process.description}
            className="mb-14 lg:mb-16"
          />
        </FadeIn>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 right-0 top-[6.5rem] hidden lg:block" aria-hidden="true">
            <div className="mx-[12%] h-px overflow-hidden bg-surface">
              <motion.div
                className="h-full origin-left bg-accent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="mx-[12%] -mt-[5px] flex justify-between">
              {processSteps.map((step, index) => (
                <motion.span
                  key={step.step}
                  className="h-2.5 w-2.5 rounded-full border-2 border-bg-primary bg-accent"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 18,
                    delay: reduceMotion ? 0 : 0.15 + index * 0.12,
                  }}
                />
              ))}
            </div>
          </div>

          <StaggerGrid className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6" stagger={0.12}>
            {processSteps.map((step, index) => {
              const image = siteImages.process[index] ?? siteImages.process[0];
              return <ProcessCard key={step.step} step={step} index={index} image={image} />;
            })}
          </StaggerGrid>
        </div>
      </Container>
    </Section>
  );
}
