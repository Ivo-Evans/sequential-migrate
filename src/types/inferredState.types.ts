import { MIGRATION_STATUS } from "./migrationStatus.types";
import { RecordedStateItem } from "./recordedState.types";

/**
 * The application's view of the state of a specific migration. This extends {@link RecordedStateItem}, adding {@link MIGRATION_STATUS}.
 */
export interface InferredStateItem extends RecordedStateItem {
  status: MIGRATION_STATUS;
}

/**
 * The application's view of the state of your migrations
 */
export type InferredState = InferredStateItem[];