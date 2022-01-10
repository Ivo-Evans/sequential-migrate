#! /usr/bin/env node

import { COMMAND } from "./types";
import scaffold from "./bin/scaffold";
import getStatus from "./bin/getStatus";
import newMigration from "./bin/newMigration";
import up from "./bin/up";
import down from "./bin/down";
import help from "./bin/help";
import ciCheck from "./bin/ciCheck";



const { argv } = process;

const main = async () => {
  if (argv.includes(COMMAND.SCAFFOLD)) {
    await scaffold();
  } else if (argv.includes(COMMAND.STATUS)) {
    await getStatus();
  } else if (argv.includes(COMMAND.NEW)) {
    const name = argv[argv.indexOf(COMMAND.NEW) + 1];
    await newMigration(name);
  } else if (argv.includes(COMMAND.UP)) {
    const to = argv[argv.indexOf(COMMAND.UP) + 1];
    await up(to);
  } else if (argv.includes(COMMAND.DOWN)) {
    const to = argv[argv.indexOf(COMMAND.UP) + 1];
    await down(to);
  } else if (argv.includes(COMMAND.CHECK)) {
    await ciCheck();
  } else {
    // no need to actually check for the help command because it is the default for unrecognised commands
    help();
  }

  process.exit(0)

}

main()