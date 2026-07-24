import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Phone, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { brand } from "@/lib/constants/brand";
import { companyLegal, siteConfig } from "@/lib/constants/site";
import type { ContactInfoData } from "@/lib/data/contact-settings";

type WhatsAppBridgeSectionProps = {
  contactInfo: ContactInfoData;
};

export function WhatsAppBridgeSection({ contactInfo }: WhatsAppBridgeSectionProps) {
  const messageLines = contactInfo.whatsappMessage.split("\n");

  return (
    <section className="relative min-h-[calc(100dvh-8rem)] overflow-hidden bg-bg-secondary py-10 sm:py-14">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(245,160,32,0.12), transparent 42%), radial-gradient(circle at 80% 0%, rgba(37,211,102,0.08), transparent 36%)",
        }}
      />

      <Container className="relative">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Ana sayfaya dön
        </Link>

        <div className="mx-auto max-w-xl">
          <div className="overflow-hidden rounded-[1.75rem] border border-surface bg-bg-primary shadow-card">
            <div className="gradient-accent-bar h-1.5 w-full" aria-hidden="true" />

            <div className="px-6 pb-8 pt-8 sm:px-10 sm:pb-10 sm:pt-10">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-surface bg-bg-secondary shadow-sm">
                  <Image
                    src={siteConfig.logo}
                    alt={siteConfig.logoAlt}
                    width={56}
                    height={56}
                    className="h-14 w-14 object-contain"
                    priority
                  />
                </div>

                <Badge className="mb-3">Resmi WhatsApp Business Hattı</Badge>
                <h1 className="font-heading text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                  {siteConfig.name}
                </h1>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-text-secondary">
                  {siteConfig.legalName}
                  <span className="mx-2 text-surface">·</span>
                  {companyLegal.tradeRegistry}
                </p>
                <p className="mt-4 text-lg font-semibold tracking-wide text-text-primary">{contactInfo.whatsappDisplay}</p>
                <p className="mt-1 text-sm text-text-secondary">İletişim sorumlusu: {contactInfo.contactPerson}</p>
              </div>

              <div className="mt-8 rounded-2xl border border-surface bg-bg-secondary/70 p-4 sm:p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
                  Ön mesaj taslağı
                </p>
                <div className="rounded-2xl rounded-tl-md border border-[#d9fdd3] bg-[#eefbf0] px-4 py-3 text-left text-sm leading-relaxed text-[#111b21] shadow-sm">
                  {messageLines.map((line, index) => (
                    <span key={`${index}-${line}`} className="block min-h-[1.35em] whitespace-pre-wrap">
                      {line || "\u00A0"}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                  Mesaj, teklif talebinizi net iletmek için otomatik hazırlanır. WhatsApp&apos;ta düzenleyebilirsiniz.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href={contactInfo.whatsappDirectHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-5 py-4 text-base font-bold text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  <WhatsAppIcon size={22} className="text-white" />
                  WhatsApp&apos;ta Devam Et
                </a>

                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={contactInfo.phoneHref}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-surface bg-bg-primary px-4 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {contactInfo.phoneDisplay}
                  </a>
                  <Link
                    href="/iletisim"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-surface bg-bg-primary px-4 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    Keşif formu
                  </Link>
                </div>
              </div>

              <ul className="mt-8 space-y-3 border-t border-surface pt-6 text-sm text-text-secondary">
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    {contactInfo.workingHours.weekdays}
                    <br />
                    {contactInfo.workingHours.sunday}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{brand.responsePromises[0]} · Yazılı metraj ve resmi sözleşme ile çalışırız.</span>
                </li>
              </ul>

              <p className="mt-6 text-center text-xs leading-relaxed text-text-secondary">
                Devam ettiğinizde WhatsApp uygulamasına veya WhatsApp Web&apos;e yönlendirilirsiniz. İşletme profili
                adı WhatsApp Business ayarlarınızdan yönetilir.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
