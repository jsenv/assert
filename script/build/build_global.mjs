import { buildProject } from "@jsenv/core"

import * as jsenvConfig from "../../jsenv.config.mjs"

await buildProject({
  ...jsenvConfig,
  buildDirectoryRelativeUrl: "./dist/global/",
  importMapFileRelativeUrl: "./node_resolution.importmap",
  format: "global",
  entryPointMap: {
    "./main.js": "./jsenv_assert.js",
  },
  globalName: "__jsenv_assert__",
  buildDirectoryClean: true,
})
