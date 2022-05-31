"use strict";
// add whatever parameters you deem necessary & write docstring
/** Given two strings, s1 and s2
 * if s1 can be found in s2 as a subsequence (order of the letter matters)
 * return true or false
 */

 function isSubsequence(s1, s2) {
    let i = 0;
    let j = 0;

    while (i < s1.length - 1 && j < s2.length) {
        if (s1[i] !== s2[j]) {
            j++;
        } else {
            i++;
            j++;
        }
    }

    // end case

    while (i === s1.length - 1 && j < s2.length) {
        if (s1[i] !== s2[j]) {
            j++;

        } else {
            return true;
        }
    }

    return false;
}


// function isSubsequence(s1, s2) {
//     let i = 0;
//     let j = 0;
//     let match;
//     //case 1
//     while (i < s1.length || j < s2.length){
//         if (s1[i] !== s2[j]){
//             j++;
//             match = false;
//         }else{
//             i++;
//             j++;
//         }


//         if (i === s1.length && s1[i] !== s2[j]){
//             j++;
//             match = false;
//         }else{
//             match = true;
//         }

//     }
//     return match;
// }

    /*
    //case 2
    while (i === s1.length - 1 && j < s2.length){
        if (s1[i] !== s2[j]){
            j++;
        }else return true;
        return false;
    }

    // case 3
    if (i < s1.length && j === s2.length - 1) return false */







































function getCounts(items){
    const freq = {};
    for (let item of items){
        const curr = freq[item] || 0;
        freq[item] = curr + 1;
    }
}