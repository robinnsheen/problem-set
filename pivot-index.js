"use strict";

/* Return smallest pivot index where sum of left equals sum of right */
function pivotIndex(ints) {
  console.log(ints);

  let left = 0;
  let right = ints.length-1;

  let leftSum = 0;
  let rightSum = 0;

  const indexToSum = new Map();
  let lowestPivot = ints.length;

  while (left < ints.length) {

    leftSum += ints[left];
    rightSum += ints[right];

    if (left < right) {
      indexToSum.set(left, leftSum);
      indexToSum.set(right, rightSum);
    }

    if (left > right) {

      if (leftSum === indexToSum.get(left)) {
        lowestPivot = Math.min(lowestPivot, left);
      }
      if (rightSum === indexToSum.get(right)) {
        lowestPivot = Math.min(lowestPivot, right);
      }
    }

    left++;
    right--;
  }

  if (lowestPivot === ints.length) return -1;
  return lowestPivot;

}
