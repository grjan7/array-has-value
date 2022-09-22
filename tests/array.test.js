'use strict';

const arrayHasValue = require('../index');

(function () {
  console.log("\nCase 1: Array with DEFAULT options | Case-Sensitive | Strict Type\n");

  const input = {
    sourceArray: [["a", 10], "world"],
    searchItem: ["a", 10]
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
  console.log("\nCase 2: Array with DEFAULT options | Case-Sensitive | Strict Type\n");

  const input = {
    sourceArray: [["a", 10], "world"],
    searchItem: ["A", 10]
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
  console.log("\nCase 3: Array with options | Case-Insensitive | Strict Type\n");

  const input = {
    sourceArray: [["a", 10], "world"],
    searchItem: ["A", 10],
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
  console.log("\nCase 4: Array with options | Case-Insensitive | Strict Type\n");

  const input = {
    sourceArray: [["a", "10"], "world"],
    searchItem: ["A", 10],
    opts: { caseSensitive: false, strictType: true }
  }
  const result = {
    sourceArray: input.sourceArray,
    searchItem: input.searchItem,
    opts: input.opts,
    expected: false,
    actual: arrayHasValue(input.sourceArray, input.searchItem, input.opts)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 5: Array with options | Case-Insensitive | Non-Strict Type\n");

  const input = {
    sourceArray: [["a", "10"], "world"],
    searchItem: ["A", 10],
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
