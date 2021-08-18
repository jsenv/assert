# assert

Opinionated test assertion.

[![npm package](https://img.shields.io/npm/v/@jsenv/assert.svg?logo=npm&label=package)](https://www.npmjs.com/package/@jsenv/assert)
[![github main](https://github.com/jsenv/assert/workflows/main/badge.svg)](https://github.com/jsenv/assert/actions?workflow=main)
[![codecov coverage](https://codecov.io/gh/jsenv/assert/branch/main/graph/badge.svg)](https://codecov.io/gh/jsenv/assert)

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

# Property value failure

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

## Property configurability failure

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

# Common use cases

This part gives illustrates how _assert_ should be used in common use cases.

## Assert a function throws

You have a function throwing an error in certain cistumstances.

_circle.js_

```js
export const getCircleArea = (circleRadius) => {
  if (isNaN(circleRadius)) {
    throw new TypeError(`circleRadius must be a number, received ${circleRadius}`)
  }
  return circleRadius * circleRadius * Math.PI
}
```

_circle.test.js_

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

If _getCircleArea_ from previous example was async, add _await_ in front of it.

```diff
try {
-  getCircleArea("toto")
+  await getCircleArea("toto")
  throw new Error("should throw") // this line throw if getCircleArea does not throw as it should
} catch(e) {
```

## Assert a callback is called

You want to test that, under certain circumstances, a function will be called.

_abort_signal.js_

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

_abort_signal.test.js_

```js
import { assert } from "@jsenv/assert"
import { createAbortSignal } from "./abort_signal.js"

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

## Assert callback will be called

_call_me_maybe.js_

```js
export const callAfter50Ms = (callback) => {
  setTimeout(callback, 50)
}
```

_call_me_maybe.test.js_

```js
import { assert } from "@jsenv/assert"
import { callAfter50Ms } from "./call_me_maybe.js"

let called = false
callAfter50Ms(() => {
  called = true
})

// Wait 80ms, then assert callback was called
await new Promise((resolve) => setTimeout(resolve, 80))

const actual = called
const expected = true
assert({ actual, expected })
```

## Assert any value of a given type

Let's say you have a function returning a user.
You cannot control the user _creationTime_ easily so you just want to ensure it's a number.

_user.js_

```js
export const createUser = () => {
  return {
    name: "sam",
    creationTime: Date.now(),
  }
}
```

_user.test.js_

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

You have a function returning a random user name that must not be the current user name.
Here we don't care about the value itself.
What is important is to test it's not an other value.

_randomize_user_name.js_

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

_randomize_user_name.test.js_

```js
import { assert } from "@jsenv/assert"
import { getRandomDifferentUserName } from "./_randomize_user_name.js"

const name = getRandomDifferentUserName({ name: "toto" })
const actual = name !== "toto"
const expected = assert.not("toto")
assert({ actual, expected })
```

## Assert subset of properties

You have an object and you care only about a part of it.

_user.js_

```js
export const getUser = () => {
  return {
    name: "sam",
    age: 32,
    friends: [], // poor sam :(
  }
}
```

_user.test.js_

```js
import { assert } from "@jsenv/assert"
import { getUser } from "./user.js"

const user = getUser()
// assuming the important things to tests are only
// name and age: create an object with only name and age
const actual = { name: user.name, age: user.age }
const expected = { name: "sam", age: 32 }
assert({ actual, expected })
```

## Assert without property order constraint

You have an object and you don't care about the object properties order.

_user.js_

```js
export const getUser = () => {
  return {
    name: "sam",
    age: 32,
  }
}
```

_user.test.js_

```js
import { assert } from "@jsenv/assert"
import { getUser } from "./user.js"

const user = getUser()
// assuming you don't care about properties order:
// create an object with your own property order
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

For a local installation, you can use npm

```console
npm i --save-dev @jsenv/assert
```

Then use a tool like [@jsenv/importmap-node-module](https://github.com/jsenv/importmap-node-module) to generate _importmap.importmap_ and use it in your HTML file.

```html
<script type="importmap" src="./importmap.importmap"></script>
<script type="module">
  import { assert } from "@jsenv/assert"
</script>
```

# Playground

[Browser playground](https://jsenv.github.io/assert/browser-interactive-example/browser-interactive-example.html)

[Node playground](https://jsenv.github.io/assert/node-interactive-example/node-interactive-example.html)

# Why opinionated?

1 - _assert_ is very strict on _actual_ / _expected_ comparison

It is designed like this to make test fails if something subtle changes. Any subtle change in code might break things relying on it. You need that level of precision by default to ensure your code cannot introduce regression.

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
