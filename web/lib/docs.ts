import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export type DocMeta = {
  title: string;
  summary: string;
  role?: string;
  stage?: string;
  sourceRefs?: string[];
};

export type Heading = { id: string; text: string; level: number };

export type Doc = {
  slug: string;
  meta: DocMeta;
  content: string;
  headings: Heading[];
};

function headingId(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-");
}

function extractHeadings(mdx: string): Heading[] {
  const headings: Heading[] = [];
  const lines = mdx.split("\n");
  for (const line of lines) {
    const m = /^(#{1,3})\s+(.+)$/.exec(line.trim());
    if (m) headings.push({ id: headingId(m[2]), text: m[2], level: m[1].length });
  }
  return headings;
}

export function getDoc(slug: string): Doc | null {
  const file = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    meta: {
      title: String(data.title ?? slug),
      summary: String(data.summary ?? ""),
      role: data.role ? String(data.role) : undefined,
      stage: data.stage ? String(data.stage) : undefined,
      sourceRefs: Array.isArray(data.sourceRefs) ? data.sourceRefs.map(String) : [],
    },
    content,
    headings: extractHeadings(content),
  };
}

export function getAllDocSlugs(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}
