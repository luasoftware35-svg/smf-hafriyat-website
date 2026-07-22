import Link from "next/link";
import { cn } from "@/lib/utils";

type AdminTableProps = {
  headers: string[];
  children: React.ReactNode;
  emptyMessage?: string;
  isEmpty?: boolean;
};

export function AdminTable({ headers, children, emptyMessage = "Kayıt bulunamadı.", isEmpty }: AdminTableProps) {
  if (isEmpty) {
    return (
      <div className="rounded-xl border border-white/10 bg-[#111827] px-6 py-12 text-center text-sm text-white/50">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111827]">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.14em] text-white/45">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-4 py-3 font-medium">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/8">{children}</tbody>
        </table>
      </div>
    </div>
  );
}

export function AdminTableRow({
  href,
  cells,
}: {
  href?: string;
  cells: React.ReactNode[];
}) {
  const content = (
    <>
      {cells.map((cell, index) => (
        <td key={index} className="px-4 py-3 align-top text-white/80">
          {cell}
        </td>
      ))}
    </>
  );

  if (href) {
    return (
      <tr className="transition-colors hover:bg-white/[0.03]">
        {cells.map((cell, index) => (
          <td key={index} className="px-4 py-3 align-top">
            {index === 0 ? (
              <Link href={href} className="block text-white hover:text-accent">
                {cell}
              </Link>
            ) : (
              <div className="text-white/80">{cell}</div>
            )}
          </td>
        ))}
      </tr>
    );
  }

  return <tr className="text-white/80">{content}</tr>;
}

export function AdminCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("rounded-xl border border-white/10 bg-[#111827] p-5", className)}>{children}</div>;
}

export function AdminMetricCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string | number;
  hint?: string;
}) {
  return (
    <AdminCard>
      <p className="text-xs uppercase tracking-[0.16em] text-white/45">{label}</p>
      <p className="mt-2 font-heading text-3xl text-white">{value}</p>
      {hint && <p className="mt-2 text-sm text-white/50">{hint}</p>}
    </AdminCard>
  );
}

export function AdminButton({
  href,
  children,
  variant = "primary",
  className,
  ...props
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const styles = cn(
    "inline-flex min-h-10 items-center justify-center rounded-lg px-4 text-sm font-medium transition-colors",
    variant === "primary" && "bg-accent text-accent-foreground hover:bg-accent/90",
    variant === "secondary" && "border border-white/10 bg-white/5 text-white hover:bg-white/10",
    variant === "danger" && "border border-rose-500/20 bg-rose-500/10 text-rose-200 hover:bg-rose-500/20",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={styles} {...props}>
      {children}
    </button>
  );
}

export function AdminField({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white/85">{label}</label>
      {children}
      {hint && <p className="mt-1.5 text-xs text-white/45">{hint}</p>}
    </div>
  );
}

export const adminInputClassName =
  "w-full rounded-lg border border-white/10 bg-[#0b1220] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

export const adminTextareaClassName =
  "min-h-[120px] w-full resize-y rounded-lg border border-white/10 bg-[#0b1220] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";
