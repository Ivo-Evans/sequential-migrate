import { RuntimeConfiguration } from ".";
import { RecordedStateItem } from "./recordedState.types";
import { StateScript } from "./stateScript.types";
import { LastMigrationResult } from "./LastMigrationResult.types";

export type StateModifier = (
  config: RuntimeConfiguration,
  stateItem: RecordedStateItem,
  stateScript: StateScript,
  lastItem: LastMigrationResult
) => Promise<LastMigrationResult>;
