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
      `unequal strings
--- found ---
"\\x7F"
--- expected ---
""
--- at ---
value
--- details ---
string found is too long, it has 1 extra character`,
    )
  }
}

{
  const actual = `	`
  const expected = ` `
  try {
    assert({ actual, expected })
  } catch (e) {
    ensureAssertionErrorWithMessage(
      e,
      `unequal strings
--- found ---
"\\t"
--- expected ---
" "
--- at ---
value
--- details ---
unexpected character at index 0, "\\t" was found instead of " "`,
    )
  }
}

{
  const actual = `aa`
  const expected = ``
  try {
    assert({ actual, expected })
  } catch (e) {
    ensureAssertionErrorWithMessage(
      e,
      `unequal strings
--- found ---
"aa"
--- expected ---
""
--- at ---
value
--- details ---
string found is too long, it has 2 extra characters`,
    )
  }
}

{
  const actual = ``
  const expected = `a`
  try {
    assert({ actual, expected })
  } catch (e) {
    ensureAssertionErrorWithMessage(
      e,
      `unequal strings
--- found ---
""
--- expected ---
"a"
--- at ---
value
--- details ---
string found is too short, 1 character is missing`,
    )
  }
}

{
  const actual = ``
  const expected = `aa`
  try {
    assert({ actual, expected })
  } catch (e) {
    ensureAssertionErrorWithMessage(
      e,
      `unequal strings
--- found ---
""
--- expected ---
"aa"
--- at ---
value
--- details ---
string found is too short, 2 characters are missing`,
    )
  }
}
