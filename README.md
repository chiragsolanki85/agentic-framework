# Crosstide Agentic Blueprint

Enterprise-ready, tool-agnostic blueprint for running product delivery through a full Agentic SDLC lifecycle.

## Two-folder model

| Folder | Role |
|--------|------|
| [`framework/`](framework/) | Reusable agents, prompts, standards, templates, and tooling |
| [`context/`](context/) | Project foundations, lifecycle artefacts, logs, and governance records |

**Framework = how to work. Context = what you're building.**

## Lifecycle stages

1. Foundations
2. Requirements Definition
3. Technical Specification
4. Implementation
5. Validation and Testing
6. Deployment
7. Customer Feedback
8. Context Lifecycle

## Quick start

1. **Clone** this repository for a new product
2. **Reset context** (optional on fresh clone): `./framework/scripts/init-context.sh`
3. **Complete foundations**: run [`framework/prompts/01-foundations-facilitator.md`](framework/prompts/01-foundations-facilitator.md)
4. **Bootstrap each session**: run [`framework/prompts/00-session-bootstrap.md`](framework/prompts/00-session-bootstrap.md)
5. **Deliver features**: follow [`framework/core/starter/HAPPY_PATH_PROMPT_SEQUENCE.md`](framework/core/starter/HAPPY_PATH_PROMPT_SEQUENCE.md)
6. **Log gate decisions**: run [`framework/prompts/09-handoff-log-entry.md`](framework/prompts/09-handoff-log-entry.md) after each human gate

When stuck, run [`framework/prompts/10-orchestrator-whats-next.md`](framework/prompts/10-orchestrator-whats-next.md).

## Cursor / IDE

- `.cursor/rules/crosstide-blueprint.mdc` loads automatically in Cursor
- `@framework/prompts/` and `@context/00_foundations/` for file references
- See [`framework/README.md`](framework/README.md) for full IDE setup

## Adoption tiers

- `framework/core/` — required baseline
- `framework/extended/` + `context/extended/` — governance controls and project records
- `framework/optional/` + `context/optional/` — context-specific extras

See [`framework/ARTEFACT_TIER_MATRIX.md`](framework/ARTEFACT_TIER_MATRIX.md).

## Worked example

End-to-end sample feature: [`context/examples/golden-path/`](context/examples/golden-path/)

## Naming conventions

- Feature ID: `FEAT-<EPIC>-<NNN>` (example: `FEAT-AUTH-001`)
- Requirement file: `FEATURE-<EPIC>-<NNN>.md`
- Spec file: `SPEC-<FEATURE-ID>.md`
- Handoff ID: `HO-<YYYYMMDD>-<NNN>`

## Mandatory principles

- Human accountability at every lifecycle gate
- No build without approved context
- No deploy without approved validation evidence
- Feature is complete only when code and context are complete
- End-to-end traceability is mandatory
