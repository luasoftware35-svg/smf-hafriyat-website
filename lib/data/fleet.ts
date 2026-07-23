import { fleet as staticFleet } from "@/lib/constants/content";
import type { DbFleetItem } from "@/lib/admin/types";
import { createClient, createServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

export type FleetItem = {
  name: string;
  model: string;
  capacity: string;
  specs: string;
  icon: string;
};

function mapDbFleet(row: DbFleetItem): FleetItem {
  return {
    name: row.name,
    model: row.model,
    capacity: row.capacity,
    specs: row.specs,
    icon: row.icon,
  };
}

export async function getFleetItems(includeUnpublished = false): Promise<FleetItem[]> {
  if (!isSupabaseConfigured()) return staticFleet.map(({ name, model, capacity, specs, icon }) => ({ name, model, capacity, specs, icon }));

  try {
    const supabase = createServerClient();
    let query = supabase.from("fleet_items").select("*").order("order_index", { ascending: true });
    if (!includeUnpublished) query = query.eq("is_published", true);
    const { data, error } = await query;
    if (error || !data?.length) {
      return staticFleet.map(({ name, model, capacity, specs, icon }) => ({ name, model, capacity, specs, icon }));
    }
    return (data as DbFleetItem[]).map(mapDbFleet);
  } catch {
    return staticFleet.map(({ name, model, capacity, specs, icon }) => ({ name, model, capacity, specs, icon }));
  }
}

export async function getAllDbFleetItems(): Promise<DbFleetItem[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("fleet_items").select("*").order("order_index", { ascending: true });
    if (error || !data) return [];
    return data as DbFleetItem[];
  } catch {
    return [];
  }
}
