"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowDown, Container as ContainerIcon, Droplets, Hammer, HardHat, Mountain, Package, Shovel, Truck, Waves, type LucideIcon } from "lucide-react";
import { AnimatedButton } from "@/components/motion/AnimatedButton";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { brand } from "@/lib/constants/brand";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { FadeIn } from "@/components/motion/FadeIn";
import { services, type Service } from "@/lib/constants/services";
import { getServiceGallery } from "@/lib/constants/images";

const iconMap: Record<string, LucideIcon> = {
  Shovel, Hammer, HardHat, Truck, ArrowDown, Package, Mountain, Waves, Droplets, Container: ContainerIcon,
};

type ServicesGridProps = {
  limit?: number;
  showAllLink?: boolean;
};

function ServiceGridCard({ service, Icon }: { service: Service; Icon: LucideIcon }) {
  const images = getServiceGallery(service.slug);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered || images.length <= 1) {
      setActive(0);
      return;
    }
    const timer = setInterval(() => setActive((prev) => (prev + 1) % images.length), 2200);
    return () => clearInterval(timer);
  }, [hovered, images.length]);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card className="group flex h-full flex-col overflow-hidden rounded-xl">
        <Link href={`/hizmetler/${service.slug}`} className="flex flex-1 flex-col">
          <div className="relative aspect-[16/10] overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: hovered ? 1.06 : 1.02 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[active]}
                  alt={`${service.title} — SMF Hafriyat`}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/85 via-accent-foreground/25 to-transparent" />
            <motion.div
              className="absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/10"
              aria-hidden="true"
            />
            <div className="absolute left-3 top-3 rounded-sm bg-accent/90 px-2 py-0.5 font-mono text-[10px] font-bold text-accent-foreground">
              {String(service.orderIndex).padStart(2, "0")}
            </div>
            <motion.div
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-sm bg-accent text-accent-foreground shadow-glow"
              animate={hovered ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Icon size={20} aria-hidden="true" />
            </motion.div>
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-heading text-lg text-white">{service.title}</p>
              <p className="mt-1 text-xs text-white/72">Denizli ve çevresinde operatörlü saha çözümü</p>
              <div className="mt-2 flex gap-1">
                {images.map((img, i) => (
                  <span
                    key={img}
                    className={`h-1 rounded-full transition-all ${i === active ? "w-4 bg-accent" : "w-1 bg-white/40"}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent/90">Uygun İş Tipleri</p>
            <p className="flex-1 text-sm leading-relaxed text-text-secondary">{service.shortDescription}</p>
            <span className="mt-4 inline-flex w-fit items-center gap-1 rounded-full border border-accent/20 bg-accent/8 px-3 py-1.5 text-sm font-semibold text-accent transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
              Bu İş İçin Teklif Al
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </div>
        </Link>
      </Card>
    </motion.div>
  );
}

export function ServicesGrid({ limit, showAllLink = false }: ServicesGridProps) {
  const displayedServices = [...services]
    .sort((a, b) => a.orderIndex - b.orderIndex)
    .slice(0, limit ?? services.length);

  return (
    <Section id="hizmetler">
      <Container>
        <FadeIn>
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow={brand.sections.services.eyebrow}
              title={brand.sections.services.title}
              description={brand.sections.services.description}
            />
            {showAllLink && (
              <AnimatedButton href="/hizmetler" variant="secondary" glow={false}>
                Tüm hizmetler
                <ArrowRight size={16} aria-hidden="true" />
              </AnimatedButton>
            )}
          </div>
        </FadeIn>

        <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service) => {
            const Icon = iconMap[service.icon] ?? Shovel;
            return (
              <StaggerItem key={service.slug}>
                <ServiceGridCard service={service} Icon={Icon} />
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </Container>
    </Section>
  );
}
