sequential-migrate / [Exports](modules.md)

# Sequential migrate

A database migration tool written in Node.js. `sequential-migrate` is unopinionated about your database of choice, format of migration files and how it knows which migrations have been run, but still does the heavy lifting in organising your migrations. It does this by exposing files with clear, statically typed interfaces which it uses to manage your migrations as a stack. 

It has 0 dependencies and [good documentation](./docs/modules.md). Your first point of call when reading the docs should be the [commands](./docs/enums/COMMAND.md).

Note that links in this readme work on GitHub but not on npmjs.com

## The package at a glance

The sequential-migrate CLI analyses the state of your migrations by comparing two things. Firstly, it reads the contents of your `migrations` folder. Each folder or file inside `migrations` represents one migration, and should export an object with the [MigrationScript](./docs/interfaces/MigrationScript.md) interface.

The CLI compares the contents of the `migrations` folder with a stored history of migrations. It does this by using the `stateInterface`, a script you should write that exports an object with the [StateScript](./docs/interfaces/StateScript.md) interface.

By comparing the migration scripts with the stored states, the sequential-migrate CLI can assign a [status](./docs/enums/MIGRATION_STATUS.md) to the scripts.

When you run the `up` or `down` commands, the program iterates through the list of scripts. For each script, it calls the `up` or `down` function from the `MigrationScript`, and then it tells the `stateInterface` about the change by calling [StateScript.add](./docs/interfaces/StateScript.md#add) or [StateScript.remove](./docs/interfaces/StateScript.md#remove).

It treats the set of migrations derived by combining the migration files with the stored state as a stack - that is, it only adds to or removes the most recent item. 

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
"migrate: "sequential-migrate "
```

Run the [scaffold](./docs/enums/COMMAND.md#scaffold) command.
