import {
  executeTestPlan,
  chromium,
  firefox,
  webkit,
  nodeProcess,
} from "@jsenv/core"

await executeTestPlan({
  rootDirectoryUrl: new URL("../", import.meta.url),
  testPlan: {
    "tests/**/*.test.mjs": {
      node: {
        runtime: nodeProcess,
      },
    },
    "tests/**/*.test.html": {
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
