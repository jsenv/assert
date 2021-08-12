import {
  executeTestPlan,
  launchChromiumTab,
  launchFirefoxTab,
  launchWebkitTab,
  launchNode,
} from "@jsenv/core"
import * as jsenvConfig from "../../jsenv.config.mjs"

executeTestPlan({
  ...jsenvConfig,
  testPlan: {
    "test/**/*.test.mjs": {
      node: {
        launch: launchNode,
      },
    },
    "test/**/*.test.html": {
      chromium: {
        launch: launchChromiumTab,
      },
      firefox: {
        launch: launchFirefoxTab,
      },
      webkit: {
        launch: launchWebkitTab,
      },
    },
  },
  coverageV8MergeConflictIsExpected: true,
})
