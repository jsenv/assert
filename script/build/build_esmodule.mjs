import { buildProject } from "@jsenv/core"
import * as jsenvConfig from "../../jsenv.config.mjs"

buildProject({
  ...jsenvConfig,
  format: "esmodule",
  entryPointMap: {
    "./index.js": "./jsenv_assert.js",
  },
  bundleDirectoryClean: true,
})
