#! /usr/bin/env node

import { COMMAND } from "../../types";
import scaffold from "./scaffold";
import getStatus from "./getStatus";
import newMigration from "./newMigration";
import up from "../shared/up";
import down from "../shared/down";
import help from "./help";
import ciCheck from "./ciCheck";



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
    const to = argv[argv.indexOf(COMMAND.DOWN) + 1];
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