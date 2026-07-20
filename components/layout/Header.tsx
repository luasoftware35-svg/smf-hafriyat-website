"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TopBar } from "@/components/layout/TopBar";
import { MobileNav } from "@/components/layout/MobileNav";
import { ctaLinks, navLinks, siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

export function Header() {
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
      <TopBar />
      <header
        className={cn(
          "sticky top-0 z-40 border-b transition-all duration-300",
          scrolled ? "glass shadow-header" : "border-transparent bg-bg-primary/80 backdrop-blur-md",
        )}
      >
        <Container as="nav" aria-label="Ana navigasyon" className="flex h-16 items-center justify-between lg:h-[4.5rem]">
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label={`${siteConfig.name} ana sayfa`}
          >
            <span
              className="flex h-11 w-11 items-center justify-center rounded-md bg-accent font-heading text-sm font-black text-accent-foreground shadow-glow transition-transform duration-300 group-hover:scale-105"
              aria-hidden="true"
            >
              SMF
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-heading text-base tracking-wide text-text-primary group-hover:text-accent lg:text-lg">
                {siteConfig.name}
              </span>
              <span className="hidden text-xs text-text-secondary sm:block">Denizli · Ege Bölgesi</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary",
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full gradient-accent-bar" aria-hidden="true" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={ctaLinks.call.href}
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-surface px-4 text-sm text-text-secondary transition-all hover:border-accent hover:text-accent"
              aria-label="Telefon ile ara"
            >
              <Phone size={16} aria-hidden="true" />
              <span className="font-mono text-xs">{ctaLinks.call.label}</span>
            </Link>
            <Button href={ctaLinks.quote.href}>{ctaLinks.quote.label}</Button>
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-text-primary hover:bg-surface/60 hover:text-accent lg:hidden"
            aria-label="Menüyü aç"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </Container>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </>
  );
}
