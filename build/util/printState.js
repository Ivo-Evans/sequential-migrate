"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const printState = (formattedState) => {
    if (!formattedState.length) {
        console.log("No migrations recorded");
        return;
    }
    console.table(formattedState);
    const isThereAMissingMigration = formattedState.some(state => state.status === types_1.MIGRATION_STATUS.MISSING);
    if (isThereAMissingMigration) {
        console.log(`
  
  
    ${types_1.MIGRATION_STATUS.MISSING}: 
    
    Explanation:
    This migration was reported by your state interface, but it doesn't exist in your migrations folder.
  
    Possible scenario:
    You ran a migration which doesn't exist in this branch, and your state interface does not store state in source control.
  
    Suggested fix:
    Checkout the branch you ran this migration in and run its 'down' migration, then checkout this branch and run the up migration to the most recent state.
    `);
    }
    const isThereASkippedMigration = formattedState.some(state => state.status === types_1.MIGRATION_STATUS.SKIPPED);
    if (isThereASkippedMigration) {
        console.log(`
  
  
    ${types_1.MIGRATION_STATUS.SKIPPED}: 
    
    Explanation:
    This migration exists in your migrations folder, but your state interface reports that a migration that comes after this one has been run and this one has not been run.
  
    Possible scenario:
    You are not keeping migration state in source control (for instance, you keep it in the database). You and your team mate created migrations in different branches, and you have merged your team-mate's branch into yours without reverting the migration state to the last shared point.
  
    Suggested fix:
    Rollback by running the down command to the skipped state, and then run the up command to the most recent migration.
    `);
    }
};
exports.default = printState;
