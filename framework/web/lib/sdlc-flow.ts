// Canonical source: framework/core/starter/HAPPY_PATH_PROMPT_SEQUENCE.md + framework/agents/

export type FlowNodeKind = "human" | "agent" | "context" | "gate";

export type FlowNode = {
  id: string;
  kind: FlowNodeKind;
  label: string;
  summary: string;
};

export type FlowStage = {
  id: string;
  order: number;
  title: string;
  tagline: string;
  nodes: FlowNode[];
  agent?: { name: string; roleCard: string; mission: string };
  prompt?: string;
  gatePrompt?: string;
  humanGate?: { owner: string; decision: string };
  contextReads: string[];
  contextWrites: string[];
  wikiSlug?: string;
  goldenPathExample?: string;
  tier: "Core" | "Extended";
  workflowRows: { human: string; agent: string; context: string }[];
};

export type MetaPrompt = {
  id: string;
  title: string;
  prompt: string;
  summary: string;
};

export const metaPrompts: MetaPrompt[] = [
  {
    id: "bootstrap",
    title: "Session Bootstrap",
    prompt: "framework/prompts/00-session-bootstrap.md",
    summary: "Load foundations and standards at the start of every agent session.",
  },
  {
    id: "handoff",
    title: "Handoff Log Entry",
    prompt: "framework/prompts/09-handoff-log-entry.md",
    summary: "Record human gate decisions in the handoff audit trail after each stage transition.",
  },
  {
    id: "orchestrator",
    title: "Orchestrator — What's Next",
    prompt: "framework/prompts/10-orchestrator-whats-next.md",
    summary: "Determine the next allowed prompt when unsure of lifecycle position.",
  },
];

export const supplementaryAgent = {
  name: "Context Manager Agent",
  roleCard: "framework/agents/context-manager-agent.md",
  prompt: "framework/prompts/08-context-manager-agent.md",
  mission: "On-demand context alignment during delivery — not part of the happy-path gate sequence.",
};

