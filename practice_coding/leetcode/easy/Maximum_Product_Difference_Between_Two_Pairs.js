/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  return nums[n - 1] * nums[n - 2] - nums[0] * nums[1];
};

// Runtime: 100 ms, faster than 66.59% of JavaScript online submissions for Maximum Product Difference Between Two Pairs.
// Memory Usage: 41.6 MB, less than 69.27% of JavaScript online submissions for Maximum Product Difference Between Two Pairs.
