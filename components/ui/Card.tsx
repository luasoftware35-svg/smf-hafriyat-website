import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
};

export function Card({ children, className, hover = true, glass = false }: CardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-surface bg-bg-primary shadow-card",
        glass && "glass",
        hover && "transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
