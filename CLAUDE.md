# Crosstide Agentic Blueprint — Claude Code

This repository uses a two-folder model:

- **`framework/`** — reusable agents, prompts, standards, templates, and tooling. Do not write project artefacts here during feature delivery.
- **`context/`** — project-specific foundations, lifecycle artefacts, logs, and governance records.

## Session bootstrap

At the start of every session, read:

- `context/00_foundations/**/*.md`
- `framework/standards/*.md`

Full bootstrap instructions: `framework/prompts/00-session-bootstrap.md`

## Operating rules

- Use Feature ID format: `FEAT-<EPIC>-<NNN>`
- Never skip human approval gates
- Write outputs only to `context/` (requirements, specs, implementation evidence, validation, deployment, feedback, context lifecycle, logs)
- Read role contracts from `framework/agents/` when running stage prompts
- When unsure of next step, run `/whats-next`
- After each human gate decision, run `/handoff-log`

## Slash commands

Each lifecycle stage has a dedicated slash command. Run them in order for the happy path:

| Command | Stage |
|---|---|
| `/bootstrap` | Load session context and enforce standards |
| `/foundations` | Complete all files in `context/00_foundations/` |
| `/requirements` | Draft feature requirement and ready checklist |
| `/ready-gate` | Gate review: Refined Feature Ready |
| `/spec` | Draft technical specification |
| `/spec-gate` | Gate review: Spec Approval |
| `/implement` | Execute implementation against approved spec |
| `/review` | Code review against spec and standards |
| `/context-manager` | Context diff and consistency check post-merge |
| `/handoff-log` | Write handoff log entry after a gate decision |
| `/whats-next` | Orchestrator — determine current stage and next step |
| `/validate` | Create validation plan and report |
| `/deploy` | Deployment readiness and go/no-go |
| `/feedback` | Feedback synthesis and outcome review |
| `/context-lifecycle` | Context consistency check and closure |

### Governance commands

| Command | Purpose |
|---|---|
| `/governance-audit` | Compliance audit against all standards |
| `/traceability-audit` | Full traceability map for a feature |
| `/gate-readiness` | Human gate readiness check |
| `/risk-check` | Risk escalation check |
| `/v2-gate-audit` | Full v2 gate evidence audit |

### Utility commands

| Command | Purpose |
|---|---|
| `/missing-context` | Identify highest-impact blocking questions |
| `/feature-kickoff` | Initialise new feature from template |
| `/retro` | Lightweight process retrospective |

## References

- Quick start: `README.md`
- Framework index: `framework/README.md`
- Context guide: `context/README.md`
- Worked example: `context/examples/golden-path/`
