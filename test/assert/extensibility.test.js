import { assert } from "@jsenv/assert"
import { ensureAssertionErrorWithMessage } from "@jsenv/assert/test/ensureAssertionErrorWithMessage.js"

try {
  const actual = Object.preventExtensions({ foo: true })
  const expected = Object.preventExtensions({ foo: true })
  assert({ actual, expected })
} catch (e) {
  throw new Error(`should not throw`)
}

try {
  const actual = { foo: true }
  const expected = Object.preventExtensions({ foo: true })
  assert({ actual, expected })
} catch (e) {
  ensureAssertionErrorWithMessage(
    e,
    `unequal values.
--- found ---
"extensible"
--- expected ---
"non-extensible"
--- at ---
value[[Extensible]]`,
  )
}

try {
  const actual = Object.preventExtensions({ foo: true })
  const expected = { foo: true }
  assert({ actual, expected })
} catch (e) {
  ensureAssertionErrorWithMessage(
    e,
    `unequal values.
--- found ---
"non-extensible"
--- expected ---
"extensible"
--- at ---
value[[Extensible]]`,
  )
}
