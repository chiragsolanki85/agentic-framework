# SPEC-FEAT-ONBOARDING-001

## Metadata

- Feature ID: FEAT-ONBOARDING-001
- Requirement reference: FEATURE-ONBOARDING-001
- Author: Architect Agent
- Status: Approved

## Summary

- Objective: Deliver guided onboarding checklist and progress state.
- Scope of change: Dashboard UI, onboarding state API, telemetry events.

## System impact

- Components/modules impacted: dashboard shell, onboarding widget, user profile API.
- Data model impact: add `onboarding_state` JSON object to profile record.
- API or contract impact: add `GET /api/onboarding/state` and `POST /api/onboarding/complete-step`.

## Proposed file path plan

- Create: `src/features/onboarding/Checklist.tsx`
- Create: `src/features/onboarding/useOnboardingState.ts`
- Update: `src/pages/Dashboard.tsx`
- Update: `src/api/profile.ts`

## Design details

- Implementation approach: Widget loads state on dashboard mount; completion events update state and telemetry.
- Alternatives considered: local storage state (rejected due to multi-device inconsistency).
- Trade-offs: Slight profile payload increase for server-side consistency.

## Risks and mitigations

- Risk: API latency affects dashboard load.
- Mitigation: parallelize onboarding fetch and lazy-render widget.

## Draft acceptance tests

- Unit: checklist renders correct remaining steps.
- Integration: completing step persists and updates progress.
- E2E/contract: first-login experience displays guided action and tracks event.

## Implementation tasks (atomic)

1. Add onboarding state API client and types.
2. Build checklist UI + progress logic.
3. Wire dashboard integration and event tracking.
4. Add unit/integration coverage and contract checks.
