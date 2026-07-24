import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LEGAL_LAST_UPDATED, legalRelatedLinks, type LegalSection } from "@/lib/constants/legal";
import { siteConfig } from "@/lib/constants/site";
import type { ContactInfoData } from "@/lib/data/contact-settings";

type LegalDocumentLayoutProps = {
  intro: string;
  sections: LegalSection[];
  contactInfo: ContactInfoData;
  currentPath: string;
};

export function LegalDocumentLayout({ intro, sections, contactInfo, currentPath }: LegalDocumentLayoutProps) {
  const relatedLinks = legalRelatedLinks.filter((link) => link.href !== currentPath);

  return (
    <Container className="max-w-3xl py-12 lg:py-20">
      <div className="mb-10 rounded-2xl border border-surface bg-bg-secondary/60 p-5 sm:p-6">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Yasal Bilgilendirme</p>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">{intro}</p>
        <p className="mt-4 text-xs text-text-secondary/80">Son güncelleme: {LEGAL_LAST_UPDATED}</p>
      </div>

      <nav aria-label="Yasal sayfa içindekiler" className="mb-10 rounded-2xl border border-surface bg-bg-primary p-5">
        <p className="font-heading text-sm font-semibold text-text-primary">İçindekiler</p>
        <ol className="mt-3 space-y-2 text-sm">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="text-text-secondary transition-colors hover:text-accent">
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-surface pb-10 last:border-b-0">
            <h2 className="font-heading text-xl text-text-primary sm:text-2xl">{section.title}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                {paragraph}
              </p>
            ))}
            {section.bullets?.length ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-secondary sm:text-base">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      <aside className="mt-12 rounded-2xl border border-accent/20 bg-accent/[0.06] p-6">
        <p className="font-heading text-lg text-text-primary">Veri Sorumlusu İletişim</p>
        <p className="mt-2 text-sm text-text-secondary">
          {siteConfig.legalName} — KVKK ve gizlilik talepleri için aşağıdaki kanallardan bize ulaşabilirsiniz.
        </p>
        <ul className="mt-5 space-y-3 text-sm text-text-secondary">
          <li className="flex items-start gap-3">
            <MapPin size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
            <span>{contactInfo.address.full}</span>
          </li>
          <li>
            <a href={contactInfo.phoneHref} className="flex items-center gap-3 transition-colors hover:text-accent">
              <Phone size={16} className="shrink-0 text-accent" aria-hidden="true" />
              {contactInfo.phoneDisplay}
            </a>
          </li>
          <li>
            <a href={contactInfo.emailHref} className="flex items-center gap-3 transition-colors hover:text-accent">
              <Mail size={16} className="shrink-0 text-accent" aria-hidden="true" />
              {contactInfo.email}
            </a>
          </li>
        </ul>
      </aside>

      <div className="mt-10 flex flex-wrap gap-3">
        {relatedLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full border border-surface bg-bg-primary px-4 py-2 text-xs font-semibold text-text-secondary transition-colors hover:border-accent hover:text-accent"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </Container>
  );
}
