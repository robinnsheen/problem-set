"use strict";

/** takes a sorted array of numbers (nums), numeric value (targetAvg)
 * to see if there is a pair where the average = target (true or false)
 * there can be more than one pair.
 */
function averagePair(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let avg = (nums[left] + nums[right]) / 2;
        if (avg === target) {
            return true;
        } else if (avg > target) {
            right--;
        } else {
            left++;
        }
    }
    return false;

}

