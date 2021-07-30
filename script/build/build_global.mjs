import { buildProject } from "@jsenv/core"
import * as jsenvConfig from "../../jsenv.config.mjs"

buildProject({
  ...jsenvConfig,
  buildDirectoryRelativeUrl: "./dist/global/",
  importMapFileRelativeUrl: "./importmap.prod.importmap",
  format: "global",
  entryPointMap: {
    "./index.js": "./jsenv_assert.js",
  },
  globalName: "__jsenv_assert__",
  buildDirectoryClean: true,
})
