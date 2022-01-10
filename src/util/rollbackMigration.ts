import { StateModifier } from "../types";
import dynamicRequire from "./dynamicRequire";

const rollbackMigration: StateModifier = async (
  config,
  stateItem,
  stateScript
) => {
  const migrationScript = await dynamicRequire(
    config.migrations,
    stateItem.name
    );
  await migrationScript.down();
  await stateScript.remove(stateItem);
};

export default rollbackMigration;
