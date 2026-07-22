"use client";

import { type ReactNode, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";

type Interactive3DBlockProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
  onPointerUpdate?: (x: number, y: number, active: boolean) => void;
};

export function Interactive3DBlock({
  children,
  className,
  intensity = 1,
  onPointerUpdate,
}: Interactive3DBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const hover = useMotionValue(0);

  const rotateX = useSpring(useTransform(py, [0, 1], [10 * intensity, -10 * intensity]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-12 * intensity, 12 * intensity]), {
    stiffness: 180,
    damping: 22,
  });
  const scale = useSpring(useTransform(hover, [0, 1], [1, 1.015]), { stiffness: 260, damping: 24 });

  const glowX = useSpring(useTransform(px, [0, 1], [15, 85]), { stiffness: 120, damping: 20 });
  const glowY = useSpring(useTransform(py, [0, 1], [15, 85]), { stiffness: 120, damping: 20 });
  const glowOpacity = useSpring(useTransform(hover, [0, 1], [0.35, 0.95]), { stiffness: 200, damping: 26 });
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(245,160,32,0.2) 0%, transparent 58%)`;
  const hoverShadow = useTransform(hover, (v) =>
    v > 0.5 ? "0 18px 48px rgba(245, 160, 32, 0.12)" : "0 0 0 rgba(0,0,0,0)",
  );

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    const nx = (event.clientX - bounds.left) / bounds.width;
    const ny = (event.clientY - bounds.top) / bounds.height;
    px.set(nx);
    py.set(ny);
    hover.set(1);
    onPointerUpdate?.(event.clientX, event.clientY, true);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
    hover.set(0);
    onPointerUpdate?.(0, 0, false);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerEnter={handleMove}
      onPointerLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformPerspective: 1100,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition-[box-shadow]"
        style={{
          background: glowBackground,
          opacity: glowOpacity,
          boxShadow: hoverShadow,
        }}
        aria-hidden="true"
      />
      <div style={{ transform: "translateZ(36px)" }}>{children}</div>
    </motion.div>
  );
}
