"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteImages } from "@/lib/constants/images";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image = siteImages.about,
  imageAlt,
}: PageHeroProps) {
  return (
    <div className="relative overflow-hidden border-b border-surface">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt ?? `${title} — SMF Hafriyat`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/95 via-bg-primary/85 to-bg-primary/60" />
      </div>

      <Container className="relative py-14 sm:py-20 lg:py-28">
        <FadeIn>
          {eyebrow && <Badge>{eyebrow}</Badge>}
          <h1 className="mt-4 max-w-3xl font-heading text-3xl leading-tight text-text-primary sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="mt-5 h-1 w-20 gradient-accent-bar" />
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">{description}</p>
          )}
        </FadeIn>
      </Container>
    </div>
  );
}
