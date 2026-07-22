"use client";

import { CursorTrail } from "@/components/motion/CursorTrail";

/** Genua Digital tarzı — imleç hareketinde yumuşak çizgi izi */
export function GlobalCursorTrail() {
  return <CursorTrail className="pointer-events-none fixed inset-0 z-[9999]" />;
}
