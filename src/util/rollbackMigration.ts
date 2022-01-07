import { StateModifier } from "../types";
import dynamicRequire from "./dynamicRequire";

const rollbackMigration: StateModifier = async (stateItem, stateInterface) => {
  const migrationScript = dynamicRequire(stateItem.name);
  await migrationScript.up();
  const state = await stateInterface.get();
  const newState = state.filter(({ name }) => name !== stateItem.name);
  await stateInterface.set(newState);
};

export default rollbackMigration;
