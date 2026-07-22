import { AdminShell } from "@/components/admin/AdminShell";
import { AdminButton, AdminTable, AdminTableRow } from "@/components/admin/AdminTable";
import { PublishBadge } from "@/components/admin/StatusBadge";
import { requireAdmin } from "@/lib/admin/auth";
import { getAllDbServices } from "@/lib/data/services";

export default async function AdminServicesPage() {
  const user = await requireAdmin();
  const services = await getAllDbServices();

  return (
    <AdminShell
      userEmail={user.email}
      title="Hizmetler"
      description="Sitede görünen hizmet kartlarını ve detay sayfalarını yönetin."
      actions={<AdminButton href="/admin/services/new">+ Yeni hizmet</AdminButton>}
    >
      <AdminTable headers={["Başlık", "Slug", "Sıra", "Durum"]} isEmpty={services.length === 0} emptyMessage="Henüz hizmet yok. Statik içeriği aktarın veya yeni ekleyin.">
        {services.map((service) => (
          <AdminTableRow
            key={service.id}
            href={`/admin/services/${service.id}`}
            cells={[service.title, service.slug, service.order_index, <PublishBadge key="pub" published={service.is_published} />]}
          />
        ))}
      </AdminTable>
    </AdminShell>
  );
}
