import { InferredState, MIGRATION_STATUS, StateScript } from "../types";
import migrateDown from "./migrateDown";
import rollbackMigration from "./rollbackMigration";

const consoleSpy = jest.spyOn(console, "log").mockImplementation();

jest.mock("./rollbackMigration");
const mockedRollbackMigration = jest.mocked(rollbackMigration, true);

const stateScript: StateScript = {
  get: jest.fn(),
  set: jest.fn(),
};

describe("migrateDown", () => {
  afterEach(() => {
    mockedRollbackMigration.mockClear();
    consoleSpy.mockClear();
  });

  it("Does nothing when provided with entirely pending migrations", async () => {
    const formattedState: InferredState = [
      {
        status: MIGRATION_STATUS.PENDING,
        name: "a",
        description: "",
        runAt: 1,
      },
      {
        status: MIGRATION_STATUS.PENDING,
        name: "b",
        description: "",
        runAt: 2,
      },
    ];

    let error;
    try {
      await migrateDown(formattedState, stateScript);
    } catch (e) {
      error = e;
    }

    expect(error).toBeFalsy();
    expect(console.log).toHaveBeenCalledTimes(0);
    expect(mockedRollbackMigration).toBeCalledTimes(0);
  });

  it("Rolls back every migration in a set of run migrations", async () => {
    const formattedState: InferredState = [
      {
        status: MIGRATION_STATUS.RUN,
        name: "a",
        description: "",
        runAt: 1,
      },
      {
        status: MIGRATION_STATUS.RUN,
        name: "b",
        description: "",
        runAt: 2,
      },
    ];

    await migrateDown(formattedState, stateScript);

    expect(rollbackMigration).toHaveBeenCalledTimes(2);
    expect(rollbackMigration).toHaveBeenCalledWith(
      formattedState[0],
      stateScript
    );
    expect(rollbackMigration).toHaveBeenCalledWith(
      formattedState[1],
      stateScript
    );
  });

  it("Rolls back only the run migrations in a set of run migrations followed by pending migrations", async () => {
    const formattedState: InferredState = [
      {
        status: MIGRATION_STATUS.RUN,
        name: "a",
        description: "",
        runAt: 1,
      },
      {
        status: MIGRATION_STATUS.RUN,
        name: "a",
        description: "",
        runAt: 2,
      },
      {
        status: MIGRATION_STATUS.PENDING,
        name: "b",
        description: "",
        runAt: 3,
      },
      {
        status: MIGRATION_STATUS.PENDING,
        name: "c",
        description: "",
        runAt: 4,
      },
    ];

    await migrateDown(formattedState, stateScript);

    expect(rollbackMigration).toHaveBeenCalledTimes(2);
    expect(rollbackMigration).toHaveBeenCalledWith(
      formattedState[0],
      stateScript
    );
    expect(rollbackMigration).toHaveBeenCalledWith(
      formattedState[1],
      stateScript
    );
    expect(rollbackMigration).not.toHaveBeenCalledWith(
      formattedState[2],
      stateScript
    );
    expect(rollbackMigration).not.toHaveBeenCalledWith(
      formattedState[3],
      stateScript
    );
  });

  it("Aborts when it encounters a missing migration", async () => {
    const formattedState: InferredState = [
      {
        status: MIGRATION_STATUS.PENDING,
        name: "a",
        description: "",
        runAt: 2,
      },
      {
        status: MIGRATION_STATUS.MISSING,
        name: "b",
        description: "",
        runAt: 3,
      },
      {
        status: MIGRATION_STATUS.RUN,
        name: "a",
        description: "",
        runAt: 1,
      },
      {
        status: MIGRATION_STATUS.PENDING,
        name: "c",
        description: "",
        runAt: 4,
      },
    ];

    await migrateDown(formattedState, stateScript);

    expect(mockedRollbackMigration).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(
      "Stopped at b because it has status ❌ MISSING"
    );
  });

  it("Aborts when it encounters a skipped migration", async () => {
    const formattedState: InferredState = [
      {
        status: MIGRATION_STATUS.PENDING,
        name: "a",
        description: "",
        runAt: 2,
      },
      {
        status: MIGRATION_STATUS.SKIPPED,
        name: "b",
        description: "",
        runAt: 3,
      },
      {
        status: MIGRATION_STATUS.RUN,
        name: "a",
        description: "",
        runAt: 1,
      },
      {
        status: MIGRATION_STATUS.PENDING,
        name: "c",
        description: "",
        runAt: 4,
      },
    ];

    await migrateDown(formattedState, stateScript);

    expect(mockedRollbackMigration).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(
      "Stopped at b because it has status ❌ SKIPPED"
    );
  });

  it("If there is a target migration, it migrates down to but not including the target", async () => {
    const formattedState: InferredState = [
      {
        status: MIGRATION_STATUS.RUN,
        name: "a",
        description: "",
        runAt: 1,
      },
      {
        status: MIGRATION_STATUS.RUN,
        name: "b",
        description: "",
        runAt: 2,
      },
      {
        status: MIGRATION_STATUS.RUN,
        name: "c",
        description: "",
        runAt: 3,
      },
      {
        status: MIGRATION_STATUS.RUN,
        name: "d",
        description: "",
        runAt: 4,
      },
    ];

    await migrateDown(formattedState, stateScript, "b");

    expect(rollbackMigration).toHaveBeenCalledTimes(2);
    expect(rollbackMigration).toHaveBeenCalledWith(
      formattedState[3],
      stateScript
    );
    expect(rollbackMigration).toHaveBeenCalledWith(
      formattedState[2],
      stateScript
    );
    expect(rollbackMigration).not.toHaveBeenCalledWith(
      formattedState[1],
      stateScript
    );
    expect(rollbackMigration).not.toHaveBeenCalledWith(
      formattedState[0],
      stateScript
    );
  });
});
