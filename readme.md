# assert [![npm package](https://img.shields.io/npm/v/@jsenv/assert.svg?logo=npm&label=package)](https://www.npmjs.com/package/@jsenv/assert) [![github main](https://github.com/jsenv/assert/workflows/main/badge.svg)](https://github.com/jsenv/assert/actions?workflow=main) [![codecov coverage](https://codecov.io/gh/jsenv/assert/branch/main/graph/badge.svg)](https://codecov.io/gh/jsenv/assert)

`@jsenv/assert` compare two values with extreme accuracy. If values differ, an error is thrown with a readable message. It helps you to know if the _actual_ value produced in a test matches what you _expected_.

```js
import { assert } from "@jsenv/assert"

const actual = { foo: false }
const expected = { foo: true }
assert({ actual, expected })
```

```console
> node ./docs/demo.mjs

AssertionError: unequal values
--- found ---
false
--- expected ---
true
--- at ---
value.foo
```

# How it works

_assert_ does nothing when comparison is successfull but throws an error when comparison is failing.
To illustrates when a comparison fails, check the list of examples below

## Type failure

```js
import { assert } from "@jsenv/assert"

const actual = 10
const expected = "10"

try {
  assert({ actual, expected })
} catch (e) {
  console.log(e.message)
}
```

```console
AssertionError: unequal values
--- found ---
10
--- expected ---
"10"
--- at ---
value
```

## Prototype failure

```js
import { assert } from "@jsenv/assert"

const actual = new TypeError()
const expected = new Error()

try {
  assert({ actual, expected })
} catch (e) {
  console.log(e.message)
}
```

```console
AssertionError: unequal prototypes
--- prototype found ---
window.TypeError.prototype
--- prototype expected ---
window.Error.prototype
--- at ---
value[[Prototype]]
```

## Properties order failure

```js
import { assert } from "@jsenv/assert"

const actual = { foo: true, bar: true }
const expected = { bar: true, foo: true }

try {
  assert({ actual, expected })
} catch (e) {
  console.log(e.message)
}
```

```console
AssertionError: unexpected properties order
--- properties order found ---
"foo"
"bar"
--- properties order expected ---
"bar"
"foo"
--- at ---
value
```

# Why opinionated?

1 - _assert_ is very strict on _actual_ / _expected_ comparison

It is designed like this to make test fails if something subtle changes. Any subtle change in code might break things relying on it. You need that level of precision by default.

2 - We recommend to use _assert_ to test everything

_assert_ can be used to test everything and ideally should be used to test everything. It mostly prevents [bikeshedding](https://en.wiktionary.org/wiki/bikeshedding).

> equal() is my favorite assertion. If the only available assertion in every test suite was equal(), almost every test suite in the world would be better for it.
>
> — Eric Elliot in [Rethinking Unit Test Assertion](https://medium.com/javascript-scene/rethinking-unit-test-assertions-55f59358253f)

Personally, I tend to use only _assert_ because having only on way of doing things make things easier for my brain. And I care more about this than saving lines of code in a test file.

That being said, there is a few other assertions than can be used:

- _assert.any_
- _assert.not_
- _assert.matchesRegExp_

They exists because they can be useful enough to potentially counterbalance the simplicity of using only one assertion.

# Playground

[Browser playground](https://jsenv.github.io/assert/browser-interactive-example/browser-interactive-example.html)

[Node playground](https://jsenv.github.io/assert/node-interactive-example/node-interactive-example.html)

# Usage

For how to use and install, see [docs/usage.md](./docs/usage.md).
