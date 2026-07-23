"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type AnimatedButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: ReactNode;
  glow?: boolean;
};

export function AnimatedButton({
  href,
  variant = "primary",
  className,
  children,
  glow = variant === "primary",
}: AnimatedButtonProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <Button href={href} variant={variant} className={className}>
        {children}
      </Button>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="relative inline-flex"
    >
      {glow && (
        <span
          className={cn(
            "pointer-events-none absolute -inset-1 rounded-lg bg-accent/30 blur-md",
            "animate-pulse-soft",
          )}
          aria-hidden="true"
        />
      )}
      <Button href={href} variant={variant} className={cn("relative overflow-hidden", className)}>
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.35)_50%,transparent_100%)] animate-shimmer"
          aria-hidden="true"
        />
        <span className="relative inline-flex items-center gap-2">{children}</span>
      </Button>
    </motion.div>
  );
}
