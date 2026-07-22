import type { Service } from "@/lib/constants/services";
import { services as staticServices } from "@/lib/constants/services";
import type { DbService } from "@/lib/admin/types";
import { createClient, createServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

function mapDbService(row: DbService): Service {
  return {
    slug: row.slug,
    title: row.title,
    icon: row.icon,
    shortDescription: row.short_description,
    fullDescription: row.full_description,
    detailParagraphs: row.detail_paragraphs,
    trustPoints: row.trust_points,
    features: row.features,
    orderIndex: row.order_index,
  };
}

export async function getServices(includeUnpublished = false): Promise<Service[]> {
  if (!isSupabaseConfigured()) {
    return [...staticServices].sort((a, b) => a.orderIndex - b.orderIndex);
  }

  try {
    const supabase = createServerClient();
    let query = supabase.from("services").select("*").order("order_index", { ascending: true });

    if (!includeUnpublished) {
      query = query.eq("is_published", true);
    }

    const { data, error } = await query;

    if (error || !data?.length) {
      return [...staticServices].sort((a, b) => a.orderIndex - b.orderIndex);
    }

    return (data as DbService[]).map(mapDbService);
  } catch {
    return [...staticServices].sort((a, b) => a.orderIndex - b.orderIndex);
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const services = await getServices();
  return services.find((service) => service.slug === slug);
}

export async function getAllDbServices(): Promise<DbService[]> {
  if (!isSupabaseConfigured()) return [];

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("services").select("*").order("order_index", { ascending: true });
    if (error || !data) return [];
    return data as DbService[];
  } catch {
    return [];
  }
}
