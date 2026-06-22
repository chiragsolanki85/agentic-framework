Perform spec approval review.

Inputs:
- context/02_specs/SPEC-FEAT-<EPIC>-<NNN>.md
- context/01_requirements/features/FEATURE-<EPIC>-<NNN>.md
- framework/standards/security-and-nfr.md
- framework/standards/coding-standards.md
- framework/standards/traceability-policy.md

Return:
- Decision: APPROVE_SPEC or CHANGES_REQUIRED
- Top risks (security, complexity, maintainability)
- Missing acceptance criteria or test gaps
- Required changes before implementation
