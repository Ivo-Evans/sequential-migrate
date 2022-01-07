import { StateModifier, MigrationScript } from "../types";
import dynamicRequire from "./dynamicRequire";

const runMigration: StateModifier = async (stateItem, stateScript) => {
  const migrationScript: MigrationScript = dynamicRequire(stateItem.name);
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
