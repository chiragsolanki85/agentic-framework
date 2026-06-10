import { SdlcFlowDiagram } from "@/components/SdlcFlowDiagram";

export default function FlowPage() {
  return (
    <div className="flow-page">
      <section className="hero card" style={{ marginBottom: "1rem" }}>
        <h1 style={{ margin: "0 0 0.5rem" }}>SDLC Flow</h1>
        <p className="kicker" style={{ margin: 0, fontSize: "1.05rem" }}>
          See how humans, agents, and context interact at every stage of delivery.
        </p>
        <p style={{ margin: "0.75rem 0 0" }}>
          Humans set intent and approve risk. Agents execute bounded tasks. Context artefacts keep everyone aligned.
          Click any stage to explore the agent, prompts, gates, and artefacts involved.
        </p>
      </section>
      <SdlcFlowDiagram />
    </div>
  );
}
