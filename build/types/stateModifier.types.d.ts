import { RecordedStateItem } from "./recordedState.types";
import { StateScript } from "./stateScript.types";
export declare type StateModifier = (stateItem: RecordedStateItem, stateScript: StateScript) => Promise<void>;
