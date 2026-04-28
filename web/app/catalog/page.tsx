"use client";

import { useMemo, useState } from "react";
import { artefacts } from "@/lib/artefacts";

export default function CatalogPage() {
  const [query, setQuery] = useState("");
  const [tier, setTier] = useState("All");
  const [stage, setStage] = useState("All");
  const [role, setRole] = useState("All");

  const stages = ["All", ...Array.from(new Set(artefacts.map((a) => a.stage)))];
  const roles = ["All", ...Array.from(new Set(artefacts.map((a) => a.role)))];

  const filtered = useMemo(() => {
    return artefacts.filter((a) => {
      const q = query.trim().toLowerCase();
      const matchesQuery = !q || `${a.path} ${a.description}`.toLowerCase().includes(q);
      const matchesTier = tier === "All" || a.tier === tier;
      const matchesStage = stage === "All" || a.stage === stage;
      const matchesRole = role === "All" || a.role === role;
      return matchesQuery && matchesTier && matchesStage && matchesRole;
    });
  }, [query, tier, stage, role]);

  return (
    <section className="card">
      <h1>Artefact Catalog</h1>
      <p className="kicker">Filter by tier, stage, role, and keyword to identify what to produce and when.</p>
      <div className="filters">
        <input type="search" placeholder="Search artefacts" value={query} onChange={(e)=>setQuery(e.target.value)} />
        <select value={tier} onChange={(e)=>setTier(e.target.value)}>
          <option>All</option><option>Core</option><option>Extended</option><option>Optional</option>
        </select>
        <select value={stage} onChange={(e)=>setStage(e.target.value)}>
          {stages.map((s)=><option key={s}>{s}</option>)}
        </select>
        <select value={role} onChange={(e)=>setRole(e.target.value)}>
          {roles.map((r)=><option key={r}>{r}</option>)}
        </select>
      </div>
      <table className="table">
        <thead><tr><th>Artefact</th><th>Tier</th><th>Stage</th><th>Role</th><th>Description</th></tr></thead>
        <tbody>
          {filtered.map((a) => (
            <tr key={a.path}>
              <td><code>{a.path}</code></td>
              <td><span className={`badge ${a.tier.toLowerCase()}`}>{a.tier}</span></td>
              <td>{a.stage}</td>
              <td>{a.role}</td>
              <td>{a.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
