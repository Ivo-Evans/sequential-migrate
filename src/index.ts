#! /usr/bin/env node

import getStatus from "./bin/getStatus"
import newMigration from "./bin/newMigration"
import up from "./bin/up"
import down from "./bin/down"

const { argv } = process

if (argv.includes('status')) {
  getStatus()
} else if (argv.includes('new')) {
  newMigration()
} else if (argv.includes('up')) {
  up()
} else if (argv.includes("down")) {
  down()
}
