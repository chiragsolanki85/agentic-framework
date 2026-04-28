import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="hero card">
        <h1>Crosstide Web Documentation Portal</h1>
        <p className="kicker">
          Interactive wiki for enterprise customers and delivery teams to adopt the Agentic SDLC blueprint with clear stage gates,
          role responsibilities, and tiered artefact adoption.
        </p>
        <p>
          Start with <Link href="/docs/first-product">First Product Guide</Link> or browse the <Link href="/catalog">Artefact Catalog</Link>.
        </p>
      </section>
      <section className="grid3" style={{ marginTop: "1rem" }}>
        <article className="card">
          <h3>For Product Managers</h3>
          <p>Understand required inputs, outcomes, and decisions before features enter delivery.</p>
          <Link href="/docs/role-product-managers">Open role guide</Link>
        </article>
        <article className="card">
          <h3>For Engineers</h3>
          <p>Follow stage-by-stage requirements from specification through validation and deployment.</p>
          <Link href="/docs/role-engineering">Open role guide</Link>
        </article>
        <article className="card">
          <h3>For Delivery and Governance</h3>
          <p>Run approvals, evidence controls, and risk gates for enterprise-safe product release.</p>
          <Link href="/docs/role-governance">Open role guide</Link>
        </article>
      </section>
    </div>
  );
}
