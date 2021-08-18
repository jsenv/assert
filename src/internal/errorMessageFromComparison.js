/* eslint-disable import/max-dependencies */
import { anyComparisonToErrorMessage } from "./error_message/anyComparisonToErrorMessage.js"
import { defaultComparisonToErrorMessage } from "./error_message/defaultComparisonToErrorMessage.js"
import { referenceComparisonToErrorMessage } from "./error_message/referenceComparisonToErrorMessage.js"
import { prototypeComparisonToErrorMessage } from "./error_message/prototypeComparisonToErrorMessage.js"
import { propertiesComparisonToErrorMessage } from "./error_message/propertiesComparisonToErrorMessage.js"
import { propertiesOrderComparisonToErrorMessage } from "./error_message/propertiesOrderComparisonToErrorMessage.js"
import { symbolsComparisonToErrorMessage } from "./error_message/symbolsComparisonToErrorMessage.js"
import { symbolsOrderComparisonToErrorMessage } from "./error_message/symbolsOrderComparisonToErrorMessage.js"
import { setSizeComparisonToMessage } from "./error_message/setSizeComparisonToMessage.js"
import { mapEntryComparisonToErrorMessage } from "./error_message/mapEntryComparisonToErrorMessage.js"
import { matchesRegExpToErrorMessage } from "./error_message/matchesRegExpToErrorMessage.js"
import { notComparisonToErrorMessage } from "./error_message/notComparisonToErrorMessage.js"
import { arrayLengthComparisonToMessage } from "./error_message/arrayLengthComparisonToMessage.js"

export const errorMessageFromComparison = (comparison) => {
  const failedComparison = deepestComparison(comparison)
  return (
    firstFunctionReturningSomething(
      [
        anyComparisonToErrorMessage,
        mapEntryComparisonToErrorMessage,
        notComparisonToErrorMessage,
        matchesRegExpToErrorMessage,
        prototypeComparisonToErrorMessage,
        referenceComparisonToErrorMessage,
        propertiesComparisonToErrorMessage,
        propertiesOrderComparisonToErrorMessage,
        symbolsComparisonToErrorMessage,
        symbolsOrderComparisonToErrorMessage,
        setSizeComparisonToMessage,
        arrayLengthComparisonToMessage,
      ],
      failedComparison,
    ) || defaultComparisonToErrorMessage(failedComparison)
  )
}

const deepestComparison = (comparison) => {
  let current = comparison

  while (current) {
    const { children } = current
    if (children.length === 0) break
    current = children[children.length - 1]
  }

  return current
}

const firstFunctionReturningSomething = (fns, ...args) => {
  let i = 0
  while (i < fns.length) {
    const fn = fns[i]
    const returnValue = fn(...args)
    if (returnValue !== null && returnValue !== undefined) return returnValue
    i++
  }
  return undefined
}
