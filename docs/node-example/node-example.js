// eslint-disable-next-line import/no-unresolved
const { assert } = require("../../dist/commonjs/jsenv_assert.cjs")

const actual = { foo: false }
const expected = { foo: true }
assert({ actual, expected })
