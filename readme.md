# assert

Opinionated test assertion.

[![npm package](https://img.shields.io/npm/v/@jsenv/assert.svg?logo=npm&label=package)](https://www.npmjs.com/package/@jsenv/assert)
[![github main](https://github.com/jsenv/assert/workflows/main/badge.svg)](https://github.com/jsenv/assert/actions?workflow=main)
[![codecov coverage](https://codecov.io/gh/jsenv/assert/branch/master/graph/badge.svg)](https://codecov.io/gh/jsenv/assert)

# Presentation

`@jsenv/assert` compare two values with extreme accuracy. If values differ, an error is thrown with a readable message. It helps you to know if the _actual_ value produced in a test matches what you _expected_.

```js
import { assert } from "@jsenv/assert"

const actual = { foo: false }
const expected = { foo: true }
assert({ actual, expected })
```

```console
> node ./docs/demo.mjs
Error [AssertionError]: unequal values
--- found ---
false
--- expected ---
true
--- at ---
value.foo
```

# Why opinionated?

Two things:

1. _assert_ is very strict on _actual_ / _expected_ comparison
2. We recommend to use _assert_ to test everything

## Very strict comparison

It is designed like this to make test fails if something subtle changes. Any subtle change in code might break things relying on it. You need that level of precision by default to ensure your code cannot introduce regression.

## One assertion to test everything

_assert_ can be used to test everything and ideally should be used to test everything. It mostly prevents [bikeshedding](https://en.wiktionary.org/wiki/bikeshedding).

> equal() is my favorite assertion. If the only available assertion in every test suite was equal(), almost every test suite in the world would be better for it.
>
> — Eric Elliot in [Rethinking Unit Test Assertion](https://medium.com/javascript-scene/rethinking-unit-test-assertions-55f59358253f)

Personally, I tend to use only _assert_ because having only on way of doing things make things easier for my brain. And I care more about this than saving lines of code in a test file.

That being said, `@jsenv/assert` has two other assertions than can be used: _assert.any_ and _assert.not_. They exists because they can be useful enough to potentially counterbalance the simplicity of using only one assertion.

# How it works

_assert_ does nothing when _actual_ and _expected_ comparison is successfull but throws an error when comparison is failing.

_actual_ and _expected_ can be different objects but they must deeply look alike in every aspects possible in JavaScript.

To better understand if comparison will fail or not let's see some successfull comparison first and some failing comparisons afterwards.

## Sucessfull comparison examples

```js
import { assert } from "@jsenv/assert"

// dates
{
  const actual = new Date()
  const expected = new Date()

  assert({ actual, expected })
}

// errors
{
  const actual = new Error("message")
  const expected = new Error("message")

  assert({ actual, expected })
}

// objects
{
  const actual = {}
  const expected = {}

  assert({ actual, expected })
}

// regexps
{
  const actual = /ok/
  const expected = /ok/

  assert({ actual, expected })
}
```

## Failing comparison examples

## Failing on type

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

## Failing on prototype

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

# Failing on property

```js
import { assert } from "@jsenv/assert"

const actual = { foo: true }
const expected = { foo: false }

try {
  assert({ actual, expected })
} catch (e) {
  console.log(e.message)
}
```

```console
AssertionError: unequal values
--- found ---
true
--- expected ---
false
--- at ---
value.foo
```

## Failing on properties order

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

## Failing on property configurability

```js
import { assert } from "@jsenv/assert"

const actual = Object.defineProperty({}, "answer", { value: 42 })
const expected = { answer: 42 }

try {
  assert({ actual, expected })
} catch (e) {
  console.log(e.message)
}
```

```console
AssertionError: unequal values
--- found ---
"non-configurable"
--- expected ---
"configurable"
--- at ---
value.answer[[Configurable]]
```

# Examples

This part gives illustrates how _assert_ should be used in common use cases.

## Assert a function throws

You have a function throwing an error in certain cistumstances. You want to reproduce this scenario and test how that function throws.

```js
export const getCircleArea = (circleRadius) => {
  if (isNaN(circleRadius)) {
    throw new TypeError(`circleRadius must be a number, received ${circleRadius}`)
  }
  return circleRadius * circleRadius * Math.PI
}
```

```js
import { assert } from "@jsenv/assert"
import { getCircleArea } from "./circle.js"

try {
  getCircleArea("toto")
  throw new Error("should throw") // this line throw if getCircleArea does not throw as it should
} catch (error) {
  const actual = error
  const expected = new TypeError(`circleRadius must be a number, received toto`)
  assert({ actual, expected })
}
```

## Assert an async function throws

If getCircleArea from previous example was async, add _await_ in front of it.

```diff
try {
-  getCircleArea("toto")
+  await getCircleArea("toto")
  throw new Error("should throw") // this line throw if getCircleArea does not throw as it should
} catch(e) {
```

## Assert a callback is called

You want to test that, under certain circumstances, a function will be called.

```js
export const createAbortSignal = () => {
  const abortSignal = {
    onabort: () => {},
    abort: () => {
      abortSignal.onabort()
    },
  }

  return abortSignal
}
```

Here you want to test that if you create an _abortSignal_ and do _abortSignal.abort_, _abortSignal.onabort_ is called.

```js
import { assert } from "@jsenv/assert"
import { createAbortSignal } from "./abort-signal.js"

// arrange
const abortSignal = createAbortSignal()
let called = false
abortSignal.onabort = () => {
  called = true
}

// act
abortSignal.abort()

// assert
const actual = called
const expected = true
assert({ actual, expected })
```

By the way, code above is a great example of the [AAA pattern](#AAA-pattern).

## Assert something should happen

You need to test that something should happen but you don't have the control to make it happen immediatly or at an exact point in time.

```js
export const callAfter50Ms = (callback) => {
  setTimeout(callback, 50)
}
```

In this scenario you might be tempted to mock _setTimeout_. Doing this make unit test complex and too tied with the code under test. Mocks should be avoided when possible. By waiting several ms, code is testing more accurately what happens.

```js
import { assert } from "@jsenv/assert"
import { callAfter50Ms } from "./call_me_maybe.js"

let called = false
callAfter50Ms(() => {
  called = true
})

await new Promise((resolve) => setTimeout(resolve, 80)) // wait a bit more than 50ms

const actual = called
const expected = true
assert({ actual, expected })
```

## Assert any value of a given type

Let's say you have a function returning a user.

```js
export const createUser = () => {
  return {
    name: "sam",
    creationTime: Date.now(),
  }
}
```

You cannot control the user _creationTime_ easily so you just want to ensure it's a number.

```js
import { createUser } from "./user.js"

const user = createUser()

// assert user shape is correct being flexible on creationTime
{
  const actual = user
  const expected = {
    name: "sam",
    creationTime: actual.creationTime,
  }
  assert({ actual, expected })
}
// then assert user.creationTime is a number
{
  const actual = typeof user.creationTime
  const expected = "number"
  assert({ actual, expected })
}
```

You can also use _assert.any_ but consider [One assertion to test everything](#One-assertion-to-test-everything) before using _assert.any_.

```js
import { assert } from "@jsenv/assert"
import { createUser } from "./user.js"

const user = createUser()
const actual = user
const expected = {
  name: "sam",
  creationTime: assert.any(Number),
}
assert({ actual, expected })
```

## Assert an other value

You have a function returning a random user name that must not be the current user name. Here we don't care about the value itself. What is important is to test it's not an other value.

```js
export const getRandomDifferentUserName = (user) => {
  const randomName = getRandomName()
  if (randomName === user.name) {
    return getRandomDifferentUserName(user)
  }
  return randomName
}

const getRandomName = () => {
  return Array.from({ length: 4 })
    .map(() => getRandomLetter())
    .join("")
}

const getRandomLetter = () => {
  return ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length))
}

const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
```

```js
import { assert } from "@jsenv/assert"
import { getRandomDifferentUserName } from "./user.js"

const name = getRandomDifferentUserName({ name: "toto" })
const actual = name !== "toto"
const expected = true
assert({ actual, expected })
```

You can also use _assert.not_ but consider [One assertion to test everything](#One-assertion-to-test-everything) before using _assert.not_.

```js
import { assert } from "@jsenv/assert"
import { getRandomDifferentUserName } from "./user.js"

const actual = getRandomDifferentUserName({ name: "toto" })
const expected = assert.not("toto")
assert({ actual, expected })
```

## Assert subset of properties

You have an object and you care only about a part of it.

```js
export const getUser = () => {
  return {
    name: "sam",
    age: 32,
    friends: [], // poor sam :(
  }
}
```

Let's assume the important thing to test about _getUser_ are
the _name_ and _age_ properties returned on the object and _friends_ is not important.

In that case recreate a lighter object with less properties (only the one you care about).

```js
import { assert } from "@jsenv/assert"
import { getUser } from "./user.js"

// assuming you care only about name and age
const user = getUser()
// make actual an object with only name and age
const actual = { name: user.name, age: user.age }
const expected = { name: "sam", age: 32 }
assert({ actual, expected })
```

## Assert without property order constraint

You have an object and you don't care about the object properties order.

```js
export const getUser = () => {
  return {
    name: "sam",
    age: 32,
  }
}
```

In that case force the object property order by recreating it.

```js
import { assert } from "@jsenv/assert"
import { getUser } from "./user.js"

// assuming you don't care about properties order
const user = getUser()
// make actual an object with your own property order
const actual = { age: user.age, name: user.name }
const expected = { age: 32, name: "sam" }
assert({ actual, expected })
```

# AAA pattern

The AAA pattern stands for Arrange, Act, Assert. This pattern is really great to organize code in test files.

This pattern is referenced in Node.js best practices:

> Structure your tests with 3 well-separated sections: Arrange, Act & Assert (AAA).
>
> — Yoni Goldberg in [Structure tests by the AAA pattern](https://github.com/goldbergyoni/nodebestpractices/blob/061bd10c2a4e2ba3407d9e1205b0fe702ef82b57/sections/testingandquality/aaa.md)

You can also check the following medium article for an other point of view.

> The AAA (Arrange-Act-Assert) pattern has become almost a standard across the industry.
>
> — Paulo Gomes in [Unit Testing and the Arrange, Act and Assert (AAA) Pattern](https://medium.com/@pjbgf/title-testing-code-ocd-and-the-aaa-pattern-df453975ab80)

# Node.js usage

```js
import { assert } from "@jsenv/assert"
```

It's also possible to use require

```js
const { assert } = require("@jsenv/assert")
```

# Browser usage

```html
<script type="module">
  import { assert } from "https://unpkg.com/@jsenv/assert@latest/dist/esmodule/jsenv_assert.js"
</script>
```

It's also possible use a regular script tag

```html
<script src="https://unpkg.com/@jsenv/assert@latest/dist/global/jsenv_assert.js"></script>
<script>
  const { assert } = window.__jsenv_assert__
</script>
```

For a local installation, use npm

```console
npm i --save-dev @jsenv/assert
```

Then use a tool like [@jsenv/importmap-node-module](https://github.com/jsenv/importmap-node-module) to generate _importmap.importmap_ and use it in your HTML file.

```html
<script type="importmap" src="importmap.importmap"></script>
<script type="module">
  import { assert } from "@jsenv/assert"
</script>
```

# Playground

[Browser playground](https://jsenv.github.io/assert/browser-interactive-example/browser-interactive-example.html)

[Node playground](https://jsenv.github.io/assert/node-interactive-example/node-interactive-example.html)
