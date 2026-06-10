import { flowStages } from "@/lib/sdlc-flow";

type FlowRow = {
  human: string;
  agent: string;
  context: string;
};

function WorkflowTable({ title, rows }: { title: string; rows: FlowRow[] }) {
  return (
    <section className="card" style={{ margin: "1rem 0" }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <div style={{ overflowX: "auto" }}>
        <table className="table">
          <thead>
            <tr>
              <th>Human-in-the-loop</th>
              <th>Agent action</th>
              <th>Context artefacts</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx}>
                <td>{row.human}</td>
                <td>{row.agent}</td>
                <td>{row.context}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function FoundationsWorkflow() {
  const stage = flowStages.find((s) => s.id === "foundations")!;
  return <WorkflowTable title="Foundations Workflow" rows={stage.workflowRows} />;
}

export function RequirementsWorkflow() {
  const stage = flowStages.find((s) => s.id === "requirements")!;
  return <WorkflowTable title="Requirements Workflow" rows={stage.workflowRows} />;
}

export function SpecificationWorkflow() {
  const stage = flowStages.find((s) => s.id === "specification")!;
  return <WorkflowTable title="Technical Specification Workflow" rows={stage.workflowRows} />;
}

export function ImplementationWorkflow() {
  const stage = flowStages.find((s) => s.id === "implementation")!;
  return <WorkflowTable title="Implementation Workflow" rows={stage.workflowRows} />;
}

export function ValidationWorkflow() {
  const stage = flowStages.find((s) => s.id === "validation")!;
  return <WorkflowTable title="Validation Workflow" rows={stage.workflowRows} />;
}

export function DeploymentWorkflow() {
  const stage = flowStages.find((s) => s.id === "deployment")!;
  return <WorkflowTable title="Deployment Workflow" rows={stage.workflowRows} />;
}

export function FeedbackWorkflow() {
  const stage = flowStages.find((s) => s.id === "feedback")!;
  return <WorkflowTable title="Feedback Workflow" rows={stage.workflowRows} />;
}

export function ContextWorkflow() {
  const stage = flowStages.find((s) => s.id === "context-lifecycle")!;
  return <WorkflowTable title="Context Lifecycle Workflow" rows={stage.workflowRows} />;
}
