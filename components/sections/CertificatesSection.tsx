"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Award, Leaf, FileCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { trustPrinciples } from "@/lib/constants/content";
import { getCertificateImage, siteImages } from "@/lib/constants/images";

const icons = [Shield, Award, FileCheck, Leaf];

export function CertificatesSection() {
  return (
    <Section id="sertifikalar" variant="muted">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn direction="right" className="relative hidden overflow-hidden rounded-lg lg:block">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="relative aspect-[4/5]">
              <Image src={siteImages.contact} alt="SMF Hafriyat — iş güvenliği ve saha çalışması" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/70 to-transparent" />
            </motion.div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-heading text-2xl">Güvenli ve yasal çalışma</p>
              <p className="mt-2 text-sm text-white/80">İş güvenliği her projede önceliğimizdir</p>
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <SectionHeading
                eyebrow="Güven & Uyum"
                title="İş güvenliği ve yasal mevzuata bağlılık"
                description="SMF Hafriyat olarak yasal gerekliliklerden taviz vermeden, çevreye saygılı şekilde çalışıyoruz."
                className="mb-10"
              />
            </FadeIn>

            <StaggerGrid className="grid gap-4 sm:grid-cols-2">
              {trustPrinciples.map((item, index) => {
                const Icon = icons[index] ?? Shield;
                return (
                  <StaggerItem key={item.title}>
                    <Card hover={false} className="group overflow-hidden">
                      <div className="relative h-20 overflow-hidden">
                        <Image src={getCertificateImage(index)} alt={item.title} fill className="object-cover opacity-50 transition-all group-hover:scale-105 group-hover:opacity-70" sizes="200px" />
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-foreground/50 to-transparent" />
                        <div className="absolute bottom-2 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                          <Icon size={16} aria-hidden="true" />
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="font-heading text-base text-text-primary">{item.title}</p>
                        <p className="mt-1 text-sm text-text-secondary">{item.subtitle}</p>
                      </div>
                    </Card>
                  </StaggerItem>
                );
              })}
            </StaggerGrid>
          </div>
        </div>
      </Container>
    </Section>
  );
}
