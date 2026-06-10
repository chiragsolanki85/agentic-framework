Run a v2 gate audit for FEAT-<EPIC>-<NNN>.

Verify all stage evidence exists and is approved:
- context/04_validation/*
- context/05_deployment/*
- context/06_feedback/*
- context/07_context_lifecycle/*
- framework/standards/v2-lifecycle-governance.md

Return:
- PASS/FAIL by stage gate
- missing evidence
- blocking actions before closure
