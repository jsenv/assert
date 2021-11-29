/*
 * This file is designed to be executed locally or by an automated process.
 *
 * To run it locally, use one of
 * - node ./script/file_size/file_size.mjs --local
 * - npm run file-size
 *
 * The automated process is a GitHub workflow: ".github/workflows/file_size_impact.yml"
 * It will dynamically import this file and call generateFileSizeReport.
 *
 * See https://github.com/jsenv/file-size-impact
 */

import { generateFileSizeReport, raw, gzip } from "@jsenv/file-size-impact"

import { projectDirectoryUrl } from "../../jsenv.config.mjs"

export const fileSizeReport = await generateFileSizeReport({
  log: process.argv.includes("--log"),
  projectDirectoryUrl,
  transformations: { raw, gzip },
  trackingConfig: {
    "dist files": {
      "./dist/**/*.js": true,
      "./dist/**/*.cjs": true,
      "./dist/**/*.map": false,
    },
  },
  manifestConfig: {
    "./dist/**/asset-manifest.json": true,
  },
})
