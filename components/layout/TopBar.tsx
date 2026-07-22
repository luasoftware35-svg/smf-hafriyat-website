"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/constants/brand";
import { contactInfo, siteConfig } from "@/lib/constants/site";

const TICKER_INTERVAL_MS = 4800;

export function TopBar() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % brand.topBarTicker.length);
    }, TICKER_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const activeLine = brand.topBarTicker[activeIndex] ?? brand.topBarTicker[0];

  return (
    <div className="relative overflow-hidden border-b border-surface/80 bg-accent-foreground text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,160,32,0.07)_0%,transparent_55%,rgba(245,160,32,0.05)_100%)]" />

      <div className="relative flex h-9 items-stretch sm:h-10">
        <div className="relative z-10 flex shrink-0 items-center gap-2.5 border-r border-white/10 px-3 sm:px-4">
          <span className="h-3 w-px bg-accent/80" aria-hidden="true" />
          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/50 sm:text-[10px]">
            {siteConfig.foundedYear}
          </span>
        </div>

        <div
          className="relative min-w-0 flex-1 overflow-hidden [perspective:900px]"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-white/10" aria-hidden="true" />

          {reduceMotion ? (
            <p className="flex h-full items-center justify-center px-3 text-center text-[11px] font-medium tracking-[0.04em] text-white/88 sm:text-xs">
              {brand.topBarTicker[0]}
            </p>
          ) : (
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.p
                key={activeIndex}
                initial={{ y: "100%", opacity: 0, rotateX: -68 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: "-100%", opacity: 0, rotateX: 68 }}
                transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "50% 100%" }}
                className="absolute inset-0 flex items-center justify-center px-3 text-center text-[11px] font-medium tracking-[0.04em] text-white/88 sm:text-xs"
              >
                {activeLine}
              </motion.p>
            </AnimatePresence>
          )}
        </div>

        <Link
          href={contactInfo.phoneHref}
          className="relative z-10 flex shrink-0 items-center gap-1.5 border-l border-white/10 px-3 font-mono text-[11px] font-medium text-white/90 transition-colors hover:text-accent sm:px-4 sm:text-xs"
        >
          {contactInfo.phoneDisplay}
          <ArrowRight size={12} className="text-accent" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
