import { FormattedState, MIGRATION_STATUS, StateInterface } from "../types";
import migrateDown from "./migrateDown";
import rollbackMigration from "./rollbackMigration";

const consoleSpy = jest.spyOn(console, "log").mockImplementation();

jest.mock("./rollbackMigration");
const mockedRollbackMigration = jest.mocked(rollbackMigration, true);

const stateInterface: StateInterface = {
  get: jest.fn(),
  set: jest.fn(),
};

describe("up command", () => {
  afterEach(() => {
    mockedRollbackMigration.mockClear();
    consoleSpy.mockClear();
  });

  it("Does nothing when provided with entirely pending migrations", async () => {
    const formattedState: FormattedState = [
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
      await migrateDown(formattedState, stateInterface);
    } catch (e) {
      error = e;
    }

    expect(error).toBeFalsy();
    expect(console.log).toHaveBeenCalledTimes(0);
    expect(mockedRollbackMigration).toBeCalledTimes(0);
  });

  it("Rolls back every migration in a set of run migrations", async () => {
    const formattedState: FormattedState = [
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

    await migrateDown(formattedState, stateInterface);

    expect(rollbackMigration).toHaveBeenCalledTimes(2);
    expect(rollbackMigration).toHaveBeenCalledWith(
      formattedState[0],
      stateInterface
    );
    expect(rollbackMigration).toHaveBeenCalledWith(
      formattedState[1],
      stateInterface
    );
  });

  it("Rolls back only the run migrations in a set of run migrations followed by pending migrations", async () => {
    const formattedState: FormattedState = [
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

    await migrateDown(formattedState, stateInterface);

    expect(rollbackMigration).toHaveBeenCalledTimes(2);
    expect(rollbackMigration).toHaveBeenCalledWith(
      formattedState[0],
      stateInterface
    );
    expect(rollbackMigration).toHaveBeenCalledWith(
      formattedState[1],
      stateInterface
    );
    expect(rollbackMigration).not.toHaveBeenCalledWith(
      formattedState[2],
      stateInterface
    );
    expect(rollbackMigration).not.toHaveBeenCalledWith(
      formattedState[3],
      stateInterface
    );
  });

  it("Aborts when it encounters a missing migration", async () => {
    const formattedState: FormattedState = [
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

    await migrateDown(formattedState, stateInterface);

    expect(mockedRollbackMigration).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(
      "Stopped at b because it has status ❌ MISSING"
    );
  });

  it("Aborts when it encounters a skipped migration", async () => {
    const formattedState: FormattedState = [
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

    await migrateDown(formattedState, stateInterface);

    expect(mockedRollbackMigration).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(
      "Stopped at b because it has status ❌ SKIPPED"
    );
  });

  it("If there is a target migration, it migrates down to but not including the target", async () => {
    const formattedState: FormattedState = [
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

    await migrateDown(formattedState, stateInterface, "b");

    expect(rollbackMigration).toHaveBeenCalledTimes(2);
    expect(rollbackMigration).toHaveBeenCalledWith(
      formattedState[3],
      stateInterface
    );
    expect(rollbackMigration).toHaveBeenCalledWith(
      formattedState[2],
      stateInterface
    );
    expect(rollbackMigration).not.toHaveBeenCalledWith(
      formattedState[1],
      stateInterface
    );
    expect(rollbackMigration).not.toHaveBeenCalledWith(
      formattedState[0],
      stateInterface
    );
  });
});
