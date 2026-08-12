/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let set = new Set(nums);
    let arr = [...set];

    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i];
    }

    return arr.length;
};