"use strict";

/*count the number of pairs that add to target sum */
function countPairs(ints, num) {
  const sumPairs = new Set();
  let pairCount = 0;

  for (let int of ints) {
    const diff = num-int;
    if (sumPairs.has(diff)) {
      pairCount ++;
    } else {
      sumPairs.add(int);
    }
  }

  return pairCount;

}
