import * as dynamicRequire from "./dynamicRequire"
import getConfig, { DEFAULT_CONFIG } from "./getConfig"
import { RuntimeConfiguration } from "../types"

jest.mock("./dynamicRequire", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("getConfig",  () => {
  it("Loads the default config if no file is found", async () => {
    // @ts-ignore
    dynamicRequire.default = () => {
      throw new Error("")
    }
    const config = await getConfig()

    expect(config).toMatchObject(DEFAULT_CONFIG)
  });

  it("Takes all values from the config file if possible", async () => {

    const fileConfig: RuntimeConfiguration = {
      migrations: 'm',
      newMigrationBuilder: 'n',
      stateScript: 's',
    } 

    // @ts-ignore
    dynamicRequire.default = () => fileConfig

    const config = await getConfig()

    expect(config).toMatchObject(fileConfig)
  });

  it("Merges the config file with the default config to create a complete config if necessary", async () => {
    const fileConfig: Partial<RuntimeConfiguration> = {
      migrations: 'm',
      newMigrationBuilder: 'n',
    } 

    // @ts-ignore
    dynamicRequire.default = () => fileConfig

    const config = await getConfig()

    expect(config).toMatchObject({
      migrations: 'm',
      newMigrationBuilder: 'n',
      stateScript: DEFAULT_CONFIG.stateScript
    })
  });
});
