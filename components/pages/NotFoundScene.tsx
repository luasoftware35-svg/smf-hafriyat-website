"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Home, Phone, Shovel } from "lucide-react";
import { AnimatedButton } from "@/components/motion/AnimatedButton";
import { TextReveal } from "@/components/motion/TextReveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useSiteContact } from "@/components/providers/SiteContactProvider";
import { siteImages } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

const quickLinks = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/filo", label: "Filo" },
  { href: "/iletisim", label: "İletişim" },
];

function DustParticle({ index, reduceMotion }: { index: number; reduceMotion: boolean }) {
  const seed = useMemo(
    () => ({
      left: `${8 + ((index * 17) % 84)}%`,
      top: `${12 + ((index * 23) % 72)}%`,
      size: 2 + (index % 3),
      delay: index * 0.35,
      duration: 4 + (index % 5),
    }),
    [index],
  );

  if (reduceMotion) return null;

  return (
    <motion.span
      className="pointer-events-none absolute rounded-full bg-accent/40"
      style={{ left: seed.left, top: seed.top, width: seed.size, height: seed.size }}
      animate={{
        y: [0, -28, 0],
        x: [0, index % 2 === 0 ? 12 : -12, 0],
        opacity: [0.15, 0.55, 0.15],
      }}
      transition={{
        duration: seed.duration,
        delay: seed.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
}

function ExcavatorIllustration({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 320 180"
      className="mx-auto h-28 w-full max-w-xs text-accent sm:h-36"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <motion.g
        animate={reduceMotion ? undefined : { x: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="24" y="118" width="118" height="28" rx="8" fill="currentColor" opacity="0.18" />
        <circle cx="52" cy="146" r="16" fill="#1A1714" stroke="currentColor" strokeWidth="3" />
        <circle cx="112" cy="146" r="16" fill="#1A1714" stroke="currentColor" strokeWidth="3" />
        <rect x="34" y="92" width="72" height="28" rx="6" fill="currentColor" />
        <motion.g
          style={{ originX: "106px", originY: "92px" }}
          animate={reduceMotion ? undefined : { rotate: [0, -18, 4, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="106" y="72" width="88" height="14" rx="7" fill="#1A1714" />
          <motion.g
            style={{ originX: "188px", originY: "78px" }}
            animate={reduceMotion ? undefined : { rotate: [0, 24, -8, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          >
            <rect x="188" y="68" width="72" height="12" rx="6" fill="#1A1714" />
            <motion.g
              style={{ originX: "252px", originY: "74px" }}
              animate={reduceMotion ? undefined : { rotate: [0, -32, 10, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
            >
              <path d="M252 74 L292 74 L304 92 L248 92 Z" fill="currentColor" />
            </motion.g>
          </motion.g>
        </motion.g>
      </motion.g>
      <motion.path
        d="M20 156 H300"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="8 10"
        opacity="0.35"
        animate={reduceMotion ? undefined : { strokeDashoffset: [0, -36] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
      />
    </motion.svg>
  );
}

function Digit404({ char, index, reduceMotion }: { char: string; index: number; reduceMotion: boolean }) {
  return (
    <motion.span
      className={cn(
        "inline-block font-heading text-[5.5rem] leading-none sm:text-[7rem] lg:text-[8.5rem]",
        char === "0" ? "text-gradient-accent" : "text-text-primary/10",
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 40, rotateX: 50 }}
      animate={
        reduceMotion
          ? { opacity: 1, y: 0, rotateX: 0 }
          : { opacity: 1, y: [0, -6, 0], rotateX: 0 }
      }
      transition={
        reduceMotion
          ? { duration: 0.65, delay: 0.08 + index * 0.12, ease: [0.22, 1, 0.36, 1] }
          : {
              y: { duration: 3 + index * 0.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 + index * 0.15 },
              opacity: { duration: 0.65, delay: 0.08 + index * 0.12 },
              rotateX: { duration: 0.65, delay: 0.08 + index * 0.12 },
            }
      }
      style={{ transformStyle: "preserve-3d" }}
    >
      {char}
    </motion.span>
  );
}

export function NotFoundScene() {
  const { contactInfo, ctaLinks } = useSiteContact();
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[calc(100dvh-7rem)] overflow-hidden border-b border-surface bg-bg-primary">
      <div className="absolute inset-0">
        <Image
          src={siteImages.trustBg}
          alt=""
          fill
          className="object-cover opacity-[0.08]"
          sizes="100vw"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(245,160,32,0.12),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,160,32,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,160,32,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
          aria-hidden="true"
        />
        {!reduceMotion ? (
          <motion.div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(245,160,32,0.06)_50%,transparent_100%)]"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          />
        ) : null}
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {Array.from({ length: 14 }, (_, index) => (
          <DustParticle key={index} index={index} reduceMotion={!!reduceMotion} />
        ))}
      </div>

      <Container className="relative flex min-h-[calc(100dvh-7rem)] flex-col items-center justify-center py-16 text-center">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5"
        >
          <motion.span
            animate={reduceMotion ? undefined : { rotate: [0, 12, -8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Shovel size={14} className="text-accent" aria-hidden="true" />
          </motion.span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">404 · Saha dışı rota</span>
        </motion.div>

        <div className="relative [perspective:900px]">
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            {"404".split("").map((char, index) => (
              <Digit404 key={`${char}-${index}`} char={char} index={index} reduceMotion={!!reduceMotion} />
            ))}
          </div>
          <ExcavatorIllustration reduceMotion={!!reduceMotion} />
        </div>

        <div className="mx-auto mt-6 max-w-xl">
          <h1 className="font-heading text-2xl text-text-primary sm:text-3xl lg:text-4xl">
            <TextReveal text="Bu kazıda sayfa bulunamadı" highlightLast={2} delay={0.15} />
          </h1>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base"
          >
            Aradığınız adres taşınmış, kaldırılmış veya hiç var olmamış olabilir. Ana rotadan hizmetlerimize ve
            projelerimize devam edebilirsiniz.
          </motion.p>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <AnimatedButton href="/" glow>
            <Home size={18} aria-hidden="true" />
            Ana Sayfa
          </AnimatedButton>
          <AnimatedButton href={ctaLinks.quote.href} variant="secondary" glow={false}>
            Keşif Talep Et
          </AnimatedButton>
          <Button href={contactInfo.phoneHref} variant="ghost">
            <Phone size={18} aria-hidden="true" />
            {contactInfo.phoneDisplay}
          </Button>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.06, type: "spring", stiffness: 420, damping: 24 }}
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.04 }}
            >
              <Link
                href={link.href}
                className="inline-flex min-h-11 items-center rounded-full border border-surface bg-bg-primary/80 px-4 py-2 text-sm font-medium text-text-secondary backdrop-blur-sm transition-colors hover:border-accent/35 hover:text-accent"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Link
            href="/hizmetler"
            className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent transition-colors hover:underline"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Hizmetlere dön
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
