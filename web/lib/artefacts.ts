export type Artefact = {
  path: string;
  tier: "Core" | "Extended" | "Optional";
  stage: string;
  role: "Product" | "Engineering" | "Delivery/Governance" | "Cross-functional";
  description: string;
};

export const artefacts: Artefact[] = [
  { path: "00_foundations/product/north-star.md", tier: "Core", stage: "Foundations", role: "Product", description: "Product direction and non-goals." },
  { path: "00_foundations/architecture/architecture-baseline.md", tier: "Core", stage: "Foundations", role: "Engineering", description: "Architecture starting point and constraints." },
  { path: "00_foundations/engineering/quality-strategy.md", tier: "Core", stage: "Foundations", role: "Engineering", description: "Quality expectations and test approach." },
  { path: "00_foundations/data/data-foundations.md", tier: "Core", stage: "Foundations", role: "Cross-functional", description: "Data ownership and quality expectations." },
  { path: "00_foundations/ways-of-working/operating-rhythm.md", tier: "Core", stage: "Foundations", role: "Delivery/Governance", description: "Cadence and operating forums." },
  { path: "01_requirements/features/FEATURE-<EPIC>-<NNN>.md", tier: "Core", stage: "Requirements", role: "Product", description: "BDD feature requirement artefact." },
  { path: "02_specs/SPEC-FEAT-<EPIC>-<NNN>.md", tier: "Core", stage: "Specification", role: "Engineering", description: "Approved technical implementation contract." },
  { path: "03_implementation/IMPLEMENTATION-FEAT-<EPIC>-<NNN>.md", tier: "Core", stage: "Implementation", role: "Engineering", description: "Execution log and verification evidence." },
  { path: "04_validation/reports/VALIDATION-REPORT-<FEATURE-ID>.md", tier: "Core", stage: "Validation", role: "Engineering", description: "Suite result and release recommendation." },
  { path: "05_deployment/readiness/DEPLOY-READINESS-<FEATURE-ID>.md", tier: "Core", stage: "Deployment", role: "Delivery/Governance", description: "Go/no-go readiness checklist." },
  { path: "06_feedback/outcome-reviews/OUTCOME-REVIEW-<FEATURE-ID>.md", tier: "Core", stage: "Feedback", role: "Product", description: "Outcome delta and close/reopen decision." },
  { path: "07_context_lifecycle/checks/CONTEXT-CONSISTENCY-<FEATURE-ID>.md", tier: "Core", stage: "Context Lifecycle", role: "Cross-functional", description: "Consistency check before closure." },
  { path: "standards/v2-lifecycle-governance.md", tier: "Core", stage: "Governance", role: "Delivery/Governance", description: "Lifecycle gate policies." },
  { path: "extended/delivery/traceability-matrix.md", tier: "Extended", stage: "Governance", role: "Delivery/Governance", description: "End-to-end traceability evidence." },
  { path: "extended/governance/risk-register.md", tier: "Extended", stage: "Governance", role: "Delivery/Governance", description: "Active delivery and operational risks." },
  { path: "extended/governance/exception-register.md", tier: "Extended", stage: "Governance", role: "Delivery/Governance", description: "Approved control exceptions." },
  { path: "extended/adr/index.md", tier: "Extended", stage: "Specification", role: "Engineering", description: "Architecture decision history." },
  { path: "extended/release/runbook.md", tier: "Extended", stage: "Deployment", role: "Engineering", description: "Operational deployment runbook." },
  { path: "extended/feedback/post-release-review.md", tier: "Extended", stage: "Feedback", role: "Cross-functional", description: "Structured release learning loop." },
  { path: "optional/experiments/01-backlog-acceleration/results.md", tier: "Optional", stage: "Improvement", role: "Cross-functional", description: "Experiment outcome evidence." },
  { path: "optional/metrics/adoption-dashboard.md", tier: "Optional", stage: "Improvement", role: "Delivery/Governance", description: "Adoption tracking dashboard stub." },
  { path: "optional/product/portfolio-backlog.csv", tier: "Optional", stage: "Discovery", role: "Product", description: "Portfolio intake management." },
  { path: "optional/data/data-dictionary.csv", tier: "Optional", stage: "Data", role: "Engineering", description: "Detailed field dictionary." }
];
