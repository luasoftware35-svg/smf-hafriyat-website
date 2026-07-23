export function getSupabasePublicEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return { url, key };
}

export function getSupabaseServiceRoleKey() {
  return process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY;
}

export function isSupabasePublicConfigured() {
  const { url, key } = getSupabasePublicEnv();
  return Boolean(url && key);
}

export function isSupabaseServiceRoleConfigured() {
  const { url } = getSupabasePublicEnv();
  return Boolean(url && getSupabaseServiceRoleKey());
}
