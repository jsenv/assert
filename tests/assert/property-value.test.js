import { assert } from "@jsenv/assert"
import { ensureAssertionErrorWithMessage } from "@jsenv/assert/tests/ensureAssertionErrorWithMessage.js"

try {
  const actual = { foo: true }
  const expected = { foo: true }
  assert({ actual, expected })
} catch (e) {
  throw new Error(`should not throw`)
}

try {
  const actual = { foo: true }
  const expected = { foo: false }
  assert({ actual, expected })
} catch (e) {
  ensureAssertionErrorWithMessage(
    e,
    `unequal values
--- found ---
true
--- expected ---
false
--- at ---
value.foo`,
  )
}

try {
  const actual = { ["with space"]: true }
  const expected = { ["with space"]: false }
  assert({ actual, expected })
} catch (e) {
  ensureAssertionErrorWithMessage(
    e,
    `unequal values
--- found ---
true
--- expected ---
false
--- at ---
value["with space"]`,
  )
}

try {
  const symbol = Symbol()
  const actual = { [symbol]: true }
  const expected = { [symbol]: true }
  assert({ actual, expected })
} catch (e) {
  throw new Error(`should not throw`)
}

try {
  const symbol = Symbol()
  const actual = { [symbol]: true }
  const expected = { [symbol]: false }
  assert({ actual, expected })
} catch (e) {
  ensureAssertionErrorWithMessage(
    e,
    `unequal values
--- found ---
true
--- expected ---
false
--- at ---
value[Symbol()]`,
  )
}

try {
  const symbol = Symbol.iterator
  const actual = { [symbol]: true }
  const expected = { [symbol]: false }
  assert({ actual, expected })
} catch (e) {
  ensureAssertionErrorWithMessage(
    e,
    `unequal values
--- found ---
true
--- expected ---
false
--- at ---
value[Symbol.iterator]`,
  )
}

try {
  const symbol = Symbol("foo")
  const actual = { [symbol]: true }
  const expected = { [symbol]: false }
  assert({ actual, expected })
} catch (e) {
  ensureAssertionErrorWithMessage(
    e,
    `unequal values
--- found ---
true
--- expected ---
false
--- at ---
value[Symbol("foo")]`,
  )
}

try {
  const symbol = Symbol.for("foo")
  const actual = { [symbol]: true }
  const expected = { [symbol]: false }
  assert({ actual, expected })
} catch (e) {
  ensureAssertionErrorWithMessage(
    e,
    `unequal values
--- found ---
true
--- expected ---
false
--- at ---
value[Symbol.for("foo")]`,
  )
}
