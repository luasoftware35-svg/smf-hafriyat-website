import type { ReactNode } from "react";
import { AdminMobileNav } from "@/components/admin/AdminMobileNav";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

type AdminShellProps = {
  userEmail?: string | null;
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export function AdminShell({ userEmail, title, description, actions, children }: AdminShellProps) {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white lg:grid lg:grid-cols-[16rem_1fr]">
      <div className="hidden lg:block">
        <div className="fixed inset-y-0 w-64">
          <AdminSidebar userEmail={userEmail} />
        </div>
      </div>

      <div className="min-h-screen lg:ml-0">
        <header className="border-b border-white/10 bg-[#111827]/90 px-4 py-4 backdrop-blur md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-accent">SMF Hafriyat CMS</p>
                <h1 className="mt-1 font-heading text-xl sm:text-2xl">{title}</h1>
                {description && <p className="mt-1 text-sm text-white/55">{description}</p>}
              </div>
              <AdminMobileNav userEmail={userEmail} />
            </div>
            {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
          </div>
        </header>

        <main className="px-4 py-6 md:px-8 md:py-8">{children}</main>
      </div>
    </div>
  );
}
