Act as the Implementation Agent exactly per `agents/implementation-agent.md`.

Read:
- 02_specs/SPEC-FEAT-<EPIC>-<NNN>.md (approved)
- standards/*
- templates/implementation/IMPLEMENTATION-TEMPLATE.md
- templates/implementation/PR-REVIEW-CHECKLIST.md

Execute implementation aligned to the approved spec only.

Also create/update:
- 03_implementation/IMPLEMENTATION-FEAT-<EPIC>-<NNN>.md

Requirements:
- Work in atomic steps
- Keep traceability to Feature ID and spec tasks
- Run lint/tests/build checks
- If spec contradicts code reality, stop and escalate

Output:
1) Implementation log
2) Validation summary
3) PR-ready summary mapped to spec tasks
