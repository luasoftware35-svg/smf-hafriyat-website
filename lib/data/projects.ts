import type { Project } from "@/lib/constants/projects";
import { projects as staticProjects } from "@/lib/constants/projects";
import type { DbProject } from "@/lib/admin/types";
import { createClient, createServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

function mapDbProject(row: DbProject): Project {
  return {
    slug: row.slug,
    title: row.title,
    category: row.category,
    description: row.description,
    location: row.location,
    completedDate: row.completed_date,
    beforeImage: row.before_image,
    afterImage: row.after_image,
    galleryImages: row.gallery_images,
  };
}

export async function getProjects(includeUnpublished = false): Promise<Project[]> {
  if (!isSupabaseConfigured()) {
    return [...staticProjects];
  }

  try {
    const supabase = createServerClient();
    let query = supabase.from("projects").select("*").order("completed_date", { ascending: false });

    if (!includeUnpublished) {
      query = query.eq("is_published", true);
    }

    const { data, error } = await query;

    if (error || !data?.length) {
      return [...staticProjects];
    }

    return (data as DbProject[]).map(mapDbProject);
  } catch {
    return [...staticProjects];
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug);
}

export async function getAllDbProjects(): Promise<DbProject[]> {
  if (!isSupabaseConfigured()) return [];

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("projects").select("*").order("completed_date", { ascending: false });
    if (error || !data) return [];
    return data as DbProject[];
  } catch {
    return [];
  }
}
