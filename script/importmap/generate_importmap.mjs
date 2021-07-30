import { getImportMapFromProjectFiles, writeImportMapFile } from "@jsenv/importmap-node-module"
import { projectDirectoryUrl } from "../../jsenv.config.mjs"

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
