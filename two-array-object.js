// add whatever parameters you deem necessary & write docstring
/**
 * input: 2 arrays, possibly diff lenghts
 * 1st arr: keys
 * 2nd: values
 * return: obj created from keys and values
 *
 * not enough val: rest of keys have val of null
 * not enough keys: ignore keys
 */
function twoArrayObject(keyArr, valArr) {

  let obj = {};

  for (let i=0; i < keyArr.length; i++) {

    if (valArr[i] === undefined) {
      obj[keyArr[i]] = null;
    } else {
      obj[keyArr[i]] = valArr[i];
    }


  }

  return obj;

}
