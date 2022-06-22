import { inspect } from "@jsenv/inspect"
import { createDetailedMessage } from "@jsenv/log"

import { comparisonToPath } from "../comparisonToPath.js"

export const propertiesComparisonToErrorMessage = (comparison) => {
  if (comparison.type !== "properties") {
    return undefined
  }

  const path = comparisonToPath(comparison.parent)
  const missing = comparison.actual.missing
  const extra = comparison.actual.extra
  const missingCount = missing.length
  const extraCount = extra.length
  const unexpectedProperties = {}
  extra.forEach((propertyName) => {
    unexpectedProperties[propertyName] = comparison.parent.actual[propertyName]
  })
  const missingProperties = {}
  missing.forEach((propertyName) => {
    missingProperties[propertyName] = comparison.parent.expected[propertyName]
  })

  if (missingCount === 1 && extraCount === 0) {
    return createDetailedMessage("1 missing property", {
      "missing property": inspect(missingProperties),
      "at": path,
    })
  }

  if (missingCount > 1 && extraCount === 0) {
    return createDetailedMessage(`${missingCount} missing properties`, {
      "missing properties": inspect(missingProperties),
      "at": path,
    })
  }

  if (missingCount === 0 && extraCount === 1) {
    return createDetailedMessage(`1 unexpected property`, {
      "unexpected property": inspect(unexpectedProperties),
      "at": path,
    })
  }

  if (missingCount === 0 && extraCount > 1) {
    return createDetailedMessage(`${extraCount} unexpected properties`, {
      "unexpected properties": inspect(unexpectedProperties),
      "at": path,
    })
  }

  let message = ""
  if (extraCount === 1) {
    message += `1 unexpected property`
  } else {
    message += `${extraCount} unexpected properties`
  }
  if (missingCount === 1) {
    message += ` and 1 missing property`
  } else {
    message += ` and ${missingCount} missing properties`
  }
  return createDetailedMessage(message, {
    [extraCount === 1 ? "unexpected property" : "unexpected properties"]:
      inspect(unexpectedProperties),
    [missingCount === 1 ? "missing property" : "missing properties"]:
      inspect(missingProperties),
    at: path,
  })
}
