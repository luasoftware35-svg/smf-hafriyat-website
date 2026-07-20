"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type DustParticlesProps = {
  active: boolean;
  reduced?: boolean;
};

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  driftX: number;
  driftY: number;
  tone: string;
};

function createParticles(count: number): Particle[] {
  const tones = ["#C4A574", "#8B7355", "#D4B896", "#A08B6A", "#6B5A45"];

  return Array.from({ length: count }, (_, index) => ({
    id: index,
    x: 48 + Math.random() * 28,
    y: 38 + Math.random() * 24,
    size: 3 + Math.random() * 9,
    delay: Math.random() * 0.35,
    duration: 0.8 + Math.random() * 0.9,
    driftX: (Math.random() - 0.3) * 120,
    driftY: -18 - Math.random() * 55,
    tone: tones[index % tones.length] ?? "#A08B6A",
  }));
}

export function DustParticles({ active, reduced = false }: DustParticlesProps) {
  const particles = useMemo(() => createParticles(reduced ? 10 : 24), [reduced]);

  if (!active) return null;

  return (
    <div
      className="pointer-events-none absolute bottom-[14%] left-[42%] z-20 h-40 w-56 sm:left-[46%] lg:left-[48%]"
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-[#8B7355]/20 blur-2xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 0.7, 0], scale: [0.5, 1.4, 1.8] }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full blur-[0.5px]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.tone,
          }}
          initial={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
          animate={{
            opacity: [0, 0.75, 0.35, 0],
            scale: [0.3, 1, 0.8, 0.5],
            x: [0, particle.driftX * 0.4, particle.driftX],
            y: [0, particle.driftY * 0.35, particle.driftY],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}
    </div>
  );
}
