# Sequential migrate

This is a database migration tool written in Node.js. The aim is for it to be unopinionated vis-a-vis database of choice, format of migration files and how the program knows which migrations have been run, but still to be easy to use and quick to set up. It does this by exposing files with clear, strongly typed interfaces. 

## The package at a glance

The sequential-migrate CLI analyses the state of your migrations by comparing two bits of information. Firstly, it reads the contents of your `migrations` folder (the path and name of this folder can be customised). Each file or folder inside `migrations` represents one migration, and should export an object which meets the `MigrationScript` interface. If a folder is used, it should contain an `index.js`.

The CLI compares the contents of the `migrations` folder with stored history of migrations. It does this by using the `stateInterface`, a script you should write that has a `get` and `set` method. The stateInterface script should export an object which meets the `StateScript` interface.

By comparing the migration scripts with the stored states, the sequential-migrate CLI can assign a status to the scripts.

When you run the `up` or `down` commands, the program iterates through the list of scripts. For each script, it calls the `up` or `down` function from the `MigrationScript`, and then the appropriate function from the `stateInterface`.

Currently, it treats the set of migrations derived from combining the migration files with the stored state as a stack - that is, it only adds to or removes the most recent item. 

## Getting started

- install - yarn or npm
- add to scripts

The first command to run is scaffold. The scaffold docs can take you from there.

