import {
  executeTestPlan,
  chromiumTabRuntime,
  firefoxTabRuntime,
  webkitTabRuntime,
  nodeRuntime,
} from "@jsenv/core"

import { projectDirectoryUrl } from "../../jsenv.config.mjs"

await executeTestPlan({
  projectDirectoryUrl,
  testPlan: {
    "test/**/*.test.mjs": {
      node: {
        runtime: nodeRuntime,
      },
    },
    "test/**/*.test.html": {
      chromium: {
        runtime: chromiumTabRuntime,
      },
      firefox: {
        runtime: firefoxTabRuntime,
      },
      webkit: {
        runtime: webkitTabRuntime,
      },
    },
  },
  completedExecutionLogMerging: true,
  coverageV8ConflictWarning: false,
})
