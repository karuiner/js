/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);
};
//Runtime: 80 ms, faster than 76.21% of JavaScript online submissions for Maximum Product of Two Elements in an Array.
//Memory Usage: 39.7 MB, less than 47.41% of JavaScript online submissions for Maximum Product of Two Elements in an Array.
