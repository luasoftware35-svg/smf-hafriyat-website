"use client";

import { motion, useMotionValue, useSpring, type Transition } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  EXCAVATOR_ARM,
  solveExcavatorArm,
  type ArmAngles,
  type SvgPoint,
} from "@/lib/hero/excavator-ik";

type AnimatedExcavatorProps = {
  isAnimating: boolean;
  duration: number;
  interactive: boolean;
  target: SvgPoint | null;
  onComplete?: () => void;
  className?: string;
  svgRef?: (node: SVGSVGElement | null) => void;
};

const settleTransition: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.9,
};

const followSpring = { stiffness: 110, damping: 20, mass: 0.65 };

function useArmSprings(angles: ArmAngles, enabled: boolean) {
  const boom = useMotionValue(angles.boom);
  const stick = useMotionValue(angles.stick);
  const bucket = useMotionValue(angles.bucket);

  const springConfig = enabled ? followSpring : { ...followSpring, stiffness: 200 };
  const boomSpring = useSpring(boom, springConfig);
  const stickSpring = useSpring(stick, springConfig);
  const bucketSpring = useSpring(bucket, springConfig);

  useEffect(() => {
    boom.set(angles.boom);
    stick.set(angles.stick);
    bucket.set(angles.bucket);
  }, [angles.boom, angles.stick, angles.bucket, boom, stick, bucket]);

  return { boomSpring, stickSpring, bucketSpring };
}

