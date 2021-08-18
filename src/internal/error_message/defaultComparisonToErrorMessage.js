import { createDetailedMessage } from "@jsenv/logger"

import { comparisonToPath } from "../comparisonToPath.js"
import { valueToString } from "../valueToString.js"

export const defaultComparisonToErrorMessage = (comparison) => {
  const path = comparisonToPath(comparison)
  const expectedValue = valueToString(comparison.expected)
  const actualValue = valueToString(comparison.actual)

  return createUnequalValuesMessage({ path, expectedValue, actualValue })
}

const createUnequalValuesMessage = ({ path, expectedValue, actualValue }) =>
  createDetailedMessage(`unequal values`, {
    found: actualValue,
    expected: expectedValue,
    at: path,
  })
