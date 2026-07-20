"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { Card } from "@/components/ui/Card";
import { services } from "@/lib/constants/services";
import { getServiceImage } from "@/lib/constants/images";

type RelatedServicesProps = { currentSlug: string };

export function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const related = services.filter((s) => s.slug !== currentSlug).slice(0, 3);

  return (
    <div className="mt-20">
      <h2 className="font-heading text-2xl text-text-primary">Diğer Hizmetlerimiz</h2>
      <div className="mt-2 h-1 w-16 gradient-accent-bar" />
      <StaggerGrid className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((service) => (
          <StaggerItem key={service.slug}>
            <Card className="group">
              <Link href={`/hizmetler/${service.slug}`} className="block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={getServiceImage(service.slug)}
                    alt={`${service.title} — SMF Hafriyat`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/60 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-base text-text-primary group-hover:text-accent">{service.title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm text-accent">
                    İncele <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
}
