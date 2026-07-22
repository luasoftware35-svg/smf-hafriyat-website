import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id ?? props.name;

    return (
      <div>
        <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-text-primary">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-lg border border-surface bg-bg-primary/95 px-4 py-3.5 text-sm text-text-primary shadow-sm transition-all placeholder:text-text-secondary/50",
            "hover:border-accent/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20",
            error && "border-red-400 focus:border-red-400 focus:ring-red-400/20",
            className,
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-xs text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

type TextareaProps = ComponentPropsWithoutRef<"textarea"> & {
  label: string;
  error?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id ?? props.name;

    return (
      <div>
        <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-text-primary">
          {label}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            "w-full resize-y rounded-lg border border-surface bg-bg-primary/95 px-4 py-3.5 text-sm text-text-primary shadow-sm transition-all placeholder:text-text-secondary/50",
            "hover:border-accent/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20",
            error && "border-red-400 focus:border-red-400 focus:ring-red-400/20",
            className,
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-xs text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

type SelectProps = ComponentPropsWithoutRef<"select"> & {
  label: string;
  error?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, className, id, children, ...props }, ref) => {
    const inputId = id ?? props.name;

    return (
      <div>
        <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-text-primary">
          {label}
        </label>
        <select
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-lg border border-surface bg-bg-primary/95 px-4 py-3.5 text-sm text-text-primary shadow-sm transition-all",
            "hover:border-accent/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20",
            error && "border-red-400 focus:border-red-400 focus:ring-red-400/20",
            className,
          )}
          aria-invalid={error ? true : undefined}
          {...props}
        >
          {children}
        </select>
        {error && <p className="mt-1.5 text-xs text-red-500" role="alert">{error}</p>}
      </div>
    );
  },
);
Select.displayName = "Select";
