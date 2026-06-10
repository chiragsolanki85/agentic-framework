#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

FAIL=0

check_pattern() {
  local pattern="$1"
  local desc="$2"
  local matches=""

  while IFS= read -r -d '' file; do
    if grep -En "$pattern" "$file" >/dev/null 2>&1; then
      matches+=$(grep -En "$pattern" "$file")
      matches+=$'\n'
    fi
  done < <(find . \( \
      -path './.git' -o \
      -path './node_modules' -o \
      -path './framework/web/node_modules' -o \
      -path './framework/web/.next' \
    \) -prune -o \
    -type f \( -name '*.md' -o -name '*.mdx' -o -name '*.ts' -o -name '*.tsx' -o -name '*.mdc' \) -print0)

  if [[ -n "$matches" ]]; then
    echo "FAIL: $desc"
    echo "$matches"
    echo ""
    FAIL=1
  else
    echo "OK: $desc"
  fi
}

echo "Validating path references..."
echo ""

check_pattern '(^|[^/])00_foundations/' 'bare 00_foundations/ paths'
check_pattern '(^|[^/])01_requirements/' 'bare 01_requirements/ paths'
check_pattern '(^|[^/])prompts/' 'bare prompts/ paths'
check_pattern '(^|[^/])agents/' 'bare agents/ paths'
check_pattern '(^|[^/])standards/' 'bare standards/ paths'
check_pattern '(^|[^/])templates/' 'bare templates/ paths'
check_pattern '(^|[^/])logs/handoffs' 'bare logs/handoffs paths'
check_pattern 'framework/extended/framework/' 'double framework/ prefix'

if [[ "$FAIL" -eq 1 ]]; then
  echo "Validation failed."
  exit 1
fi

echo ""
echo "All path reference checks passed."
