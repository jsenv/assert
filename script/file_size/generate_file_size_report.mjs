import { getFileSizeReport, logFileSizeReport } from "@jsenv/file-size-impact"

export const generateFileSizeReport = async () => {
  return getFileSizeReport({
    projectDirectoryUrl: new URL("../../", import.meta.url),
    trackingConfig: {
      "dist files": {
        "./dist/**/*.js": true,
        "./dist/**/*.cjs": true,
        "./dist/**/*.map": false,
      },
    },
  })
}

const executeAndLog = process.argv.includes("--local")
if (executeAndLog) {
  const fileSizeReport = await generateFileSizeReport()
  logFileSizeReport(fileSizeReport)
}
