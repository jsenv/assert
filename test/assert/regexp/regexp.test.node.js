import vm from "vm"
import { assert } from "../../../index.js"
import { ensureAssertionErrorWithMessage } from "../../ensureAssertionErrorWithMessage.js"

try {
  const actual = vm.runInNewContext("/a/")
  const expected = /a/
  assert({ actual, expected })
} catch (e) {
  throw new Error(`should not throw`)
}

try {
  const actual = vm.runInNewContext("/a/")
  const expected = /b/
  assert({ actual, expected })
} catch (e) {
  ensureAssertionErrorWithMessage(
    e,
    `unequal values.
--- found ---
"/a/"
--- expected ---
"/b/"
--- at ---
value.toString()`,
  )
}