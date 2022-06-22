import { startDevServer } from "@jsenv/core"

import { rootDirectoryUrl } from "../jsenv.config.mjs"

await startDevServer({
  rootDirectoryUrl,
  port: 3457,
  // protocol: "https",
  explorerGroups: {
    test: {
      "test/**/*.html": true,
    },
  },
})
