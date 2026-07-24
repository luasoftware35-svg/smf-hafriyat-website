"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, ChevronDown, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { FadeIn } from "@/components/motion/FadeIn";
import { TextReveal } from "@/components/motion/TextReveal";
import { brand } from "@/lib/constants/brand";
import { useSiteContact } from "@/components/providers/SiteContactProvider";
import { cn } from "@/lib/utils";

const cardVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const pillListVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export function HomeContactSection() {
  return (
    <Suspense fallback={null}>
      <HomeContactSectionInner />
    </Suspense>
  );
}

function HomeContactSectionInner() {
  const { contactInfo } = useSiteContact();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const hasPrefill =
      searchParams.has("hizmet") ||
      searchParams.has("bolge") ||
      searchParams.has("proje") ||
      searchParams.has("mesaj");
    if (hasPrefill) setOpen(true);
  }, [searchParams]);

  return (
    <Section id="kesif-formu" variant="muted" className="py-14 lg:py-16">
      <Container>
        <div className="mx-auto max-w-5xl">
          <FadeIn className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Keşif & Teklif</p>
            <h2 className="mt-3 font-heading text-3xl leading-snug text-text-primary sm:text-4xl">
              <TextReveal text="Ücretsiz keşif planlayın" highlightLast={1} />
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-primary/85 sm:text-lg">
              Aynı gün geri dönüş — formu açın, ekibimiz sizi arasın.
            </p>
          </FadeIn>

          <FadeIn delay={0.06} className="mt-8">
            <motion.div
              layout={!reduceMotion}
              initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "relative overflow-hidden rounded-2xl border bg-bg-primary shadow-card transition-[border-color,box-shadow] duration-500",
                open
                  ? "border-accent/35 shadow-card-hover"
                  : "border-accent/25 shadow-[0_12px_40px_rgba(245,160,32,0.08)]",
              )}
            >
              {!open ? (
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent via-amber-300 to-accent-secondary"
                  aria-hidden="true"
                />
              ) : null}

              <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute inset-0 mesh-muted opacity-80" />
                <motion.div
                  className="absolute -left-16 top-0 h-44 w-44 rounded-full bg-accent/15 blur-3xl"
                  animate={reduceMotion ? undefined : { x: [0, 16, 0], y: [0, 10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-accent-secondary/10 blur-3xl"
                  animate={reduceMotion ? undefined : { x: [0, -12, 0], y: [0, -8, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              <motion.div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
                animate={reduceMotion ? undefined : { opacity: open ? 1 : 0.45, scaleX: open ? 1 : 0.72 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "center" }}
                aria-hidden="true"
              />

              <motion.div
                className="relative p-6 sm:p-7 lg:p-8"
                variants={reduceMotion ? undefined : cardVariants}
                initial={reduceMotion ? undefined : "hidden"}
                whileInView={reduceMotion ? undefined : "show"}
                viewport={{ once: true, margin: "-30px" }}
              >
                <button
                  type="button"
                  onClick={() => !open && setOpen(true)}
                  disabled={open}
                  aria-label={open ? undefined : "Keşif formunu aç"}
                  className={cn(
                    "w-full text-left",
                    !open && "cursor-pointer rounded-xl transition-colors hover:bg-accent/[0.04]",
                  )}
                >
                  <motion.div variants={reduceMotion ? undefined : rowVariants} className="flex items-start gap-4">
                    <span className="relative mt-0.5 shrink-0">
                      {!open && !reduceMotion ? (
                        <span
                          className="pointer-events-none absolute inset-0 rounded-full border border-accent/40 animate-ring-pulse"
                          aria-hidden="true"
                        />
                      ) : null}
                      <motion.span
                        className="relative flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 bg-accent/15 text-accent shadow-glow"
                        animate={reduceMotion ? undefined : { rotate: open ? 0 : [0, -6, 6, 0] }}
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut",
                          repeat: open || reduceMotion ? 0 : Infinity,
                          repeatDelay: 4,
                        }}
                      >
                        <Sparkles size={18} aria-hidden="true" />
                      </motion.span>
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-heading text-xl text-text-primary sm:text-2xl">Hızlı keşif koordinasyonu</p>
                      <p className="mt-2 text-sm leading-relaxed text-text-primary/80 sm:text-base">
                        Önce arayın veya WhatsApp yazın; detaylı teklif için{" "}
                        <span className="font-semibold text-accent">keşif formunu açın</span>.
                      </p>
                    </div>
                    {!open ? (
                      <span className="hidden shrink-0 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent sm:inline-flex">
                        Tıkla & Aç
                      </span>
                    ) : null}
                  </motion.div>
                </button>

                <motion.div
                  variants={reduceMotion ? undefined : rowVariants}
                  className="mt-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="flex flex-1 flex-wrap gap-2">
                    <ContactChip
                      href={contactInfo.phoneHref}
                      label={contactInfo.phoneDisplay}
                      subLabel="Telefon"
                      icon={Phone}
                      hoverClass="group-hover:text-accent group-hover:border-accent/30 group-hover:bg-accent/[0.06]"
                      reduceMotion={!!reduceMotion}
                    />
                    <ContactChip
                      href={contactInfo.whatsappHref}
                      label={contactInfo.whatsappDisplay}
                      subLabel="WhatsApp Business"
                      icon={MessageCircle}
                      external
                      hoverClass="group-hover:text-[#25D366] group-hover:border-[#25D366]/30 group-hover:bg-[#25D366]/[0.06]"
                      reduceMotion={!!reduceMotion}
                    />
                  </div>

                  <motion.button
                    type="button"
                    onClick={() => setOpen((value) => !value)}
                    whileHover={reduceMotion ? undefined : { scale: 1.02, y: -2 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    aria-expanded={open}
                    aria-controls="kesif-form-panel"
                    className={cn(
                      "group relative inline-flex w-full shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-bold lg:w-auto lg:min-w-[15rem]",
                      open
                        ? "border border-surface bg-bg-secondary text-text-primary"
                        : "bg-accent text-accent-foreground shadow-glow",
                    )}
                  >
                    {!open && !reduceMotion ? (
                      <>
                        <span
                          className="pointer-events-none absolute -inset-1 rounded-full bg-accent/25 blur-md animate-pulse-soft"
                          aria-hidden="true"
                        />
                        <span
                          className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.35)_50%,transparent_100%)] animate-shimmer"
                          aria-hidden="true"
                        />
                      </>
                    ) : null}
                    <span className="relative">{open ? "Formu kapat" : "Keşif formunu aç"}</span>
                    <motion.span
                      className="relative"
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 320, damping: 22 }}
                    >
                      <ChevronDown size={16} aria-hidden="true" />
                    </motion.span>
                  </motion.button>
                </motion.div>

                <motion.ul
                  variants={reduceMotion ? undefined : pillListVariants}
                  className="mt-6 flex flex-wrap gap-2.5"
                >
                  {brand.contactPromises.map((item) => (
                    <motion.li
                      key={item}
                      variants={reduceMotion ? undefined : pillVariants}
                      whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
                      className="rounded-full border border-accent/20 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-medium text-text-primary transition-colors duration-300 hover:border-accent/35 hover:bg-accent/[0.12]"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    id="kesif-form-panel"
                    initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 260, damping: 28, opacity: { duration: 0.25 } }
                    }
                  >
                    <motion.div
                      initial={reduceMotion ? false : { y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={reduceMotion ? undefined : { y: 10, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="relative border-t border-accent/15 bg-gradient-to-b from-accent/[0.06] to-bg-secondary/30 px-6 pb-7 pt-6 sm:px-7 lg:px-8"
                    >
                      <motion.div
                        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
                        initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                        style={{ transformOrigin: "left" }}
                        aria-hidden="true"
                      />
                      <ContactForm variant="compact" />
                    </motion.div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

function ContactChip({
  href,
  label,
  subLabel,
  icon: Icon,
  external,
  hoverClass,
  reduceMotion,
}: {
  href: string;
  label: string;
  subLabel: string;
  icon: typeof Phone;
  external?: boolean;
  hoverClass: string;
  reduceMotion: boolean;
}) {
  const className = cn(
    "group inline-flex min-w-[10.5rem] flex-1 items-center gap-3 rounded-xl border border-accent/15 bg-bg-primary/90 px-4 py-3 shadow-sm transition-all duration-300 sm:flex-none",
    hoverClass,
  );

  const content = (
    <>
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-surface bg-bg-primary text-text-secondary transition-colors duration-300 group-hover:border-current">
        <Icon size={15} aria-hidden="true" />
      </span>
      <span className="min-w-0 text-left">
        <span className="block truncate text-sm font-semibold text-text-primary transition-colors duration-300">{label}</span>
        <span className="block text-[10px] uppercase tracking-[0.12em] text-text-secondary">{subLabel}</span>
      </span>
      {external ? (
        <ArrowUpRight size={14} className="ml-auto shrink-0 text-text-secondary/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      ) : null}
    </>
  );

  if (external) {
    return (
      <motion.div whileHover={reduceMotion ? undefined : { y: -2 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
        <Link href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.a
      href={href}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      className={className}
    >
      {content}
    </motion.a>
  );
}
