import { comparisonToPath } from "../comparisonToPath.js"
import { valueToString } from "../valueToString.js"
import { findSelfOrAncestorComparison } from "../findSelfOrAncestorComparison.js"

export const mapEntryComparisonToErrorMessage = (comparison) => {
  const mapEntryComparison = findSelfOrAncestorComparison(
    comparison,
    ({ type }) => type === "map-entry",
  )
  if (!mapEntryComparison) return null

  const isUnexpected = !mapEntryComparison.expected && mapEntryComparison.actual
  if (isUnexpected) return createUnexpectedMapEntryErrorMessage(mapEntryComparison)

  const isMissing = mapEntryComparison.expected && !mapEntryComparison.actual
  if (isMissing) return createMissingMapEntryErrorMessage(mapEntryComparison)

  return null
}

const createUnexpectedMapEntryErrorMessage = (comparison) => `an entry is unexpected.
--- unexpected entry key ---
${valueToString(comparison.actual.key)}
--- unexpected entry value ---
${valueToString(comparison.actual.value)}
--- at ---
${comparisonToPath(comparison.parent)}`

const createMissingMapEntryErrorMessage = (comparison) => `an entry is missing.
--- missing entry key ---
${valueToString(comparison.expected.key)}
--- missing entry value ---
${valueToString(comparison.expected.value)}
--- at ---
${comparisonToPath(comparison.parent)}`
