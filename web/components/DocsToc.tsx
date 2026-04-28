import type { Heading } from "@/lib/docs";

export function DocsToc({ headings }: { headings: Heading[] }) {
  if (!headings.length) return null;

  return (
    <aside className="toc card">
      <h4>On this page</h4>
      <ul>
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: `${(h.level - 1) * 10}px` }}>
            <a href={`#${h.id}`}>{h.text}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
