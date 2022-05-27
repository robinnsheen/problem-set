"use strict";
// add whatever parameters you deem necessary & write docstring

/**Frequency counter */
function getCounts(items) {
    const freqCounter = {};
    for (let item of items) {
        const curr = freqCounter[item] || 0;
        freqCounter[item] = curr + 1;
    }
    return freqCounter
}

/**given two positive whole numbers
 * return true if they have the same frequency of digits
 */
function sameFrequency(num1, num2) {
    const num1Str = num1.toString();
    const num2Str = num2.toString();

    if(num1Str.length !== num2Str.length) return false;

    const num1Counts = getCounts(num1Str);
    const num2Counts = getCounts(num2Str);
    for (let digit of num1Str){
        if (num1Counts[digit] !== num2Counts[digit]) return false;
    }
    return true;
}


