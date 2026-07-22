"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-4xl text-center", className)}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <Badge className={light ? "bg-white/20 text-white" : undefined}>{eyebrow}</Badge>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mt-4 max-w-4xl font-heading text-3xl leading-[1.08] sm:text-4xl lg:text-[3.25rem]",
          light ? "text-white" : "text-text-primary",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 64, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className={cn("mt-4 h-1 gradient-accent-bar", align === "center" && "mx-auto")}
      />
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            "mt-4 max-w-3xl text-base leading-relaxed sm:text-lg",
            light ? "text-white/80" : "text-text-secondary",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "accent";
};

export function Section({ children, className, id, variant = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "border-b border-surface py-16 lg:py-24",
        variant === "muted" && "bg-bg-secondary",
        variant === "accent" && "bg-accent text-accent-foreground",
        className,
      )}
    >
      {children}
    </section>
  );
}
