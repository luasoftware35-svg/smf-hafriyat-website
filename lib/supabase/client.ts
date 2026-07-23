import { createBrowserClient as createSupabaseBrowserClient } from "@supabase/ssr";
import { getSupabasePublicEnv } from "@/lib/supabase/env";

export function createBrowserClient() {
  const { url: supabaseUrl, key: supabaseKey } = getSupabasePublicEnv();

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Supabase ortam değişkenleri eksik. NEXT_PUBLIC_SUPABASE_URL ve NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY değerlerini .env.local dosyasına ekleyin.",
    );
  }

  return createSupabaseBrowserClient(supabaseUrl, supabaseKey);
}
