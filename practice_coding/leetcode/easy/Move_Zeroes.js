/*
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let k = 0,
    n = nums.length;
  for (let i of nums) {
    if (i !== 0) {
      nums[k] = i;
      k++;
    } else {
    }
  }
  for (let i = k; i < n; i++) {
    nums[i] = 0;
  }
};

// Runtime: 96 ms, faster than 92.17% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 46.9 MB, less than 29.13% of JavaScript online submissions for Move Zeroes.
