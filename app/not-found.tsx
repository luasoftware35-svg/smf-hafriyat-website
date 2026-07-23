import Link from "next/link";
import { ArrowLeft, Home, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { contactInfo, ctaLinks } from "@/lib/constants/site";

export default function NotFound() {
  return (
    <div className="border-b border-surface bg-bg-primary py-20 lg:py-28">
      <Container className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">404</p>
        <h1 className="mt-4 font-heading text-3xl text-text-primary sm:text-4xl">Sayfa bulunamadı</h1>
        <p className="mt-4 text-base leading-relaxed text-text-secondary">
          Aradığınız sayfa taşınmış, kaldırılmış veya hiç var olmamış olabilir. Ana sayfadan hizmetlerimize ve
          projelerimize ulaşabilirsiniz.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">
            <Home size={18} aria-hidden="true" />
            Ana Sayfa
          </Button>
          <Button href={ctaLinks.quote.href} variant="secondary">
            Keşif Talep Et
          </Button>
          <Button href={contactInfo.phoneHref} variant="ghost">
            <Phone size={18} aria-hidden="true" />
            {contactInfo.phoneDisplay}
          </Button>
        </div>
        <Link
          href="/hizmetler"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Hizmetlere dön
        </Link>
      </Container>
    </div>
  );
}
