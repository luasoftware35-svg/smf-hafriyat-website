"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { marqueeImages } from "@/lib/constants/images";

export function ImageMarquee() {
  const items = [...marqueeImages, ...marqueeImages];

  return (
    <div className="group/marquee relative overflow-hidden border-b border-surface bg-accent-foreground py-5">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,160,32,0.12)_0%,transparent_50%,rgba(245,160,32,0.08)_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-accent-foreground to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-accent-foreground to-transparent" />

      <motion.div
        className="flex w-max gap-4 px-4 group-hover/marquee:[animation-play-state:paused]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, index) => (
          <motion.div
            key={`${item.src}-${index}`}
            whileHover={{ scale: 1.08, y: -4 }}
            className="relative h-24 w-36 shrink-0 overflow-hidden rounded-md border border-white/10 shadow-lg sm:h-28 sm:w-44"
          >
            <Image src={item.src} alt={item.alt} fill className="object-cover opacity-90" sizes="176px" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
              <p className="truncate text-[11px] font-medium text-white/90 sm:text-xs">{item.alt.split(" — ")[0]}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
