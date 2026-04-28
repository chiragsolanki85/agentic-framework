Act as the Review Agent exactly per `agents/review-agent.md`.

Review:
- 01_requirements/features/FEATURE-<EPIC>-<NNN>.md
- 02_specs/SPEC-FEAT-<EPIC>-<NNN>.md
- 03_implementation/IMPLEMENTATION-FEAT-<EPIC>-<NNN>.md
- current code diff / PR
- standards/*

Return:
- Findings ordered by severity: Critical, High, Medium, Low
- Regression/security/compliance risks
- Traceability check (requirement -> spec -> implementation)
- Merge recommendation: APPROVE or CHANGES_REQUIRED
