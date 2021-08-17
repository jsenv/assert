/* eslint-disable import/max-dependencies */
import { anyComparisonToErrorMessage } from "./toErrorMessage/anyComparisonToErrorMessage.js"
import { defaultComparisonToErrorMessage } from "./toErrorMessage/defaultComparisonToErrorMessage.js"
import { referenceComparisonToErrorMessage } from "./toErrorMessage/referenceComparisonToErrorMessage.js"
import { prototypeComparisonToErrorMessage } from "./toErrorMessage/prototypeComparisonToErrorMessage.js"
import { propertiesComparisonToErrorMessage } from "./toErrorMessage/propertiesComparisonToErrorMessage.js"
import { propertiesOrderComparisonToErrorMessage } from "./toErrorMessage/propertiesOrderComparisonToErrorMessage.js"
import { symbolsComparisonToErrorMessage } from "./toErrorMessage/symbolsComparisonToErrorMessage.js"
import { symbolsOrderComparisonToErrorMessage } from "./toErrorMessage/symbolsOrderComparisonToErrorMessage.js"
import { setSizeComparisonToMessage } from "./toErrorMessage/setSizeComparisonToMessage.js"
import { mapEntryComparisonToErrorMessage } from "./toErrorMessage/mapEntryComparisonToErrorMessage.js"
import { matchesRegExpToErrorMessage } from "./toErrorMessage/matchesRegExpToErrorMessage.js"
import { notComparisonToErrorMessage } from "./toErrorMessage/notComparisonToErrorMessage.js"
import { arrayLengthComparisonToMessage } from "./toErrorMessage/arrayLengthComparisonToMessage.js"

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