export const flowStages: FlowStage[] = [
  {
    id: "foundations",
    order: 1,
    title: "Foundations",
    tagline: "Establish immutable project context before any feature work begins.",
    nodes: [
      { id: "f-human-1", kind: "human", label: "Define intent", summary: "Provide north star, scope boundaries, and strategic intent." },
      { id: "f-agent-1", kind: "agent", label: "Facilitator", summary: "Structure intent into reusable foundation artefacts across all domains." },
      { id: "f-context-1", kind: "context", label: "Foundation docs", summary: "Write product, architecture, engineering, data, and ways-of-working artefacts." },
      { id: "f-gate-1", kind: "gate", label: "Foundation approval", summary: "Three-amigos review and handoff to requirements." },
    ],
    agent: { name: "Foundations Facilitator", roleCard: "framework/prompts/01-foundations-facilitator.md", mission: "Elicit and draft all required foundation artefacts across five domains." },
    prompt: "framework/prompts/01-foundations-facilitator.md",
    humanGate: { owner: "Product + Engineering + Delivery", decision: "Approve foundation readiness before feature delivery." },
    contextReads: ["framework/templates/foundations/*.template.md", "framework/standards/accountability-matrix.md"],
    contextWrites: ["context/00_foundations/**/*.md", "context/logs/handoffs/30_handoffs.md"],
    wikiSlug: "lifecycle-foundations",
    tier: "Core",
    workflowRows: [
      { human: "Define north star, scope boundaries, and strategic intent", agent: "Structure intent into reusable foundation artefacts", context: "context/00_foundations/product/*, architecture/*, engineering/*, data/*, ways-of-working/*" },
      { human: "Review assumptions, constraints, and risks", agent: "Highlight missing domains and policy gaps", context: "context/00_foundations/cross-cutting/policies-and-constraints.md, foundations-checklist.md" },
      { human: "Approve foundation readiness", agent: "Prepare handoff summary for next stage", context: "context/00_foundations/architecture/architect-handoff.md, context/logs/handoffs/30_handoffs.md" },
    ],
  },
  {
    id: "requirements",
    order: 2,
    title: "Requirements",
    tagline: "Convert discovery intent into refined, BDD-ready feature requirements.",
    nodes: [
      { id: "r-human-1", kind: "human", label: "Provide intent", summary: "Supply feature intent and acceptance outcomes." },
      { id: "r-agent-1", kind: "agent", label: "Requirements Agent", summary: "Draft BDD requirement with explicit Given/When/Then scenarios." },
      { id: "r-context-1", kind: "context", label: "Feature file", summary: "Write FEATURE artefact and refined-ready checklist." },
      { id: "r-gate-1", kind: "gate", label: "Refined-ready gate", summary: "Product Lead approves requirement before specification." },
    ],
    agent: { name: "Requirements Agent", roleCard: "framework/agents/requirements-agent.md", mission: "Transform discovery context into refined, BDD-ready feature requirements." },
    prompt: "framework/prompts/02-requirements-agent.md",
    gatePrompt: "framework/prompts/03-refined-ready-gate-review.md",
    humanGate: { owner: "Product Lead", decision: "Approve refined-ready gate before specification." },
    contextReads: ["context/00_foundations/**/*.md", "framework/templates/features/FEATURE-TEMPLATE.md"],
    contextWrites: ["context/01_requirements/features/FEATURE-<EPIC>-<NNN>.md", "context/logs/handoffs/30_handoffs.md"],
    wikiSlug: "lifecycle-requirements",
    goldenPathExample: "context/examples/golden-path/01_requirements/features/FEATURE-ONBOARDING-001.md",
    tier: "Core",
    workflowRows: [
      { human: "Provide feature intent and acceptance outcomes", agent: "Draft BDD requirement with explicit scenarios", context: "context/01_requirements/features/FEATURE-<EPIC>-<NNN>.md" },
      { human: "Challenge ambiguities and confirm scope", agent: "Revise stories and refined-ready checklist", context: "framework/templates/features/REFINED-FEATURE-READY-CHECKLIST.md" },
      { human: "Approve refined-ready gate", agent: "Signal handoff to specification stage", context: "context/logs/handoffs/30_handoffs.md" },
    ],
  },
  {
    id: "specification",
    order: 3,
    title: "Technical Specification",
    tagline: "Translate approved requirements into an implementation-safe technical contract.",
    nodes: [
      { id: "s-human-1", kind: "human", label: "Review intent", summary: "Review requirement intent, constraints, and risks." },
      { id: "s-agent-1", kind: "agent", label: "Spec Agent", summary: "Generate implementation-safe technical spec with task plan." },
      { id: "s-context-1", kind: "context", label: "Spec artefact", summary: "Write SPEC with alternatives, contracts, and acceptance tests." },
      { id: "s-gate-1", kind: "gate", label: "Spec approval", summary: "Engineering Lead approves spec before implementation." },
    ],
    agent: { name: "Spec Agent", roleCard: "framework/agents/spec-agent.md", mission: "Translate refined requirements into an implementation-safe technical specification." },
    prompt: "framework/prompts/04-spec-agent.md",
    gatePrompt: "framework/prompts/05-spec-approval-gate.md",
    humanGate: { owner: "Engineering Lead", decision: "Approve spec before implementation starts." },
    contextReads: ["context/01_requirements/features/*", "context/00_foundations/architecture/*"],
    contextWrites: ["context/02_specs/SPEC-FEAT-<EPIC>-<NNN>.md", "context/logs/handoffs/30_handoffs.md"],
    wikiSlug: "lifecycle-specification",
    goldenPathExample: "context/examples/golden-path/02_specs/SPEC-FEAT-ONBOARDING-001.md",
    tier: "Core",
    workflowRows: [
      { human: "Review requirement intent and constraints", agent: "Generate implementation-safe technical spec", context: "context/02_specs/SPEC-FEAT-<EPIC>-<NNN>.md" },
      { human: "Assess risk, security, and trade-offs", agent: "Update alternatives, contracts, and task plan", context: "API/data impacts, acceptance test draft, risk section" },
      { human: "Approve spec", agent: "Trigger implementation workflow", context: "context/logs/handoffs/30_handoffs.md" },
    ],
  },
  {
    id: "implementation",
    order: 4,
    title: "Implementation",
    tagline: "Execute approved spec in atomic, verifiable code changes.",
    nodes: [
      { id: "i-human-1", kind: "human", label: "Confirm spec", summary: "Confirm approved spec and implementation boundaries." },
      { id: "i-agent-1", kind: "agent", label: "Implementation Agent", summary: "Execute atomic code changes aligned to spec." },
      { id: "i-context-1", kind: "context", label: "Implementation log", summary: "Record execution evidence and PR readiness." },
    ],
    agent: { name: "Implementation Agent", roleCard: "framework/agents/implementation-agent.md", mission: "Execute approved spec in atomic, verifiable code changes." },
    prompt: "framework/prompts/06-implementation-agent.md",
    humanGate: { owner: "Engineering Lead", decision: "PR review and merge approval (via Review Agent)." },
    contextReads: ["context/02_specs/SPEC-FEAT-<EPIC>-<NNN>.md", "framework/standards/coding-standards.md"],
    contextWrites: ["context/03_implementation/IMPLEMENTATION-FEAT-<EPIC>-<NNN>.md"],
    wikiSlug: "lifecycle-implementation",
    goldenPathExample: "context/examples/golden-path/03_implementation/IMPLEMENTATION-FEAT-ONBOARDING-001.md",
    tier: "Core",
    workflowRows: [
      { human: "Confirm approved spec and boundaries", agent: "Execute atomic code changes aligned to spec", context: "context/03_implementation/IMPLEMENTATION-FEAT-<...>.md" },
      { human: "Review PR for quality and safety", agent: "Run checks and update implementation evidence", context: "PR checklist + validation evidence" },
      { human: "Approve merge", agent: "Prepare transition to validation stage", context: "context/logs/handoffs/30_handoffs.md" },
    ],
  },
  {
    id: "review",
    order: 5,
    title: "Review",
    tagline: "Assess implementation quality, risk, and traceability before validation.",
    nodes: [
      { id: "v-human-1", kind: "human", label: "Review findings", summary: "Evaluate severity-ranked findings and merge recommendation." },
      { id: "v-agent-1", kind: "agent", label: "Review Agent", summary: "Assess correctness, security, regression, and traceability." },
      { id: "v-gate-1", kind: "gate", label: "Merge approval", summary: "Engineering Lead approves or requests changes." },
    ],
    agent: { name: "Review Agent", roleCard: "framework/agents/review-agent.md", mission: "Assess implementation quality, risk, and compliance against artefacts." },
    prompt: "framework/prompts/07-review-agent.md",
    humanGate: { owner: "Engineering Lead", decision: "Approve merge or request changes before validation." },
    contextReads: ["context/01_requirements/features/*", "context/02_specs/*", "context/03_implementation/*"],
    contextWrites: ["context/logs/handoffs/30_handoffs.md"],
    wikiSlug: "lifecycle-implementation",
    tier: "Core",
    workflowRows: [
      { human: "Submit PR for review", agent: "Produce severity-ranked findings and traceability check", context: "PR diff, requirement/spec/implementation artefacts" },
      { human: "Evaluate security and regression risks", agent: "Recommend APPROVE or CHANGES_REQUIRED", context: "framework/standards/*" },
      { human: "Approve merge", agent: "Signal handoff to validation", context: "context/logs/handoffs/30_handoffs.md" },
    ],
  },
  {
    id: "validation",
    order: 6,
    title: "Validation and Testing",
    tagline: "Validate implemented behaviour against requirements and spec with explicit evidence.",
    nodes: [
      { id: "val-human-1", kind: "human", label: "Confirm paths", summary: "Confirm expected behaviours and critical test paths." },
      { id: "val-agent-1", kind: "agent", label: "Validation Agent", summary: "Generate and execute validation suite." },
      { id: "val-context-1", kind: "context", label: "Validation report", summary: "Record pass/fail evidence and release recommendation." },
      { id: "val-gate-1", kind: "gate", label: "Suite approval", summary: "Engineering Lead approves suite before deployment." },
    ],
    agent: { name: "Validation Agent", roleCard: "framework/agents/validation-agent.md", mission: "Validate implemented behavior against requirements and spec with explicit evidence." },
    prompt: "framework/prompts/11-validation-agent.md",
    humanGate: { owner: "Engineering Lead", decision: "Approve suite readiness before deployment." },
    contextReads: ["context/01_requirements/features/*", "context/02_specs/*", "context/03_implementation/*"],
    contextWrites: ["context/04_validation/plans/*", "context/04_validation/reports/*", "context/logs/handoffs/30_handoffs.md"],
    wikiSlug: "lifecycle-validation",
    tier: "Core",
    workflowRows: [
      { human: "Confirm expected behaviors and critical paths", agent: "Generate and execute validation suite", context: "context/04_validation/plans/* and context/04_validation/reports/*" },
      { human: "Inspect defects, edge cases, and NFR outcomes", agent: "Summarize pass/fail and risks", context: "VALIDATION-REPORT-<FEATURE-ID>.md" },
      { human: "Approve suite readiness", agent: "Signal deployment readiness checks", context: "context/logs/handoffs/30_handoffs.md" },
    ],
  },
  {
    id: "deployment",
    order: 7,
    title: "Deployment",
    tagline: "Perform governed, observable deployment with rollback safety.",
    nodes: [
      { id: "d-human-1", kind: "human", label: "Go/no-go", summary: "Provide release go/no-go decision." },
      { id: "d-agent-1", kind: "agent", label: "Deployment Agent", summary: "Execute governed rollout with telemetry checks." },
      { id: "d-context-1", kind: "context", label: "Deploy report", summary: "Capture rollout status and rollback evidence." },
      { id: "d-gate-1", kind: "gate", label: "Deploy verification", summary: "Release owner verifies post-deploy health." },
    ],
    agent: { name: "Deployment Agent", roleCard: "framework/agents/deployment-agent.md", mission: "Perform governed, observable deployment with rollback safety." },
    prompt: "framework/prompts/12-deployment-agent.md",
    humanGate: { owner: "Release owner", decision: "Go/no-go and post-deploy verification." },
    contextReads: ["context/04_validation/reports/*"],
    contextWrites: ["context/05_deployment/readiness/*", "context/05_deployment/reports/*", "context/logs/handoffs/30_handoffs.md"],
    wikiSlug: "lifecycle-deployment",
    tier: "Core",
    workflowRows: [
      { human: "Provide release go/no-go decision", agent: "Execute governed rollout with telemetry checks", context: "context/05_deployment/readiness/*, deploy report" },
      { human: "Verify smoke checks and operational health", agent: "Capture rollout status and rollback evidence", context: "DEPLOY-REPORT-<FEATURE-ID>.md" },
      { human: "Approve deploy verification", agent: "Trigger feedback collection stage", context: "context/logs/handoffs/30_handoffs.md" },
    ],
  },
  {
    id: "feedback",
    order: 8,
    title: "Feedback",
    tagline: "Synthesize production feedback and compare outcomes vs original intent.",
    nodes: [
      { id: "fb-human-1", kind: "human", label: "Set expectations", summary: "Interpret business/user impact expectations." },
      { id: "fb-agent-1", kind: "agent", label: "Feedback Agent", summary: "Synthesize telemetry, incidents, and user feedback." },
      { id: "fb-context-1", kind: "context", label: "Outcome review", summary: "Produce outcome delta and close/reopen recommendation." },
      { id: "fb-gate-1", kind: "gate", label: "Outcome triage", summary: "Product Lead decides close, reopen, or follow-on." },
    ],
    agent: { name: "Feedback Agent", roleCard: "framework/agents/feedback-agent.md", mission: "Synthesize production feedback and compare outcomes vs intent." },
    prompt: "framework/prompts/13-feedback-agent.md",
    humanGate: { owner: "Product Lead", decision: "Triage close/reopen/new-initiative decision." },
    contextReads: ["context/00_foundations/product/target-outcomes.md", "context/05_deployment/reports/*"],
    contextWrites: ["context/06_feedback/synthesis/*", "context/06_feedback/outcome-reviews/*", "context/logs/handoffs/30_handoffs.md"],
    wikiSlug: "lifecycle-feedback",
    tier: "Core",
    workflowRows: [
      { human: "Interpret business/user impact expectations", agent: "Synthesize telemetry, incidents, and user feedback", context: "context/06_feedback/synthesis/*" },
      { human: "Decide close, reopen, or follow-on initiative", agent: "Produce outcome delta and recommendation", context: "context/06_feedback/outcome-reviews/*" },
      { human: "Approve triage decision", agent: "Hand off to context lifecycle closure", context: "context/logs/handoffs/30_handoffs.md" },
    ],
  },
  {
    id: "context-lifecycle",
    order: 9,
    title: "Context Lifecycle",
    tagline: "Ensure repository context stays aligned to deployed reality before closure.",
    nodes: [
      { id: "c-human-1", kind: "human", label: "Review consistency", summary: "Review source-of-truth consistency across artefacts." },
      { id: "c-agent-1", kind: "agent", label: "Context Lifecycle Agent", summary: "Generate context diff and run consistency checks." },
      { id: "c-context-1", kind: "context", label: "Closure evidence", summary: "Record diff, consistency check, and closure log." },
      { id: "c-gate-1", kind: "gate", label: "Context complete", summary: "Engineering + Product verify context complete." },
    ],
    agent: { name: "Context Lifecycle Agent", roleCard: "framework/agents/context-lifecycle-agent.md", mission: "Ensure repository context stays aligned to deployed reality." },
    prompt: "framework/prompts/14-context-lifecycle-agent.md",
    humanGate: { owner: "Engineering + Product", decision: "Verify context complete and close the feature loop." },
    contextReads: ["context/00_foundations/**", "context/01_requirements/**", "context/06_feedback/**"],
    contextWrites: ["context/07_context_lifecycle/diffs/*", "context/07_context_lifecycle/checks/*", "context/logs/context/context-lifecycle-log.md"],
    wikiSlug: "lifecycle-context",
    goldenPathExample: "context/examples/golden-path/logs/context/context-lifecycle-log.md",
    tier: "Core",
    workflowRows: [
      { human: "Review source-of-truth consistency", agent: "Generate context diff from implemented reality", context: "context/07_context_lifecycle/diffs/*" },
      { human: "Validate documentation completeness", agent: "Run cross-doc consistency checks", context: "context/07_context_lifecycle/checks/*" },
      { human: "Approve context complete closure", agent: "Mark lifecycle complete and log evidence", context: "context/logs/context/context-lifecycle-log.md" },
    ],
  },
];

export function getStageById(id: string): FlowStage | undefined {
  return flowStages.find((s) => s.id === id);
}
