"use client";

import { motion, useSpring } from "framer-motion";

type CursorSpotlightProps = {
  x: number;
  y: number;
  active: boolean;
  size?: number;
  className?: string;
};

export function CursorSpotlight({ x, y, active, size = 280, className }: CursorSpotlightProps) {
  const springX = useSpring(x, { stiffness: 120, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 22, mass: 0.4 });
  const springOpacity = useSpring(active ? 1 : 0, { stiffness: 200, damping: 28 });

  return (
    <motion.div
      className={className}
      style={{
        left: springX,
        top: springY,
        width: size,
        height: size,
        opacity: springOpacity,
        translateX: "-50%",
        translateY: "-50%",
      }}
      aria-hidden="true"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(245,160,32,0.14)_0%,rgba(245,160,32,0.05)_42%,transparent_72%)] blur-sm" />
      <div className="absolute inset-[30%] rounded-full border border-accent/20" />
    </motion.div>
  );
}
