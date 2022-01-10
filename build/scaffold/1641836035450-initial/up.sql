BEGIN;

CREATE TABLE IF NOT EXISTS migrations (
  name TEXT PRIMARY KEY,
  description TEXT,
  run_at BIGINT
);


COMMIT;