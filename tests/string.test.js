'use strict';

const arrayHasValue = require('../index');

(function () {
  console.log("\nCase 1: String with DEFAULT options | Case-Sensitive | Strict Type\n");

  const input = {
    sourceArray: ["hello", "world"],
    searchItem: "hello"
  }
  const result = {
    sourceArray: input.sourceArray,
    searchItem: input.searchItem,
    expected: true,
    actual: arrayHasValue(input.sourceArray, input.searchItem)
  }
  console.log(result);
})();


(function () {
  console.log("\nCase 2: String with DEFAULT options | Case-Sensitive | Strict Type\n");

  const input = {
    sourceArray: ["hello", "world"],
    searchItem: "Hello"
  }
  const result = {
    sourceArray: input.sourceArray,
    searchItem: input.searchItem,
    expected: false,
    actual: arrayHasValue(input.sourceArray, input.searchItem)
  }
  console.log(result);
})();


(function () {
  console.log("\nCase 3: String with options | Case-Insensitive | Strict Type\n");

  const input = {
    sourceArray: ["hello", "world"],
    searchItem: "Hello",
    opts: { caseSensitive: false }
  }
  const result = {
    sourceArray: input.sourceArray,
    searchItem: input.searchItem,
    opts: input.opts,
    expected: true,
    actual: arrayHasValue(input.sourceArray, input.searchItem, input.opts)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 4: String with options | Case-Insensitive | Non-Strict Type\n");

  const input = {
    sourceArray: ["hello", "world"],
    searchItem: "Hello",
    opts: { caseSensitive: false, strictType: false }
  }
  const result = {
    sourceArray: input.sourceArray,
    searchItem: input.searchItem,
    opts: input.opts,
    expected: true,
    actual: arrayHasValue(input.sourceArray, input.searchItem, input.opts)
  }
  console.log(result);
})();
