"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown, Container as ContainerIcon, Droplets, Hammer, HardHat, Mountain, Package, Shovel, Truck, Waves, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { FadeIn } from "@/components/motion/FadeIn";
import { services } from "@/lib/constants/services";
import { getServiceImage } from "@/lib/constants/images";

const iconMap: Record<string, LucideIcon> = {
  Shovel, Hammer, HardHat, Truck, ArrowDown, Package, Mountain, Waves, Droplets, Container: ContainerIcon,
};

export function ServicesGrid() {
  return (
    <Section id="hizmetler">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Hizmetlerimiz"
            title="Hafriyat, yıkım ve kepçe ile kapsamlı saha hizmetleri"
            description="Derin temel kazısı, enkaz kaldırma, moloz nakliyesi ve ekskavatör kiralama — tek çatı altında."
            className="mb-14"
          />
        </FadeIn>

        <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Shovel;
            return (
              <StaggerItem key={service.slug}>
                <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 280, damping: 20 }}>
                  <Card className="group flex h-full flex-col overflow-hidden">
                    <Link href={`/hizmetler/${service.slug}`} className="flex flex-1 flex-col">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={getServiceImage(service.slug)}
                          alt={`${service.title} — SMF Hafriyat Türkiye saha hizmeti`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width:768px) 100vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/60 to-transparent" />
                        <motion.div
                          className="absolute inset-0 bg-accent/0 transition-colors group-hover:bg-accent/10"
                          aria-hidden="true"
                        />
                        <motion.div
                          className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-sm bg-accent text-accent-foreground"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon size={20} aria-hidden="true" />
                        </motion.div>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="font-heading text-lg text-text-primary">{service.title}</h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">{service.shortDescription}</p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                          Detayları gör
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </Card>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </Container>
    </Section>
  );
}
