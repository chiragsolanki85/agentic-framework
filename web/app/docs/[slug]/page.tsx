import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllDocSlugs, getDoc } from "@/lib/docs";
import { getMDXComponents } from "@/components/mdx-components";
import { DocsSidebar } from "@/components/DocsSidebar";
import { DocsToc } from "@/components/DocsToc";

export function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({ slug }));
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) return notFound();

  const { content } = await compileMDX({
    source: doc.content,
    options: { parseFrontmatter: false },
    components: getMDXComponents({}),
  });

  return (
    <div className="layout">
      <DocsSidebar />
      <article className="main prose">
        <h1>{doc.meta.title}</h1>
        <p className="kicker">{doc.meta.summary}</p>
        {doc.meta.sourceRefs?.length ? (
          <p><strong>Source references:</strong> {doc.meta.sourceRefs.join(" • ")}</p>
        ) : null}
        {content}
      </article>
      <DocsToc headings={doc.headings} />
    </div>
  );
}
