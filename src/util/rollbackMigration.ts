import { StateModifier, MigrationScript } from "../types";
import dynamicRequire from "./dynamicRequire";

const rollbackMigration: StateModifier = async (stateItem, stateScript) => {
  const migrationScript: MigrationScript = dynamicRequire(stateItem.name);
  await migrationScript.down();
  const state = await stateScript.get();
  const newState = state.filter(({ name }) => name !== stateItem.name);
  await stateScript.set(newState);
};

export default rollbackMigration;
