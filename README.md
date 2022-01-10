# Sequential migrate

This is a database migration tool written in Node.js. The aim is for it to be unopinionated vis-a-vis database of choice, format of migration files and how the program knows which migrations have been run, but still to be easy to use and quick to set up. It does this by exposing files with clear, strongly typed interfaces. 


It has 0 dependencies [and excellent documentation](./docs/modules.md). Your first point of call when reading the docs should be the [commands](./docs/enums/COMMAND.md).

## The package at a glance

The sequential-migrate CLI analyses the state of your migrations by comparing two things. Firstly, it reads the contents of your `migrations` folder. Each folder or file inside `migrations` represents one migration, and should export an object with the `MigrationScript` interface.

The CLI compares the contents of the `migrations` folder with stored history of migrations. It does this by using the `stateInterface`, a script you should write that exports an object which meets the `StateScript` interface.

By comparing the migration scripts with the stored states, the sequential-migrate CLI can assign a status to the scripts.

When you run the `up` or `down` commands, the program iterates through the list of scripts. For each script, it calls the `up` or `down` function from the `MigrationScript`, and then the appropriate function from the `stateInterface`.

Currently, it treats the set of migrations derived from combining the migration files with the stored state as a stack - that is, it only adds to or removes the most recent item. 

## Getting started

```
npm i -D sequential-migrate
```

or

```
yarn add --save-dev sequential-migrate
```

Add this to your `package.json`'s `scripts` section:

```
"migrate: "sequential migrate "
```


Run the [scaffold](./docs/enums/COMMAND.md#scaffold) command.

