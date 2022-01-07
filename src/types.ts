export enum COMMAND {
  SCAFFOLD = "scaffold",
  STATUS = "status",
  NEW = "new",
  UP = "up",
  DOWN = "down"
}

export interface MigrationScript {
  description: string;
  up: () => Promise<unknown>;
  down: () => Promise<unknown>;
}

export interface MigrationBuilder {
  build: (name: string) => Promise<unknown>;
}

export enum MIGRATION_STATUS {
  PENDING = "〰️ PENDING",
  RUN = "✅ RUN",
  SKIPPED = "❌ SKIPPED",
  MISSING = "❌ MISSING",
}

export interface RecordedStateItem {
  name: string;
  description: string; // todo
  runAt: number;
}

export interface InferredStateItem extends RecordedStateItem {
  status: MIGRATION_STATUS;
}

export type RecordedState = RecordedStateItem[];
export type InferredState = InferredStateItem[];

export interface StateScript {
  get: () => Promise<RecordedState>;
  set: (state: RecordedState) => Promise<unknown>;
}

export type migrationStateMachine = (
  inferredState: InferredState,
  stateScript: StateScript,
  to?: string
) => Promise<void>;

export type StateModifier = (
  stateItem: RecordedStateItem,
  stateScript: StateScript
) => Promise<void>;

/** A path to a file */
export type FilePath = string;

/** A path to a folder */
export type FolderPath = string;

export interface RuntimeConfiguration {
  /** Defaults to migration/migrations/ */
  migrations: FolderPath;
  /** Defaults to migration/newMigrationBuilder  */
  newMigrationBuilder: FilePath;
  /** Defaults to migration/stateScript */
  stateScript: FilePath;
}

export type ConfigurationFile = Partial<RuntimeConfiguration>;
