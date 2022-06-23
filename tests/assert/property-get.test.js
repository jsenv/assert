import { assert } from "@jsenv/assert"
import { ensureAssertionErrorWithMessage } from "@jsenv/assert/tests/ensureAssertionErrorWithMessage.js"

{
  const actual = Object.defineProperty({}, "foo", { get: () => 1 })
  const expected = Object.defineProperty({}, "foo", { get: () => 1 })
  assert({ actual, expected })
}

{
  // eslint-disable-next-line no-inner-declarations
  function get() {
    return 1
  }
  const actual = Object.defineProperty({}, "foo", {})
  const expected = Object.defineProperty({}, "foo", {
    get,
  })
  try {
    assert({ actual, expected })
  } catch (e) {
    ensureAssertionErrorWithMessage(
      e,
      `unequal values
--- found ---
undefined
--- expected ---
function ${get.name}() {/* hidden */}
--- at ---
value.foo[[Get]]`,
    )
  }
}

{
  // eslint-disable-next-line no-inner-declarations
  function get() {
    return 1
  }
  const actual = Object.defineProperty({}, "foo", { get })
  const expected = Object.defineProperty({}, "foo", {})
  try {
    assert({ actual, expected })
  } catch (e) {
    ensureAssertionErrorWithMessage(
      e,
      `unequal values
--- found ---
function ${get.name}() {/* hidden */}
--- expected ---
undefined
--- at ---
value.foo[[Get]]`,
    )
  }
}

{
  const actualGetter = () => 1
  const expectedGetter = () => 1
  const actual = Object.defineProperty({}, "foo", { get: actualGetter })
  const expected = Object.defineProperty({}, "foo", { get: expectedGetter })
  try {
    assert({ actual, expected })
  } catch (e) {
    ensureAssertionErrorWithMessage(
      e,
      `unequal function names
--- found ---
"${actualGetter.name}"
--- expected ---
"${expectedGetter.name}"
--- at ---
value.foo[[Get]].name
--- details ---
unexpected character at index 0, "a" was found instead of "e"`,
    )
  }
}
