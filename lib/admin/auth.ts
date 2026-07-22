import { redirect } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";

export async function getSessionUser() {
  if (!isSupabaseConfigured()) return null;

  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch {
    return null;
  }
}

export async function isAdminUser(user: User | null) {
  if (!user) return false;

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("admin_users")
      .select("user_id")
      .eq("user_id", user.id)
      .maybeSingle();

    if (error) return false;
    return Boolean(data);
  } catch {
    return false;
  }
}

export async function requireAdmin() {
  const user = await getSessionUser();

  if (!user) {
    redirect("/admin/login");
  }

  const admin = await isAdminUser(user);
  if (!admin) {
    redirect("/admin/login?error=unauthorized");
  }

  return user;
}

export async function getAdminContext() {
  const user = await getSessionUser();
  const admin = user ? await isAdminUser(user) : false;
  return { user, admin, configured: isSupabaseConfigured() };
}
