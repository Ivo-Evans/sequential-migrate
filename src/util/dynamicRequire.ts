import path from "path"

// don't require from my location, require from the user's location
export const dynamicRequire = (requirePath: string) => require(path.join(process.cwd(), requirePath))

export default dynamicRequire