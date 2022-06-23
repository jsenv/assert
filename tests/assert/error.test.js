import { assert } from "@jsenv/assert"
import { ensureAssertionErrorWithMessage } from "@jsenv/assert/tests/ensureAssertionErrorWithMessage.js"
import { executeInNewContext } from "@jsenv/assert/tests/executeInNewContext.js"

{
  const actual = new Error()
  const expected = new Error()
  assert({ actual, expected })
}

{
  const actual = await executeInNewContext("new Error()")
  const expected = await executeInNewContext("new Error()")
  assert({ actual, expected })
}

{
  const actual = await executeInNewContext("new Error()")
  const expected = new Error()
  assert({ actual, expected })
}

{
  const actual = new Error()
  const expected = await executeInNewContext("new Error()")
  assert({ actual, expected })
}

{
  const actual = new Error("foo")
  const expected = new Error("bar")
  try {
    assert({ actual, expected })
  } catch (e) {
    ensureAssertionErrorWithMessage(
      e,
      `unequal error messages
--- found ---
"foo"
--- expected ---
"bar"
--- at ---
value.message
--- details ---
unexpected character at index 0, "f" was found instead of "b"`,
    )
  }
}

if (typeof global === "object") {
  const actual = new Error()
  const expected = new TypeError()
  try {
    assert({ actual, expected })
  } catch (e) {
    ensureAssertionErrorWithMessage(
      e,
      `unequal prototypes
--- prototype found ---
global.Error.prototype
--- prototype expected ---
global.TypeError.prototype
--- at ---
value[[Prototype]]`,
    )
  }
}

// beware test below because depending on node version
// Object.keys(Object.getPrototypeOf(new TypeError()))
// might differ. For instance node 8.5 returns name before constructor
// and node 8.9.0 returns constructor before name
if (typeof global === "object") {
  const actual = new Error()
  const expected = await executeInNewContext("new TypeError()")
  try {
    assert({ actual, expected })
  } catch (e) {
    ensureAssertionErrorWithMessage(
      e,
      `unequal prototypes
--- prototype found ---
global.Error.prototype
--- prototype expected ---
TypeError({
  "constructor": function () {/* hidden */},
  "name": "TypeError",
  "message": ""
})
--- at ---
value[[Prototype]]`,
    )
  }
}
