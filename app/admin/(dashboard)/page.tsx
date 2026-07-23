import Link from "next/link";
import { AdminMetricCard, AdminTable, AdminTableRow } from "@/components/admin/AdminTable";
import { AdminShell } from "@/components/admin/AdminShell";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { requireAdmin } from "@/lib/admin/auth";
import { getDashboardMetrics, getRecentSubmissions } from "@/lib/admin/queries";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default async function AdminDashboardPage() {
  const user = await requireAdmin();
  const [metrics, recentSubmissions] = await Promise.all([getDashboardMetrics(), getRecentSubmissions()]);

  return (
    <AdminShell
      userEmail={user.email}
      title="Yönetim Paneli"
      description="Form talepleri, hizmetler, projeler ve site içeriğini buradan yönetin."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <AdminMetricCard label="Yeni form talebi" value={metrics.newSubmissions} hint="Durumu 'yeni' olan kayıtlar" />
        <AdminMetricCard label="Toplam form talebi" value={metrics.totalSubmissions} />
        <AdminMetricCard label="Yayındaki hizmet" value={metrics.publishedServices} />
        <AdminMetricCard label="Yayındaki proje" value={metrics.publishedProjects} />
        <AdminMetricCard label="Yayındaki ekip üyesi" value={metrics.publishedTeam} />
        <AdminMetricCard label="Yayındaki istatistik" value={metrics.publishedStats} />
        <AdminMetricCard label="Yayındaki SSS" value={metrics.publishedFaq} />
        <AdminMetricCard label="Yayındaki filo kaydı" value={metrics.publishedFleet} />
      </div>

      <div className="mt-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="font-heading text-xl text-white">Son form talepleri</h2>
          <Link href="/admin/submissions" className="text-sm text-accent hover:underline">
            Tümünü gör
          </Link>
        </div>

        <AdminTable
          headers={["Ad Soyad", "Telefon", "Proje Türü", "Durum", "Tarih"]}
          isEmpty={recentSubmissions.length === 0}
          emptyMessage="Henüz form talebi yok."
        >
          {recentSubmissions.map((submission) => (
            <AdminTableRow
              key={submission.id}
              href={`/admin/submissions/${submission.id}`}
              cells={[
                submission.name,
                submission.phone,
                submission.project_type,
                <StatusBadge key="status" status={submission.status} />,
                formatDate(submission.created_at),
              ]}
            />
          ))}
        </AdminTable>
      </div>
    </AdminShell>
  );
}
