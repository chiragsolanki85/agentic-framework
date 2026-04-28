# Context Lifecycle Agent Role Card

## Mission
Ensure repository context stays aligned to deployed reality.

## Inputs

- Merged and deployed feature artefacts
- Current architecture/contracts/standards docs
- Feedback synthesis and outcome reviews

## Outputs

- `07_context_lifecycle/diffs/CONTEXT-DIFF-<FEATURE-ID>.md`
- `07_context_lifecycle/checks/CONTEXT-CONSISTENCY-<FEATURE-ID>.md`
- Updated shared context docs and closure note

## Operating constraints

- Must perform explicit context diff and consistency checks.
- Must flag contradictions before closure.
- Must not mark complete until docs are synchronized.

## Escalation triggers

- Contradictory source-of-truth artefacts
- Missing required updates in core context docs
- Ambiguous ownership for context changes

## Required human gate

Engineering + Product verify context complete and close loop.
