import { AdminShell } from "@/components/admin/AdminShell";
import { AdminButton, AdminTable, AdminTableRow } from "@/components/admin/AdminTable";
import { PublishBadge } from "@/components/admin/StatusBadge";
import { projectCategoryLabels } from "@/lib/admin/types";
import { requireAdmin } from "@/lib/admin/auth";
import { getAllDbProjects } from "@/lib/data/projects";

export default async function AdminProjectsPage() {
  const user = await requireAdmin();
  const projects = await getAllDbProjects();

  return (
    <AdminShell
      userEmail={user.email}
      title="Projeler"
      description="Referans projeleri ve galeri görsellerini yönetin."
      actions={<AdminButton href="/admin/projects/new">+ Yeni proje</AdminButton>}
    >
      <AdminTable headers={["Başlık", "Kategori", "Konum", "Durum"]} isEmpty={projects.length === 0}>
        {projects.map((project) => (
          <AdminTableRow
            key={project.id}
            href={`/admin/projects/${project.id}`}
            cells={[
              project.title,
              projectCategoryLabels[project.category],
              project.location,
              <PublishBadge key="pub" published={project.is_published} />,
            ]}
          />
        ))}
      </AdminTable>
    </AdminShell>
  );
}
