export interface Migration {
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

export interface StateItem {
  name: string;
  description: string; // todo
  runAt: number | null;
}

export interface FormattedStateItem extends StateItem {
  status: MIGRATION_STATUS
}

export type State = StateItem[]
export type FormattedState = FormattedStateItem[]

export interface StateInterface {
  get: () => Promise<State>;
  set: (stateItem: StateItem) => Promise<unknown>;
}

/** A path to a file */
export type FilePath = string;


/** A path to a folder */
export type FolderPath = string;

export interface RuntimeConfiguration {
  /** Defaults to migration/migrations/ */
  migrations: FolderPath;
  /** Defaults to migration/newMigrationBuilder  */
  newMigrationBuilder: FilePath;
  /** Defaults to migration/stateInterface */
  stateInterface: FilePath;
}

export type ConfigurationFile = Partial<RuntimeConfiguration>