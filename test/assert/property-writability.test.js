import { assert } from "../../index.js"
import { ensureAssertionErrorWithMessage } from "../ensureAssertionErrorWithMessage.js"

try {
  const actual = Object.defineProperty({}, "foo", { writable: true })
  const expected = Object.defineProperty({}, "foo", { writable: true })
  assert({ actual, expected })
} catch (e) {
  throw new Error(`should not throw`)
}

try {
  const actual = Object.defineProperty({}, "foo", { writable: false })
  const expected = Object.defineProperty({}, "foo", { writable: true })
  assert({ actual, expected })
} catch (e) {
  ensureAssertionErrorWithMessage(
    e,
    `unequal values.
--- found ---
"non-writable"
--- expected ---
"writable"
--- at ---
value.foo[[Writable]]`,
  )
}

try {
  const actual = Object.defineProperty({}, "foo", { writable: true })
  const expected = Object.defineProperty({}, "foo", { writable: false })
  assert({ actual, expected })
} catch (e) {
  ensureAssertionErrorWithMessage(
    e,
    `unequal values.
--- found ---
"writable"
--- expected ---
"non-writable"
--- at ---
value.foo[[Writable]]`,
  )
}
