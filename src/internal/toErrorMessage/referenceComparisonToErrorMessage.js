import { comparisonToPath } from "../comparisonToPath.js"
import { valueToString } from "../valueToString.js"

export const referenceComparisonToErrorMessage = (comparison) => {
  if (comparison.type !== "reference") return undefined

  const { actual, expected } = comparison
  const isMissing = expected && !actual
  const isExtra = !expected && actual
  const path = comparisonToPath(comparison)

  if (isExtra) {
    return createUnexpectedReferenceMessage({
      path,
      expectedValue: valueToString(comparison.parent.expected),
      unexpectedReferencePath: comparisonToPath(actual, "actual"),
    })
  }

  if (isMissing) {
    return createMissingReferenceMessage({
      path,
      expectedReferencePath: comparisonToPath(expected, "expected"),
      actualValue: valueToString(comparison.parent.actual),
    })
  }

  return createUnequalRefencesMessage({
    path,
    expectedReferencePath: comparisonToPath(expected, "expected"),
    actualReferencePath: comparisonToPath(actual, "actual"),
  })
}

const createUnexpectedReferenceMessage = ({
  path,
  expectedValue,
  unexpectedReferencePath,
}) => `found a reference instead of a value.
--- reference found to ---
${unexpectedReferencePath}
--- value expected ---
${expectedValue}
--- at ---
${path}`

const createMissingReferenceMessage = ({
  path,
  expectedReferencePath,
  actualValue,
}) => `found a value instead of a reference.
--- value found ---
${actualValue}
--- reference expected to ---
${expectedReferencePath}
--- at ---
${path}`

const createUnequalRefencesMessage = ({
  path,
  expectedReferencePath,
  actualReferencePath,
}) => `unequal references.
--- reference found to ---
${actualReferencePath}
--- reference expected to ---
${expectedReferencePath}
--- at ---
${path}`
