import { AdminShell } from "@/components/admin/AdminShell";
import { AdminButton, AdminTable, AdminTableRow } from "@/components/admin/AdminTable";
import { PublishBadge } from "@/components/admin/StatusBadge";
import { requireAdmin } from "@/lib/admin/auth";
import { getAllDbTeamMembers } from "@/lib/data/team";

export default async function AdminTeamPage() {
  const user = await requireAdmin();
  const members = await getAllDbTeamMembers();

  return (
    <AdminShell
      userEmail={user.email}
      title="Ekip"
      description="Hakkımızda sayfasındaki yönetim kadrosunu yönetin."
      actions={<AdminButton href="/admin/team/new">+ Yeni üye</AdminButton>}
    >
      <AdminTable headers={["Ad Soyad", "Rol", "Sıra", "Durum"]} isEmpty={members.length === 0}>
        {members.map((member) => (
          <AdminTableRow
            key={member.id}
            href={`/admin/team/${member.id}`}
            cells={[member.name, member.role, member.order_index, <PublishBadge key="pub" published={member.is_published} />]}
          />
        ))}
      </AdminTable>
    </AdminShell>
  );
}
