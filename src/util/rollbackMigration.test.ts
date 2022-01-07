import { StateInterface, RecordedStateItem, RecordedState } from "../types";
import rollbackMigration from "./rollbackMigration";
import dynamicRequire from "./dynamicRequire";
jest.mock("./dynamicRequire");
const mockedDynamicRequire = jest.mocked(dynamicRequire, true);

describe("rollbackMigration", () => {
  beforeEach(() => {
    mockedDynamicRequire.mockClear();
    mockedDynamicRequire.mockImplementation(() => ({
      down: jest.fn(),
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

    await rollbackMigration(stateItem, stateInterface);

    expect(dynamicRequire).toHaveBeenCalledTimes(1);
    expect(dynamicRequire).toHaveBeenCalledWith(stateItem.name);
  });

  it("Calls the migration's 'down' method", async () => {
    const down = jest.fn();
    mockedDynamicRequire.mockImplementation(() => ({
      down,
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

    await rollbackMigration(stateItem, stateInterface);

    expect(down).toHaveBeenCalledTimes(1);
  });

  it("calls the state interface's 'set' method with the new state", async () => {
    const oldState: RecordedState = [
      {
        name: "a",
        description: "b",
        runAt: 0,
      },
      {
        name: "b",
        description: "",
        runAt: 1,
      },
      {
        name: "c",
        description: "",
        runAt: 2,
      },
    ];

    const set = jest.fn();
    const stateInterface: StateInterface = {
      get: jest.fn(async () => oldState),
      set,
    };

    await rollbackMigration(oldState[0], stateInterface);

    expect(set).toHaveBeenCalledTimes(1);
    expect(set).toHaveBeenLastCalledWith(oldState.slice(1, 3));
  });
});
