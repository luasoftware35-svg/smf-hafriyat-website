"use client";

import Image from "next/image";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { FadeIn } from "@/components/motion/FadeIn";
import { useSiteContact } from "@/components/providers/SiteContactProvider";
import { brand } from "@/lib/constants/brand";
import { siteImages } from "@/lib/constants/images";

export function ContactSection() {
  const { contactInfo } = useSiteContact();
  return (
    <Section id="iletisim" variant="muted">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="İletişim"
            title={brand.pages.contact.title}
            description={brand.pages.contact.description}
            className="mb-14"
          />
        </FadeIn>

        <div className="mb-8 flex flex-wrap gap-3">
          {brand.contactPromises.map((item) => (
            <div
              key={item}
              className="rounded-full border border-surface bg-bg-primary/85 px-4 py-2 text-sm text-text-secondary shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <FadeIn delay={0.1} className="lg:col-span-3">
            <Card hover={false} className="overflow-hidden">
              <div className="relative h-2 gradient-accent-bar" aria-hidden="true" />
              <div className="p-6 sm:p-8">
                <ContactForm />
              </div>
            </Card>
          </FadeIn>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <FadeIn delay={0.2}>
              <Card hover={false} className="group overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={siteImages.contact}
                    alt="SMF Hafriyat saha ekibi — Denizli"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg text-text-primary">İletişim Bilgileri</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    Denizli merkezli ekibimiz; hafriyat, yıkım ve derin kazı taleplerinizi doğru makine ve süreç planıyla hızlı şekilde değerlendirir.
                  </p>
                  <ul className="mt-4 space-y-4 text-sm text-text-secondary">
                    <li className="flex items-start gap-3">
                      <MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                      <span>{contactInfo.address.full}</span>
                    </li>
                    <li>
                      <a href={contactInfo.phoneHref} className="flex items-center gap-3 hover:text-accent">
                        <Phone size={18} className="shrink-0 text-accent" aria-hidden="true" />
                        <span className="font-mono font-medium">{contactInfo.phoneDisplay}</span>
                      </a>
                    </li>
                    <li>
                      <a href={contactInfo.whatsappHref} className="flex items-center gap-3 hover:text-accent" target="_blank" rel="noopener noreferrer">
                        <MessageCircle size={18} className="shrink-0 text-accent" aria-hidden="true" />
                        <span className="font-mono font-medium">WhatsApp Business · {contactInfo.whatsappDisplay}</span>
                      </a>
                    </li>
                    <li className="text-text-secondary">
                      <span className="font-medium text-text-primary">{contactInfo.contactPerson}</span> — İletişim Sorumlusu
                    </li>
                    <li>
                      <a href={contactInfo.emailHref} className="flex items-center gap-3 hover:text-accent">
                        <Mail size={18} className="shrink-0 text-accent" aria-hidden="true" />
                        <span>{contactInfo.email}</span>
                      </a>
                    </li>
                    <li>
                      <a href={contactInfo.emailSecondaryHref} className="flex items-center gap-3 hover:text-accent">
                        <Mail size={18} className="shrink-0 text-accent" aria-hidden="true" />
                        <span>{contactInfo.emailSecondary}</span>
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                      <div className="space-y-1">
                        {contactInfo.workingHours.schedule.map((item) => (
                          <p key={item.day}>
                            <span className="font-medium text-text-primary">{item.day}:</span> {item.hours}
                          </p>
                        ))}
                      </div>
                    </li>
                    <li className="rounded-lg border border-surface bg-bg-secondary/70 px-4 py-3">
                      Keşif, resmi teklif ve proje koordinasyonu aynı iletişim hattı üzerinden yönetilir.
                    </li>
                  </ul>
                </div>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card hover={false} className="overflow-hidden">
                <iframe
                  src={contactInfo.mapEmbedUrl}
                  title="SMF Hafriyat konum haritası — Denizli"
                  className="h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </Card>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
