"use client";

import { motion } from "framer-motion";

type FloatingOrbsProps = {
  className?: string;
};

const orbs = [
  { size: 280, x: "8%", y: "12%", delay: 0, duration: 14 },
  { size: 200, x: "78%", y: "8%", delay: 1.2, duration: 11 },
  { size: 160, x: "65%", y: "72%", delay: 0.6, duration: 13 },
  { size: 120, x: "15%", y: "68%", delay: 1.8, duration: 10 },
];

export function FloatingOrbs({ className }: FloatingOrbsProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`} aria-hidden="true">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-accent/10 blur-3xl"
          style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y }}
          animate={{
            x: [0, 24, -16, 0],
            y: [0, -20, 14, 0],
            scale: [1, 1.08, 0.94, 1],
            opacity: [0.35, 0.55, 0.4, 0.35],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
