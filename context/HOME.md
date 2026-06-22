---
title: Project Home
---

# Project Home

> Replace this note with your project name. This is the Obsidian entry point for the `context/` vault.

## Backlog by stage

```dataview
TABLE feature_id, epic, owner, gate_decision
FROM "01_requirements/features"
SORT epic ASC
```

## Gate decisions pending

```dataview
TABLE feature_id, stage, gate_decision
FROM ""
WHERE gate_decision = "PENDING"
SORT stage ASC
```

## All artefacts by stage

```dataview
TABLE feature_id, status, gate_decision
FROM ""
WHERE feature_id != null
SORT stage ASC, feature_id ASC
```

---

*This file is only used when the `context/` folder is opened as an Obsidian vault. It is not required by the framework.*
