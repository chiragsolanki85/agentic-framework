#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
SCAFFOLD="$ROOT/framework/templates/context-scaffold"
CONTEXT="$ROOT/context"

if [[ ! -d "$SCAFFOLD" ]]; then
  echo "Error: scaffold not found at $SCAFFOLD" >&2
  exit 1
fi

echo "Resetting context/ (preserving examples/)..."

# Remove everything in context except examples
find "$CONTEXT" -mindepth 1 -maxdepth 1 ! -name 'examples' -exec rm -rf {} +

# Restore scaffold
cp -R "$SCAFFOLD/." "$CONTEXT/"

echo ""
echo "Context reset complete."
echo "Next: run framework/prompts/01-foundations-facilitator.md to populate context/00_foundations/"
