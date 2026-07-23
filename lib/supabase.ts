import { createClient as createSupabaseClient, type SupabaseClient } from "@supabase/supabase-js";
import { getSupabasePublicEnv } from "@/lib/supabase/env";

export function createClient(): SupabaseClient {
  const { url, key } = getSupabasePublicEnv();

  if (!url || !key) {
    throw new Error(
      "Supabase ortam değişkenleri eksik. NEXT_PUBLIC_SUPABASE_URL ve NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY değerlerini .env.local dosyasına ekleyin.",
    );
  }

  return createSupabaseClient(url, key);
}
