"use client";

import Link from "next/link";
import type { FlowStage } from "@/lib/sdlc-flow";

type Props = {
  stage: FlowStage | null;
  executiveView: boolean;
};

export function StageDetailPanel({ stage, executiveView }: Props) {
  if (!stage) {
    return (
      <aside className="flow-panel flow-panel-empty card">
        <p className="kicker">Select a stage or node in the diagram to see agent, prompt, and context details.</p>
      </aside>
    );
  }

  return (
    <aside className="flow-panel card">
      <div className="flow-panel-header">
        <span className="flow-stage-badge">Stage {stage.order} of 9</span>
        <h2 style={{ margin: "0.5rem 0 0" }}>{stage.title}</h2>
        <p className="kicker" style={{ margin: "0.25rem 0 0" }}>{stage.tagline}</p>
      </div>

      {stage.agent && (
        <section className="flow-panel-section">
          <h3>Agent</h3>
          <p><strong>{stage.agent.name}</strong> — {stage.agent.mission}</p>
          {!executiveView && (
            <p><code>{stage.agent.roleCard}</code></p>
          )}
        </section>
      )}

      {stage.prompt && (
        <section className="flow-panel-section">
          <h3>Prompt to run</h3>
          <p><code>{stage.prompt}</code></p>
          {stage.gatePrompt && (
            <>
              <h4 style={{ marginBottom: "0.25rem" }}>Gate prompt</h4>
              <p><code>{stage.gatePrompt}</code></p>
            </>
          )}
        </section>
      )}

      {stage.humanGate && (
        <section className="flow-panel-section">
          <h3>Human gate</h3>
          <p><strong>Owner:</strong> {stage.humanGate.owner}</p>
          <p><strong>Decision:</strong> {stage.humanGate.decision}</p>
          <p className="kicker">Run <code>framework/prompts/09-handoff-log-entry.md</code> after the gate decision.</p>
        </section>
      )}

      {!executiveView && (
        <section className="flow-panel-section">
          <h3>Context artefacts</h3>
          {stage.contextReads.length > 0 && (
            <>
              <h4 style={{ marginBottom: "0.25rem" }}>Reads</h4>
              <ul>
                {stage.contextReads.map((p) => (
                  <li key={p}><code>{p}</code></li>
                ))}
              </ul>
            </>
          )}
          {stage.contextWrites.length > 0 && (
            <>
              <h4 style={{ marginBottom: "0.25rem" }}>Writes</h4>
              <ul>
                {stage.contextWrites.map((p) => (
                  <li key={p}><code>{p}</code></li>
                ))}
              </ul>
            </>
          )}
        </section>
      )}

      <section className="flow-panel-section flow-panel-footer">
        {stage.wikiSlug && (
          <p>
            <Link href={`/docs/${stage.wikiSlug}`}>Read wiki guide →</Link>
          </p>
        )}
        {stage.goldenPathExample && !executiveView && (
          <p className="kicker">
            Example: <code>{stage.goldenPathExample}</code>
          </p>
        )}
      </section>
    </aside>
  );
}
