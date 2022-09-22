'use strict';
/**
 * 
 * @param {any} arg
 * @returns {string} type of the data -- string|number|boolean|null|undefined|array|object 
 * 
 */
const type = (arg) => {
  let argType = typeof arg;
  if (argType == 'object') {
    return Array.isArray(arg) ? 'array' : arg == null ? 'null' : 'object';
  } else {
    return argType;
  }
}

module.exports = type;