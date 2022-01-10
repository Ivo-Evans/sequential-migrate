import { StateModifier, MigrationScript } from "../types";
import dynamicRequire from "./dynamicRequire";

const runMigration: StateModifier = async (config, stateItem, stateScript) => {
  const migrationScript: MigrationScript = await dynamicRequire(
    config.migrations,
    stateItem.name
  );
  await migrationScript.up();
  await stateScript.add(stateItem);
};

export default runMigration;
