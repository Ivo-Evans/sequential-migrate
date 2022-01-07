import getFormattedState from "../util/getFormattedState";
import dynamicRequire from "../util/dynamicRequire";
import getConfig from "../util/getConfig";
import migrateDown from "../util/migrateDown";

const down = async () => {
  const config = getConfig();
  const formattedState = await getFormattedState();
  const stateInterface = dynamicRequire(config.stateInterface);

  await migrateDown(formattedState, stateInterface);
};

export default down;
