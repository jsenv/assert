import {
  reportFileSizeImpact,
  readGitHubWorkflowEnv,
} from "@jsenv/file-size-impact"

await reportFileSizeImpact({
  ...readGitHubWorkflowEnv(),
  logLevel: "debug",
  buildCommand: "npm run dist",
  moduleGeneratingFileSizeReportRelativeUrl:
    "./script/file_size/generate_file_size_report.mjs",
})
