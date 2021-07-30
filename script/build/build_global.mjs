import { buildProject } from "@jsenv/core"
import * as jsenvConfig from "../../jsenv.config.mjs"

buildProject({
  ...jsenvConfig,
  format: "global",
  entryPointMap: {
    "./index.js": "./jsenv_assert.js",
  },
  globalName: "__jsenv_assert__",
  bundleDirectoryClean: true,
})
