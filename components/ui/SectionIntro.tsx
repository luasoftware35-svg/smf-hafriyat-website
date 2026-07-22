import { cn } from "@/lib/utils";

type SectionIntroProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  headingId?: string;
};

/** Sade bölüm başlığı — uppercase eyebrow ve animasyon yok */
export function SectionIntro({ label, title, description, className, titleClassName, headingId }: SectionIntroProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {label ? <p className="text-sm font-medium text-text-secondary">{label}</p> : null}
      <h2
        id={headingId}
        className={cn(
          "font-heading text-2xl leading-snug text-text-primary sm:text-3xl",
          label ? "mt-2" : undefined,
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
