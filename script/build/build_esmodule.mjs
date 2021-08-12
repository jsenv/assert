import { buildProject } from "@jsenv/core"
import * as jsenvConfig from "../../jsenv.config.mjs"

buildProject({
  ...jsenvConfig,
  buildDirectoryRelativeUrl: "./dist/esmodule/",
  importMapFileRelativeUrl: "./importmap.prod.importmap",
  format: "esmodule",
  entryPointMap: {
    "./main.js": "./jsenv_assert.js",
  },
  buildDirectoryClean: true,
})
