"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
  autoDemo?: boolean;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className,
  autoDemo = false,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!autoDemo || isDragging) return;

    let frame: number;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = (timestamp - start) / 1000;
      const value = 50 + Math.sin(elapsed * 0.8) * 30;
      setPosition(Math.min(80, Math.max(20, value)));
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [autoDemo, isDragging]);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative aspect-[4/3] cursor-ew-resize overflow-hidden rounded-sm border border-surface select-none touch-pan-y sm:aspect-[16/10]", className)}
      onPointerDown={(event) => {
        setIsDragging(true);
        updatePosition(event.clientX);
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        if (isDragging) updatePosition(event.clientX);
      }}
      onPointerUp={() => setIsDragging(false)}
      role="slider"
      aria-label="Öncesi ve sonrası karşılaştırma"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <Image src={afterSrc} alt={afterAlt} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
      </div>

      <div className="absolute inset-y-0 z-10 flex items-center" style={{ left: `${position}%` }}>
        <div className="relative -ml-5 flex h-12 w-11 min-h-11 min-w-11 items-center justify-center rounded-sm bg-accent shadow-lg transition-transform hover:scale-110">
          <span className="text-xs font-bold text-accent-foreground">↔</span>
        </div>
        <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-accent" />
      </div>

      <span className="absolute left-3 top-3 rounded-sm bg-bg-primary/80 px-2 py-1 text-xs font-medium text-text-primary">
        Öncesi
      </span>
      <span className="absolute right-3 top-3 rounded-sm bg-bg-primary/80 px-2 py-1 text-xs font-medium text-text-primary">
        Sonrası
      </span>
    </div>
  );
}
