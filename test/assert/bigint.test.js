/* globals BigInt */
import { assert } from "@jsenv/assert"
import { ensureAssertionErrorWithMessage } from "@jsenv/assert/test/ensureAssertionErrorWithMessage.js"

{
  const actual = BigInt(1)
  const expected = BigInt(1)
  assert({ actual, expected })
}

try {
  const actual = BigInt(1)
  const expected = BigInt(2)
  assert({ actual, expected })
  throw new Error("should throw")
} catch (error) {
  ensureAssertionErrorWithMessage(
    error,
    `unequal values.
--- found ---
1n
--- expected ---
2n
--- at ---
value`,
  )
}
