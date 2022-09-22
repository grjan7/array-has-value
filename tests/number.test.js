'use strict';

const arrayHasValue = require('../index');

(function () {
  console.log("\nCase 1: Number with DEFAULT options | Case-Sensitive | Strict Type\n");

  const input = {
    sourceArray: ["10", "world"],
    searchItem: 10
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
  console.log("\nCase 2: Number with DEFAULT options | Case-Sensitive | Strict Type\n");

  const input = {
    sourceArray: [10, "world"],
    searchItem: 10
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
  console.log("\nCase 3: Number with options | Case-Sensitive | Non-Strict Type\n");

  const input = {
    sourceArray: ["10", "world"],
    searchItem: 10,
    opts: { strictType: false }
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
  console.log("\nCase 4: Number with options | Case-Insensitive | Non-Strict Type\n");

  const input = {
    sourceArray: ["10", "world"],
    searchItem: "10",
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
