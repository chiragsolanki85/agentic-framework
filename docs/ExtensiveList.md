# Agentic SDLC Framework – Complete Shared Artefact List

## 1. Foundations

### Product Foundations
- product-vision.md
- product-strategy.md
- okrs.md
- personas.md
- customer-journeys.md
- product-principles.md
- value-proposition.md
- roadmap.md
- portfolio-backlog.csv

### Architecture Foundations
- architecture-overview.md
- target-state-architecture.md
- system-context-diagram.png
- integration-catalogue.yaml
- non-functional-requirements.md
- security-standards.md
- environment-topology.md
- architecture-principles.md

### ADR Repository
- adr/ADR-001.md
- adr/ADR-002.md
- adr/index.md

### Engineering Foundations
- engineering-standards.md
- coding-guidelines.md
- branching-strategy.md
- ci-cd-standards.md
- release-strategy.md
- test-strategy.md
- definition-of-done.md
- reusable-components.md

### Data Foundations
- data-model.md
- canonical-entities.md
- data-dictionary.csv
- data-quality-rules.md
- privacy-classification.md
- retention-policy.md
- reporting-definitions.md
- metrics-definitions.md

### Ways of Working Foundations
- operating-model.md
- governance-model.md
- roles-and-responsibilities.md
- accountability-raci.md
- decision-rights.md
- cadence.md
- risk-framework.md
- controls-framework.md
- onboarding-guide.md

---

## 2. Agent Foundations

### Agent Registry
- agents/registry.md
- agents/catalogue.md
- agents/maturity-model.md

### Agent Definitions
- agents/discovery-agent/role.md
- agents/discovery-agent/prompts.md
- agents/discovery-agent/constraints.md

- agents/backlog-agent/role.md
- agents/backlog-agent/prompts.md
- agents/backlog-agent/constraints.md

- agents/architecture-agent/role.md
- agents/architecture-agent/prompts.md
- agents/architecture-agent/constraints.md

- agents/code-agent/role.md
- agents/code-agent/prompts.md
- agents/code-agent/constraints.md

- agents/test-agent/role.md
- agents/test-agent/prompts.md
- agents/test-agent/constraints.md

- agents/release-agent/role.md
- agents/release-agent/prompts.md
- agents/release-agent/constraints.md

- agents/insight-agent/role.md
- agents/insight-agent/prompts.md
- agents/insight-agent/constraints.md

### Agent Operations
- agents/capability-matrix.xlsx
- agents/ownership-matrix.md
- agents/performance-scorecards.md
- agents/version-history.md

---

## 3. Guardrails & Controls

### Governance Controls
- controls/model-policy.md
- controls/approved-models.md
- controls/prompt-standards.md
- controls/output-validation.md
- controls/human-approval-gates.md
- controls/escalation-rules.md
- controls/risk-tiering.md
- controls/segregation-of-duties.md

### Security Controls
- security/data-access-policy.md
- security/pii-policy.md
- security/secrets-standard.md
- security/tool-permissions.csv
- security/identity-access-model.md

### Audit Controls
- controls/logging-standard.md
- controls/evidence-retention.md
- controls/model-change-log.md
- controls/exception-register.csv
- controls/override-log.csv

---

## 4. Discovery Phase

### Insights
- discovery/research-notes.md
- discovery/interview-notes.md
- discovery/customer-feedback.md
- discovery/analytics-findings.md
- discovery/competitor-scan.md
- discovery/insight-summary.md

### Opportunities
- discovery/opportunity-backlog.csv
- discovery/problem-statements.md
- discovery/hypotheses.md
- discovery/benefits-estimates.xlsx
- discovery/feasibility-assessment.md

### Initiatives
- discovery/initiative-brief.md
- discovery/business-case.md
- discovery/scope-definition.md
- discovery/success-metrics.md
- discovery/raid-log.csv

### Prioritisation
- discovery/prioritisation-model.md
- discovery/prioritised-roadmap.csv
- discovery/capacity-plan.md
- discovery/quarterly-plan.md
- discovery/decision-log.md

---

## 5. Delivery Phase

### Requirements Definition
- delivery/epics.csv
- delivery/user-stories.md
- delivery/story-pack.md
- delivery/acceptance-criteria.md
- delivery/process-flows.png
- delivery/traceability-matrix.xlsx

### Technical Specification
- delivery/solution-design.md
- delivery/technical-specification.md
- delivery/api-spec.yaml
- delivery/sequence-diagrams.png
- delivery/data-migration-plan.md
- delivery/security-review.md

### Implementation
- src/
- config/
- infrastructure/
- pipelines/
- pull-request-template.md
- code-review-checklist.md

### Validation & Testing
- tests/
- automated-regression-suite/
- test-cases.md
- performance-test-report.md
- uat-signoff.md
- defects.csv
- quality-dashboard.md

### Deployment
- release/release-plan.md
- release/release-notes.md
- release/runbook.md
- release/rollback-plan.md
- release/change-record.md
- release/deployment-log.md

### Feedback
- feedback/incidents.md
- feedback/root-cause-analysis.md
- feedback/post-release-review.md
- feedback/customer-feedback.md
- feedback/usage-insights.md
- feedback/improvement-backlog.csv

---

## 6. Cross-Cutting Evidence & Audit

### Logs
- logs/agent-actions.log
- logs/prompt-history.log
- logs/model-usage.log
- logs/tool-usage.log
- logs/deployment-events.log

### Decisions
- governance/decision-log.md
- governance/approval-evidence.md
- governance/exception-register.csv
- governance/risk-register.csv

### Metrics
- metrics/kpis.md
- metrics/value-realisation.md
- metrics/lead-time-dashboard.md
- metrics/quality-dashboard.md
- metrics/adoption-dashboard.md

---

## 7. Templates Library

- templates/prd-template.md
- templates/initiative-brief-template.md
- templates/user-story-template.md
- templates/adr-template.md
- templates/test-case-template.md
- templates/risk-template.md
- templates/business-case-template.md
- templates/release-template.md
- templates/postmortem-template.md
- templates/agent-spec-template.md

---

## 8. Experiments / Proof of Value

- experiments/01-backlog-acceleration/README.md
- experiments/01-backlog-acceleration/results.md

- experiments/02-code-delivery/README.md
- experiments/02-code-delivery/results.md

- experiments/03-regulatory-change/README.md
- experiments/03-regulatory-change/results.md

---

## 9. Root Files

- README.md
- CONTRIBUTING.md
- OPERATING_PRINCIPLES.md
- GLOSSARY.md
- CHANGELOG.md
- LICENSE.md