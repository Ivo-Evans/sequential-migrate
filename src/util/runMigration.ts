import { StateModifier, MigrationScript } from "../types";
import dynamicRequire from "./dynamicRequire";

const runMigration: StateModifier = async (config, stateItem, stateScript) => {
  const migrationScript: MigrationScript = await dynamicRequire(
    config.migrations,
    stateItem.name
  );
  await migrationScript.up();
  const runAt = stateItem.runAt === null ? Date.now() : stateItem.runAt;
  await stateScript.add({...stateItem, runAt});
};

export default runMigration;
