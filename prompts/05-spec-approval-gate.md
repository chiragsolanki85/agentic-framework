Perform spec approval review.

Inputs:
- 02_specs/SPEC-FEAT-<EPIC>-<NNN>.md
- 01_requirements/features/FEATURE-<EPIC>-<NNN>.md
- standards/security-and-nfr.md
- standards/coding-standards.md
- standards/traceability-policy.md

Return:
- Decision: APPROVE_SPEC or CHANGES_REQUIRED
- Top risks (security, complexity, maintainability)
- Missing acceptance criteria or test gaps
- Required changes before implementation
