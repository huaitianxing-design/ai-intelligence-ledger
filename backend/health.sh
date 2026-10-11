#!/usr/bin/env sh
set -eu
curl -fsS -o /dev/null --max-time 3 "http://${APP_HOST:-127.0.0.1}:${APP_PORT:-3000}/health"
