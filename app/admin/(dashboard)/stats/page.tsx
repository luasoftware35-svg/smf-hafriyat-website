import { AdminShell } from "@/components/admin/AdminShell";
import { AdminButton, AdminTable, AdminTableRow } from "@/components/admin/AdminTable";
import { PublishBadge } from "@/components/admin/StatusBadge";
import { requireAdmin } from "@/lib/admin/auth";
import { getAllDbSiteStats } from "@/lib/data/stats";

export default async function AdminStatsPage() {
  const user = await requireAdmin();
  const stats = await getAllDbSiteStats();

  return (
    <AdminShell
      userEmail={user.email}
      title="İstatistikler"
      description="Ana sayfa ve hakkımızda sayfasındaki sayaç değerlerini yönetin."
      actions={<AdminButton href="/admin/stats/new">+ Yeni istatistik</AdminButton>}
    >
      <AdminTable headers={["Etiket", "Değer", "Sonek", "Sıra", "Durum"]} isEmpty={stats.length === 0}>
        {stats.map((stat) => (
          <AdminTableRow
            key={stat.id}
            href={`/admin/stats/${stat.id}`}
            cells={[
              stat.label,
              stat.value,
              stat.suffix || "—",
              stat.order_index,
              <PublishBadge key="pub" published={stat.is_published} />,
            ]}
          />
        ))}
      </AdminTable>
    </AdminShell>
  );
}
