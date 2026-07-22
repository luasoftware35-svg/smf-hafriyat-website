import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  name: string;
  path?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-text-secondary">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-1.5">
              {index > 0 ? <ChevronRight size={14} className="shrink-0 opacity-50" aria-hidden="true" /> : null}
              {isLast || !item.path ? (
                <span className={isLast ? "font-medium text-text-primary" : undefined} aria-current={isLast ? "page" : undefined}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="transition-colors hover:text-accent">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
