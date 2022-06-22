import { build } from "@jsenv/core"

import { rootDirectoryUrl } from "../jsenv.config.mjs"

await build({
  rootDirectoryUrl,
  buildDirectoryUrl: new URL("./dist/", rootDirectoryUrl),
  entryPoints: {
    "./src/main.js": "jsenv_assert.js",
  },
})
