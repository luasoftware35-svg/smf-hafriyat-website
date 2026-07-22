"use client";

import { useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  className?: string;
  suffixClassName?: string;
};

export function AnimatedCounter({
  value,
  suffix = "",
  className,
  suffixClassName = "text-accent",
}: AnimatedCounterProps) {
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
      if (ref.current) ref.current.textContent = String(latest);
    });
  }, [display]);

  return (
    <span className={cn(className ?? "font-mono text-3xl font-bold text-text-primary sm:text-4xl")}>
      <span ref={ref} aria-label={`${value}${suffix}`} />
      {suffix ? <span className={suffixClassName}>{suffix}</span> : null}
    </span>
  );
}
