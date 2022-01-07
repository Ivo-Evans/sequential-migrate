# Sequential migrate

## Commands

### Scaffold
TODO

### migrate:status

Returns a table with:

- migration index - dynamically generated
- Name - effectively the ID
- Status
  - "Run at ..." - green
  - "Pending" - yellow
  - "Skipped - was this added in another branch, but not run in this branch?" - red
  - "Present in the state, but not in the migrations list - was this run in another branch, but not added in this branch?" - red

### migrate:new

### migrate:up

You can run `migrate up` to migrate to the most recent migration. You can also provide a specific migration name, e.g. `migrate up 1641484872787-foo`. This will run all pending migrations up to and including `1641484872787-foo`

### migrate:down

You can run `migrate down` to rollback all migrations. You can also provide a specific migration name, e.g. `migrate down 1641484872787-foo`. This will roll back all run migrations up to but not including `1641484872787-foo`.

## Configuration

Configuration is via a runtime configuration file `.migrationrc.js`. If no `.migrationrc.js` is provided, default values are used.

```js
module.exports = {
  migrations: '/path/to/folder', // defaults to migration/migrations/
  newMigrationBuilder: './path/to/file', // defaults to migration/newMigrationBuilder.js
  stateInterface: '/path/to/file', // defaults to migration/stateInterface
}
```

### migrations
`migrations` is a folder containing a set of files or folders. Each file/folder should be executable with node - so any folder should contain an index.js file. The following file structure is valid:

```
.
├── migrations
│ ├── 01
│ │ └── index.js
│ └── 02.js
```

When running `migrate:up`, first, the migration in 01/index.js will be run, and then the migration in 02.js will be run.

Each migration script should export an object which fits the `MigrationAPI` interface.


### newMigrationBuilder

This is a file which should export a function `build`. 

`build` should take one argument, which is the name the user chooses for the new migration.

`build` should create a file which follows the `MigrationAPI` interface.


### stateInterface

This file exports a `StateInterface`. 
