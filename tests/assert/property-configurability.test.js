import { assert } from "@jsenv/assert"
import { ensureAssertionErrorWithMessage } from "@jsenv/assert/tests/ensureAssertionErrorWithMessage.js"

try {
  const actual = Object.defineProperty({}, "foo", { configurable: true })
  const expected = Object.defineProperty({}, "foo", { configurable: true })
  assert({ actual, expected })
} catch (e) {
  throw new Error(`should not throw`)
}

try {
  const actual = Object.defineProperty({}, "foo", { configurable: false })
  const expected = Object.defineProperty({}, "foo", { configurable: true })
  assert({ actual, expected })
} catch (e) {
  ensureAssertionErrorWithMessage(
    e,
    `unequal values
--- found ---
"non-configurable"
--- expected ---
"configurable"
--- at ---
value.foo[[Configurable]]`,
  )
}

try {
  const actual = Object.defineProperty({}, "foo", { configurable: true })
  const expected = Object.defineProperty({}, "foo", { configurable: false })
  assert({ actual, expected })
} catch (e) {
  ensureAssertionErrorWithMessage(
    e,
    `unequal values
--- found ---
"configurable"
--- expected ---
"non-configurable"
--- at ---
value.foo[[Configurable]]`,
  )
}
