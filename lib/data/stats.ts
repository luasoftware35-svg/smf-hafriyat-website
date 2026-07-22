import { stats as staticStats } from "@/lib/constants/content";
import type { DbSiteStat } from "@/lib/admin/types";
import { createClient, createServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

export type SiteStat = {
  label: string;
  value: number;
  suffix: string;
  orderIndex: number;
};

function mapDbStat(row: DbSiteStat): SiteStat {
  return {
    label: row.label,
    value: row.value,
    suffix: row.suffix,
    orderIndex: row.order_index,
  };
}

export async function getSiteStats(includeUnpublished = false): Promise<SiteStat[]> {
  if (!isSupabaseConfigured()) {
    return [...staticStats];
  }

  try {
    const supabase = createServerClient();
    let query = supabase.from("site_stats").select("*").order("order_index", { ascending: true });

    if (!includeUnpublished) {
      query = query.eq("is_published", true);
    }

    const { data, error } = await query;

    if (error || !data?.length) {
      return [...staticStats];
    }

    return (data as DbSiteStat[]).map(mapDbStat);
  } catch {
    return [...staticStats];
  }
}

export async function getAllDbSiteStats(): Promise<DbSiteStat[]> {
  if (!isSupabaseConfigured()) return [];

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("site_stats").select("*").order("order_index", { ascending: true });
    if (error || !data) return [];
    return data as DbSiteStat[];
  } catch {
    return [];
  }
}
