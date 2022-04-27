import { StateModifier } from "../types";
import dynamicRequire from "./dynamicRequire";

const rollbackMigration: StateModifier = async (
  config,
  stateItem,
  stateScript,
  lastItem
) => {
  const migrationScript = await dynamicRequire(
    config.migrations,
    stateItem.name
  );
  const res = await migrationScript.down(lastItem);
  await stateScript.remove(stateItem);
  return res;
};

export default rollbackMigration;
