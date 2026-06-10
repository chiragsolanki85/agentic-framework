# Framework

Reusable Crosstide Agentic Blueprint infrastructure. This folder is **portable and project-agnostic** — copy or submodule it unchanged across initiatives.

## Contents

| Path | Purpose |
|------|---------|
| `framework/agents/` | Agent role cards (mission, I/O, gates) |
| `framework/prompts/` | Copy-paste Cursor prompts for each lifecycle stage |
| `framework/templates/` | Blank artefact templates |
| `framework/standards/` | Cross-cutting policies all agents enforce |
| `skills/` | Optional playbooks (supplementary) |
| `core/starter/` | Quick-start and happy-path prompt sequence |
| `extended/controls/` | Operational controls |
| `extended/templates/` | Generic enterprise templates |
| `optional/governance/` | Governance methodology docs |
| `optional/experiments/` | Experiment design guides |
| `web/` | Documentation portal (Next.js) |
| `scripts/` | Context init and validation utilities |

## IDE setup

### Cursor

- Rules in `.cursor/rules/crosstide-blueprint.mdc` load automatically
- Paste prompts from `framework/prompts/` into chat, or `@`-reference them
- `@context/00_foundations/` for project context
- Start new sessions with `framework/prompts/00-session-bootstrap.md`

### VS Code and other AI IDEs

- Open the repo root so both `framework/` and `context/` are visible
- Pin `framework/prompts/00-session-bootstrap.md` for session starts
- Use `framework/prompts/10-orchestrator-whats-next.md` when stuck

## Quick start

1. Ensure `context/00_foundations/` is complete (use `framework/prompts/01-foundations-facilitator.md`)
2. Run `framework/prompts/00-session-bootstrap.md`
3. Follow `framework/core/starter/HAPPY_PATH_PROMPT_SEQUENCE.md`

## Docs portal

```bash
cd framework/web
npm install
npm run dev
```

## Scripts

```bash
./framework/scripts/init-context.sh          # Reset context/ to empty scaffold
./framework/scripts/validate-references.sh   # Check for stale path references
```

## Adoption tiers

See `ARTEFACT_TIER_MATRIX.md`, `NEW_PROJECT_CHECKLIST.md`, and `NEW_FEATURE_CHECKLIST.md`.
