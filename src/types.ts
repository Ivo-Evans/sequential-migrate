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
  runAt: number;
}

export interface FormattedStateItem extends StateItem {
  status: MIGRATION_STATUS;
}

export type State = StateItem[];
export type FormattedState = FormattedStateItem[];

export interface StateInterface {
  get: () => Promise<State>;
  set: (state: State) => Promise<unknown>;
}

export type StateModificationIterator = (
  FormattedState: FormattedState,
  stateInterface: StateInterface
) => Promise<void>;

export type StateModifier = (
  stateItem: StateItem,
  stateInterface: StateInterface
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
  /** Defaults to migration/stateInterface */
  stateInterface: FilePath;
}

export type ConfigurationFile = Partial<RuntimeConfiguration>;
