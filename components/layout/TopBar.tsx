"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { brand } from "@/lib/constants/brand";
import { contactInfo } from "@/lib/constants/site";

export function TopBar() {
  return (
    <div className="relative overflow-hidden border-b border-surface/80 bg-accent-foreground text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,160,32,0.15)_0%,transparent_50%,rgba(245,160,32,0.1)_100%)]" />
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.06)_45%,transparent_90%)]"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-2.5 text-xs sm:justify-between sm:text-sm">
        <p className="flex items-center gap-2 font-medium">
          <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <Sparkles size={14} className="text-accent" aria-hidden="true" />
          </motion.span>
          <span>{brand.topBar}</span>
        </p>
        <a
          href={contactInfo.phoneHref}
          className="inline-flex min-h-11 items-center gap-1 whitespace-nowrap font-mono transition-colors hover:text-accent"
        >
          {contactInfo.phoneDisplay}
          <ArrowRight size={14} className="text-accent" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
