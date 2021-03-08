/*
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let result = [],
        s = 0;
    for (let i = 0; i < nums.length; i++) {
        s += nums[i];
        result.push(s);
    }
    return result;
};
//Runtime: 72 ms, faster than 97.09% of JavaScript online submissions for Running Sum of 1d Array.
//Memory Usage: 39.3 MB, less than 16.03% of JavaScript online submissions for Running Sum of 1d Array.
