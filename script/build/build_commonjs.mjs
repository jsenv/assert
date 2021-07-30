import { buildProject, getBabelPluginMapForNode } from "@jsenv/core"
import * as jsenvConfig from "../../jsenv.config.mjs"

buildProject({
  ...jsenvConfig,
  format: "commonjs",
  entryPointMap: {
    "./index.js": "./jsenv_assert.cjs",
  },
  babelPluginMap: getBabelPluginMapForNode(),
  bundleDirectoryClean: true,
})
