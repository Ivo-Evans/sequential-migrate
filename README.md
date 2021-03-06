# Sequential migrate

A database migration tool written in Node.js. `sequential-migrate` is unopinionated about your database of choice, format of migration files and how it knows which migrations have been run, but still does the heavy lifting in organising your migrations. It does this by exposing files with clear, statically typed interfaces which it uses to manage your migrations as a stack. 

It has 0 dependencies and [good documentation](https://ivo-evans.github.io/sequential-migrate/). You can use it via the command line or by importing functions in your scripts. 

PRs welcome.


- [Sequential migrate](#sequential-migrate)
  - [The package at a glance](#the-package-at-a-glance)
  - [Getting started](#getting-started)
    - [Command line API](#command-line-api)
    - [Programmatic API](#programmatic-api)

## The package at a glance

sequential-migrate analyses the state of your migrations by comparing two things. Firstly, it reads the contents of your `migrations` folder. Each folder or file inside `migrations` represents one migration, and should export an object with the [MigrationScript](https://ivo-evans.github.io/sequential-migrate/interfaces/MigrationScript.html) interface.

The package compares the contents of the `migrations` folder with a stored history of migrations. It does this by using the `stateInterface`, a script you should write that exports an object with the [StateScript](https://ivo-evans.github.io/sequential-migrate/interfaces/StateScript.html) interface.

By comparing the migration scripts with the stored states, the sequential-migrate CLI can assign a [status](https://ivo-evans.github.io/sequential-migrate/enums/MIGRATION_STATUS.html) to the scripts.

When you run `up` or `down`, the program iterates through the list of scripts. For each script, it calls the `up` or `down` function from the `MigrationScript`, and then it tells the `stateInterface` about the change by calling [StateScript.add](https://ivo-evans.github.io/sequential-migrate/interfaces/StateScript.html#add) or [StateScript.remove](https://ivo-evans.github.io/sequential-migrate/interfaces/StateScript.html#remove). If a migration is missing (the StateScript says it has been run, but the files cannot be found) or skipped, the `up` and `down` scripts will halt and prompt you to fix the problem. 

It treats the set of migrations derived by combining the migration files with the stored state as a stack - that is, it only adds to or removes the most recent item. It encourages you to order migrations by the time they're released, rather than the time they're written, and in development to always run migrations in order, even if that means rolling back and then forward again. When you run `up` or `down`, if the sequential-migrate encounters a migration with status [MISSING](https://ivo-evans.github.io/sequential-migrate/enums/MIGRATION_STATUS.html#MISSING) or [SKIPPED](https://ivo-evans.github.io/sequential-migrate/enums/MIGRATION_STATUS.html#SKIPPED), it will halt and ask you to examine the issue.

## Getting started

```
npm i -D sequential-migrate
```

or

```
yarn add --save-dev sequential-migrate
```

Run the [scaffold](https://ivo-evans.github.io/sequential-migrate/enums/COMMAND.html#SCAFFOLD) command with 

```
npx sequential-migrate scaffold
```

From here you have two options, either use the package from the command line, or import functions into your Node scripts. Most use-cases are covered with the command-line API.

### Command line API

Create a migration with:

```
npx sequential-migrate new my-first-migration
```

Check your migrations with:

```
npx sequential-migrate status
```

Run all pending migrations:

```
npx sequential migrate up
```

Run all pending migrations up to and including `1641903774203-my-cool-feature`:

```
npx sequential-migrate up 1641903774203-my-cool-feature
```

`sequential-migrate down` works the same as `sequential-migrate up` except that if you run down to a migration, that migration is not rolled back, only those that come after it are. 

Check whether your migration state is OK in a machine-friendly way:

```
npx sequential-migrate ci-check
```

For more details on all of these commands, please see [the docs](https://ivo-evans.github.io/sequential-migrate/enums/COMMAND.html).

### Programmatic API

Here's a sample script

```javascript
import { getStatus, up, down } from "sequential-migrate";

const main = async () => {
  const { state, containsMissing, containsSkipped } = await getStatus()
  
  if (containsMissing || containsSkipped) {
    throw new Error("Please check migration state manually");
  }
  
  // migrate to the penultimate migration to demonstrate up function optional parameter
  const penultimateMigration = state[state.length - 2]
  await up(penultimateMigration.name)
  
  process.exit(0)
}

main()
```

For documentation for these functions, please refer to the [exports](https://ivo-evans.github.io/sequential-migrate/modules.html) section of the docs.

Certain functionality, like scaffolding the project or creating new migration scripts, is limited to the command-line API - but if you have a usecase for exposing these features in JavaScript, let me know and I can add them.