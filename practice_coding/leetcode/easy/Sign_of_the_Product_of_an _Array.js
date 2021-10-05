/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let a = nums.reduce((acc, x) => x * acc, 1);
  return a > 0 ? 1 : a < 0 ? -1 : 0;
};
//Runtime: 80 ms, faster than 76.96% of JavaScript online submissions for Sign of the Product of an Array.
//Memory Usage: 40.3 MB, less than 18.89% of JavaScript online submissions for Sign of the Product of an Array.
