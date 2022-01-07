import { InferredState, MIGRATION_STATUS, StateScript } from "../types";
import migrateUp from "./migrateUp";
import runMigration from "./runMigration";

const consoleSpy = jest.spyOn(console, "log").mockImplementation();

jest.mock("./runMigration");
const mockedRunMigration = jest.mocked(runMigration, true);

const stateScript: StateScript = {
  get: jest.fn(),
  set: jest.fn(),
};

describe("migrateUp", () => {
  afterEach(() => {
    mockedRunMigration.mockClear();
    consoleSpy.mockClear();
  });

  it("Does nothing when provided with entirely run migrations", async () => {
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

    let error;
    try {
      await migrateUp(formattedState, stateScript);
    } catch (e) {
      error = e;
    }

    expect(error).toBeFalsy();
    expect(console.log).toHaveBeenCalledTimes(0);
    expect(mockedRunMigration).toBeCalledTimes(0);
  });

  it("Runs every migration in a set of pending migrations", async () => {
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

    await migrateUp(formattedState, stateScript);

    expect(runMigration).toHaveBeenCalledTimes(2);
    expect(runMigration).toHaveBeenCalledWith(
      formattedState[0],
      stateScript
    );
    expect(runMigration).toHaveBeenCalledWith(
      formattedState[1],
      stateScript
    );
  });

  it("Runs only the pending migrations in a set of run migrations followed by pending migrations", async () => {
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

    await migrateUp(formattedState, stateScript);

    expect(runMigration).toHaveBeenCalledTimes(2);
    expect(runMigration).not.toHaveBeenCalledWith(
      formattedState[0],
      stateScript
    );
    expect(runMigration).not.toHaveBeenLastCalledWith(
      formattedState[2],
      stateScript
    );
    expect(runMigration).toHaveBeenCalledWith(
      formattedState[2],
      stateScript
    );
    expect(runMigration).toHaveBeenCalledWith(
      formattedState[3],
      stateScript
    );
  });

  it("Aborts when it encounters a missing migration", async () => {
    const formattedState: InferredState = [
      {
        status: MIGRATION_STATUS.RUN,
        name: "a",
        description: "",
        runAt: 1,
      },
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
        status: MIGRATION_STATUS.PENDING,
        name: "c",
        description: "",
        runAt: 4,
      },
    ];

    await migrateUp(formattedState, stateScript);

    expect(mockedRunMigration).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(
      "Stopped at b because it has status ❌ MISSING"
    );
  });

  it("Aborts when it encounters a skipped migration", async () => {
    const formattedState: InferredState = [
      {
        status: MIGRATION_STATUS.RUN,
        name: "a",
        description: "",
        runAt: 1,
      },
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
        status: MIGRATION_STATUS.PENDING,
        name: "c",
        description: "",
        runAt: 4,
      },
    ];

    await migrateUp(formattedState, stateScript);

    expect(mockedRunMigration).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(
      "Stopped at b because it has status ❌ SKIPPED"
    );
  });

  it("If there is a target migration, it migrates up and including the target", async () => {
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
      {
        status: MIGRATION_STATUS.PENDING,
        name: "c",
        description: "",
        runAt: 3,
      },
      {
        status: MIGRATION_STATUS.PENDING,
        name: "d",
        description: "",
        runAt: 4,
      },
    ];

    await migrateUp(formattedState, stateScript, "c");

    expect(runMigration).toHaveBeenCalledTimes(3);
    expect(runMigration).toHaveBeenCalledWith(
      formattedState[0],
      stateScript
    );
    expect(runMigration).toHaveBeenCalledWith(
      formattedState[1],
      stateScript
    );
    expect(runMigration).toHaveBeenCalledWith(
      formattedState[2],
      stateScript
    );
    expect(runMigration).not.toHaveBeenCalledWith(
      formattedState[3],
      stateScript
    );
  });
});
