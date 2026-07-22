import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminButton, AdminCard, AdminField, adminInputClassName, adminTextareaClassName } from "@/components/admin/AdminTable";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { deleteSubmissionAction, updateSubmissionAction } from "@/lib/admin/actions";
import { requireAdmin } from "@/lib/admin/auth";
import { submissionStatusLabels } from "@/lib/admin/types";
import { getSubmissionById } from "@/lib/admin/queries";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("tr-TR", { dateStyle: "full", timeStyle: "short" }).format(new Date(value));
}

export default async function AdminSubmissionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireAdmin();
  const { id } = await params;
  const submission = await getSubmissionById(id);

  if (!submission) notFound();

  return (
    <AdminShell
      userEmail={user.email}
      title={submission.name}
      description={`Form talebi · ${formatDate(submission.created_at)}`}
      actions={<AdminButton href="/admin/submissions" variant="secondary">← Listeye dön</AdminButton>}
    >
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <AdminCard>
          <div className="mb-5 flex items-center gap-3">
            <StatusBadge status={submission.status} />
            <span className="text-sm text-white/45">ID: {submission.id}</span>
          </div>

          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-white/45">Telefon</dt>
              <dd className="mt-1 text-white">{submission.phone}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-white/45">E-posta</dt>
              <dd className="mt-1 text-white">{submission.email ?? "—"}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-white/45">Proje türü</dt>
              <dd className="mt-1 text-white">{submission.project_type}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-white/45">Keşif tarihi</dt>
              <dd className="mt-1 text-white">{submission.site_visit_date ?? "—"}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs uppercase tracking-[0.14em] text-white/45">Proje adresi</dt>
              <dd className="mt-1 text-white">{submission.project_address}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-white/45">Tahmini hacim</dt>
              <dd className="mt-1 text-white">{submission.volume ?? "—"}</dd>
            </div>
          </dl>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.14em] text-white/45">Mesaj</p>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-white/85">{submission.message}</p>
          </div>
        </AdminCard>

        <AdminCard>
          <h2 className="font-heading text-lg text-white">Durum yönetimi</h2>
          <form action={updateSubmissionAction} className="mt-5 space-y-4">
            <input type="hidden" name="id" value={submission.id} />

            <AdminField label="Durum">
              <select name="status" defaultValue={submission.status} className={adminInputClassName}>
                {Object.entries(submissionStatusLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </AdminField>

            <AdminField label="Admin notları">
              <textarea
                name="admin_notes"
                defaultValue={submission.admin_notes ?? ""}
                className={adminTextareaClassName}
                placeholder="İç notlar, geri dönüş detayları..."
              />
            </AdminField>

            <AdminButton type="submit" variant="primary">
              Kaydet
            </AdminButton>
          </form>

          <form action={deleteSubmissionAction.bind(null, submission.id)} className="mt-6 border-t border-white/10 pt-6">
            <AdminButton type="submit" variant="danger">
              Talebi sil
            </AdminButton>
          </form>
        </AdminCard>
      </div>
    </AdminShell>
  );
}
