import { AdminShell } from "@/components/admin/AdminShell";
import { AdminTable, AdminTableRow } from "@/components/admin/AdminTable";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { requireAdmin } from "@/lib/admin/auth";
import { getAllSubmissions } from "@/lib/admin/queries";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("tr-TR", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

export default async function AdminSubmissionsPage() {
  const user = await requireAdmin();
  const submissions = await getAllSubmissions();

  return (
    <AdminShell
      userEmail={user.email}
      title="Form Talepleri"
      description="Web sitesinden gelen keşif ve teklif taleplerini yönetin."
    >
      <AdminTable
        headers={["Ad Soyad", "Telefon", "E-posta", "Proje", "Durum", "Tarih"]}
        isEmpty={submissions.length === 0}
      >
        {submissions.map((submission) => (
          <AdminTableRow
            key={submission.id}
            href={`/admin/submissions/${submission.id}`}
            cells={[
              submission.name,
              submission.phone,
              submission.email ?? "—",
              submission.project_type,
              <StatusBadge key="status" status={submission.status} />,
              formatDate(submission.created_at),
            ]}
          />
        ))}
      </AdminTable>

      {submissions.length > 0 && (
        <p className="mt-4 text-sm text-white/45">Toplam {submissions.length} kayıt listeleniyor.</p>
      )}
    </AdminShell>
  );
}
