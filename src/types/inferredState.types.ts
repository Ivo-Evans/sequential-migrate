import { MIGRATION_STATUS } from "./migrationStatus.types";
import { RecordedStateItem } from "./recordedState.types";

export interface InferredStateItem extends RecordedStateItem {
  status: MIGRATION_STATUS;
}

export type InferredState = InferredStateItem[];