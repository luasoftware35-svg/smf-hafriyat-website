import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  dot?: boolean;
};

export function Badge({ children, className, dot = true }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-accent",
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-soft" aria-hidden="true" />}
      {children}
    </span>
  );
}
