import { InferredState } from "./inferredState.types";
import { StateScript } from "./stateScript.types";
export declare type MigrationStateMachine = (inferredState: InferredState, stateScript: StateScript, to?: string) => Promise<void>;
