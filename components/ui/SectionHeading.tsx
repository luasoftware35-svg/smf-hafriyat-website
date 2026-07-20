import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow && <Badge className={light ? "bg-white/20 text-white" : undefined}>{eyebrow}</Badge>}
      <h2
        className={cn(
          "mt-4 font-heading text-3xl leading-tight sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-text-primary",
        )}
      >
        {title}
      </h2>
      <div className={cn("mt-4 h-1 w-16 gradient-accent-bar", align === "center" && "mx-auto")} />
      {description && (
        <p className={cn("mt-4 max-w-2xl text-lg leading-relaxed", light ? "text-white/80" : "text-text-secondary", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </div>
  );
}

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "accent";
};

export function Section({ children, className, id, variant = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "border-b border-surface py-16 lg:py-24",
        variant === "muted" && "bg-bg-secondary",
        variant === "accent" && "bg-accent text-accent-foreground",
        className,
      )}
    >
      {children}
    </section>
  );
}
