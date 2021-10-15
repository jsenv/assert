import {
  executeTestPlan,
  chromiumTabRuntime,
  firefoxTabRuntime,
  webkitTabRuntime,
  nodeRuntime,
} from "@jsenv/core"

import * as jsenvConfig from "../../jsenv.config.mjs"

await executeTestPlan({
  ...jsenvConfig,
  testPlan: {
    "test/**/*.test.mjs": {
      node: {
        launch: nodeRuntime,
      },
    },
    "test/**/*.test.html": {
      chromium: {
        launch: chromiumTabRuntime,
      },
      firefox: {
        launch: firefoxTabRuntime,
      },
      webkit: {
        launch: webkitTabRuntime,
      },
    },
  },
  coverageV8MergeConflictIsExpected: true,
})
