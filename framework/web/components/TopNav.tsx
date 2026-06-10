"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="topnav">
      <div className="container topnav-inner">
        <Link className="brand" href="/">
          <Image src="/dark-logo.svg" alt="Crosstide" width={110} height={24} />
          <span>Agentic SDLC Portal</span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav className={`navlinks ${menuOpen ? "is-open" : ""}`}>
          <Link className={isActive("/docs/overview") ? "is-active" : undefined} href="/docs/overview" onClick={() => setMenuOpen(false)}>
            Docs
          </Link>
          <Link className={isActive("/catalog") ? "is-active" : undefined} href="/catalog" onClick={() => setMenuOpen(false)}>
            Artefact Catalogue
          </Link>
          <Link className={isActive("/docs/first-product") ? "is-active" : undefined} href="/docs/first-product" onClick={() => setMenuOpen(false)}>
            First Product Guide
          </Link>
          <a href="https://github.com/chiragsolanki85/agentic-framework" target="_blank" rel="noreferrer">
            GitHub Source
          </a>
        </nav>
      </div>
      <div className="mobile-quick-actions">
        <div className="container mobile-quick-actions-inner">
          <Link className={isActive("/docs/overview") ? "is-active" : undefined} href="/docs/overview">Docs</Link>
          <Link className={isActive("/catalog") ? "is-active" : undefined} href="/catalog">Catalogue</Link>
          <Link className={isActive("/docs/first-product") ? "is-active" : undefined} href="/docs/first-product">Start</Link>
        </div>
      </div>
    </header>
  );
}
