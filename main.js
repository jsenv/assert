/*
 * This file is the entry point of this codebase
 * - It is responsible to export the documented API
 * - It should be kept simple (just re-export) to help reader to
 *   discover codebase progressively
 */

export { assert } from "./src/assert.js"
export { isAssertionError, createAssertionError } from "./src/assertionError.js"
