import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="hero card">
        <h1>Crosstide Agentic SDLC</h1>
        <p className="kicker" style={{ fontSize: "1.1rem" }}>
          Humans set intent and approve risk. Agents execute bounded tasks. Context keeps everyone aligned.
        </p>
        <div className="cta-row">
          <Link href="/flow" className="cta-primary">Explore the SDLC Flow</Link>
          <Link href="/docs/executive-implementation-guide" className="cta-secondary">Executive Guide</Link>
          <Link href="/docs/first-product" className="cta-secondary">First Product</Link>
          <Link href="/catalog" className="cta-secondary">Artefact Catalogue</Link>
        </div>
      </section>

      <section className="two-folder-strip">
        <article className="card">
          <h3 style={{ marginTop: 0 }}>framework/</h3>
          <p>Reusable operating system — agents, prompts, standards, templates, and tooling. Portable across projects.</p>
          <Link href="/docs/overview">Learn the model →</Link>
        </article>
        <article className="card">
          <h3 style={{ marginTop: 0 }}>context/</h3>
          <p>Your product artefacts — foundations, lifecycle outputs, logs, and governance records. Reset per initiative.</p>
          <Link href="/docs/first-product">Get started →</Link>
        </article>
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

      <section className="card" style={{ marginTop: "1rem" }}>
        <h3 style={{ marginTop: 0 }}>Worked example</h3>
        <p>
          See an end-to-end sample feature (<code>FEAT-ONBOARDING-001</code>) in the repository at{" "}
          <code>context/examples/golden-path/</code>.
        </p>
        <p>
          Canonical repository:{" "}
          <a href="https://github.com/chiragsolanki85/agentic-framework" target="_blank" rel="noreferrer">
            github.com/chiragsolanki85/agentic-framework
          </a>
        </p>
      </section>
    </div>
  );
}
