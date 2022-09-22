# array-has-value

## Description

This package checks if a value (`searchItem`: `string | number | boolean | object | array | null | undefined`) is in an array (`sourceArray`: `array`) and returns `true` if it is, else it returns `false`. By default, the search is case-sensitive and strictly typed with number. The search is only at the top level of the array.

- To make the search case-insensitive, set the `caseSensitive` to `false` (`{ caseSensitive: false }`).
- To consider number string as number, set the `strictType` to `false` (`{ strictType: false }`).

## Install

```sh

npm install array-has-value 

```

## `arrayHasValue(sourceArray, searchItem, opts)` returns boolean

**sourceArray** | type: array | default: none | required
**searchItem** | type: any | default: none | required
**opts** | type: object | optional
**opts.caseSensitive** | type: boolean | default: true | optional
**opts.strictType** | type: boolean | default: true | optional

## Usage

### Example: With Default Options

#### String

```js

const arrayHasValue = require("array-has-value");

const arr = [ "Hello", "world" ];

arrayHasValue(arr, "hello"); // returns false 

```

```js

const arrayHasValue = require("array-has-value");

const arr = [ "Hello", "world" ];

arrayHasValue(arr, "Hello"); // returns true

```

#### Number

```js

const arrayHasValue = require("array-has-value");

const arr = [ "40", "world" ];

arrayHasValue(arr, 40); // returns false 

```

```js

const arrayHasValue = require("array-has-value");

const arr = [ 40, "world" ];

arrayHasValue(arr, 40); // returns true 

```

#### Object

```js

const arrayHasValue = require("array-has-value");

const arr = [ { name: "John" }, "world" ];

arrayHasValue(arr, { name: "John" }); // returns true 

```

```js

const arrayHasValue = require("array-has-value");

const arr = [ { name: "John" }, "world" ];

arrayHasValue(arr, { name: "john" }); // returns false

```


#### Array

```js

const arrayHasValue = require("array-has-value");

const arr = [ [ "Hello", 10 ], "world" ];

arrayHasValue(arr, [ "Hello", 10 ]); // returns true 

```

```js

const arrayHasValue = require("array-has-value");

const arr = [ [ "Hello", 10 ], "world" ];

arrayHasValue(arr, [ "hello", 10 ]); // returns false 

```

```js

const arrayHasValue = require("array-has-value");

const arr = [ [ "Hello", "10" ], "world" ];

arrayHasValue(arr, [ "Hello", 10 ]); // returns false 

```


#### Boolean

```js

const arrayHasValue = require("array-has-value");

const arr = [ true, "40", "world" ];

arrayHasValue(arr, true); // returns true 

```

```js

const arrayHasValue = require("array-has-value");

const arr = [ 40, "world" ];

arrayHasValue(arr, true); // returns false 

```

#### Null

```js

const arrayHasValue = require("array-has-value");

const arr = [ null, "40", "world" ];

arrayHasValue(arr, null); // returns true 

```

```js

const arrayHasValue = require("array-has-value");

const arr = [ 40, "world" ];

arrayHasValue(arr, null); // returns false 

```

#### Undefined

```js

const arrayHasValue = require("array-has-value");

const arr = [ undefined, "40", "world" ];

arrayHasValue(arr, undefined); // returns true 

```

```js

const arrayHasValue = require("array-has-value");

const arr = [ 40, "world" ];

arrayHasValue(arr, undefined); // returns false 

```


### Example: With Custom Options

#### String | `caseSensitive: false`

```js

const arrayHasValue = require("array-has-value");

const arr = [ "Hello", "world" ];

arrayHasValue(arr, "hello", { caseSensitive: false }); // returns true 

```

#### Number | `strictType: false`

```js

const arrayHasValue = require("array-has-value");

const arr = [ "40", "world" ];

arrayHasValue(arr, 40, { strictType: false }); // returns true

```

#### Object | `caseSensitive: false`

```js

const arrayHasValue = require("array-has-value");

const arr = [ { name: "John" }, "world" ];

arrayHasValue(arr, { name: "john" }, { caseSensitive: false }); // returns true 

```

#### Object | `caseSensitive: false` | `strictType: false`

```js

const arrayHasValue = require("array-has-value");

const arr = [ { name: "John", age: "10" }, "world" ];
const searchItem = { name: "john", age: 10 };
const opts = { caseSensitive: false, strictType: false };

arrayHasValue(arr, searchItem, opts); // returns true

```


#### Array | `caseSensitive: false`

```js

const arrayHasValue = require("array-has-value");

const arr = [ [ "Hello", 10 ], "world" ];

arrayHasValue(arr, [ "hello", 10 ], { caseSensitive: false }); // returns true 

```

#### Array | `strictType: false`

```js

const arrayHasValue = require("array-has-value");

const arr = [ [ "Hello", "10"], "world" ];

arrayHasValue(arr, [ "Hello", 10 ], { strictType: false }); // returns true 

```

#### Array | `caseSensitive: false` | `strictType: false`

```js

const arrayHasValue = require("array-has-value");

const arr = [ [ "Hello", "10" ], "world" ];
const searchItem = [ "hello", 10 ];
const opts = { caseSensitive: false, strictType: false }

arrayHasValue(arr, searchItem, opts); // returns true 

```