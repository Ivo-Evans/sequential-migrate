export interface Migration {
  description: string;
  up: () => Promise<unknown>;
  down: () => Promise<unknown>;
}

export interface MigrationBuilder {
  build: (name: string) => Promise<unknown>;
}

export interface StateItem {
  name: string;
  description: string;
  run_at?: number;
}

export type State = StateItem[]

export interface StateInterface {
  get: () => Promise<State>;
  set: (stateItem: StateItem) => Promise<unknown>;
}