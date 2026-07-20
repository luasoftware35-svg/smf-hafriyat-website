"use client";

import { motion } from "framer-motion";
import { Building2, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { trustHighlights } from "@/lib/constants/content";

export function Testimonials() {
  return (
    <Section id="referanslar">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Tecrübemiz"
            title="Rakamlarla SMF Hafriyat"
            description="Ekskavatör ile hafriyat, yıkım enkaz kaldırma ve altyapı kazı projelerinde 900'ü aşkın saha deneyimi."
            className="mb-14"
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {trustHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
            >
              <Card hover={false} className="relative h-full border-l-4 border-l-accent p-6">
                <Building2 size={28} className="text-accent/30" aria-hidden="true" />
                <Quote size={20} className="absolute right-6 top-6 text-accent/15" aria-hidden="true" />
                <h3 className="mt-4 font-heading text-lg text-text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
