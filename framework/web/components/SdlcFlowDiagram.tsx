"use client";

import { useCallback, useEffect, useState } from "react";
import { flowStages, metaPrompts, supplementaryAgent, type FlowNodeKind, type FlowStage } from "@/lib/sdlc-flow";
import { StageDetailPanel } from "@/components/StageDetailPanel";

const kindLabels: Record<FlowNodeKind, string> = {
  human: "Human",
  agent: "Agent",
  context: "Context",
  gate: "Gate",
};

export function SdlcFlowDiagram() {
  const [activeStageId, setActiveStageId] = useState<string | null>(null);
  const [executiveView, setExecutiveView] = useState(false);

  const activeStage = flowStages.find((s) => s.id === activeStageId) ?? null;

  const selectStage = useCallback((id: string) => {
    setActiveStageId(id);
    window.history.replaceState(null, "", `#${id}`);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && flowStages.some((s) => s.id === hash)) {
      setActiveStageId(hash);
    }
  }, []);

  return (
    <div className="flow-layout">
      <div className="flow-main">
        <div className="flow-toolbar">
          <div className="flow-legend">
            {(Object.keys(kindLabels) as FlowNodeKind[]).map((kind) => (
              <span key={kind} className={`flow-legend-item flow-node-${kind}`}>
                {kindLabels[kind]}
              </span>
            ))}
          </div>
          <label className="flow-toggle">
            <input
              type="checkbox"
              checked={executiveView}
              onChange={(e) => setExecutiveView(e.target.checked)}
            />
            Executive view
          </label>
        </div>

        <div className="flow-progress">
          {flowStages.map((stage) => (
            <button
              key={stage.id}
              type="button"
              className={`flow-progress-step${activeStageId === stage.id ? " is-active" : ""}`}
              onClick={() => selectStage(stage.id)}
              title={stage.title}
            >
              {stage.order}
            </button>
          ))}
        </div>

        <div className="flow-stages">
          {flowStages.map((stage, idx) => (
            <div key={stage.id} className="flow-stage-wrapper">
              {idx > 0 && <div className="flow-connector" aria-hidden="true">→</div>}
              <StageCard
                stage={stage}
                isActive={activeStageId === stage.id}
                onSelect={() => selectStage(stage.id)}
              />
            </div>
          ))}
        </div>

        <section className="card flow-meta">
          <h3>Meta prompts</h3>
          <div className="flow-meta-grid">
            {metaPrompts.map((m) => (
              <div key={m.id} className="flow-meta-item">
                <strong>{m.title}</strong>
                <p className="kicker">{m.summary}</p>
                {!executiveView && <code>{m.prompt}</code>}
              </div>
            ))}
          </div>
          <div className="flow-meta-item" style={{ marginTop: "1rem" }}>
            <strong>{supplementaryAgent.name}</strong>
            <span className="badge extended" style={{ marginLeft: "0.5rem" }}>On-demand</span>
            <p className="kicker">{supplementaryAgent.mission}</p>
            {!executiveView && <code>{supplementaryAgent.prompt}</code>}
          </div>
        </section>
      </div>

      <StageDetailPanel stage={activeStage} executiveView={executiveView} />
    </div>
  );
}

function StageCard({
  stage,
  isActive,
  onSelect,
}: {
  stage: FlowStage;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      className={`flow-stage-card card${isActive ? " is-active" : ""}`}
      onClick={onSelect}
    >
      <div className="flow-stage-card-header">
        <span className="flow-stage-num">{stage.order}</span>
        <h3>{stage.title}</h3>
      </div>
      <p className="flow-stage-tagline">{stage.tagline}</p>
      <div className="flow-nodes">
        {stage.nodes.map((node) => (
          <div key={node.id} className={`flow-node flow-node-${node.kind}`}>
            <span className="flow-node-kind">{kindLabels[node.kind]}</span>
            <span className="flow-node-label">{node.label}</span>
          </div>
        ))}
      </div>
    </button>
  );
}
