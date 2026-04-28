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
  return (
    <WorkflowTable
      title="Foundations Workflow"
      rows={[
        {
          human: "Define north star, scope boundaries, and strategic intent",
          agent: "Structure intent into reusable foundation artefacts",
          context: "product/*, architecture/*, engineering/*, data/*, ways-of-working/*",
        },
        {
          human: "Review assumptions, constraints, and risks",
          agent: "Highlight missing domains and policy gaps",
          context: "cross-cutting/policies-and-constraints.md, foundations-checklist.md",
        },
        {
          human: "Approve foundation readiness",
          agent: "Prepare handoff summary for next stage",
          context: "architecture/architect-handoff.md, logs/handoffs/30_handoffs.md",
        },
      ]}
    />
  );
}

export function RequirementsWorkflow() {
  return (
    <WorkflowTable
      title="Requirements Workflow"
      rows={[
        {
          human: "Provide feature intent and acceptance outcomes",
          agent: "Draft BDD requirement with explicit scenarios",
          context: "01_requirements/features/FEATURE-<EPIC>-<NNN>.md",
        },
        {
          human: "Challenge ambiguities and confirm scope",
          agent: "Revise stories and refined-ready checklist",
          context: "templates/features/REFINED-FEATURE-READY-CHECKLIST.md",
        },
        {
          human: "Approve refined-ready gate",
          agent: "Signal handoff to specification stage",
          context: "logs/handoffs/30_handoffs.md",
        },
      ]}
    />
  );
}

export function SpecificationWorkflow() {
  return (
    <WorkflowTable
      title="Technical Specification Workflow"
      rows={[
        {
          human: "Review requirement intent and constraints",
          agent: "Generate implementation-safe technical spec",
          context: "02_specs/SPEC-FEAT-<EPIC>-<NNN>.md",
        },
        {
          human: "Assess risk, security, and trade-offs",
          agent: "Update alternatives, contracts, and task plan",
          context: "API/data impacts, acceptance test draft, risk section",
        },
        {
          human: "Approve spec",
          agent: "Trigger implementation workflow",
          context: "logs/handoffs/30_handoffs.md",
        },
      ]}
    />
  );
}

export function ImplementationWorkflow() {
  return (
    <WorkflowTable
      title="Implementation Workflow"
      rows={[
        {
          human: "Confirm approved spec and boundaries",
          agent: "Execute atomic code changes aligned to spec",
          context: "03_implementation/IMPLEMENTATION-FEAT-<...>.md",
        },
        {
          human: "Review PR for quality and safety",
          agent: "Run checks and update implementation evidence",
          context: "PR checklist + validation evidence",
        },
        {
          human: "Approve merge",
          agent: "Prepare transition to validation stage",
          context: "logs/handoffs/30_handoffs.md",
        },
      ]}
    />
  );
}

export function ValidationWorkflow() {
  return (
    <WorkflowTable
      title="Validation Workflow"
      rows={[
        {
          human: "Confirm expected behaviors and critical paths",
          agent: "Generate and execute validation suite",
          context: "04_validation/plans/* and 04_validation/reports/*",
        },
        {
          human: "Inspect defects, edge cases, and NFR outcomes",
          agent: "Summarize pass/fail and risks",
          context: "VALIDATION-REPORT-<FEATURE-ID>.md",
        },
        {
          human: "Approve suite readiness",
          agent: "Signal deployment readiness checks",
          context: "logs/handoffs/30_handoffs.md",
        },
      ]}
    />
  );
}

export function DeploymentWorkflow() {
  return (
    <WorkflowTable
      title="Deployment Workflow"
      rows={[
        {
          human: "Provide release go/no-go decision",
          agent: "Execute governed rollout with telemetry checks",
          context: "05_deployment/readiness/*, deploy report",
        },
        {
          human: "Verify smoke checks and operational health",
          agent: "Capture rollout status and rollback evidence",
          context: "DEPLOY-REPORT-<FEATURE-ID>.md",
        },
        {
          human: "Approve deploy verification",
          agent: "Trigger feedback collection stage",
          context: "logs/handoffs/30_handoffs.md",
        },
      ]}
    />
  );
}

export function FeedbackWorkflow() {
  return (
    <WorkflowTable
      title="Feedback Workflow"
      rows={[
        {
          human: "Interpret business/user impact expectations",
          agent: "Synthesize telemetry, incidents, and user feedback",
          context: "06_feedback/synthesis/*",
        },
        {
          human: "Decide close, reopen, or follow-on initiative",
          agent: "Produce outcome delta and recommendation",
          context: "06_feedback/outcome-reviews/*",
        },
        {
          human: "Approve triage decision",
          agent: "Hand off to context lifecycle closure",
          context: "logs/handoffs/30_handoffs.md",
        },
      ]}
    />
  );
}

export function ContextWorkflow() {
  return (
    <WorkflowTable
      title="Context Lifecycle Workflow"
      rows={[
        {
          human: "Review source-of-truth consistency",
          agent: "Generate context diff from implemented reality",
          context: "07_context_lifecycle/diffs/*",
        },
        {
          human: "Validate documentation completeness",
          agent: "Run cross-doc consistency checks",
          context: "07_context_lifecycle/checks/*",
        },
        {
          human: "Approve context complete closure",
          agent: "Mark lifecycle complete and log evidence",
          context: "logs/context/context-lifecycle-log.md",
        },
      ]}
    />
  );
}
