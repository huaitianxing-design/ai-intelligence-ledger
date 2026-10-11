"""Idempotent database initialization for broker report uploads."""
import os
import psycopg
from dotenv import load_dotenv

load_dotenv()


def db_config() -> dict[str, str]:
    required = ("LEDGER_DB_HOST", "LEDGER_DB_NAME", "LEDGER_DB_USER", "LEDGER_DB_PASSWORD")
    missing = [key for key in required if not os.getenv(key)]
    if missing:
        raise RuntimeError("Missing database environment variables: " + ", ".join(missing))
    return {
        "host": os.environ["LEDGER_DB_HOST"],
        "port": os.getenv("LEDGER_DB_PORT", "5432"),
        "dbname": os.environ["LEDGER_DB_NAME"],
        "user": os.environ["LEDGER_DB_USER"],
        "password": os.environ["LEDGER_DB_PASSWORD"],
    }


SCHEMA = """
CREATE TABLE IF NOT EXISTS app_users (
    sso_id      TEXT PRIMARY KEY,
    email       TEXT,
    username    TEXT,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS broker_reports (
    id           BIGSERIAL PRIMARY KEY,
    owner_id     TEXT NOT NULL REFERENCES app_users(sso_id),
    firm         TEXT NOT NULL,
    company      TEXT NOT NULL,
    stance       TEXT NOT NULL,
    title        TEXT NOT NULL,
    report_date  DATE,
    source_note  TEXT,
    filename     TEXT NOT NULL,
    content_type TEXT NOT NULL,
    file_oid     OID NOT NULL,
    file_size    BIGINT NOT NULL,
    status       TEXT NOT NULL DEFAULT '待核验',
    created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
ALTER TABLE broker_reports ADD COLUMN IF NOT EXISTS report_type TEXT NOT NULL DEFAULT 'company';
ALTER TABLE broker_reports ADD COLUMN IF NOT EXISTS industry TEXT;
ALTER TABLE broker_reports ADD COLUMN IF NOT EXISTS covered_companies JSONB NOT NULL DEFAULT '[]'::jsonb;
ALTER TABLE broker_reports ADD COLUMN IF NOT EXISTS analysis_confidence DOUBLE PRECISION;

CREATE INDEX IF NOT EXISTS idx_broker_reports_owner_created
    ON broker_reports (owner_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_broker_reports_company
    ON broker_reports (owner_id, company);
"""


def main() -> None:
    p = db_config()
    with psycopg.connect(**p) as conn:
        conn.execute(SCHEMA)
        conn.commit()
    print("[init_db] done")


if __name__ == "__main__":
    main()
