"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedButton } from "@/components/motion/AnimatedButton";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { brand } from "@/lib/constants/brand";
import { FadeIn } from "@/components/motion/FadeIn";
import { faqItems } from "@/lib/constants/content";
import { siteImages } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

type FaqSectionProps = {
  limit?: number;
  showContactLink?: boolean;
};

export function FaqSection({ limit, showContactLink = false }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const displayedFaq = limit ? faqItems.slice(0, limit) : faqItems;

  return (
    <Section id="sss" variant="muted" className="mesh-muted">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow={brand.sections.faq.eyebrow}
              title={brand.sections.faq.title}
              description={brand.sections.faq.description}
            />
            <div className="relative mt-8 hidden overflow-hidden rounded-lg border border-surface shadow-card-hover lg:block">
              <div className="relative aspect-[4/5]">
                <Image
                  src={siteImages.faqSide}
                  alt="SMF Hafriyat saha ekibi — sık sorulan sorular"
                  fill
                  className="object-cover"
                  sizes="500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/70 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-heading text-xl">Sorularınız mı var?</p>
                <p className="mt-1 text-sm text-white/80">Pzt–Cmt 08:00–18:00 · WhatsApp desteği</p>
              </div>
            </div>
          </FadeIn>

          <div className="space-y-3">
            {displayedFaq.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;
              return (
                <FadeIn key={item.question} delay={index * 0.05}>
                  <div className="overflow-hidden rounded-md border border-surface bg-bg-primary shadow-card transition-shadow hover:shadow-card-hover">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex min-h-11 w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className="font-heading text-base text-text-primary sm:text-lg">{item.question}</span>
                      <ChevronDown
                        size={20}
                        className={cn("shrink-0 text-accent transition-transform duration-300", isOpen && "rotate-180")}
                        aria-hidden="true"
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p className="border-t border-surface px-6 pb-5 pt-4 text-sm leading-relaxed text-text-secondary">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
            {showContactLink && (
              <FadeIn delay={displayedFaq.length * 0.05}>
                <div className="pt-4">
                  <AnimatedButton href="/iletisim" variant="secondary" glow={false} className="w-full sm:w-auto">
                    Sorularınız için iletişime geçin
                  </AnimatedButton>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
