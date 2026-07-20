"use client";

import { Shield, Clock, Truck, Award } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { siteImages } from "@/lib/constants/images";

const items = [
  { icon: Shield, label: "1998'den Beri", sub: "21+ yıl sektör deneyimi" },
  { icon: Truck, label: "Kendi Filomuz", sub: "Ekskavatör, loder, damper" },
  { icon: Clock, label: "Hızlı Teklif", sub: "0533 353 22 53" },
  { icon: Award, label: "900+ Proje", sub: "150+ firmaya hizmet" },
];

export function TrustBar() {
  return (
    <div className="relative overflow-hidden border-b border-surface">
      <div className="absolute inset-0">
        <Image src={siteImages.trustBg} alt="" fill className="object-cover opacity-20" sizes="100vw" aria-hidden="true" />
        <div className="absolute inset-0 bg-bg-primary/90" />
      </div>
      <Container className="relative py-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group flex items-center gap-3 rounded-md border border-surface/80 bg-bg-primary/80 p-4 backdrop-blur-sm transition-shadow hover:border-accent/30 hover:shadow-card"
            >
              <motion.div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground"
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.4 }}
              >
                <item.icon size={20} aria-hidden="true" />
              </motion.div>
              <div>
                <p className="text-sm font-semibold text-text-primary">{item.label}</p>
                <p className="text-xs text-text-secondary">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
