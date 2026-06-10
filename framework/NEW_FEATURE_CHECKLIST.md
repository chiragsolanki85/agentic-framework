# New Feature Checklist

Use this checklist for each major feature.

## 1) Requirements

- [ ] Create `context/01_requirements/features/FEATURE-<EPIC>-<NNN>.md` from template.
- [ ] Ensure BDD scenarios are explicit and testable.
- [ ] Complete refined feature ready checklist.
- [ ] Human gate: Product + Design + Engineering sign-off.

## 2) Technical specification

- [ ] Create `context/02_specs/SPEC-<FEATURE-ID>.md`.
- [ ] Include path-level implementation plan.
- [ ] Include contract changes, risks, and alternatives.
- [ ] Include draft acceptance tests.
- [ ] Human gate: Engineering Lead approval.

## 3) Implementation

- [ ] Create/update `context/03_implementation/IMPLEMENTATION-<FEATURE-ID>.md`.
- [ ] Execute tasks in atomic commits.
- [ ] Validate lint/tests/build checks.
- [ ] Create PR with traceability links.
- [ ] Human gate: PR review + merge approval.

## 4) Validation and testing

- [ ] Create `context/04_validation/plans/VALIDATION-PLAN-<FEATURE-ID>.md`.
- [ ] Create `context/04_validation/reports/VALIDATION-REPORT-<FEATURE-ID>.md`.
- [ ] Cover critical, regression, and edge-case scenarios.
- [ ] Human gate: suite approval before deployment.

## 5) Deployment

- [ ] Create `context/05_deployment/readiness/DEPLOY-READINESS-<FEATURE-ID>.md`.
- [ ] Confirm rollout strategy and rollback triggers.
- [ ] Create `context/05_deployment/reports/DEPLOY-REPORT-<FEATURE-ID>.md`.
- [ ] Human gate: release owner go/no-go and deploy verification.

## 6) Feedback and outcomes

- [ ] Create `context/06_feedback/synthesis/FEEDBACK-SYNTHESIS-<FEATURE-ID>.md`.
- [ ] Create `context/06_feedback/outcome-reviews/OUTCOME-REVIEW-<FEATURE-ID>.md`.
- [ ] Decide close/reopen/follow-on initiative with Product Lead.

## 7) Context completion

- [ ] Update relevant context artefacts (architecture, contracts, standards).
- [ ] Create context diff and consistency evidence in `context/07_context_lifecycle/`.
- [ ] Record context-complete verification in `context/logs/context/context-lifecycle-log.md` (or equivalent closure log).
- [ ] Mark feature done only after code complete + context complete.
