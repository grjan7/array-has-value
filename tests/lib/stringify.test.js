'use strict';

const stringify = require('../../lib/stringify');

(function () {
  console.log("\nCase 1: Number | strict type\n");
  const arg = 40;
  const result = {
    arg,
    expected: 40,
    actual: stringify(arg, true)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 2: Number | non-strict type\n");
  const arg = 40;
  const result = {
    arg,
    expected: "40",
    actual: stringify(arg, false)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 3: Array | strict type\n");
  const arg = ["a", "b", 10];
  const result = {
    arg,
    expected: JSON.stringify(arg),
    actual: stringify(arg, true)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 4: Array | non-strict type\n");
  const arg = ["a", "b", 10];
  const result = {
    arg,
    expected: Object.entries(arg).toString(),
    actual: stringify(arg, false)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 5: Object | strict type\n");
  const arg = { name: "John" };
  const result = {
    arg,
    expected: JSON.stringify(arg),
    actual: stringify(arg, true)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 6: Object | non-strict type\n");
  const arg = { name: "John" };
  const result = {
    arg,
    expected: Object.entries(arg).toString(),
    actual: stringify(arg, false)
  }
  console.log(result);
})();