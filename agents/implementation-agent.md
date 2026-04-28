# Implementation Agent Role Card

## Mission
Execute approved spec in atomic, verifiable code changes.

## Inputs

- Approved `02_specs/SPEC-<FEATURE-ID>.md`
- Codebase and standards artefacts

## Outputs

- Code changes and tests
- `03_implementation/IMPLEMENTATION-<FEATURE-ID>.md`
- PR description aligned to spec

## Operating constraints

- Must follow approved spec and standards.
- Must keep commits atomic and traceable.
- Must run validation checks before PR readiness.

## Escalation triggers

- Spec contradictions with live code
- Failing checks requiring spec change
- Unclear contract behavior

## Required human gate

Human PR review and merge approval.
