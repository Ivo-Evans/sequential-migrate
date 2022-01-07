import { StateInterface, RecordedStateItem, RecordedState } from "../types";
import runMigration from "./runMigration";
import dynamicRequire from "./dynamicRequire";
jest.mock("./dynamicRequire");
const mockedDynamicRequire = jest.mocked(dynamicRequire, true);

describe("Run migration", () => {
  beforeEach(() => {
    mockedDynamicRequire.mockClear();
    mockedDynamicRequire.mockImplementation(() => ({
      up: jest.fn(),
    }));
  });

  it("requires the migration by its name", async () => {
    const stateItem: RecordedStateItem = {
      name: "a",
      description: "",
      runAt: 1,
    };

    const stateInterface: StateInterface = {
      get: jest.fn(async () => []),

      set: jest.fn(),
    };

    await runMigration(stateItem, stateInterface);

    expect(dynamicRequire).toHaveBeenCalledTimes(1);
    expect(dynamicRequire).toHaveBeenCalledWith(stateItem.name);
  });

  it("Calls the migration's 'up' method", async () => {
    const up = jest.fn();
    mockedDynamicRequire.mockImplementation(() => ({
      up,
    }));

    const stateItem: RecordedStateItem = {
      name: "a",
      description: "",
      runAt: 1,
    };

    const stateInterface: StateInterface = {
      get: jest.fn(async () => []),
      set: jest.fn(),
    };

    await runMigration(stateItem, stateInterface);

    expect(up).toHaveBeenCalledTimes(1);
  });

  it("calls the state interface's 'set' method with the new state", async () => {
    jest.spyOn(global.Date, "now").mockImplementationOnce(() => 10);

    const oldState: RecordedState = [
      {
        name: "b",
        description: "",
        runAt: 0,
      },
    ];
    const set = jest.fn();
    const stateInterface: StateInterface = {
      get: jest.fn(async () => oldState),
      set,
    };

    const stateItem: RecordedStateItem = {
      name: "a",
      description: "",
      runAt: 1,
    };

    await runMigration(stateItem, stateInterface);

    expect(set).toHaveBeenCalledTimes(1);
    expect(set).toHaveBeenLastCalledWith([
      {
        name: "b",
        description: "",
        runAt: 0,
      },
      {
        name: "a",
        description: "",
        runAt: 10,
      },
    ]);
  });
});
