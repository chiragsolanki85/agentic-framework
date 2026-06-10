#!/usr/bin/env python3
"""One-time migration: update repo paths to framework/ and context/ prefixes."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

# Order matters: more specific patterns first.
REPLACEMENTS: list[tuple[str, str]] = [
    # Already migrated examples
    ("examples/golden-path", "context/examples/golden-path"),
    # Framework extended (before generic extended/)
    ("extended/controls", "framework/extended/controls"),
    ("extended/templates", "framework/extended/templates"),
    # Context extended
    ("extended/adr", "context/extended/adr"),
    ("extended/governance", "context/extended/governance"),
    ("extended/delivery", "context/extended/delivery"),
    ("extended/release", "context/extended/release"),
    ("extended/feedback", "context/extended/feedback"),
    # Framework optional methodology
    ("optional/governance", "framework/optional/governance"),
    # Context optional data
    ("optional/product", "context/optional/product"),
    ("optional/data", "context/optional/data"),
    ("optional/metrics", "context/optional/metrics"),
    ("optional/experiments", "context/optional/experiments"),
    # Framework core assets
    ("agents/", "framework/agents/"),
    ("prompts/", "framework/prompts/"),
    ("standards/", "framework/standards/"),
    ("skills/", "framework/skills/"),
    ("core/", "framework/core/"),
    # Templates last among framework (after extended/templates)
    ("templates/", "framework/templates/"),
    # Context lifecycle stages
    ("00_foundations", "context/00_foundations"),
    ("01_requirements", "context/01_requirements"),
    ("02_specs", "context/02_specs"),
    ("03_implementation", "context/03_implementation"),
    ("04_validation", "context/04_validation"),
    ("05_deployment", "context/05_deployment"),
    ("06_feedback", "context/06_feedback"),
    ("07_context_lifecycle", "context/07_context_lifecycle"),
    # Context logs (specific paths to avoid context/logs/context issues)
    ("logs/handoffs", "context/logs/handoffs"),
    ("logs/decisions", "context/logs/decisions"),
    ("logs/context", "context/logs/context"),
]

SKIP_DIRS = {".git", "node_modules", ".next", "framework/scripts"}

EXTENSIONS = {".md", ".mdx", ".ts", ".tsx", ".mdc", ".json", ".csv", ".sh"}


def should_skip(path: Path) -> bool:
    parts = path.parts
    if any(p in SKIP_DIRS for p in parts):
        return True
    if path.name == "update-paths.py":
        return True
    return False


def update_content(text: str) -> str:
    for old, new in REPLACEMENTS:
        text = text.replace(old, new)
    # Fix double prefixes from re-application
    text = text.replace("context/context/", "context/")
    text = text.replace("framework/framework/", "framework/")
    text = text.replace("context/examples/context/examples/", "context/examples/")
    return text


def main() -> None:
    changed = 0
    for path in ROOT.rglob("*"):
        if not path.is_file() or should_skip(path):
            continue
        if path.suffix not in EXTENSIONS and path.name not in {"README", "AGENTS.md"}:
            continue
        original = path.read_text(encoding="utf-8")
        updated = update_content(original)
        if updated != original:
            path.write_text(updated, encoding="utf-8")
            changed += 1
            print(f"updated: {path.relative_to(ROOT)}")
    print(f"\nTotal files updated: {changed}")


if __name__ == "__main__":
    main()
