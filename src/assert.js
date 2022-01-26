import {
  compare,
  createNotExpectation,
  createAnyExpectation,
  createMatchesRegExpExpectation,
} from "./internal/compare.js"
import { errorMessageFromComparison } from "./internal/errorMessageFromComparison.js"
import { createAssertionError } from "./assertionError.js"

export const assert = (...args) => {
  if (args.length === 0) {
    throw new Error(
      `assert must be called with { actual, expected }, missing first argument`,
    )
  }

  if (args.length > 1) {
    throw new Error(
      `assert must be called with { actual, expected }, received too many arguments`,
    )
  }

  const firstArg = args[0]
  if (typeof firstArg !== "object" || firstArg === null) {
    throw new Error(
      `assert must be called with { actual, expected }, received ${firstArg} as first argument instead of object`,
    )
  }

  if ("actual" in firstArg === false) {
    throw new Error(
      `assert must be called with { actual, expected }, missing actual property on first argument`,
    )
  }

  if ("expected" in firstArg === false) {
    throw new Error(
      `assert must be called with { actual, expected }, missing expected property on first argument`,
    )
  }

  const {
    actual,
    expected,
    message,
    // An other good alternative to "checkPropertiesOrder" could be
    // to have an helper like sortingProperties
    // const value = assert.sortProperties(value)
    // const expected = assert.sortProperties({ foo: true, bar: true })
    checkPropertiesOrder = true,
  } = firstArg

  const expectation = {
    actual,
    expected,
  }

  const comparison = compare(expectation, { checkPropertiesOrder })
  if (comparison.failed) {
    const error = createAssertionError(
      message || errorMessageFromComparison(comparison),
    )
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, assert)
    }
    throw error
  }
}

assert.not = (value) => {
  return createNotExpectation(value)
}

assert.any = (Constructor) => {
  return createAnyExpectation(Constructor)
}

assert.matchesRegExp = (regexp) => {
  const isRegExp = regexp instanceof RegExp
  if (!isRegExp) {
    throw new TypeError(
      `assert.matchesRegExp must be called with a regexp, received ${regexp}`,
    )
  }
  return createMatchesRegExpExpectation(regexp)
}

assert.asObjectWithoutPrototype = (object) => {
  const objectWithoutPrototype = Object.create(null)
  Object.assign(objectWithoutPrototype, object)
  return objectWithoutPrototype
}
