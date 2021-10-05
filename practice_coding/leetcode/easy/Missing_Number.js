/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let s = nums.length * (nums.length + 1) * 0.5;
    return s - nums.reduce((x, y) => x + y);
};

//Runtime: 88 ms, faster than 65.33% of JavaScript online submissions for Missing Number.
//Memory Usage: 41.1 MB, less than 61.89% of JavaScript online submissions for Missing Number.
