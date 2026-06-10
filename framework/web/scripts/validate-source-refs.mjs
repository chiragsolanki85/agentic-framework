#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.join(__dirname, "..");
const repoRoot = path.join(webRoot, "..", "..");
const contentDir = path.join(webRoot, "content");

const ALLOWED_LITERALS = new Set([
  "README.md (repo root)",
]);

function resolveGlob(ref) {
  const dir = path.dirname(ref);
  const base = path.basename(ref);
  if (!base.includes("*")) return null;
  const prefix = base.split("*")[0];
  const absDir = path.join(repoRoot, dir);
  if (!fs.existsSync(absDir)) return false;
  const entries = fs.readdirSync(absDir);
  return entries.some((e) => e.startsWith(prefix));
}

function refExists(ref) {
  if (ALLOWED_LITERALS.has(ref)) return true;
  if (ref.includes("*")) return resolveGlob(ref) !== false;

  const normalized = ref.endsWith("/") ? ref.slice(0, -1) : ref;
  const abs = path.join(repoRoot, normalized);
  return fs.existsSync(abs);
}

let failed = false;
const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

for (const file of files) {
  const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
  const { data } = matter(raw);
  const refs = Array.isArray(data.sourceRefs) ? data.sourceRefs : [];

  for (const ref of refs) {
    const trimmed = String(ref).trim();
    if (!refExists(trimmed)) {
      console.error(`FAIL: ${file} → missing sourceRef: ${trimmed}`);
      failed = true;
    }
  }
}

if (failed) {
  console.error("\nSource reference validation failed.");
  process.exit(1);
}

console.log(`OK: validated sourceRefs in ${files.length} MDX files.`);
