"use-strict"
// add whatever parameters you deem necessary & write docstring
/** Given an array of non-zero numbers
 * separate the positives to the left, negatives to the right
 * and return the same array with the numbers " +/- sorted"
 * must be done in place.
 */
function separatePositive(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        if (nums[left] < 0){
            if (nums[right] < 0){
                right--; 
            }else{
                [nums[left], nums[right]] = [nums[right], nums[left]]
            }   
        }else{
            left++;
        }
    }
    return nums;
}
