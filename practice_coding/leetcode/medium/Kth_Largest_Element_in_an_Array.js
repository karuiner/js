/*
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a);

  return nums[k - 1];
};

// Runtime: 143 ms, faster than 26.87% of JavaScript online submissions for Kth Largest Element in an Array.
// Memory Usage: 40 MB, less than 75.04% of JavaScript online submissions for Kth Largest Element in an Array.
