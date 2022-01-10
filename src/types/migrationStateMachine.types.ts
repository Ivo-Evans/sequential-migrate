import { InferredState } from "./inferredState.types";
import { StateScript } from "./stateScript.types";


export type MigrationStateMachine = (
  inferredState: InferredState,
  stateScript: StateScript,
  to?: string
) => Promise<void>;