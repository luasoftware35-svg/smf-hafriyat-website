"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/lib/constants/site";

type NavDropdownProps = {
  link: NavLink;
  isActive: boolean;
};

export function NavDropdown({ link, isActive }: NavDropdownProps) {
  if (!link.children?.length) {
    return (
      <Link
        href={link.href}
        className={cn(
          "relative rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
          isActive ? "text-accent" : "text-text-secondary hover:text-text-primary",
        )}
      >
        {link.label}
        {isActive && (
          <span className="absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full gradient-accent-bar" aria-hidden="true" />
        )}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={link.href}
        className={cn(
          "relative inline-flex items-center gap-1 rounded-md px-4 py-2.5 text-sm font-medium transition-colors",
          isActive ? "text-accent" : "text-text-secondary hover:text-text-primary",
        )}
        aria-haspopup="true"
      >
        {link.label}
        <ChevronDown
          size={14}
          className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          aria-hidden="true"
        />
        {isActive && (
          <span className="absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full gradient-accent-bar" aria-hidden="true" />
        )}
      </Link>

      <div className="invisible absolute left-0 top-full z-50 min-w-[240px] pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="overflow-hidden rounded-md border border-surface bg-bg-primary p-1.5 shadow-card-hover">
          {link.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block rounded-sm px-3 py-2.5 transition-colors hover:bg-accent/10 hover:text-accent"
            >
              <span className="block text-sm font-medium text-text-primary">{child.label}</span>
              {child.description && (
                <span className="mt-0.5 block text-xs leading-snug text-text-secondary">{child.description}</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
