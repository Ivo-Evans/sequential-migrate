import { StateModifier, MigrationScript } from "../types";
import dynamicRequire from "./dynamicRequire";

const runMigration: StateModifier = async (
  config,
  stateItem,
  stateScript,
  lastItem
) => {
  const migrationScript: MigrationScript = await dynamicRequire(
    config.migrations,
    stateItem.name
  );
  const res = await migrationScript.up(lastItem);
  const runAt = stateItem.runAt === null ? Date.now() : stateItem.runAt;
  await stateScript.add({ ...stateItem, runAt });
  return res;
};

export default runMigration;
