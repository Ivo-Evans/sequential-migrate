import { RuntimeConfiguration } from ".";
import { RecordedStateItem } from "./recordedState.types";
import { StateScript } from "./stateScript.types";

export type StateModifier = (
  config: RuntimeConfiguration,
  stateItem: RecordedStateItem,
  stateScript: StateScript
) => Promise<void>;


