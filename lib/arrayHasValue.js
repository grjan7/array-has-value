'use strict';

const makeComparable = require('./makeComparable.js');
const type = require('./type');

/**
 * 
 * @param {array} sourceArray 
 * @param {string|number|boolean|object|array|null|undefined} searchItem item to be searched in the sourceArray
 * @param {object} opts tells if the search need to be caseSensitive strictType or not. Default options: {caseSensitive: true, strictType:true}
 * @returns {boolean} true if the searchItem is in the sourceArray, else it returns false.
 *   
 */

function arrayHasValue(sourceArray, searchItem, opts) {
  //arguments validation
  if (arguments.length < 2) {
    throw new Error("sourceArray or searchItem is missing.")
  }
  if (!Array.isArray(sourceArray)) {
    throw new Error("sourceArray must be an array.")
  }

  //setting options
  let caseSensitive = opts && opts.caseSensitive != undefined ? opts.caseSensitive : true;
  let strictType = opts && opts.strictType != undefined ? opts.strictType : true;

  //makes searchItem comparable based on given options
  const searchItemType = type(searchItem);
  const comparableSearchItem = makeComparable(searchItem, caseSensitive, strictType);

  for (let item of sourceArray) {
    if (strictType) {
      let itemType = type(item);
      if (searchItemType == itemType) {
        //makes sourceArray item comparable based on given options
        let comparableItem = makeComparable(item, caseSensitive, strictType);
        if (comparableSearchItem == comparableItem) {
          return true;
        }
      }
    } else {
      //makes sourceArray item comparable based on given options
      let comparableItem = makeComparable(item, caseSensitive, strictType);
      if (comparableSearchItem == comparableItem) {
        return true;
      }
    }
  }
  return false;
}


module.exports = arrayHasValue;