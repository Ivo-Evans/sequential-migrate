import path from "path"

// don't require from my location, require from the user's location
export const dynamicRequire = (...pathSegments: string[]) => import(path.join(process.cwd(), ...pathSegments))

export default dynamicRequire