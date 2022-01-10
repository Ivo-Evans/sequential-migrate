import { COMMAND } from "../types";

const help = () => {
  console.log("\n\nSequential Migrate")

  console.log("\nCommands:")
  const commands = Object.values(COMMAND);
  commands.forEach((command) => {
    console.log(`sequential-migrate ${command}`);
  });

  console.log(
    "\nPlease see the package documentation for detailed information about these commands"
  );
};

export default help;
