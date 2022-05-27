"use strict";

/**
 * input: 2 arrays, possibly diff lenghts
 * 1st arr: keys
 * 2nd: values
 * return: obj created from keys and values
 *
 * not enough val: rest of keys have val of null
 * not enough keys: ignore keys
 */
function twoArrayObject(keys, vals) {

  let obj = {};

  for (let i=0; i < keys.length; i++) {

    if (vals[i] === undefined) {
      obj[keys[i]] = null;
    } else {
      obj[keys[i]] = vals[i];
    }


  }

  return obj;

}
