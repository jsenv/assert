import { buildProject } from "@jsenv/core"

import { projectDirectoryUrl } from "../../jsenv.config.mjs"

await buildProject({
  projectDirectoryUrl,
  buildDirectoryRelativeUrl: "./dist/esmodule/",
  importMapFileRelativeUrl: "./node_resolution.importmap",
  format: "esmodule",
  entryPointMap: {
    "./main.js": "./jsenv_assert.js",
  },
  buildDirectoryClean: true,
})