function HydraulicCylinder({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  const length = Math.hypot(x2 - x1, y2 - y1);

  return (
    <g transform={`translate(${x1} ${y1}) rotate(${angle})`}>
      <rect x={0} y={-5} width={length} height={10} rx={5} fill="#1A1714" stroke="#5C5650" strokeWidth="1" />
      <rect x={8} y={-2.5} width={Math.max(12, length - 18)} height={5} rx={2.5} fill="#8A8278" />
    </g>
  );
}

export function AnimatedExcavator({
  isAnimating,
  duration,
  interactive,
  target,
  onComplete,
  className,
  svgRef,
}: AnimatedExcavatorProps) {
  const localSvgRef = useRef<SVGSVGElement>(null);
  const motionDuration = isAnimating ? duration : 0;
  const activeAngles = target ? solveExcavatorArm(target) : EXCAVATOR_ARM.rest;
  const { boomSpring, stickSpring, bucketSpring } = useArmSprings(activeAngles, interactive);

  const { pivot, boomLength, stickLength } = EXCAVATOR_ARM;

  return (
    <motion.div
      className={className}
      initial={isAnimating ? { x: "-115%", opacity: 0.85 } : false}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        x: { duration: motionDuration, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: motionDuration * 0.6, ease: "easeOut" },
      }}
      onAnimationComplete={() => {
        if (isAnimating) {
          onComplete?.();
        }
      }}
    >
      <svg
        ref={(node) => {
          localSvgRef.current = node;
          svgRef?.(node);
        }}
        viewBox="0 0 820 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full touch-none"
        aria-hidden="true"
        role="img"
      >
        <defs>
          <linearGradient id="bodyMain" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#454039" />
            <stop offset="55%" stopColor="#2B2621" />
            <stop offset="100%" stopColor="#151311" />
          </linearGradient>
          <linearGradient id="bodyHighlight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5A534A" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#151311" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cabGlass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8FA4B8" stopOpacity="0.65" />
            <stop offset="40%" stopColor="#2A3848" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#101820" stopOpacity="0.98" />
          </linearGradient>
          <linearGradient id="boomMetal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFB52E" />
            <stop offset="45%" stopColor="#E8941A" />
            <stop offset="100%" stopColor="#8A5510" />
          </linearGradient>
          <linearGradient id="stickMetal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F0A020" />
            <stop offset="100%" stopColor="#7A4A0C" />
          </linearGradient>
          <linearGradient id="bucketMetal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E86B1A" />
            <stop offset="100%" stopColor="#7A3200" />
          </linearGradient>
          <linearGradient id="groundShadow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
          <pattern id="trackTread" width="16" height="9" patternUnits="userSpaceOnUse">
            <rect width="16" height="9" fill="#100E0C" />
            <rect x="1.5" y="1.5" width="6" height="2.2" rx="0.6" fill="#4A433A" />
            <rect x="9" y="5" width="6" height="2.2" rx="0.6" fill="#4A433A" />
          </pattern>
          <filter id="machineShadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#000" floodOpacity="0.5" />
          </filter>
          <filter id="metalSheen" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1.2" result="blur" />
            <feOffset dy="1" result="offsetBlur" />
            <feComposite in="offsetBlur" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="inner" />
            <feMerge>
              <feMergeNode in="inner" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse cx="320" cy="292" rx="270" ry="20" fill="url(#groundShadow)" />

        <g filter="url(#machineShadow)">
          <g>
            <path
              d="M62 242 C62 226 78 214 108 214 H318 C348 214 364 226 364 242 V264 C364 280 348 292 318 292 H108 C78 292 62 280 62 264 Z"
              fill="#100E0C"
              stroke="#3E3932"
              strokeWidth="1.5"
            />
            <rect x="74" y="224" width="278" height="38" rx="12" fill="url(#trackTread)" />
            {[98, 136, 174, 212, 250, 288, 326].map((cx) => (
              <g key={cx}>
                <circle cx={cx} cy="262" r="17" fill="#0A0908" stroke="#2A2620" strokeWidth="1.5" />
                <circle cx={cx} cy="262" r="8" fill="#171411" stroke="#524C44" strokeWidth="1" />
                <circle cx={cx} cy="262" r="2.8" fill="#7A7268" />
              </g>
            ))}
            <circle cx="86" cy="262" r="13" fill="#171411" stroke="#F5A020" strokeWidth="1.8" />
            <circle cx="354" cy="262" r="13" fill="#171411" stroke="#524C44" strokeWidth="1.5" />
          </g>

          <path
            d="M96 218 H268 C286 218 300 206 302 188 V156 C302 138 290 126 272 122 H138 C112 122 96 142 96 168 Z"
            fill="url(#bodyMain)"
            stroke="#4A443C"
            strokeWidth="1.2"
          />
          <path
            d="M96 168 C96 142 112 122 138 122 H182 L206 218 H108 C88 218 96 198 96 168 Z"
            fill="#1C1916"
            stroke="#4A443C"
            strokeWidth="1"
          />
          <path d="M96 218 H268" stroke="url(#bodyHighlight)" strokeWidth="8" strokeLinecap="round" opacity="0.35" />
          <path d="M108 176 H156 M108 190 H144 M108 204 H132" stroke="#5C5650" strokeWidth="1" strokeLinecap="round" opacity="0.55" />

          <path
            d="M188 122 H268 C284 122 296 134 296 150 V204 C296 216 286 226 272 226 H198 C186 226 178 216 178 204 V136 C178 128 182 122 190 122 Z"
            fill="#24201C"
            stroke="#5C5650"
            strokeWidth="1.2"
          />
          <path
            d="M196 132 H276 C286 132 294 140 294 152 V182 C294 192 286 200 276 200 H206 C198 200 192 194 192 186 V140 C192 134 194 132 200 132 Z"
            fill="url(#cabGlass)"
            stroke="#8A96A4"
            strokeWidth="1"
          />
          <path d="M244 132 V200" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="1.2" />
          <rect x="268" y="110" width="12" height="9" rx="2" fill="#F5A020" opacity="0.9" />

          <circle cx={pivot.x} cy={pivot.y} r="12" fill="#12100E" stroke="#F5A020" strokeWidth="2.2" />
          <circle cx={pivot.x} cy={pivot.y} r="5" fill="#6A6258" />

          <g transform={`translate(${pivot.x} ${pivot.y})`}>
            <motion.g style={{ rotate: boomSpring, transformOrigin: "0px 0px", transformBox: "fill-box" }}>
              <g filter="url(#metalSheen)">
                <path
                  d={`M 0 -10 L ${boomLength - 18} -18 L ${boomLength} -8 L ${boomLength} 8 L ${boomLength - 18} 18 L 0 10 Z`}
                  fill="url(#boomMetal)"
                  stroke="#7A4E08"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <path
                  d={`M 12 0 L ${boomLength - 24} -8`}
                  stroke="#FFE08A"
                  strokeOpacity="0.35"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>

              <g transform={`translate(${boomLength} 0)`}>
                <circle r="9" fill="#12100E" stroke="#F5A020" strokeWidth="1.8" />
                <motion.g style={{ rotate: stickSpring, transformOrigin: "0px 0px", transformBox: "fill-box" }}>
                  <g filter="url(#metalSheen)">
                    <path
                      d={`M 0 -8 L ${stickLength - 12} -12 L ${stickLength} -4 L ${stickLength} 4 L ${stickLength - 12} 12 L 0 8 Z`}
                      fill="url(#stickMetal)"
                      stroke="#7A4E08"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </g>

                  <g transform={`translate(${stickLength} 0)`}>
                    <circle r="7" fill="#12100E" stroke="#D35400" strokeWidth="1.5" />
                    <motion.g style={{ rotate: bucketSpring, transformOrigin: "0px 0px", transformBox: "fill-box" }}>
                      <g filter="url(#metalSheen)">
                        <path
                          d="M 0 -6 L 34 -16 L 58 -2 L 52 8 L 28 -2 L 4 6 Z"
                          fill="url(#bucketMetal)"
                          stroke="#F5A020"
                          strokeWidth="1.2"
                          strokeLinejoin="round"
                        />
                        {[0, 1, 2, 3, 4].map((i) => (
                          <path
                            key={i}
                            d={`M ${52 + i * 0.5} ${8 + i * 14} L ${66 + i * 0.5} ${4 + i * 14} L ${64 + i * 0.5} ${16 + i * 14} L ${50 + i * 0.5} ${20 + i * 14} Z`}
                            fill="#F5A020"
                            stroke="#FFD27A"
                            strokeWidth="0.7"
                          />
                        ))}
                      </g>
                    </motion.g>
                  </g>
                </motion.g>
              </g>
            </motion.g>
          </g>

          <HydraulicCylinder x1={pivot.x - 20} y1={pivot.y + 24} x2={pivot.x + 92} y2={pivot.y - 48} />
          <HydraulicCylinder x1={pivot.x + 118} y1={pivot.y - 36} x2={pivot.x + 198} y2={pivot.y + 8} />
        </g>

        {interactive && target && (
          <motion.circle
            cx={target.x}
            cy={target.y}
            r={5}
            fill="#F5A020"
            fillOpacity={0.25}
            stroke="#FFD27A"
            strokeWidth={1}
            strokeOpacity={0.45}
            animate={{ r: [4, 7, 4], opacity: [0.45, 0.15, 0.45] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        <path d="M0 298 H820" stroke="#000000" strokeOpacity="0.28" strokeWidth="2" />
      </svg>
    </motion.div>
  );
}

export { settleTransition };
