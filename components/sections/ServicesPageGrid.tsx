"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown, Container as ContainerIcon, Droplets, Hammer, HardHat, Mountain, Package, Shovel, Truck, Waves, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { services } from "@/lib/constants/services";
import { getServiceImage } from "@/lib/constants/images";

const iconMap: Record<string, LucideIcon> = {
  Shovel, Hammer, HardHat, Truck, ArrowDown, Package, Mountain, Waves, Droplets, Container: ContainerIcon,
};

export function ServicesGridAnimated() {
  return (
    <Container className="py-16 lg:py-24">
      <StaggerGrid className="grid gap-8 md:grid-cols-2">
        {services.map((service) => {
          const Icon = iconMap[service.icon] ?? Shovel;
          return (
            <StaggerItem key={service.slug}>
              <Card className="group overflow-hidden">
                <div className="grid sm:grid-cols-2">
                  <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:min-h-[220px]">
                    <Image
                      src={getServiceImage(service.slug)}
                      alt={`${service.title} — SMF Hafriyat`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/40 to-transparent" />
                  </div>
                  <div className="flex flex-col p-6">
                    <Icon size={24} className="text-accent" aria-hidden="true" />
                    <h2 className="mt-3 font-heading text-xl text-text-primary">
                      <Link href={`/hizmetler/${service.slug}`} className="hover:text-accent">{service.title}</Link>
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-text-secondary">{service.shortDescription}</p>
                    <Button href={`/hizmetler/${service.slug}`} variant="secondary" className="mt-4 w-fit">
                      Detaylı Bilgi
                      <ArrowRight size={16} aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerGrid>
    </Container>
  );
}
