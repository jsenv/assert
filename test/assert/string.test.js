import { assert } from "@jsenv/assert"
import { ensureAssertionErrorWithMessage } from "@jsenv/assert/test/ensureAssertionErrorWithMessage.js"

{
  const actual = String.fromCharCode(127)
  const expected = ""
  try {
    assert({ actual, expected })
  } catch (e) {
    ensureAssertionErrorWithMessage(
      e,
      `unequal values
--- found ---
"\\x7F"
--- expected ---
""
--- at ---
value`,
    )
  }
}
