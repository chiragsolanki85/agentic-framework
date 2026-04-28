import Link from "next/link";
import { navGroups } from "@/lib/site-nav";

export function DocsSidebar() {
  return (
    <aside className="sidebar card">
      {navGroups.map((group) => (
        <div key={group.title} className="group">
          <h4>{group.title}</h4>
          <ul>
            {group.items.map((item) => (
              <li key={item.slug}>
                <Link href={`/docs/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
