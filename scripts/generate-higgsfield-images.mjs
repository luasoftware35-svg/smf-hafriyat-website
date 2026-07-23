#!/usr/bin/env node
/**
 * Batch-generate site images via Higgsfield CLI.
 * Uses a master reference image for visual consistency across the SMF series.
 *
 * Usage:
 *   node scripts/generate-higgsfield-images.mjs --force
 *   node scripts/generate-higgsfield-images.mjs --only hero-main,hero-fleet
 *   node scripts/generate-higgsfield-images.mjs --dry-run
 */

import { execFileSync, spawnSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const MANIFEST_PATH = join(__dirname, "image-manifest.json");

function higgsfieldBin() {
  const local = join(ROOT, "node_modules", ".bin", "higgsfield");
  if (existsSync(local)) return local;
  return "higgsfield";
}

function parseArgs(argv) {
  const onlyArg = argv.find((a) => a.startsWith("--only="));
  const only = onlyArg ? onlyArg.split("=")[1].split(",").map((s) => s.trim()).filter(Boolean) : null;
  const dryRun = argv.includes("--dry-run");
  const force = argv.includes("--force");
  return { only, dryRun, force };
}

function ensureAuth() {
  const bin = higgsfieldBin();
  const result = spawnSync(bin, ["auth", "token"], { encoding: "utf8" });
  const output = `${result.stdout ?? ""}${result.stderr ?? ""}`;
  if (result.status !== 0 || /not authenticated|session expired/i.test(output)) {
    console.error("\nHiggsfield oturumu yok. Terminalde:\n");
    console.error("  npx higgsfield auth login");
    console.error("  npx higgsfield workspace list");
    console.error("  npx higgsfield workspace set <workspace_id>\n");
    process.exit(1);
  }
}

function ensureWorkspace() {
  const bin = higgsfieldBin();
  const result = spawnSync(bin, ["account", "status"], { encoding: "utf8" });
  const output = `${result.stdout ?? ""}${result.stderr ?? ""}`;
  if (result.status !== 0 || /no workspace selected/i.test(output)) {
    console.error("\nHiggsfield workspace seçili değil:\n");
    console.error("  npx higgsfield workspace list");
    console.error("  npx higgsfield workspace set <workspace_id>\n");
    process.exit(1);
  }
}

function download(url, dest) {
  mkdirSync(dirname(dest), { recursive: true });
  execFileSync("curl", ["-fsSL", url, "-o", dest], { stdio: "inherit" });
}

function buildPrompt(entry, config) {
  const brand = config.brand ?? {};
  const series = brand.visualSeries ? `${brand.visualSeries}. ` : "";
  const company = brand.company ? `${brand.company}, ${brand.location ?? "Denizli, Türkiye"}. ` : "";
  return `${series}${company}${entry.prompt}. ${config.styleSuffix}`;
}

function generateOne(entry, config, referencePath) {
  const bin = higgsfieldBin();
  const prompt = buildPrompt(entry, config);
  const aspectRatio = entry.aspectRatio ?? config.aspectRatio ?? "16:9";
  const resolution = entry.resolution ?? config.resolution ?? "2k";
  const model = entry.model ?? config.model ?? "nano_banana_2";

  console.log(`\n→ ${entry.id}`);
  console.log(`  ${entry.output}`);
  if (referencePath) console.log(`  ref: ${referencePath}`);

  const args = [
    "generate",
    "create",
    model,
    "--prompt",
    prompt,
    "--aspect_ratio",
    aspectRatio,
    "--resolution",
    resolution,
    "--wait",
    "--json",
    "--no-color",
  ];

  if (referencePath && existsSync(referencePath)) {
    args.push("--image-references", referencePath);
  }

  const result = spawnSync(bin, args, { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 });
  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout || `Generation failed for ${entry.id}`);
  }

  let payload;
  try {
    payload = JSON.parse(result.stdout);
  } catch {
    throw new Error(`Invalid JSON for ${entry.id}: ${result.stdout?.slice(0, 400)}`);
  }

  const job = Array.isArray(payload) ? payload[0] : payload;
  const url = job?.result_url ?? job?.min_result_url;

  if (!url) {
    throw new Error(`No result URL for ${entry.id}: ${JSON.stringify(payload).slice(0, 500)}`);
  }

  const dest = join(ROOT, entry.output);
  download(url, dest);
  return { id: entry.id, output: entry.output, url };
}

async function main() {
  const { only, dryRun, force } = parseArgs(process.argv.slice(2));
  const manifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf8"));
  let images = manifest.images;

  if (only?.length) {
    images = images.filter((img) => only.includes(img.id));
    if (!images.length) {
      console.error(`No images matched --only=${only.join(",")}`);
      process.exit(1);
    }
  }

  console.log(`SMF Hafriyat görsel serisi — ${images.length} görsel`);
  if (manifest.brand?.company) {
    console.log(`${manifest.brand.company} · ${manifest.brand.location ?? "Denizli"}`);
  }

  if (dryRun) {
    for (const entry of images) {
      console.log(`[dry-run] ${entry.id} → ${entry.output}`);
      console.log(`  ${buildPrompt(entry, manifest).slice(0, 140)}…`);
    }
    return;
  }

  ensureAuth();
  ensureWorkspace();

  const anchorId = manifest.referenceAnchor ?? "hero-main";
  const anchorEntry = manifest.images.find((img) => img.id === anchorId);
  let referencePath = anchorEntry ? join(ROOT, anchorEntry.output) : null;

  if (referencePath && existsSync(referencePath) && !force) {
    console.log(`Referans görsel: ${referencePath}`);
  }

  const log = [];
  for (const entry of images) {
    const dest = join(ROOT, entry.output);
    if (existsSync(dest) && !force) {
      console.log(`\n⊘ ${entry.id} (mevcut, --force ile yeniden üret)`);
      if (entry.id === anchorId || !referencePath || !existsSync(referencePath)) {
        referencePath = dest;
      }
      continue;
    }

    const useReference = entry.id !== anchorId ? referencePath : null;

    try {
      const result = generateOne(entry, manifest, useReference);
      log.push({ ...result, status: "ok", at: new Date().toISOString() });
      writeFileSync(join(ROOT, "scripts", "generation-log.json"), JSON.stringify(log, null, 2));

      if (entry.id === anchorId || !referencePath || !existsSync(referencePath)) {
        referencePath = dest;
        console.log(`  ✓ referans güncellendi`);
      }
    } catch (error) {
      console.error(`\n✗ ${entry.id}: ${error.message}`);
      log.push({
        id: entry.id,
        output: entry.output,
        status: "error",
        error: error.message,
        at: new Date().toISOString(),
      });
      writeFileSync(join(ROOT, "scripts", "generation-log.json"), JSON.stringify(log, null, 2));
    }
  }

  console.log("\nTamamlandı. Log: scripts/generation-log.json");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
