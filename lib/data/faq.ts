import { faqItems as staticFaqItems } from "@/lib/constants/content";
import type { DbFaqItem } from "@/lib/admin/types";
import { createClient, createServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

export type FaqItem = { question: string; answer: string };

function mapDbFaq(row: DbFaqItem): FaqItem {
  return { question: row.question, answer: row.answer };
}

export async function getFaqItems(includeUnpublished = false): Promise<FaqItem[]> {
  if (!isSupabaseConfigured()) return [...staticFaqItems];

  try {
    const supabase = createServerClient();
    let query = supabase.from("faq_items").select("*").order("order_index", { ascending: true });
    if (!includeUnpublished) query = query.eq("is_published", true);
    const { data, error } = await query;
    if (error || !data?.length) return [...staticFaqItems];
    return (data as DbFaqItem[]).map(mapDbFaq);
  } catch {
    return [...staticFaqItems];
  }
}

export async function getAllDbFaqItems(): Promise<DbFaqItem[]> {
  if (!isSupabaseConfigured()) return [];
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from("faq_items").select("*").order("order_index", { ascending: true });
    if (error || !data) return [];
    return data as DbFaqItem[];
  } catch {
    return [];
  }
}
