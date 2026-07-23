import { requireAdmin } from "@/lib/admin/auth";
import type { ContactSubmission, DashboardMetrics } from "@/lib/admin/types";
import { createClient } from "@/lib/supabase/server";

export async function getDashboardMetrics(): Promise<DashboardMetrics> {
  await requireAdmin();
  const supabase = await createClient();

  const [submissions, services, projects, team, stats, faq, fleet] = await Promise.all([
    supabase.from("contact_submissions").select("status", { count: "exact" }),
    supabase.from("services").select("id", { count: "exact" }).eq("is_published", true),
    supabase.from("projects").select("id", { count: "exact" }).eq("is_published", true),
    supabase.from("team_members").select("id", { count: "exact" }).eq("is_published", true),
    supabase.from("site_stats").select("id", { count: "exact" }).eq("is_published", true),
    supabase.from("faq_items").select("id", { count: "exact" }).eq("is_published", true),
    supabase.from("fleet_items").select("id", { count: "exact" }).eq("is_published", true),
  ]);

  const allSubmissions = submissions.data ?? [];
  const newSubmissions = allSubmissions.filter((row) => row.status === "yeni").length;

  return {
    newSubmissions,
    totalSubmissions: submissions.count ?? allSubmissions.length,
    publishedServices: services.count ?? 0,
    publishedProjects: projects.count ?? 0,
    publishedTeam: team.count ?? 0,
    publishedStats: stats.count ?? 0,
    publishedFaq: faq.count ?? 0,
    publishedFleet: fleet.count ?? 0,
  };
}

export async function getFaqItemById(id: string) {
  await requireAdmin();
  const supabase = await createClient();
  const { data } = await supabase.from("faq_items").select("*").eq("id", id).maybeSingle();
  return data;
}

export async function getFleetItemById(id: string) {
  await requireAdmin();
  const supabase = await createClient();
  const { data } = await supabase.from("fleet_items").select("*").eq("id", id).maybeSingle();
  return data;
}

export async function getRecentSubmissions(limit = 5): Promise<ContactSubmission[]> {
  await requireAdmin();
  const supabase = await createClient();
  const { data } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  return (data ?? []) as ContactSubmission[];
}

export async function getAllSubmissions(): Promise<ContactSubmission[]> {
  await requireAdmin();
  const supabase = await createClient();
  const { data } = await supabase.from("contact_submissions").select("*").order("created_at", { ascending: false });
  return (data ?? []) as ContactSubmission[];
}

export async function getSubmissionById(id: string): Promise<ContactSubmission | null> {
  await requireAdmin();
  const supabase = await createClient();
  const { data } = await supabase.from("contact_submissions").select("*").eq("id", id).maybeSingle();
  return (data as ContactSubmission | null) ?? null;
}

export async function getServiceById(id: string) {
  await requireAdmin();
  const supabase = await createClient();
  const { data } = await supabase.from("services").select("*").eq("id", id).maybeSingle();
  return data;
}

export async function getProjectById(id: string) {
  await requireAdmin();
  const supabase = await createClient();
  const { data } = await supabase.from("projects").select("*").eq("id", id).maybeSingle();
  return data;
}

export async function getTeamMemberById(id: string) {
  await requireAdmin();
  const supabase = await createClient();
  const { data } = await supabase.from("team_members").select("*").eq("id", id).maybeSingle();
  return data;
}

export async function getSiteStatById(id: string) {
  await requireAdmin();
  const supabase = await createClient();
  const { data } = await supabase.from("site_stats").select("*").eq("id", id).maybeSingle();
  return data;
}
