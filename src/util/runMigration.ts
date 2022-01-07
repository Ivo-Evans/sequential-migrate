import { StateModifier } from "../types";
import dynamicRequire from "./dynamicRequire";

const runMigration: StateModifier = async (stateItem, stateInterface) => {
  const migrationScript = dynamicRequire(stateItem.name);
  await migrationScript.up();
  const state = await stateInterface.get();
  const newState = [
    ...state,
    {
      name: stateItem.name,
      description: stateItem.description,
      runAt: Date.now(),
    },
  ];
  await stateInterface.set(newState);
};

export default runMigration;
