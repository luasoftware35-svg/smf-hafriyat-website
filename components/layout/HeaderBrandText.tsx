"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeaderBrandText() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <span className="hidden min-[420px]:flex flex-col leading-none">
        <span className="font-heading text-base font-bold tracking-[0.06em] text-text-primary sm:text-lg lg:text-xl">
          SMF
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-accent sm:text-[10px] lg:text-xs">
          HAFRİYAT
        </span>
      </span>
    );
  }

  return (
    <span className="hidden min-[420px]:flex flex-col leading-none">
      <motion.span
        initial={{ opacity: 0, x: -10, filter: "blur(6px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.55, ease }}
        className="font-heading text-base font-bold tracking-[0.06em] text-text-primary transition-colors duration-300 group-hover:text-accent sm:text-lg lg:text-xl"
      >
        {"SMF".split("").map((letter, index) => (
          <motion.span
            key={letter + index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.04 + index * 0.05, ease }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>

      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.22, ease }}
        className="relative mt-0.5 overflow-hidden font-mono text-[9px] uppercase tracking-[0.32em] sm:text-[10px] lg:text-xs"
      >
        <motion.span
          animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="bg-gradient-to-r from-accent via-amber-300 to-accent bg-[length:200%_auto] bg-clip-text text-transparent"
        >
          HAFRİYAT
        </motion.span>
        <motion.span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px bg-accent/60"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
        />
      </motion.span>
    </span>
  );
}
