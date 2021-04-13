import { getImportMapFromProjectFiles, writeImportMapFile } from "@jsenv/node-module-import-map"
import { projectDirectoryUrl } from "../../jsenv.config.js"

writeImportMapFile(
  [
    getImportMapFromProjectFiles({
      projectDirectoryUrl,
      dev: true,
    }),
  ],
  {
    projectDirectoryUrl,
    jsConfigFile: true,
  },
)
