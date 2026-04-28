"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navGroups } from "@/lib/site-nav";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar card">
      {navGroups.map((group) => (
        <div key={group.title} className="group">
          <h4>{group.title}</h4>
          <ul>
            {group.items.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/docs/${item.slug}`}
                  className={pathname === `/docs/${item.slug}` ? "is-active" : undefined}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
