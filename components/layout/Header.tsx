"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TopBar } from "@/components/layout/TopBar";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { useSiteContact } from "@/components/providers/SiteContactProvider";
import { navLinks, siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

export function Header() {
  const { ctaLinks } = useSiteContact();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <div className="sticky top-0 z-40 pt-safe">
      <TopBar />
      <header
        className={cn(
          "border-b transition-all duration-300",
          scrolled ? "glass shadow-header" : "border-transparent bg-bg-primary/80 backdrop-blur-md",
        )}
      >
        <Container as="nav" aria-label="Ana navigasyon" className="relative flex h-20 items-center lg:h-24">
          <Link
            href="/"
            className="group relative z-10 shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label={`${siteConfig.name} ana sayfa`}
          >
            <Image
              src={siteConfig.logo}
              alt={siteConfig.logoAlt}
              width={320}
              height={240}
              className="h-[4.75rem] w-auto max-w-none object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-[5.25rem] lg:h-[5.5rem]"
              priority
              sizes="(min-width: 1024px) 260px, (min-width: 640px) 220px, 190px"
            />
          </Link>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavDropdown link={link} isActive={isActive(link.href)} />
              </li>
            ))}
          </ul>

          <div className="ml-auto hidden shrink-0 items-center gap-2 lg:flex">
            <Link
              href={ctaLinks.call.href}
              className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-md border border-surface px-3 text-sm text-text-secondary transition-all hover:border-accent hover:text-accent"
              aria-label="Telefon ile ara"
            >
              <Phone size={16} aria-hidden="true" />
              <span className="font-mono text-xs">{ctaLinks.call.label}</span>
            </Link>
            <Button href={ctaLinks.quote.href} className="whitespace-nowrap px-5">
              Teklif Al
            </Button>
          </div>

          <button
            type="button"
            className="ml-auto inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-text-primary hover:bg-surface/60 hover:text-accent lg:hidden"
            aria-label="Menüyü aç"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </Container>
      </header>
      </div>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </>
  );
}
