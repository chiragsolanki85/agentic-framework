# V2 Lifecycle Governance

## Validation gate policy

- Deployment is blocked until validation report is approved.
- Critical paths, regression, and NFR checks must be evidenced.

## Deployment gate policy

- Go/no-go requires readiness checklist + rollback criteria.
- Rollout must be observable with defined anomaly thresholds.

## Feedback gate policy

- Feedback review is required after defined live period.
- Outcome review must map results to target outcomes.

## Context lifecycle gate policy

- Feature closure requires code complete and context complete.
- Context diff and consistency checks are mandatory evidence.
