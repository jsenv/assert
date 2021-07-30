/**
 *
 * This file uses "@jsenv/eslint-config" to configure ESLint
 * https://github.com/jsenv/jsenv-eslint-config#eslint-config
 *
 */

const {
  composeEslintConfig,
  eslintConfigBase,
  eslintConfigForPrettier,
  eslintConfigToPreferExplicitGlobals,
  jsenvEslintRules,
  jsenvEslintRulesForImport,
} = require("@jsenv/eslint-config")

const eslintConfig = composeEslintConfig(
  eslintConfigBase,

  // Files in this repository are all meant to be executed in Node.js and browsers
  // and we want to tell this to ESLint.
  {
    env: {
      "shared-node-browser": true,
    },
  },

  // Reuse jsenv eslint rules
  {
    rules: {
      ...jsenvEslintRules,
      // Example of code changing the ESLint configuration to enable a rule:
      // 'prefer-const':  ['error']
    },
  },

  // Enable import plugin
  {
    plugins: ["import"],
    settings: {
      "import/resolver": {
        // Tell ESLint to use the importmap to resolve imports.
        // Read more in https://github.com/jsenv/importmap-node-module#Configure-vscode-and-eslint-for-importmap
        "@jsenv/importmap-eslint-resolver": {
          projectDirectoryUrl: __dirname,
          importMapFileRelativeUrl: "./importmap.dev.importmap",
        },
      },
    },
    rules: jsenvEslintRulesForImport,
  },

  // .mjs files are written for Node.js
  {
    overrides: [
      {
        files: ["**/*.mjs"],
        env: {
          "shared-node-browser": false,
          "node": true,
        },
        settings: {
          "import/resolver": {
            "@jsenv/importmap-eslint-resolver": {
              node: true,
            },
          },
        },
      },
    ],
  },

  // package is "type": "module" so:
  // 1. disable commonjs globals by default
  // 2. Re-enable commonjs into *.cjs files
  {
    globals: {
      __filename: "off",
      __dirname: "off",
      require: "off",
    },
    overrides: [
      {
        files: ["**/*.cjs"],
        env: {
          commonjs: true,
        },
        // inside *.cjs files. restore commonJS "globals"
        globals: {
          __filename: true,
          __dirname: true,
          require: true,
        },

        // inside *.cjs files, use commonjs module resolution
        settings: {
          "import/resolver": {
            node: {},
          },
        },
      },
    ],
  },

  eslintConfigToPreferExplicitGlobals,

  // We are using prettier, disable all eslint rules
  // already handled by prettier.
  eslintConfigForPrettier,
)

module.exports = eslintConfig
