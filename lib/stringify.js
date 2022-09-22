'use strict';

const type = require('./type');

/**
 * 
 * @param {any} arg 
 * @param {boolean} strictType 
 * @returns {string|number|null|undefined|boolean}
 */
const stringify = (arg, strictType) => {
  let argType = type(arg);
  if (argType == 'number') {
    return strictType ? arg : "" + arg;
  } else if (argType == 'array' || argType == 'object') {
    return strictType ? JSON.stringify(arg) : Object.entries(arg).toString();
  } else {
    return arg;
  }
}

module.exports = stringify;