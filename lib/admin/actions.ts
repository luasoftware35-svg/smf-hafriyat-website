"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin/auth";
import { seedDatabaseFromStaticContent } from "@/lib/admin/seed";
import type { ProjectCategory, SubmissionStatus } from "@/lib/admin/types";
import { createClient } from "@/lib/supabase/server";

function linesToArray(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function revalidatePublicContent() {
  revalidatePath("/");
  revalidatePath("/hizmetler");
  revalidatePath("/projeler");
  revalidatePath("/hakkimizda");
  revalidatePath("/admin");
}

export async function signOutAdmin() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function seedStaticContentAction() {
  await requireAdmin();
  const result = await seedDatabaseFromStaticContent();
  revalidatePublicContent();
  return { ok: true as const, result };
}

export async function updateSubmissionAction(formData: FormData) {
  await requireAdmin();
  const supabase = await createClient();

  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "yeni") as SubmissionStatus;
  const adminNotes = String(formData.get("admin_notes") ?? "");

  const { error } = await supabase
    .from("contact_submissions")
    .update({ status, admin_notes: adminNotes || null })
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/submissions");
  revalidatePath(`/admin/submissions/${id}`);
}

export async function deleteSubmissionAction(id: string) {
  await requireAdmin();
  const supabase = await createClient();
  const { error } = await supabase.from("contact_submissions").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/submissions");
  redirect("/admin/submissions");
}

export async function saveServiceAction(formData: FormData) {
  await requireAdmin();
  const supabase = await createClient();

  const id = String(formData.get("id") ?? "");
  const payload = {
    slug: String(formData.get("slug") ?? "").trim(),
    title: String(formData.get("title") ?? "").trim(),
    icon: String(formData.get("icon") ?? "Shovel"),
    short_description: String(formData.get("short_description") ?? "").trim(),
    full_description: String(formData.get("full_description") ?? "").trim(),
    detail_paragraphs: linesToArray(String(formData.get("detail_paragraphs") ?? "")),
    trust_points: linesToArray(String(formData.get("trust_points") ?? "")),
    features: linesToArray(String(formData.get("features") ?? "")),
    order_index: Number(formData.get("order_index") ?? 0),
    is_published: formData.get("is_published") === "on",
  };

  if (id) {
    const { error } = await supabase.from("services").update(payload).eq("id", id);
    if (error) throw new Error(error.message);
    revalidatePublicContent();
    revalidatePath("/admin/services");
    redirect(`/admin/services/${id}`);
  }

  const { data, error } = await supabase.from("services").insert(payload).select("id").single();
  if (error) throw new Error(error.message);

  revalidatePublicContent();
  revalidatePath("/admin/services");
  redirect(`/admin/services/${data.id}`);
}

export async function deleteServiceAction(id: string) {
  await requireAdmin();
  const supabase = await createClient();
  const { error } = await supabase.from("services").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePublicContent();
  revalidatePath("/admin/services");
  redirect("/admin/services");
}

export async function saveProjectAction(formData: FormData) {
  await requireAdmin();
  const supabase = await createClient();

  const id = String(formData.get("id") ?? "");
  const payload = {
    slug: String(formData.get("slug") ?? "").trim(),
    title: String(formData.get("title") ?? "").trim(),
    category: String(formData.get("category") ?? "hafriyat") as ProjectCategory,
    description: String(formData.get("description") ?? "").trim(),
    location: String(formData.get("location") ?? "").trim(),
    completed_date: String(formData.get("completed_date") ?? "").trim(),
    before_image: String(formData.get("before_image") ?? "").trim(),
    after_image: String(formData.get("after_image") ?? "").trim(),
    gallery_images: linesToArray(String(formData.get("gallery_images") ?? "")),
    is_published: formData.get("is_published") === "on",
  };

  if (id) {
    const { error } = await supabase.from("projects").update(payload).eq("id", id);
    if (error) throw new Error(error.message);
    revalidatePublicContent();
    revalidatePath("/admin/projects");
    redirect(`/admin/projects/${id}`);
  }

  const { data, error } = await supabase.from("projects").insert(payload).select("id").single();
  if (error) throw new Error(error.message);

  revalidatePublicContent();
  revalidatePath("/admin/projects");
  redirect(`/admin/projects/${data.id}`);
}

export async function deleteProjectAction(id: string) {
  await requireAdmin();
  const supabase = await createClient();
  const { error } = await supabase.from("projects").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePublicContent();
  revalidatePath("/admin/projects");
  redirect("/admin/projects");
}

export async function saveTeamMemberAction(formData: FormData) {
  await requireAdmin();
  const supabase = await createClient();

  const id = String(formData.get("id") ?? "");
  const payload = {
    name: String(formData.get("name") ?? "").trim(),
    role: String(formData.get("role") ?? "").trim(),
    bio: String(formData.get("bio") ?? "").trim(),
    photo: String(formData.get("photo") ?? "").trim(),
    order_index: Number(formData.get("order_index") ?? 0),
    is_published: formData.get("is_published") === "on",
  };

  if (id) {
    const { error } = await supabase.from("team_members").update(payload).eq("id", id);
    if (error) throw new Error(error.message);
    revalidatePublicContent();
    revalidatePath("/admin/team");
    redirect(`/admin/team/${id}`);
  }

  const { data, error } = await supabase.from("team_members").insert(payload).select("id").single();
  if (error) throw new Error(error.message);

  revalidatePublicContent();
  revalidatePath("/admin/team");
  redirect(`/admin/team/${data.id}`);
}

export async function deleteTeamMemberAction(id: string) {
  await requireAdmin();
  const supabase = await createClient();
  const { error } = await supabase.from("team_members").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePublicContent();
  revalidatePath("/admin/team");
  redirect("/admin/team");
}

export async function saveSiteStatAction(formData: FormData) {
  await requireAdmin();
  const supabase = await createClient();

  const id = String(formData.get("id") ?? "");
  const payload = {
    label: String(formData.get("label") ?? "").trim(),
    value: Number(formData.get("value") ?? 0),
    suffix: String(formData.get("suffix") ?? "").trim(),
    order_index: Number(formData.get("order_index") ?? 0),
    is_published: formData.get("is_published") === "on",
  };

  if (id) {
    const { error } = await supabase.from("site_stats").update(payload).eq("id", id);
    if (error) throw new Error(error.message);
    revalidatePublicContent();
    revalidatePath("/admin/stats");
    redirect(`/admin/stats/${id}`);
  }

  const { data, error } = await supabase.from("site_stats").insert(payload).select("id").single();
  if (error) throw new Error(error.message);

  revalidatePublicContent();
  revalidatePath("/admin/stats");
  redirect(`/admin/stats/${data.id}`);
}

export async function deleteSiteStatAction(id: string) {
  await requireAdmin();
  const supabase = await createClient();
  const { error } = await supabase.from("site_stats").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePublicContent();
  revalidatePath("/admin/stats");
  redirect("/admin/stats");
}
