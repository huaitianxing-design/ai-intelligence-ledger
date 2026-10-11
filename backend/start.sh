#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
exec python3 -m uvicorn app:app --host "${APP_HOST:-127.0.0.1}" --port "${APP_PORT:-3000}"
