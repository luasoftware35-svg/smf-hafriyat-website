"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { brand } from "@/lib/constants/brand";
import { FadeIn } from "@/components/motion/FadeIn";
import { services as defaultServices, type Service } from "@/lib/constants/services";
import { getServiceImage } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

type ServicesGridProps = {
  limit?: number;
  showAllLink?: boolean;
  items?: Service[];
};

export function ServicesGrid({ limit, showAllLink = false, items = defaultServices }: ServicesGridProps) {
  const reduceMotion = useReducedMotion();
  const displayedServices = [...items]
    .sort((a, b) => a.orderIndex - b.orderIndex)
    .slice(0, limit ?? items.length);

  const [activeService, setActiveService] = useState(displayedServices[0]?.slug ?? items[0]?.slug ?? "");

  return (
    <section
      id="hizmetler"
      aria-labelledby="services-heading"
      className="relative overflow-hidden border-y border-white/10 bg-accent-foreground text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,160,32,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(245,160,32,0.07) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(245,160,32,0.14),transparent_60%)]" />

      <Container className="relative py-16 lg:py-20">
        <FadeIn>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-sm text-white/55">{brand.sections.services.eyebrow}</p>
              <h2 id="services-heading" className="mt-2 font-heading text-3xl leading-tight sm:text-4xl">
                {brand.sections.services.title}
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base">
                {brand.sections.services.description}
              </p>
            </div>
            {showAllLink && (
              <Link
                href="/hizmetler"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
              >
                Tüm hizmetler
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            )}
          </div>
        </FadeIn>

        <div className="mt-10 hidden h-[min(440px,52vh)] gap-2 lg:flex">
          {displayedServices.map((service) => (
            <ServicePanel
              key={service.slug}
              service={service}
              active={service.slug === activeService}
              onActivate={() => setActiveService(service.slug)}
              reduceMotion={!!reduceMotion}
            />
          ))}
        </div>

        <div className="mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 lg:hidden">
          {displayedServices.map((service) => (
            <MobileServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServicePanel({
  service,
  active,
  onActivate,
  reduceMotion,
}: {
  service: Service;
  active: boolean;
  onActivate: () => void;
  reduceMotion: boolean;
}) {
  const image = getServiceImage(service.slug);

  return (
    <motion.button
      type="button"
      layout={!reduceMotion}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      aria-current={active ? "true" : undefined}
      aria-label={service.title}
      transition={{ layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
      className={cn(
        "group relative h-full min-w-0 overflow-hidden rounded-sm border text-left transition-[flex,border-color] duration-500",
        active ? "flex-[3.4] border-accent/40" : "flex-1 border-white/10 hover:border-white/25",
      )}
    >
      <Image
        src={image}
        alt={service.title}
        fill
        className={cn(
          "object-cover transition-all duration-700",
          active ? "scale-100 opacity-90" : "scale-110 opacity-35 group-hover:opacity-50",
        )}
        sizes={active ? "40vw" : "8vw"}
      />

      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          active
            ? "bg-gradient-to-t from-accent-foreground via-accent-foreground/45 to-accent-foreground/15"
            : "bg-gradient-to-t from-accent-foreground/90 via-accent-foreground/50 to-accent-foreground/20",
        )}
      />

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <span className="font-mono text-[11px] text-accent">{String(service.orderIndex).padStart(2, "0")}</span>

        {active ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <p className="mt-1 font-heading text-xl text-white sm:text-2xl">{service.title}</p>
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/72 sm:text-sm">{service.shortDescription}</p>
            <Link
              href={`/hizmetler/${service.slug}`}
              onClick={(event) => event.stopPropagation()}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-colors hover:text-white"
            >
              Detayı incele
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </motion.div>
        ) : (
          <p
            className="mt-3 font-heading text-sm text-white/85 [writing-mode:vertical-rl] rotate-180"
            style={{ maxHeight: "220px" }}
          >
            {service.title}
          </p>
        )}
      </div>
    </motion.button>
  );
}

function MobileServiceCard({ service }: { service: Service }) {
  const image = getServiceImage(service.slug);

  return (
    <Link
      href={`/hizmetler/${service.slug}`}
      className="relative w-[72vw] max-w-[300px] shrink-0 snap-center overflow-hidden rounded-sm border border-white/10"
    >
      <div className="relative aspect-[4/5]">
        <Image src={image} alt={service.title} fill className="object-cover" sizes="300px" />
        <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground via-accent-foreground/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <span className="font-mono text-[11px] text-accent">{String(service.orderIndex).padStart(2, "0")}</span>
          <p className="mt-1 font-heading text-xl text-white">{service.title}</p>
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/72">{service.shortDescription}</p>
        </div>
      </div>
    </Link>
  );
}
