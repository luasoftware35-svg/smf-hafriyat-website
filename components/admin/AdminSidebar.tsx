"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  FolderKanban,
  HelpCircle,
  Inbox,
  LayoutDashboard,
  LogOut,
  Phone,
  Settings,
  Shovel,
  Truck,
  Users,
} from "lucide-react";
import { signOutAdmin } from "@/lib/admin/actions";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Panel", icon: LayoutDashboard, exact: true },
  { href: "/admin/submissions", label: "Form Talepleri", icon: Inbox },
  { href: "/admin/services", label: "Hizmetler", icon: Shovel },
  { href: "/admin/projects", label: "Projeler", icon: FolderKanban },
  { href: "/admin/team", label: "Ekip", icon: Users },
  { href: "/admin/stats", label: "İstatistikler", icon: BarChart3 },
  { href: "/admin/faq", label: "SSS", icon: HelpCircle },
  { href: "/admin/fleet", label: "Filo", icon: Truck },
  { href: "/admin/contact", label: "İletişim", icon: Phone },
  { href: "/admin/settings", label: "Ayarlar", icon: Settings },
];

type AdminSidebarProps = {
  userEmail?: string | null;
  onNavigate?: () => void;
};

export function AdminSidebar({ userEmail, onNavigate }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-full flex-col border-r border-white/10 bg-[#111827] text-white lg:w-64">
      <div className="border-b border-white/10 px-5 py-5">
        <Link href="/admin" className="block">
          <p className="font-heading text-lg tracking-wide">SMF Admin</p>
          <p className="mt-1 text-xs text-white/55">İçerik yönetim paneli</p>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map(({ href, label, icon: Icon, exact }) => {
          const active = exact ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                active ? "bg-accent text-accent-foreground" : "text-white/75 hover:bg-white/8 hover:text-white",
              )}
            >
              <Icon size={18} aria-hidden="true" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 px-5 py-4">
        {userEmail && <p className="truncate text-xs text-white/50">{userEmail}</p>}
        <form action={signOutAdmin} className="mt-3">
          <button
            type="submit"
            className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-white/10 px-3 text-sm text-white/80 transition-colors hover:bg-white/8 hover:text-white"
          >
            <LogOut size={16} aria-hidden="true" />
            Çıkış Yap
          </button>
        </form>
        <Link href="/" onClick={onNavigate} className="mt-2 block text-center text-xs text-white/45 hover:text-accent">
          Siteye dön →
        </Link>
      </div>
    </aside>
  );
}
