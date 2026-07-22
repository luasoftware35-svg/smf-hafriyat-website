"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { AnimatedButton } from "@/components/motion/AnimatedButton";
import { getServiceGallery } from "@/lib/constants/images";
import type { Service } from "@/lib/constants/services";
import { cn } from "@/lib/utils";

const SLIDE_MS = 5600;

const serviceTags: Record<string, string> = {
  "hafriyat-isleri": "Temel & Dekapaj",
  "yikim-calismalari": "Kontrollü Yıkım",
  "altyapi-calismalari": "Kanal & Hat Kazısı",
  "is-makinesi-kiralama": "Operatörlü Filo",
  "derin-kazi": "Derin Temel",
  "moloz-nakliyesi": "Damper Nakliye",
  "kum-cakil-temini": "Dolgu Malzemesi",
  "kanal-calismalari": "Mini Kepçe",
  "su-tankeri-nakliyesi": "Saha Sulama",
  "toprak-moloz-tasima": "Tonaj Taşıma",
};

const serviceDecisionNotes: Record<string, string> = {
  "hafriyat-isleri": "Temel kazisi, dekapaj ve saha tesviyesi gereken projeler icin uygundur.",
  "yikim-calismalari": "Kontrollu yikim ve enkaz yonetimi gereken yapilar icin planlanir.",
  "altyapi-calismalari": "Kanal, yagmursuyu ve altyapi hatlarinda hassas saha koordinasyonu sunar.",
  "is-makinesi-kiralama": "Operatörlü makine ve saha destegi gereken kisa veya uzun sureli isler icindir.",
  "derin-kazi": "Bodrum, otopark ve endustriyel temel projelerinde derin kazi disiplini sunar.",
  "moloz-nakliyesi": "Belgeli tasima ve hizli saha bosaltimi gereken projelere uygundur.",
  "kum-cakil-temini": "Dolgu ve saha hazirligi icin duzenli malzeme akisi saglar.",
  "kanal-calismalari": "Dar alanlarda mini kepce ile kontrollu kanal kazisi icin uygundur.",
  "su-tankeri-nakliyesi": "Santiye sulama ve saha toz kontrolu gereken alanlara yoneliktir.",
  "toprak-moloz-tasima": "Yuksek hacimli toprak ve moloz sevkiyatinda zaman kazandirir.",
};

type ServiceShowcaseCardProps = {
  service: Service;
  index: number;
  Icon: LucideIcon;
};

const featureVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
};

export function ServiceShowcaseCard({ service, index, Icon }: ServiceShowcaseCardProps) {
  const images = getServiceGallery(service.slug);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const reversed = index % 2 === 1;
  const tag = serviceTags[service.slug] ?? "Saha Hizmeti";
  const decisionNote = serviceDecisionNotes[service.slug] ?? service.shortDescription;

  useEffect(() => {
    if (paused || images.length <= 1 || reduceMotion) return;
    const timer = setInterval(() => setActive((prev) => (prev + 1) % images.length), SLIDE_MS);
    return () => clearInterval(timer);
  }, [images.length, paused, reduceMotion]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.24), ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="group"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-surface bg-bg-primary shadow-card transition-[border-color,box-shadow] duration-500",
          "group-hover:border-accent/30 group-hover:shadow-card-hover",
          "lg:grid lg:grid-cols-12 lg:items-stretch",
        )}
      >
        <div
          className={cn(
            "relative min-h-[260px] overflow-hidden sm:min-h-[300px] lg:col-span-7 lg:min-h-[360px]",
            reversed && "lg:order-2",
          )}
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`${service.slug}-${active}`}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: reduceMotion ? 1 : 1.05 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: SLIDE_MS / 1000, ease: "linear" },
              }}
              className="absolute inset-0"
            >
              <Image
                src={images[active]}
                alt={`${service.title} — SMF Hafriyat saha görseli ${active + 1}`}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 58vw"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/90 via-accent-foreground/35 to-accent-foreground/10" />
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-r from-transparent to-accent-foreground/20",
              reversed && "bg-gradient-to-l",
            )}
          />

          <motion.div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(245,160,32,0.12)_50%,transparent_100%)]"
            animate={reduceMotion ? { opacity: 0.18 } : { x: ["-100%", "100%"] }}
            transition={{ duration: 6, repeat: reduceMotion ? 0 : Infinity, ease: "linear" }}
            aria-hidden="true"
          />

          <motion.div
            className="absolute left-4 top-4 flex items-center gap-2 sm:left-6 sm:top-6"
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <motion.span
              className="rounded-sm bg-accent px-2.5 py-1 font-mono text-xs font-bold text-accent-foreground"
              whileHover={reduceMotion ? undefined : { scale: 1.06 }}
            >
              {String(service.orderIndex).padStart(2, "0")}
            </motion.span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {tag}
            </span>
          </motion.div>

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:hidden">
            <p className="font-heading text-2xl text-white">{service.title}</p>
          </div>

          <div className="absolute bottom-4 right-4 flex gap-1.5 sm:bottom-6 sm:right-6">
            {images.map((img, imgIndex) => (
              <button
                key={img}
                type="button"
                onClick={() => setActive(imgIndex)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  imgIndex === active ? "w-6 bg-accent" : "w-1.5 bg-white/45 hover:bg-white/70",
                )}
                aria-label={`${service.title} görsel ${imgIndex + 1}`}
              />
            ))}
          </div>
        </div>

        <div
          className={cn(
            "relative flex flex-col justify-center p-6 sm:p-8 lg:col-span-5 lg:p-10",
            reversed && "lg:order-1",
          )}
        >
          <motion.div
            className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-glow"
            whileHover={{ rotate: [0, -6, 6, 0], scale: 1.05 }}
            transition={{ duration: 0.45 }}
          >
            <Icon size={26} aria-hidden="true" />
          </motion.div>

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Hizmet {service.orderIndex}</p>
          <h2 className="mt-2 font-heading text-2xl text-text-primary sm:text-3xl">
            <Link href={`/hizmetler/${service.slug}`} className="inline-block transition-colors hover:text-accent">
              <motion.span whileHover={reduceMotion ? undefined : { x: 2 }} className="inline-block">
                {service.title}
              </motion.span>
            </Link>
          </h2>
          <motion.p
            className="mt-3 rounded-lg border border-surface bg-bg-secondary/70 px-4 py-3 text-sm leading-relaxed text-text-secondary transition-colors duration-300 group-hover:border-accent/20 group-hover:bg-bg-secondary"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            {decisionNote}
          </motion.p>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">{service.shortDescription}</p>

          <motion.ul
            className="mt-5 flex flex-wrap gap-2"
            variants={reduceMotion ? undefined : { hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}
            initial={reduceMotion ? undefined : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ once: true }}
          >
            {service.features.slice(0, 3).map((feature) => (
              <motion.li
                key={feature}
                variants={reduceMotion ? undefined : featureVariants}
                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.03 }}
              >
                <span className="block rounded-full border border-surface bg-bg-secondary/80 px-3 py-1 text-xs font-medium text-text-secondary transition-colors duration-300 hover:border-accent/25 hover:text-text-primary">
                  {feature}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-8"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <AnimatedButton href={`/hizmetler/${service.slug}`} glow>
              Bu Hizmet İçin Teklif Al
              <ArrowRight size={16} aria-hidden="true" />
            </AnimatedButton>
          </motion.div>

          <div className="pointer-events-none absolute -right-8 top-1/2 hidden h-24 w-24 -translate-y-1/2 rounded-full border border-accent/20 lg:block">
            <motion.span
              className="absolute inset-0 rounded-full border border-accent/30"
              animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
