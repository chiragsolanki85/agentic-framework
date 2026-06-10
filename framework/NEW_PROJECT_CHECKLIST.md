# New Project Checklist

Use this checklist to bootstrap a new project using this blueprint.

## 1) Project setup

- [ ] Clone/copy this blueprint as a new repository.
- [ ] Set project slug and naming conventions in `context/00_foundations/cross-cutting/project-charter.md`.
- [ ] Confirm role owners for Product, Delivery, Engineering in `context/00_foundations/ways-of-working/roles-and-decision-rights.md`.

## 2) Foundations completion

- [ ] Complete all Product foundations in `context/00_foundations/product/`.
- [ ] Complete all Architecture foundations in `context/00_foundations/architecture/`.
- [ ] Complete all Engineering foundations in `context/00_foundations/engineering/`.
- [ ] Complete all Data foundations in `context/00_foundations/data/`.
- [ ] Complete all Ways of Working foundations in `context/00_foundations/ways-of-working/`.
- [ ] Complete cross-cutting artefacts in `context/00_foundations/cross-cutting/`.
- [ ] Verify completion using `context/00_foundations/cross-cutting/foundations-checklist.md`.

## 3) Foundation gate

- [ ] Run a three-amigos review (Product, Engineering, Delivery).
- [ ] Capture open risks/assumptions in `context/logs/decisions/decision-log.md`.
- [ ] Record handoff to requirements in `context/logs/handoffs/30_handoffs.md`.
- [ ] Mark gate as approved in `context/logs/handoffs/30_handoffs.md`.

## 4) Ready for first feature

- [ ] Create first feature requirement using `framework/templates/features/FEATURE-TEMPLATE.md`.
- [ ] Confirm traceability ID exists across requirement/spec/implementation artefacts.
