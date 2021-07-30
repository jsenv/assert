import { reportFileSizeImpact, raw, gzip, readGitHubWorkflowEnv } from "@jsenv/file-size-impact"

reportFileSizeImpact({
  ...readGitHubWorkflowEnv(),
  logLevel: "debug",
  buildCommand: "npm pack",
  trackingConfig: {
    dist: {
      "./dist/**/*.js": true,
      "./dist/**/*.map": false,
    },
  },
  transformations: { raw, gzip },
})
