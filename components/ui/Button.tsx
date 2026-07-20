import Link from "next/link";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent/90 border border-accent font-semibold shadow-card hover:shadow-card-hover active:scale-[0.98]",
  secondary:
    "bg-bg-primary text-text-primary border border-surface hover:border-accent hover:text-accent shadow-sm active:scale-[0.98]",
  ghost: "bg-transparent text-text-primary hover:text-accent hover:bg-surface/60 active:scale-[0.98]",
};

const baseStyles =
  "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md px-6 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50";

export function Button({
  variant = "primary",
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    const linkProps = props as Omit<ComponentPropsWithoutRef<typeof Link>, "href">;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ComponentPropsWithoutRef<"button">;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
