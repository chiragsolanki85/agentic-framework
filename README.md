# Crosstide Agentic Blueprint

Enterprise-ready, tool-agnostic blueprint for running product delivery through a full Agentic SDLC lifecycle:

1. Foundations
2. Requirements Definition
3. Technical Specification
4. Implementation
5. Validation and Testing
6. Deployment
7. Customer Feedback
8. Context Lifecycle

## Adoption model: Core / Extended / Optional

To avoid overwhelming teams, this repository now uses tiered adoption:

- `core/` -> required baseline for production delivery
- `extended/` -> recommended controls for stronger governance/audit
- `optional/` -> context-specific assets (hidden unless needed)

See `ARTEFACT_TIER_MATRIX.md` for full classification.

## First product starter guide

### Step 1: initialize the project context

1. Duplicate this repository for a new product.
2. Complete all `00_foundations/**/*.md`.
3. Confirm readiness using `00_foundations/cross-cutting/foundations-checklist.md`.
4. Log foundation approval in `logs/handoffs/30_handoffs.md`.

### Step 2: run your first feature end-to-end

For `FEAT-<EPIC>-<NNN>`, run prompts in this order:

1. `prompts/00-session-bootstrap.md`
2. `prompts/02-requirements-agent.md`
3. `prompts/03-refined-ready-gate-review.md`
4. `prompts/04-spec-agent.md`
5. `prompts/05-spec-approval-gate.md`
6. `prompts/06-implementation-agent.md`
7. `prompts/07-review-agent.md`
8. `prompts/11-validation-agent.md`
9. `prompts/12-deployment-agent.md`
10. `prompts/13-feedback-agent.md`
11. `prompts/14-context-lifecycle-agent.md`
12. `prompts/09-handoff-log-entry.md` after each gate
13. `prompts/10-orchestrator-whats-next.md` when unsure

### Step 3: apply enterprise gates

Minimum required approvals:

- Refined feature ready
- Spec approval
- PR/merge approval
- Validation suite approval
- Deploy go/no-go and deploy verification
- Outcome triage (close/reopen/follow-on)
- Context completeness verification

## Repository map

- `00_foundations/` -> five foundation domains + cross-cutting controls
- `01_requirements/` -> BDD requirements and refinement gates
- `02_specs/` -> technical specifications
- `03_implementation/` -> implementation evidence and PR readiness
- `04_validation/` -> validation plans and reports
- `05_deployment/` -> readiness and deployment reports
- `06_feedback/` -> feedback synthesis and outcome reviews
- `07_context_lifecycle/` -> context diff and consistency checks
- `standards/` -> baseline governance and guardrails
- `prompts/` -> lifecycle and governance prompt library
- `templates/` -> artefact templates
- `logs/` -> handoffs, decisions, and context closure evidence
- `core/`, `extended/`, `optional/` -> tiered adoption packs

## What each tier contains

- `core/`: essential starter flow and production-safe minimum
- `extended/`: ADRs, risk/exception registers, controls, release runbooks, traceability matrix, post-release reviews
- `optional/`: experiments, advanced dashboards, portfolio/data extras

## Naming conventions

- Feature ID: `FEAT-<EPIC>-<NNN>` (example: `FEAT-AUTH-001`)
- Requirement file: `FEATURE-<EPIC>-<NNN>.md`
- Spec file: `SPEC-<FEATURE-ID>.md`
- ADR file: `ADR-<NNN>-<slug>.md`
- Handoff ID: `HO-<YYYYMMDD>-<NN>`

## Mandatory principles

- Human accountability at every lifecycle gate
- No build without approved context
- No deploy without approved validation evidence
- Feature is complete only when code and context are complete
- End-to-end traceability is mandatory
