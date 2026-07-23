import { createServerClient as createSupabaseServerClient } from "@supabase/ssr";
import { createClient as createSupabaseJsClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { getSupabasePublicEnv, isSupabasePublicConfigured } from "@/lib/supabase/env";

const { url: supabaseUrl, key: supabaseKey } = getSupabasePublicEnv();

export async function createClient() {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Supabase ortam değişkenleri eksik. NEXT_PUBLIC_SUPABASE_URL ve NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY değerlerini .env.local dosyasına ekleyin.",
    );
  }

  const cookieStore = await cookies();

  return createSupabaseServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet: { name: string; value: string; options?: Record<string, unknown> }[]) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Server Component'te cookie yazımı ignore edilebilir
        }
      },
    },
  });
}

/** @deprecated Use createClient() for session-aware server access */
export function createServerClient() {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Supabase ortam değişkenleri eksik. NEXT_PUBLIC_SUPABASE_URL ve NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY değerlerini .env.local dosyasına ekleyin.",
    );
  }

  return createSupabaseJsClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export function createServiceRoleClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Supabase service role anahtarı eksik. SUPABASE_SERVICE_ROLE_KEY değerini .env dosyasına ekleyin.",
    );
  }

  return createSupabaseJsClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export function isSupabaseConfigured() {
  return isSupabasePublicConfigured();
}

export function isServiceRoleConfigured() {
  return Boolean(supabaseUrl && process.env.SUPABASE_SERVICE_ROLE_KEY);
}
