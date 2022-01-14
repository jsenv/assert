import { buildProject } from "@jsenv/core"

import { projectDirectoryUrl } from "../../jsenv.config.mjs"

await buildProject({
  projectDirectoryUrl,
  buildDirectoryRelativeUrl: "./dist/global/",
  importMapFileRelativeUrl: "./node_resolution.importmap",
  format: "global",
  entryPoints: {
    "./main.js": "jsenv_assert.js",
  },
  globalName: "__jsenv_assert__",
  buildDirectoryClean: true,
})
