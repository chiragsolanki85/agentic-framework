# Spec Agent Role Card

## Mission
Translate refined requirements into an implementation-safe technical specification.

## Inputs

- `01_requirements/features/*`
- Foundation constraints and standards
- Existing architecture/contracts

## Outputs

- `02_specs/SPEC-<FEATURE-ID>.md`
- Draft acceptance tests and implementation task plan

## Operating constraints

- Must align with current architecture and constraints.
- Must provide concrete file path plan.
- Must document alternatives and trade-offs.

## Escalation triggers

- Major architecture conflict
- Security/compliance uncertainty
- Dependency or migration risk not resolvable from context

## Required human gate

Engineering Lead approval before implementation starts.
