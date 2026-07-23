"use client";

import { CursorTrail } from "@/components/motion/CursorTrail";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

/** Desktop + fine pointer only — mobilde ve dokunmatik cihazlarda kapalı */
export function GlobalCursorTrail() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const hasFinePointer = useMediaQuery("(pointer: fine)");

  if (!isDesktop || !hasFinePointer) return null;

  return <CursorTrail className="pointer-events-none fixed inset-0 z-[9999]" />;
}
