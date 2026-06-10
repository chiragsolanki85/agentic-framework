# Context

Project-specific artefacts for this initiative. **Reset or replace this folder** when starting a new product — the framework in `framework/` stays unchanged.

## What lives here

| Path | Purpose |
|------|---------|
| `context/00_foundations/` | Product, architecture, engineering, data, and ways-of-working context |
| `context/01_requirements/` … `context/07_context_lifecycle/` | Lifecycle stage artefacts per feature |
| `context/logs/` | Handoffs, decisions, and context-closure evidence |
| `extended/` | Project ADRs, risk register, traceability matrix, release records |
| `optional/` | Portfolio backlog, metrics, data dictionary, experiment results |
| `examples/golden-path/` | Worked example (`FEAT-ONBOARDING-001`) — reference only |

## New project

1. Clone the repository (or run `./framework/scripts/init-context.sh` to reset context)
2. Complete `context/00_foundations/` using `framework/prompts/01-foundations-facilitator.md`
3. Log foundation approval in `context/logs/handoffs/30_handoffs.md`

## Rules

- Do **not** put framework files (prompts, agents, standards, templates) in `context/`
- Customize role owners in `context/00_foundations/ways-of-working/roles-and-decision-rights.md`
- Keep `framework/standards/` as immutable policy; project constraints go in foundations

## Reset context

```bash
./framework/scripts/init-context.sh
```

This preserves `examples/` and restores an empty scaffold from `framework/templates/context-scaffold/`.
