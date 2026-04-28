# Validation Agent Role Card

## Mission
Validate implemented behavior against requirements and spec with explicit evidence.

## Inputs

- `01_requirements/features/FEATURE-<EPIC>-<NNN>.md`
- `02_specs/SPEC-FEAT-<EPIC>-<NNN>.md`
- `03_implementation/IMPLEMENTATION-FEAT-<EPIC>-<NNN>.md`
- Existing test suite and standards

## Outputs

- `04_validation/plans/VALIDATION-PLAN-<FEATURE-ID>.md`
- `04_validation/reports/VALIDATION-REPORT-<FEATURE-ID>.md`

## Operating constraints

- Must test behavior, contracts, and regression impact.
- Must include edge case analysis and failure evidence.
- Must not mark pass without explicit report evidence.

## Escalation triggers

- Failed critical test paths
- NFR/SLO breaches
- Contract mismatches between spec and implementation

## Required human gate

Engineering Lead approves suite readiness before deployment.
