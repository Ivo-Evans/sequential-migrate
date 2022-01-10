export interface RuntimeConfiguration {
  /** 
   * The place migration files are stored. Migrations can be either a `.js` file, or a folder containing an `index.js` file. 
   * 
   * Defaults to `migration/migrations/` */
  migrations: string;
  /** 
   * The path that the CLI uses to find a {@link MigrationBuilder}
   * Defaults to `migration/newMigrationBuilder`  */
  newMigrationBuilder: string;
  /** 
   * 
   * The path that the CLI uses to find a {@link StateScript}. Defaults to `migration/stateScript.js`
   */
  stateScript: string;
}

/**
 * Any of the properties from {@link RuntimeConfiguration}
 */
export type ConfigurationFile = Partial<RuntimeConfiguration>;
