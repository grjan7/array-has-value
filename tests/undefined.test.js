'use strict';

const arrayHasValue = require('../index');

(function () {
  console.log("\nCase 1: Object with DEFAULT options | Case-Sensitive | Strict Type\n");

  const input = {
    sourceArray: ["world", undefined],
    searchItem: undefined
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
  console.log("\nCase 2: Object with DEFAULT options | Case-Sensitive | Strict Type\n");

  const input = {
    sourceArray: [undefined, "world"],
    searchItem: undefined
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
  console.log("\nCase 3: Object with options | Case-Insensitive | Strict Type\n");

  const input = {
    sourceArray: [undefined, "world"],
    searchItem: undefined,
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
  console.log("\nCase 4: Object with options | Case-Insensitive | Non-Strict Type\n");

  const input = {
    sourceArray: [{ name: "John" }, "world"],
    searchItem: undefined,
    opts: { caseSensitive: false, strictType: false }
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
