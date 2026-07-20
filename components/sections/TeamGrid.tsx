"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGrid, StaggerItem } from "@/components/motion/StaggerGrid";
import { FadeIn } from "@/components/motion/FadeIn";
import { teamMembers } from "@/lib/constants/content";

export function TeamGrid() {
  return (
    <Section id="ekip">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Ekibimiz"
            title="Hafriyat ve yıkım saha ekibi"
            description="Ekskavatör operatörleri, hafriyat uzmanları ve yıkım koordinatörlerinden oluşan kadromuz."
            className="mb-14"
          />
        </FadeIn>

        <StaggerGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <StaggerItem key={member.name}>
              <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
                <Card className="group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-bg-secondary">
                    <Image
                      src={member.photo}
                      alt={`${member.name} — ${member.role}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width:768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/80 via-accent-foreground/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h3 className="font-heading text-lg">{member.name}</h3>
                      <p className="text-sm font-medium text-accent">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-relaxed text-text-secondary">{member.bio}</p>
                  </div>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </Container>
    </Section>
  );
}
