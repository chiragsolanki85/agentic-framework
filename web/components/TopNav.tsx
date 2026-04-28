import Link from "next/link";
import Image from "next/image";

export function TopNav() {
  return (
    <header className="topnav">
      <div className="container topnav-inner">
        <Link className="brand" href="/">
          <Image src="/dark-logo.svg" alt="Crosstide" width={110} height={24} />
          <span>Agentic SDLC Portal</span>
        </Link>
        <nav className="navlinks">
          <Link href="/docs/overview">Docs</Link>
          <Link href="/catalog">Artefact Catalogue</Link>
          <Link href="/docs/first-product">First Product Guide</Link>
          <a href="https://github.com/chiragsolanki85/agentic-framework" target="_blank" rel="noreferrer">
            GitHub Source
          </a>
        </nav>
      </div>
    </header>
  );
}
