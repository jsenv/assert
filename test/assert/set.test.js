import { assert } from "../../index.js"
import { ensureAssertionErrorWithMessage } from "../ensureAssertionErrorWithMessage.js"

try {
  const actual = new Set()
  const expected = new Set()
  assert({ actual, expected })
} catch (e) {
  throw new Error(`should not throw`)
}

try {
  const actual = new Set([0])
  const expected = new Set([0])
  assert({ actual, expected })
} catch (e) {
  throw new Error(`should not throw`)
}

try {
  const actual = new Set([{ foo: true }])
  const expected = new Set([{ foo: false }])
  assert({ actual, expected })
} catch (e) {
  ensureAssertionErrorWithMessage(
    e,
    `unequal values.
--- found ---
true
--- expected ---
false
--- at ---
value[[setEntry:0]].foo`,
  )
}

try {
  const actual = new Set()
  const expected = new Set([1, 2])
  assert({ actual, expected })
} catch (e) {
  ensureAssertionErrorWithMessage(
    e,
    `a set is smaller than expected.
--- set size found ---
0
--- set size expected ---
2
--- at ---
value`,
  )
}

try {
  const actual = new Set([1, 2])
  const expected = new Set()
  assert({ actual, expected })
} catch (e) {
  ensureAssertionErrorWithMessage(
    e,
    `a set is bigger than expected.
--- set size found ---
2
--- set size expected ---
0
--- at ---
value`,
  )
}
