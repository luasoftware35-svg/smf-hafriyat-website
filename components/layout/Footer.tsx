import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  contactInfo,
  footerPages,
  footerServices,
  siteConfig,
  socialLinks,
  ctaLinks,
  companyLegal,
} from "@/lib/constants/site";
import { brand } from "@/lib/constants/brand";
import { siteImages } from "@/lib/constants/images";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-surface bg-bg-secondary">
      {/* Pre-footer CTA */}
      <div className="relative overflow-hidden border-b border-surface">
        <div className="absolute inset-0">
          <Image src={siteImages.hero} alt="" fill className="object-cover opacity-20" sizes="100vw" aria-hidden="true" />
          <div className="absolute inset-0 bg-accent-foreground/90" />
        </div>
        <Container className="relative py-12 lg:py-16">
          <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">{brand.sections.footerCta.eyebrow}</p>
              <h2 className="mt-2 font-heading text-2xl text-white sm:text-3xl">
                {brand.sections.footerCta.title}
              </h2>
              <p className="mt-2 text-sm text-white/70">{brand.sections.footerCta.description}</p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <Button href={ctaLinks.quote.href}>
                {ctaLinks.quote.label}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <Button href={ctaLinks.call.href} variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/20">
                {ctaLinks.call.label}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <Image src={siteImages.hero} alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="relative h-1 gradient-accent-bar" aria-hidden="true" />

      <Container className="relative py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.logoAlt}
                width={120}
                height={120}
                className="h-16 w-auto object-contain sm:h-[4.5rem]"
              />
              <div>
                <p className="font-heading text-lg text-text-primary">{siteConfig.name}</p>
                <p className="text-sm text-text-secondary">Denizli Hafriyat · Merkezefendi</p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-text-secondary">{siteConfig.description}</p>
            <ul className="mt-4 space-y-2">
              {brand.proofStrip.map((item) => (
                <li key={item} className="text-sm text-text-secondary">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-heading text-sm uppercase tracking-wider text-text-primary">Hizmetler</h2>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-sm text-text-secondary transition-colors hover:text-accent">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-heading text-sm uppercase tracking-wider text-text-primary">Sayfalar</h2>
            <ul className="space-y-2.5">
              {footerPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="text-sm text-text-secondary transition-colors hover:text-accent">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-heading text-sm uppercase tracking-wider text-text-primary">İletişim</h2>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <span>{contactInfo.address.full}</span>
              </li>
              <li>
                <Link href={contactInfo.phoneHref} className="inline-flex items-center gap-3 transition-colors hover:text-accent">
                  <Phone size={16} className="shrink-0 text-accent" aria-hidden="true" />
                  <span className="font-mono">{contactInfo.phoneDisplay}</span>
                </Link>
              </li>
              <li>
                <Link href={contactInfo.emailHref} className="inline-flex items-center gap-3 transition-colors hover:text-accent">
                  <Mail size={16} className="shrink-0 text-accent" aria-hidden="true" />
                  <span>{contactInfo.email}</span>
                </Link>
              </li>
              <li className="rounded-lg border border-surface bg-bg-primary/60 px-4 py-3 text-xs leading-relaxed text-text-secondary">
                Aynı gün geri dönüş, resmi sözleşme ve belgeli saha süreci ile çalışıyoruz.
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-md border border-surface px-3 py-2 text-xs text-text-secondary transition-all hover:border-accent hover:text-accent"
                  aria-label={social.label}
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-surface">
        <Container className="flex flex-col gap-3 py-6 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {siteConfig.name}. Tüm hakları saklıdır.</p>
          <p className="text-xs text-text-secondary/80">
            {siteConfig.legalName} · {companyLegal.tradeRegistry}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/gizlilik-politikasi" className="transition-colors hover:text-accent">Gizlilik Politikası</Link>
            <Link href="/kvkk" className="transition-colors hover:text-accent">KVKK Aydınlatma Metni</Link>
          </div>
        </Container>
      </div>

      <div className="relative border-t border-surface/60 bg-bg-primary/50">
        <Container className="flex items-center justify-center gap-2 py-3 text-xs text-text-secondary/70">
          <span>Dijital Partner:</span>
          <Link
            href="https://www.genuadigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-text-secondary transition-colors hover:text-accent"
            aria-label="Genua Digital — genuadigital.com"
          >
            <Image
              src="/images/partners/genua.svg"
              alt=""
              width={16}
              height={16}
              className="rounded-sm"
              aria-hidden="true"
            />
            Genua Digital
          </Link>
        </Container>
      </div>
    </footer>
  );
}
