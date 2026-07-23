"use client";

import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { FadeIn } from "@/components/motion/FadeIn";
import { clientProof, googleBusiness, stats } from "@/lib/constants/content";
import { cn } from "@/lib/utils";

const statGridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const statCellVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const projectListVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};

const projectCardVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } },
};

export function SocialProofSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="referanslar"
      aria-labelledby="referanslar-heading"
      className="border-b border-surface bg-bg-primary py-14 lg:py-16"
    >
      <Container>
        <FadeIn className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Referanslar</p>
            <h2 id="referanslar-heading" className="mt-2 font-heading text-3xl leading-tight text-text-primary sm:text-4xl">
              Denizli&apos;de kanıtlanmış{" "}
              <span className="text-accent">tecrübe</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              <span className="font-medium text-text-primary">1998&apos;den bu yana</span> Ege Bölgesi&apos;nde tamamlanan saha
              projeleri.
            </p>
          </div>

          <GoogleLink reduceMotion={!!reduceMotion} />
        </FadeIn>

        <motion.dl
          className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-surface bg-surface lg:grid-cols-4"
          variants={reduceMotion ? undefined : statGridVariants}
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, margin: "-60px" }}
        >
          {stats.map((item) => (
            <StatCell key={item.label} item={item} reduceMotion={!!reduceMotion} />
          ))}
        </motion.dl>

        <FadeIn delay={0.1} className="mt-12">
          <div className="flex items-baseline justify-between gap-4 border-b border-surface pb-4">
            <h3 className="font-heading text-xl text-text-primary sm:text-2xl">Saha referansları</h3>
            <Link
              href="/projeler"
              className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-secondary"
            >
              Tüm referans projeler
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <motion.ul
            className="mt-6 grid gap-3 sm:grid-cols-2"
            variants={reduceMotion ? undefined : projectListVariants}
            initial={reduceMotion ? undefined : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ once: true, margin: "-50px" }}
          >
            {clientProof.map((item, index) => (
              <ProjectCard key={item.project} item={item} index={index} reduceMotion={!!reduceMotion} />
            ))}
          </motion.ul>
        </FadeIn>
      </Container>
    </section>
  );
}

function GoogleLink({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div whileHover={reduceMotion ? undefined : { scale: 1.02 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
      <Link
        href={googleBusiness.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex w-fit items-center gap-2 rounded-full border border-surface bg-bg-secondary/50 px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent/40"
      >
        <Star size={15} className="text-accent" aria-hidden="true" />
        Google yorumları
        <ArrowUpRight
          size={14}
          className="text-text-secondary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </Link>
    </motion.div>
  );
}

function StatCell({
  item,
  reduceMotion,
}: {
  item: (typeof stats)[number];
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      variants={reduceMotion ? undefined : statCellVariants}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className="group relative bg-bg-primary px-5 py-6 lg:px-6"
    >
      <span
        className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
      <dt className="text-xs text-text-secondary">{item.label}</dt>
      <dd className="mt-2">
        {reduceMotion ? (
          <span className="font-mono text-2xl font-bold text-text-primary sm:text-3xl">
            {item.value}
            <span className="text-accent">{item.suffix}</span>
          </span>
        ) : (
          <AnimatedCounter
            value={item.value}
            suffix={item.suffix}
            className="font-mono text-2xl font-bold text-text-primary sm:text-3xl"
            suffixClassName="text-accent"
          />
        )}
      </dd>
    </motion.div>
  );
}

function ProjectCard({
  item,
  index,
  reduceMotion,
}: {
  item: (typeof clientProof)[number];
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.li
      variants={reduceMotion ? undefined : projectCardVariants}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              transition: { type: "spring", stiffness: 400, damping: 26 },
            }
      }
      className={cn(
        "group rounded-lg border border-surface bg-bg-secondary/40 px-5 py-5",
        "transition-[border-color,box-shadow] hover:border-accent/30 hover:shadow-card",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-[11px] text-text-secondary">{item.sector}</span>
      </div>
      <p className="mt-3 font-heading text-lg leading-snug text-text-primary">{item.project}</p>
      <p className="mt-1.5 text-sm text-text-secondary">{item.type}</p>
    </motion.li>
  );
}
