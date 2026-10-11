# Backend service

Optional FastAPI service for private broker-report PDF storage, report metadata, AI-assisted PDF analysis, and OnePage generation. It is not required to open the static dashboard.

## Requirements

- Python 3.11+
- PostgreSQL
- An Anthropic Messages API key and a supported model ID
- A trusted authentication proxy that injects a user JSON header and its HMAC signature

## Configure

Copy `.env.example` to `.env`, set all secrets locally; the Python app loads the local file if present. Never commit `.env`. Required identity headers are `X-Authenticated-User` (JSON with `userId`, optionally `username`/`email`) and `X-Identity-Signature` (hex HMAC-SHA256 of the exact header value, using `LEDGER_IDENTITY_HMAC_SECRET`). The proxy must strip any client-supplied values for both headers before setting its own.

**Security:** do not expose this service directly to the public internet. Put it behind an authentication proxy that removes client-supplied identity headers, authenticates the request, then injects the identity and signature. Use HTTPS between the proxy and service where they are not on the same host/network.

## Run

```bash
cp .env.example .env  # edit with local secrets
python3 -m pip install -r requirements.txt
./install.sh
APP_HOST=127.0.0.1 APP_PORT=3000 ./start.sh
```

Routes: `GET /health`, `GET /whoami`, `GET/POST /api/reports`, `POST /api/reports/analyze`, `POST /api/onepage/generate`, `GET /api/reports/{id}/download`, `DELETE /api/reports/{id}`. The API stores each report under its authenticated owner ID. The backend listens on `127.0.0.1` by default; if a reverse proxy requires a different bind interface, expose it only on a private network and restrict access at the firewall.

Configure the front-end `BACKEND_BASE` constant to this service's HTTPS base URL only after deploying the trusted proxy and setting `LEDGER_CORS_ORIGINS`.
