/**
 * This is a working example for Postgres, but as long as your code implements the right interface, you can do whatever you like. You can find the full documentation in the docs.
 */

const db = require("./connection");

// In this example, we check if the table exists because our first migration creates the table. If we migrate all the way down, the `get` and `delete` functions should understand what's going on.
const doesTableExist = () =>
  db
    .query(
      `SELECT 1 AS "column" FROM information_schema.tables WHERE table_name = 'migrations'`
    )
    .then((res) => !!res.rows.length);

// this function shows state to the sequential-migrate cli
const get = async () => {
  if (!(await doesTableExist())) {
    return [];
  }

  const stateRaw = await db.query("TABLE public.migrations");
  return stateRaw.rows.map((state) => ({
    name: state.name,
    description: state.description,
    runAt: state.run_at,
  }));
};

// the sequential-migrate CLI calls this when it wants you to record a successful migration
const add = async (stateItem) => {
  const query =
    "INSERT INTO public.migrations (name, description, run_at) VALUES ($1, $2, $3)";
  await db.query(query, [
    stateItem.name,
    stateItem.description,
    stateItem.runAt,
  ]);
};

// the sequential-migrate CLI calls this when it wants you to delete a migration from your store following a successful rollback
const remove = async (stateItem) => {
  if (!(await doesTableExist())) {
    console.log(
      `\nNot removing ${stateItem.name} from the store because the table does not exist...`
    );
    return;
  }
  const query = "DELETE FROM public.migrations WHERE name = $1";
  await db.query(query, [stateItem.name]);
};

module.exports = { get, add, remove };
