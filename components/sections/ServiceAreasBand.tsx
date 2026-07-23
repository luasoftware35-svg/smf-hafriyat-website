"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { egeServiceBandItems } from "@/lib/constants/content";
import { districtLinkMap } from "@/lib/constants/districts";

const MARQUEE_DURATION_S = 85;

const pillLinkClassName =
  "inline-block whitespace-nowrap rounded-full border border-surface/90 bg-bg-primary px-3.5 py-1.5 text-xs text-text-secondary shadow-sm transition-[transform,box-shadow,border-color,color] duration-200 motion-safe:hover:scale-105 motion-safe:hover:border-accent/35 motion-safe:hover:text-text-primary motion-safe:hover:shadow-card";

const pillStaticClassName =
  "inline-block whitespace-nowrap rounded-full border border-surface/60 bg-bg-secondary/70 px-3.5 py-1.5 text-xs text-text-secondary/80";

function AreaPill({ label }: { label: string }) {
  const href = districtLinkMap[label];
  if (href) {
    return (
      <Link href={href} className={pillLinkClassName}>
        {label}
      </Link>
    );
  }
  return <span className={pillStaticClassName}>{label}</span>;
}

export function ServiceAreasBand() {
  const reduceMotion = useReducedMotion();
  const items = [...egeServiceBandItems, ...egeServiceBandItems];

  return (
    <section aria-label="Ege Bölgesi hizmet illeri" className="border-y border-surface bg-bg-secondary/70 py-4">
      <div className="flex items-center">
        <div className="relative z-10 flex shrink-0 items-center gap-3 border-r border-surface bg-bg-secondary/70 px-4 sm:px-6">
          <p className="whitespace-nowrap text-sm font-medium text-text-primary">Ege Bölgesi</p>
        </div>

        <div className="relative min-w-0 flex-1 overflow-hidden py-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-bg-secondary/95 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-bg-secondary/95 to-transparent" />

          {reduceMotion ? (
            <ul className="flex flex-wrap gap-2.5 px-4">
              {egeServiceBandItems.map((label) => (
                <li key={label}>
                  <AreaPill label={label} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="overflow-hidden">
              <ul
                className="flex w-max flex-nowrap items-center gap-2.5 py-0.5 will-change-transform"
                style={{
                  animation: `marquee ${MARQUEE_DURATION_S}s linear infinite`,
                }}
              >
                {items.map((label, index) => (
                  <li key={`${label}-${index}`} className="shrink-0">
                    <AreaPill label={label} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Link
          href="/hizmet-bolgeleri"
          className="relative z-10 flex shrink-0 items-center gap-1.5 border-l border-surface bg-bg-secondary/70 px-4 text-sm font-medium text-text-primary transition-colors hover:text-accent sm:px-6"
        >
          <span className="hidden sm:inline">Tüm bölgeler</span>
          <span className="sm:hidden">Tümü</span>
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
