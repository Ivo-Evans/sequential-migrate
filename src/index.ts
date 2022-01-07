#! /usr/bin/env node

import { COMMAND } from "./types"
import scaffold from './bin/scaffold'
import getStatus from './bin/getStatus'
import newMigration from './bin/newMigration'
import up from './bin/up'
import down from './bin/down'

const { argv } = process

if (argv.includes(COMMAND.SCAFFOLD)) {
  scaffold()
} else if (argv.includes(COMMAND.STATUS)) {
  getStatus()
} else if (argv.includes(COMMAND.NEW)) {
  newMigration()
} else if (argv.includes(COMMAND.UP)) {
  up()
} else if (argv.includes(COMMAND.DOWN)) {
  down()
}
