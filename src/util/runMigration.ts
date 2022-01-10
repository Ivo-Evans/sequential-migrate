import { StateModifier, MigrationScript } from "../types";
import dynamicRequire from "./dynamicRequire";

const runMigration: StateModifier = async (config, stateItem, stateScript) => {
  const migrationScript: MigrationScript = await dynamicRequire(
    config.migrations,
    stateItem.name
  );
  await migrationScript.up();
  const state = await stateScript.get();
  const newState = [
    ...state,
    {
      name: stateItem.name,
      description: stateItem.description,
      runAt: Date.now(),
    },
  ];
  await stateScript.set(newState);
};

export default runMigration;
