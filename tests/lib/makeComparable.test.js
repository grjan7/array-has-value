'use strict';

const makeComparable = require('../../lib/makeComparable');


//string

(function () {
  console.log("\nCase 1: string | case-sensitive | strict type\n");
  const arg = "Hello";
  const result = {
    arg,
    expected: "Hello",
    actual: makeComparable(arg, true, true)
  }
  console.log(result);

})();

(function () {
  console.log("\nCase 2: string | case-insensitive | strict type\n");
  const arg = "Hello";
  const result = {
    arg,
    expected: "hello",
    actual: makeComparable(arg, false, true)
  }
  console.log(result);
})();


//number


(function () {
  console.log("\nCase 3: number | case-sensitive | strict type\n");
  const arg = 40;
  const result = {
    arg,
    expected: 40,
    actual: makeComparable(arg, true, true)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 4: number | case-sensitive | non-strict type\n");
  const arg = 40;
  const result = {
    arg,
    expected: "40",
    actual: makeComparable(arg, true, false)
  }
  console.log(result);
})();


//boolean


(function () {
  console.log("\nCase 5: boolean | case-sensitive | strict type\n");
  const arg = true;
  const result = {
    arg,
    expected: true,
    actual: makeComparable(arg, true, true)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 6: boolean | case-insensitive | strict type\n");
  const arg = true;
  const result = {
    arg,
    expected: true,
    actual: makeComparable(arg, false, true)
  }
  console.log(result);
})();


//null

(function () {
  console.log("\nCase 7: null | case-sensitive | strict type\n");
  const arg = null;
  const result = {
    arg,
    expected: null,
    actual: makeComparable(arg, true, true)
  }
  console.log(result);
})();


//undefined

(function () {
  console.log("\nCase 8: undefined | case-sensitive | strict type\n");
  const arg = undefined;
  const result = {
    arg,
    expected: undefined,
    actual: makeComparable(arg, true, true)
  }
  console.log(result);
})();


//array

(function () {
  console.log("\nCase 9: array | case-sensitive | strict type\n");
  const arg = ["Hello"];
  const result = {
    arg,
    expected: JSON.stringify(arg),
    actual: makeComparable(arg, true, true)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 10: array | case-insensitive | strict type\n");
  const arg = ["Hello"];
  const result = {
    arg,
    expected: JSON.stringify(arg).toLowerCase(),
    actual: makeComparable(arg, false, true)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 11: array | case-sensitive | non-strict type\n");
  const arg = ["Hello", 10];
  const result = {
    arg,
    expected: Object.entries(arg).toString(),
    actual: makeComparable(arg, true, false)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 12: array | case-insensitive | non-strict type\n");
  const arg = ["Hello", 10];
  const result = {
    arg,
    expected: Object.entries(arg).toString().toLowerCase(),
    actual: makeComparable(arg, false, false)
  }
  console.log(result);
})();


// objects

(function () {
  console.log("\nCase 13: object | case-sensitive | strict type\n");
  const arg = { name: "John", age: 20 };
  const result = {
    arg,
    expected: JSON.stringify(arg),
    actual: makeComparable(arg, true, true)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 14: object | case-insensitive | strict type\n");
  const arg = { name: "John", age: 20 };
  const result = {
    arg,
    expected: JSON.stringify(arg).toLowerCase(),
    actual: makeComparable(arg, false, true)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 15: object | case-sensitive | non-strict type\n");
  const arg = { name: "John", age: 20 };
  const result = {
    arg,
    expected: Object.entries(arg).toString(),
    actual: makeComparable(arg, true, false)
  }
  console.log(result);
})();

(function () {
  console.log("\nCase 16: object | case-insensitive | non-strict type\n");
  const arg = { name: "John", age: 20 };
  const result = {
    arg,
    expected: Object.entries(arg).toString().toLowerCase(),
    actual: makeComparable(arg, false, false)
  }
  console.log(result);
})();