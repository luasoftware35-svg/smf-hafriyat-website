import { teamMembers as staticTeam } from "@/lib/constants/content";
import type { DbTeamMember } from "@/lib/admin/types";
import { createClient, createServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

function mapDbTeam(row: DbTeamMember): TeamMember {
  return {
    name: row.name,
    role: row.role,
    bio: row.bio,
    photo: row.photo,
  };
}

export async function getTeamMembers(includeUnpublished = false): Promise<TeamMember[]> {
  if (!isSupabaseConfigured()) {
    return [...staticTeam];
  }

  try {
    const supabase = createServerClient();
    let query = supabase.from("team_members").select("*").order("order_index", { ascending: true });

    if (!includeUnpublished) {
      query = query.eq("is_published", true);
    }

    const { data, error } = await query;

    if (error || !data?.length) {
      return [...staticTeam];
    }

    return (data as DbTeamMember[]).map(mapDbTeam);
  } catch {
    return [...staticTeam];
  }
}

export async function getAllDbTeamMembers(): Promise<DbTeamMember[]> {
  if (!isSupabaseConfigured()) return [];

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("team_members").select("*").order("order_index", { ascending: true });
    if (error || !data) return [];
    return data as DbTeamMember[];
  } catch {
    return [];
  }
}
