"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { AnimatedButton } from "@/components/motion/AnimatedButton";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { brand } from "@/lib/constants/brand";
import { FadeIn } from "@/components/motion/FadeIn";
import { faqItems as staticFaqItems } from "@/lib/constants/content";
import type { FaqItem } from "@/lib/data/faq";
import { useSiteContact } from "@/components/providers/SiteContactProvider";
import { siteImages } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

type FaqSectionProps = {
  limit?: number;
  showContactLink?: boolean;
  items?: readonly FaqItem[];
};

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function FaqSection({ limit, showContactLink = false, items }: FaqSectionProps) {
  const reduceMotion = useReducedMotion();
  const { quickContactChannels } = useSiteContact();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqItems = items ?? staticFaqItems;
  const displayedFaq = limit ? faqItems.slice(0, limit) : faqItems;

  return (
    <Section id="sss" variant="muted">
      <Container>
        <FadeIn>
          <SectionHeading
            variant="calm"
            eyebrow={brand.sections.faq.eyebrow}
            title={brand.sections.faq.title}
            description={brand.sections.faq.description}
          />
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-10">
          <FadeIn delay={0.05} className="hidden lg:flex lg:flex-col lg:gap-4">
            <motion.div
              className="relative h-[min(420px,calc(100vh-12rem))] min-h-[280px] overflow-hidden rounded-lg border border-surface shadow-card"
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
            >
              <Image
                src={siteImages.faqSide}
                alt="SMF Hafriyat saha ekibi — sık sorulan sorular"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 42vw, 0px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/75 via-accent-foreground/15 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-heading text-lg">Sorularınız mı var?</p>
                <p className="mt-1 text-sm text-white/80">Pzt–Cmt 08:00–18:00 · WhatsApp desteği</p>
              </div>
            </motion.div>

            <FaqContactActions reduceMotion={!!reduceMotion} channels={quickContactChannels} />
          </FadeIn>

          <motion.div
            className="space-y-3"
            variants={reduceMotion ? undefined : listVariants}
            initial={reduceMotion ? undefined : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ once: true, margin: "-50px" }}
          >
            {displayedFaq.map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                reduceMotion={!!reduceMotion}
              />
            ))}
            {showContactLink && (
              <FadeIn delay={displayedFaq.length * 0.05}>
                <div className="pt-4">
                  <AnimatedButton href="/iletisim" variant="secondary" glow={false} className="w-full sm:w-auto">
                    Sorularınız için iletişime geçin
                  </AnimatedButton>
                </div>
              </FadeIn>
            )}
            <FadeIn delay={0.12} className="lg:hidden">
              <div className="pt-6">
                <FaqContactActions reduceMotion={!!reduceMotion} channels={quickContactChannels} />
              </div>
            </FadeIn>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

const channelStyles = {
  whatsapp: {
    icon: MessageCircle,
    hoverIcon: "group-hover:text-[#25D366]",
    hoverRing: "group-hover:bg-[#25D366]/20",
    hoverSurface: "group-hover:border-[#25D366]/30 group-hover:bg-[#25D366]/10",
    hoverLabel: "group-hover:text-[#25D366]",
  },
  instagram: {
    icon: InstagramIcon,
    hoverIcon: "group-hover:text-[#E4405F]",
    hoverRing: "group-hover:bg-[#E4405F]/20",
    hoverSurface: "group-hover:border-[#E4405F]/30 group-hover:bg-[#E4405F]/10",
    hoverLabel: "group-hover:text-[#E4405F]",
  },
  phone: {
    icon: Phone,
    hoverIcon: "group-hover:text-accent",
    hoverRing: "group-hover:bg-accent/20",
    hoverSurface: "group-hover:border-accent/30 group-hover:bg-accent/10",
    hoverLabel: "group-hover:text-accent",
  },
} as const;

function InstagramIcon({ className, size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FaqContactActions({
  reduceMotion,
  channels,
}: {
  reduceMotion: boolean;
  channels: ReturnType<typeof useSiteContact>["quickContactChannels"];
}) {
  return (
    <motion.div
      className="flex items-center justify-center gap-2.5"
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
      }}
    >
      {channels.map((channel) => {
        const style = channelStyles[channel.icon];
        const Icon = style.icon;
        const external = channel.icon !== "phone";

        return (
          <motion.a
            key={channel.label}
            href={channel.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            variants={{
              hidden: { opacity: 0, y: 12, scale: 0.85 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 420, damping: 24 },
              },
            }}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -5,
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 500, damping: 18 },
                  }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.9 }}
            className="group relative flex min-h-11 flex-col items-center justify-center gap-1.5 px-1"
            aria-label={channel.label}
          >
            <span className="relative flex h-11 w-11 items-center justify-center">
              {!reduceMotion ? (
                <motion.span
                  className={cn(
                    "absolute inset-0 rounded-full bg-surface opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    style.hoverRing,
                  )}
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.35 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  aria-hidden="true"
                />
              ) : (
                <span
                  className={cn(
                    "absolute inset-0 rounded-full bg-surface opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    style.hoverRing,
                  )}
                  aria-hidden="true"
                />
              )}
              <span
                className={cn(
                  "relative flex h-8 w-8 items-center justify-center rounded-full border border-surface bg-bg-primary text-text-secondary shadow-sm transition-all duration-300 group-hover:shadow-card",
                  style.hoverSurface,
                )}
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { rotate: channel.icon === "phone" ? 0 : 8, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 400, damping: 16 }}
                  className={cn("transition-colors duration-300", style.hoverIcon)}
                >
                  <Icon size={14} aria-hidden="true" />
                </motion.span>
              </span>
            </span>
            <span
              className={cn(
                "text-[10px] font-medium text-text-secondary transition-colors duration-300 group-hover:text-text-primary",
                style.hoverLabel,
              )}
            >
              {channel.label}
            </span>
          </motion.a>
        );
      })}
    </motion.div>
  );
}

function FaqItem({
  item,
  index,
  isOpen,
  onToggle,
  reduceMotion,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  reduceMotion: boolean;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <motion.div
      layout={!reduceMotion}
      variants={reduceMotion ? undefined : itemVariants}
      className={cn(
        "relative overflow-hidden rounded-lg border bg-bg-primary shadow-card transition-[border-color,box-shadow]",
        isOpen ? "border-accent/35 shadow-card-hover" : "border-surface hover:border-accent/20 hover:shadow-card-hover",
      )}
    >
      {isOpen ? (
        <motion.span
          layoutId={reduceMotion ? undefined : "faq-active-indicator"}
          className="absolute bottom-0 left-0 top-0 w-0.5 bg-accent"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
          aria-hidden="true"
        />
      ) : null}

      <motion.button
        type="button"
        onClick={onToggle}
        whileHover={reduceMotion ? undefined : { backgroundColor: "rgba(245, 160, 32, 0.05)" }}
        whileTap={reduceMotion ? undefined : { scale: 0.995 }}
        className="relative flex min-h-11 w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className={cn("font-heading text-base sm:text-lg", isOpen ? "text-text-primary" : "text-text-primary")}>
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 320, damping: 22 }}
          className="shrink-0 text-accent"
        >
          <ChevronDown size={20} aria-hidden="true" />
        </motion.span>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 280, damping: 28, opacity: { duration: 0.2 } }
            }
          >
            <motion.p
              initial={reduceMotion ? false : { y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: reduceMotion ? 0 : 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-surface px-4 pb-5 pt-4 text-sm leading-relaxed text-text-secondary sm:px-6"
            >
              {item.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
