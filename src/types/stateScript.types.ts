import { RecordedState } from "./recordedState.types";

/**
 * The functions that the sequential-migrate CLI use to understand and set the migrations that have been applied. You should write these, so that you can save the migration state wherever you like.
 */
export interface StateScript {
  /**
   * Will be called with `await` by the sequential-migrate CLI. Returns the saved state.
   */
  get: () => Promise<RecordedState>;
  /**
   * Will be called with `await` by the sequential-migrate CLI, and given the new state.
   */
  set: (state: RecordedState) => Promise<unknown>;
}