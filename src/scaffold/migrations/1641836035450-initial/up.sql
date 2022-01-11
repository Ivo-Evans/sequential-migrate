BEGIN;

CREATE TABLE IF NOT EXISTS public.migrations (
  name TEXT PRIMARY KEY,
  description TEXT,
  run_at BIGINT
);


COMMIT;