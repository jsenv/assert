import { startDevServer } from "@jsenv/core"

await startDevServer({
  rootDirectoryUrl: new URL("../", import.meta.url),
  port: 3457,
  // protocol: "https",
  explorerGroups: {
    test: {
      "tests/**/*.html": true,
    },
  },
})
