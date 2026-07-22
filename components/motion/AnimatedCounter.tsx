"use client";

import { useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix: string;
  className?: string;
};

export function AnimatedCounter({ value, suffix, className }: AnimatedCounterProps) {
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
    <span ref={ref} className={className ?? "font-mono text-3xl font-bold text-accent sm:text-4xl"}>
      0{suffix}
    </span>
  );
}
