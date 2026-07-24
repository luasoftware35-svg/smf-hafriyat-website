import { readFileSync } from "node:fs";
import { join } from "node:path";
import pg from "pg";

function loadEnvLocal() {
  const raw = readFileSync(join(process.cwd(), ".env.local"), "utf8");
  const env: Record<string, string> = {};
  for (const line of raw.split("\n")) {
    if (!line || line.startsWith("#")) continue;
    const i = line.indexOf("=");
    if (i === -1) continue;
    let val = line.slice(i + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    env[line.slice(0, i)] = val;
  }
  return env;
}

async function runViaManagementApi(projectRef: string, token: string, sql: string) {
  const res = await fetch(`https://api.supabase.com/v1/projects/${projectRef}/database/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: sql }),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`Management API (${res.status}): ${text}`);
  return text;
}

async function runViaPostgres(projectRef: string, password: string, sql: string) {
  const client = new pg.Client({
    host: `db.${projectRef}.supabase.co`,
    port: 5432,
    database: "postgres",
    user: "postgres",
    password,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  try {
    await client.query(sql);
  } finally {
    await client.end();
  }
}

async function main() {
  const env = loadEnvLocal();
  const projectRef = env.NEXT_PUBLIC_SUPABASE_URL?.match(/https:\/\/([^.]+)/)?.[1];
  if (!projectRef) throw new Error("NEXT_PUBLIC_SUPABASE_URL eksik.");

  const sql = readFileSync(join(process.cwd(), "supabase/migrations/002_cms_extended.sql"), "utf8");

  if (env.SUPABASE_ACCESS_TOKEN) {
    await runViaManagementApi(projectRef, env.SUPABASE_ACCESS_TOKEN, sql);
    console.log("Migration 002 uygulandı (Management API).");
    return;
  }

  if (env.SUPABASE_DB_PASSWORD) {
    await runViaPostgres(projectRef, env.SUPABASE_DB_PASSWORD, sql);
    console.log("Migration 002 uygulandı (Postgres).");
    return;
  }

  throw new Error(
    ".env.local dosyasına SUPABASE_DB_PASSWORD veya SUPABASE_ACCESS_TOKEN ekleyin.\n" +
      "DB şifresi: Supabase Dashboard → Project Settings → Database → Database password",
  );
}

main().catch((error) => {
  console.error("Migration hatası:", error instanceof Error ? error.message : error);
  process.exit(1);
});
