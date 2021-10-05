/*
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let db = { 0: [], 1: [], 2: [] };
  for (let i of nums) {
    db[i] = [...db[i], i];
  }
  let ans = [...db[0], ...db[1], ...db[2]];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = ans[i];
  }
};

// Runtime: 76 ms, faster than 70.50% of JavaScript online submissions for Sort Colors.
// Memory Usage: 40 MB, less than 7.14% of JavaScript online submissions for Sort Colors.
