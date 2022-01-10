"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const help = () => {
    console.log("\n\nSequential Migrate");
    console.log("\nCommands:");
    const commands = Object.values(types_1.COMMAND);
    commands.forEach((command) => {
        console.log(`sequential-migrate ${command}`);
    });
    console.log("\nPlease see the package documentation for detailed information about how to use these commands");
};
exports.default = help;
