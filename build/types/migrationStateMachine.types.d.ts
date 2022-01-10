import { RuntimeConfiguration } from ".";
import { InferredState } from "./inferredState.types";
import { StateScript } from "./stateScript.types";
export declare type MigrationStateMachine = (config: RuntimeConfiguration, inferredState: InferredState, stateScript: StateScript, to?: string) => Promise<void>;
