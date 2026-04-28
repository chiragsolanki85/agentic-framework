Run a v2 gate audit for FEAT-<EPIC>-<NNN>.

Verify all stage evidence exists and is approved:
- 04_validation/*
- 05_deployment/*
- 06_feedback/*
- 07_context_lifecycle/*
- standards/v2-lifecycle-governance.md

Return:
- PASS/FAIL by stage gate
- missing evidence
- blocking actions before closure
