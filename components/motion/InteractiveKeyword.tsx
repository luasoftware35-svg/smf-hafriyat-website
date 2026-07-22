"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type InteractiveKeywordProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "link" | "strong";
};

export function InteractiveKeyword({ href, children, className, variant = "link" }: InteractiveKeywordProps) {
  const reduceMotion = useReducedMotion();

  const content = (
    <motion.span
      className={cn(
        "relative inline-block cursor-pointer font-medium text-text-primary",
        variant === "link" && "underline-offset-4",
        className,
      )}
      whileHover={reduceMotion ? undefined : { y: -1, scale: 1.03 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
    >
      <span className="relative z-[1] transition-colors duration-300 group-hover:text-accent">{children}</span>
      <motion.span
        className="absolute -inset-x-1 -inset-y-0.5 rounded-md bg-accent/[0.08] opacity-0"
        whileHover={reduceMotion ? undefined : { opacity: 1 }}
        aria-hidden="true"
      />
      <motion.span
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left rounded-full bg-accent"
        initial={{ scaleX: 0 }}
        whileHover={reduceMotion ? undefined : { scaleX: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="group inline">
        {content}
      </Link>
    );
  }

  return <span className="group inline">{content}</span>;
}
