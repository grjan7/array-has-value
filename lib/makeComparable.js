'use strict';

const stringify = require('./stringify');
/**
 * 
 * @param {string|number|boolean|object|undefined} arg 
 * @param {boolean} caseSensitive  if false, string will be lowercased to compare.
 * @param {boolean} strictType if false, number will be stringified
 * @returns {string|number|boolean|null|undefined}
 * 
 */
const makeComparable = (arg, caseSensitive, strictType) => {
  let argString = stringify(arg, strictType);
  if (typeof argString == 'string') {
    if (!caseSensitive) {
      return argString.toLowerCase();
    } else {
      return argString;
    }
  } else {
    return argString;
  }
}

module.exports = makeComparable;