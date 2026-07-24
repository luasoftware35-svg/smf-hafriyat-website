"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { fleet as staticFleet, fleetHighlights } from "@/lib/constants/content";
import type { FleetItem } from "@/lib/data/fleet";
import { getFleetImage } from "@/lib/constants/images";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

const AUTO_MS = 4200;
const CARD_SPACING = 168;

export function FleetMiniSection({ items }: { items?: readonly FleetItem[] }) {
  const reduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [active, setActive] = useState(0);
  const fleet = items ?? staticFleet;
  const stageRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 120, damping: 22 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 22 });
  const stageRotateY = useTransform(springX, [-0.5, 0.5], [8, -8]);
  const stageRotateX = useTransform(springY, [-0.5, 0.5], [-4, 4]);

  const go = useCallback(
    (index: number) => setActive((index + fleet.length) % fleet.length),
    [],
  );

  const next = useCallback(() => go(active + 1), [active, go]);
  const prev = useCallback(() => go(active - 1), [active, go]);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(next, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [next, reduceMotion]);

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const onPointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const activeItem = fleet[active];
  const glowX = useTransform(springX, [-0.5, 0.5], ["30%", "70%"]);
  const glowY = useTransform(springY, [-0.5, 0.5], ["25%", "75%"]);
  const glowBackground = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(245,160,32,0.1), transparent 62%)`;

  if (reduceMotion || !isDesktop) {
    return (
      <section id="filo-ozet" aria-labelledby="fleet-heading" className="border-b border-surface bg-bg-primary py-16">
        <Container>
          <FleetHeader />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {fleet.map((item, index) => {
              const img = getFleetImage(index);
              return (
                <Link
                  key={`${item.name}-${item.model}-${index}`}
                  href="/filo"
                  className="flex overflow-hidden rounded-sm border border-surface bg-bg-secondary/50"
                >
                  <div className="relative h-24 w-24 shrink-0">
                    <Image src={img.src} alt={item.name} fill className="object-cover" sizes="96px" />
                  </div>
                  <div className="p-4">
                    <p className="font-mono text-[11px] text-accent">{item.capacity}</p>
                    <p className="font-heading text-base text-text-primary">{item.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id="filo-ozet"
      aria-labelledby="fleet-heading"
      className="relative overflow-hidden border-b border-surface bg-bg-primary text-text-primary"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: glowBackground }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,160,32,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(245,160,32,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container className="relative py-16 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <FleetHeader />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-surface bg-bg-secondary text-text-primary transition-colors hover:border-accent hover:text-accent"
              aria-label="Önceki makine"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-surface bg-bg-secondary text-text-primary transition-colors hover:border-accent hover:text-accent"
              aria-label="Sonraki makine"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={stageRef}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          className="relative mt-10 h-[min(500px,68vh)] [perspective:1400px]"
        >
          <motion.div
            className="absolute inset-0 [transform-style:preserve-3d]"
            style={{ rotateX: stageRotateX, rotateY: stageRotateY }}
          >
            {fleet.map((item, index) => {
              const offset = index - active;
              const wrapped =
                offset > fleet.length / 2
                  ? offset - fleet.length
                  : offset < -fleet.length / 2
                    ? offset + fleet.length
                    : offset;
              const isActive = wrapped === 0;
              const img = getFleetImage(index);
              const distance = Math.abs(wrapped);

              return (
                <motion.button
                  key={`${item.name}-${item.model}-${index}`}
                  type="button"
                  onClick={() => go(index)}
                  aria-current={isActive ? "true" : undefined}
                  aria-label={item.name}
                  animate={{
                    x: wrapped * CARD_SPACING,
                    z: isActive ? 100 : -distance * 70,
                    rotateY: wrapped * -28,
                    scale: isActive ? 1 : Math.max(0.78, 0.92 - distance * 0.04),
                    opacity: isActive ? 1 : Math.max(0.35, 0.7 - distance * 0.1),
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 30 }}
                  className={cn(
                    "absolute left-1/2 top-1/2 h-[min(400px,56vh)] w-[min(250px,68vw)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border bg-bg-primary text-left shadow-card [transform-style:preserve-3d]",
                    isActive ? "border-accent/35 shadow-card-hover" : "border-surface",
                  )}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Image src={img.src} alt={`${item.name} — ${img.alt}`} fill className="object-cover" sizes="280px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/88 via-accent-foreground/25 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="font-mono text-[11px] text-accent">
                      {String(index + 1).padStart(2, "0")} · {item.capacity}
                    </p>
                    <p className="mt-2 font-heading text-xl text-white sm:text-2xl">{item.name}</p>
                    <p
                      className={cn(
                        "mt-2 text-sm text-white/75 transition-all",
                        isActive ? "line-clamp-2 opacity-100" : "opacity-0",
                      )}
                    >
                      {item.specs}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.32 }}
            className="mx-auto mt-8 max-w-2xl text-center"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              {String(active + 1).padStart(2, "0")} / {String(fleet.length).padStart(2, "0")}
            </p>
            <p className="mt-2 font-heading text-xl text-text-primary sm:text-2xl">{activeItem.name}</p>
            <p className="mt-2 text-sm text-text-secondary">{activeItem.specs}</p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {fleet.map((item, index) => (
            <button
              key={`${item.name}-${item.model}-${index}`}
              type="button"
              onClick={() => go(index)}
              className={cn(
                "shrink-0 snap-start rounded-full px-3.5 py-2 text-xs font-medium transition-all sm:px-4",
                index === active
                  ? "bg-accent text-accent-foreground shadow-glow"
                  : "border border-surface bg-bg-secondary text-text-secondary hover:border-accent/30 hover:text-text-primary",
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FleetHeader() {
  return (
    <div className="max-w-xl">
      <p className="text-sm font-medium text-text-secondary">Filo</p>
      <h2 id="fleet-heading" className="mt-2 font-heading text-3xl leading-tight text-text-primary sm:text-4xl">
        Kendi makine parkımız
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
        Ekskavatörden dampere — operatörlü, bakımlı saha filosu.
      </p>
      <ul className="mt-5 hidden space-y-2 sm:block">
        {fleetHighlights.slice(0, 2).map((item) => (
          <li key={item} className="text-sm text-text-secondary">
            · {item}
          </li>
        ))}
      </ul>
      <Link
        href="/filo"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-secondary"
      >
        Filo detayları
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </div>
  );
}
