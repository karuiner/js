/*
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    return nums.map((x) => x ** 2).sort((x, y) => x - y);
};
//Runtime: 124 ms, faster than 59.36% of JavaScript online submissions for Squares of a Sorted Array.
//Memory Usage: 44.7 MB, less than 96.35% of JavaScript online submissions for Squares of a Sorted Array.
