import { createDetailedMessage } from "@jsenv/log"

import { comparisonToPath } from "../comparisonToPath.js"
import { valueToString } from "../valueToString.js"

export const defaultComparisonToErrorMessage = (comparison) => {
  const path = comparisonToPath(comparison)
  const { expected, actual } = comparison
  const expectedValue = valueToString(expected)
  const actualValue = valueToString(actual)

  return createDetailedMessage(`unequal values`, {
    found: actualValue,
    expected: expectedValue,
    at: path,
  })
}
