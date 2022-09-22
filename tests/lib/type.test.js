'use strict';

const type = require('../../lib/type');

(function () {
  console.log("\nCase 1: String\n");
  const arg = "Hello";
  const result = {
    arg,
    expected: "string",
    actual: type(arg)
  }
  console.log(result);
})();


(function () {
  console.log("\nCase 2: Number\n");
  const arg = 40;
  const result = {
    arg,
    expected: "number",
    actual: type(arg)
  }
  console.log(result);
})();


(function () {
  console.log("\nCase 3: Boolean\n");
  const arg = true;
  const result = {
    arg,
    expected: "boolean",
    actual: type(arg)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 4: Null\n");
  const arg = null;
  const result = {
    arg,
    expected: "null",
    actual: type(arg)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 5: Undefined\n");
  const arg = undefined;
  const result = {
    arg,
    expected: "undefined",
    actual: type(arg)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 6: Array\n");
  const arg = [{ name: "Arvind" }, 40, "Helo"];
  const result = {
    arg,
    expected: "array",
    actual: type(arg)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 7: Object\n");
  const arg = { name: "Arvind" };
  const result = {
    arg,
    expected: "object",
    actual: type(arg)
  }
  console.log(result);
})();