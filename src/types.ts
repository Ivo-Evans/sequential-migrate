export interface Migration {
  description: string;
  up: () => Promise<unknown>;
  down: () => Promise<unknown>;
}

export interface MigrationBuilder {
  build: (name: string) => Promise<unknown>;
}

export enum MIGRATION_STATUS {
  PENDING = 'Pending',
  RAN = 'Ran',
  SKIPPED = 'Present in the migrations but missing in the state - was this added in another branch, but not run in this branch?',
  MISSING = 'Missing from the migrations but present in the state - was this run in another branch, but not added in this branch?',
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