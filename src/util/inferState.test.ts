import { MIGRATION_STATUS, RecordedState } from "../types";
import inferState from "./inferState";

describe("formatState", () => {
  it("Combines state and migrations into an alphabetically sorted list without overlap", () => {
    const migrationNames = ["b", "a"];
    const state = [
      {
        name: "a",
        description: "",
        runAt: 4,
      },
      {
        name: "c",
        description: "c",
        runAt: 3,
      },
    ];

    const formattedState = inferState(migrationNames, state);

    expect(formattedState).toMatchObject([
      {
        name: "a",
      },
      {
        name: "b",
      },
      {
        name: "c",
      },
    ]);
  });

  it("Displays the status of a list of migrations that have not been run", () => {
    const migrationNames = ["a", "b"];
    const state: RecordedState = [];
    const formattedState = inferState(migrationNames, state);

    const isEveryStateItemPending = formattedState.every(
      (stateItem) => stateItem.status === MIGRATION_STATUS.PENDING
    );

    expect(isEveryStateItemPending).toBeTruthy();
  });

  it("Displays a list of migrations that have been run correctly", () => {
    const migrationNames = ["a", "b"];
    const state: RecordedState = [
      {
        name: "a",
        description: "",
        runAt: 4,
      },
      {
        name: "b",
        description: "c",
        runAt: 3,
      },
    ];
    const formattedState = inferState(migrationNames, state);

    const isEveryStateItemRun = formattedState.every(
      (stateItem) => stateItem.status === MIGRATION_STATUS.RUN
    );

    expect(isEveryStateItemRun).toBeTruthy();
  });

  it("Correctly detects the point at which the last migration was run in a valid list of migrations", () => {
    const migrationNames = ["a", "b", "c"];
    const state: RecordedState = [
      {
        name: "a",
        description: "",
        runAt: 4,
      },
      {
        name: "b",
        description: "c",
        runAt: 3,
      },
    ];
    const formattedState = inferState(migrationNames, state);

    expect(formattedState).toMatchObject([
      {
        name: "a",
        status: MIGRATION_STATUS.RUN,
      },
      {
        name: "b",
        status: MIGRATION_STATUS.RUN,
      },
      {
        name: "c",
        status: MIGRATION_STATUS.PENDING,
      },
    ]);
  });

  it("Detects when there are skipped migrations in the list", () => {
    const migrationNames = ["a", "b", "c"];
    const state: RecordedState = [
      {
        name: "a",
        description: "",
        runAt: 4,
      },
      {
        name: "c",
        description: "c",
        runAt: 3,
      },
    ];
    const formattedState = inferState(migrationNames, state);

    expect(formattedState).toMatchObject([
      {
        name: "a",
        status: MIGRATION_STATUS.RUN,
      },
      {
        name: "b",
        status: MIGRATION_STATUS.SKIPPED,
      },
      {
        name: "c",
        status: MIGRATION_STATUS.RUN,
      },
    ]);

  })

  it("Detects when there are missing migrations in the list", () => {
    const migrationNames = ["a", "c"];
    const state: RecordedState = [
      {
        name: "a",
        description: "",
        runAt: 4,
      },
      {
        name: "b",
        description: "",
        runAt: 4
      },
      {
        name: "c",
        description: "c",
        runAt: 3,
      },
    ];

    const formattedState = inferState(migrationNames, state);

    expect(formattedState).toMatchObject([
      {
        name: "a",
        status: MIGRATION_STATUS.RUN,
      },
      {
        name: "b",
        status: MIGRATION_STATUS.MISSING,
      },
      {
        name: "c",
        status: MIGRATION_STATUS.RUN,
      },
    ]);
  })
});
