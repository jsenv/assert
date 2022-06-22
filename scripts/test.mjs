import {
  executeTestPlan,
  chromium,
  firefox,
  webkit,
  nodeProcess,
} from "@jsenv/core"

import { rootDirectoryUrl } from "../jsenv.config.mjs"

await executeTestPlan({
  rootDirectoryUrl,
  testPlan: {
    "test/**/*.test.mjs": {
      node: {
        runtime: nodeProcess,
      },
    },
    "test/**/*.test.html": {
      chromium: {
        runtime: chromium,
      },
      firefox: {
        runtime: firefox,
      },
      webkit: {
        runtime: webkit,
      },
    },
  },
  completedExecutionLogMerging: true,
  coverageV8ConflictWarning: false,
})
