# Artefact Tier Matrix

This matrix classifies artefacts as **Core**, **Extended**, or **Optional** for enterprise adoption.

## Core (Required)

- `00_foundations/**/*.md`
- `01_requirements/**`
- `02_specs/**`
- `03_implementation/**`
- `04_validation/**`
- `05_deployment/**`
- `06_feedback/**`
- `07_context_lifecycle/**`
- `standards/accountability-matrix.md`
- `standards/artefact-governance.md`
- `standards/traceability-policy.md`
- `standards/security-and-nfr.md`
- `standards/coding-standards.md`
- `standards/v2-lifecycle-governance.md`
- `prompts/00-session-bootstrap.md`
- `prompts/01-foundations-facilitator.md`
- `prompts/02-requirements-agent.md`
- `prompts/03-refined-ready-gate-review.md`
- `prompts/04-spec-agent.md`
- `prompts/05-spec-approval-gate.md`
- `prompts/06-implementation-agent.md`
- `prompts/07-review-agent.md`
- `prompts/09-handoff-log-entry.md`
- `prompts/10-orchestrator-whats-next.md`
- `prompts/11-validation-agent.md`
- `prompts/12-deployment-agent.md`
- `prompts/13-feedback-agent.md`
- `prompts/14-context-lifecycle-agent.md`
- `logs/handoffs/30_handoffs.md`
- `logs/decisions/decision-log.md`
- `logs/context/context-lifecycle-log.md`

## Extended (Recommended)

- `extended/adr/**`
- `extended/governance/**`
- `extended/controls/**`
- `extended/release/**`
- `extended/delivery/traceability-matrix.md`
- `extended/feedback/**`
- `extended/templates/**`
- `prompts/governance/G1-governance-compliance-audit.md`
- `prompts/governance/G2-traceability-audit.md`
- `prompts/governance/G3-human-gate-readiness.md`
- `prompts/governance/G4-risk-escalation-check.md`
- `prompts/governance/G5-v2-gate-audit.md`

## Optional (Context-dependent)

- `optional/experiments/**`
- `optional/metrics/**`
- `optional/governance/**`
- `optional/product/**`
- `optional/data/**`
- `prompts/utility/U1-missing-context-question-generator.md`
- `prompts/utility/U2-feature-kickoff-from-template.md`
- `prompts/utility/U3-retro-improvement-prompt.md`

## How to use tiers

1. Start with Core only.
2. Adopt Extended controls as delivery scale and compliance pressure grows.
3. Enable Optional artefacts only when justified by customer context.
