import { buildProject } from "@jsenv/core"
import * as jsenvConfig from "../../jsenv.config.mjs"

buildProject({
  ...jsenvConfig,
  buildDirectoryRelativeUrl: "./dist/esmodule/",
  importMapFileRelativeUrl: "./importmap.prod.importmap",
  format: "esmodule",
  entryPointMap: {
    "./index.js": "./jsenv_assert.js",
  },
  buildDirectoryClean: true,
})
