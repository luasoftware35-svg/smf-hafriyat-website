"use client";

import { ImagePromoBanner } from "@/components/sections/ImagePromoBanner";
import { ctaPromoSlides } from "@/lib/constants/images";

export function CtaBanner() {
  return (
    <ImagePromoBanner
      slides={ctaPromoSlides}
      size="md"
      align="center"
      interval={6000}
    />
  );
}
