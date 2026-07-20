"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { stats } from "@/lib/constants/content";
import { siteImages } from "@/lib/constants/images";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 80, damping: 20 });
  const display = useTransform(springValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return display.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${latest}${suffix}`;
    });
  }, [display, suffix]);

  return (
    <span ref={ref} className="font-mono text-4xl font-bold text-accent sm:text-5xl">
      0{suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <div className="relative overflow-hidden border-b border-surface">
      <div className="absolute inset-0">
        <Image src={siteImages.about} alt="" fill className="object-cover opacity-10" sizes="100vw" aria-hidden="true" />
      </div>
      <div className="absolute inset-0 bg-bg-primary/90" />

      <Container className="relative py-14 lg:py-20">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-md border border-surface bg-bg-primary/80 p-6 text-center shadow-card backdrop-blur-sm lg:text-left"
            >
              <motion.div
                className="mx-auto mb-3 h-1 w-8 rounded-full bg-accent/40 lg:mx-0"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
              />
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-medium text-text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
