import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminButton, AdminCard, AdminField, adminInputClassName, adminTextareaClassName } from "@/components/admin/AdminTable";
import { deleteFaqAction, saveFaqAction } from "@/lib/admin/actions";
import { requireAdmin } from "@/lib/admin/auth";
import { getFaqItemById } from "@/lib/admin/queries";

export default async function AdminFaqEditPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireAdmin();
  const { id } = await params;
  const item = await getFaqItemById(id);
  if (!item) notFound();

  return (
    <AdminShell
      userEmail={user.email}
      title={item.question}
      description="SSS kaydını düzenleyin."
      actions={<AdminButton href="/admin/faq" variant="secondary">← SSS</AdminButton>}
    >
      <AdminCard>
        <form action={saveFaqAction} className="grid gap-5">
          <input type="hidden" name="id" value={item.id} />
          <AdminField label="Soru">
            <input name="question" defaultValue={item.question} required className={adminInputClassName} />
          </AdminField>
          <AdminField label="Cevap">
            <textarea name="answer" defaultValue={item.answer} required className={adminTextareaClassName} rows={5} />
          </AdminField>
          <AdminField label="Sıra">
            <input name="order_index" type="number" defaultValue={item.order_index} className={adminInputClassName} />
          </AdminField>
          <label className="flex items-center gap-3 text-sm text-white/80">
            <input type="checkbox" name="is_published" defaultChecked={item.is_published} className="h-4 w-4 rounded border-white/20" />
            Yayında göster
          </label>
          <div>
            <AdminButton type="submit">Kaydet</AdminButton>
          </div>
        </form>
        <form action={deleteFaqAction.bind(null, item.id)} className="mt-8 border-t border-white/10 pt-6">
          <AdminButton type="submit" variant="danger">
            Soruyu sil
          </AdminButton>
        </form>
      </AdminCard>
    </AdminShell>
  );
}
