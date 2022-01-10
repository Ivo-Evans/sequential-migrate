/** A path to a file */
export type FilePath = string;

/** A path to a folder */
export type FolderPath = string;


export interface RuntimeConfiguration {
  /** 
   * The place migration files are stored. Migrations can be either a `.js` file, or a folder containing an `index.js` file. 
   * 
   * Defaults to migration/migrations/ */
  migrations: FolderPath;
  /** 
   * The path that the CLI uses to find a {@link MigrationBuilder}
   * Defaults to migration/newMigrationBuilder  */
  newMigrationBuilder: FilePath;
  /** 
   * 
   * The path that the CLI uses to find a {@link StateScript}
   */
  stateScript: FilePath;
}

export type ConfigurationFile = Partial<RuntimeConfiguration>;
