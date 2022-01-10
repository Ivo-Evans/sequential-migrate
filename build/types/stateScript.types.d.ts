import { RecordedStateItem } from ".";
import { RecordedState } from "./recordedState.types";
/**
 * The functions that the sequential-migrate CLI use to understand and set the migrations that have been applied. You should write these, so that you can save the migration state wherever you like.
 */
export interface StateScript {
    /**
     * Returns the saved state.
     */
    get: () => Promise<RecordedState>;
    /**
     * Will be called after a migration takes place with information about the added migration. In practice this is a `push` operation, but you do not need to manage stack logic or ordering.
     */
    add: (state: RecordedStateItem) => Promise<unknown>;
    /**
     * Will be called after a rollback takes place with information about the removed migration. In practice this is a `pop` operation, but you do not need to manage stack logic or ordering.
     */
    remove: (state: RecordedStateItem) => Promise<unknown>;
}
