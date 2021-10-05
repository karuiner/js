/*
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let ans = [];
  for (let i of nums) {
    ans.push(nums[i]);
  }
  return ans;
};

// Runtime: 96 ms, faster than 54.11% of JavaScript online submissions for Build Array from Permutation.
// Memory Usage: 43.3 MB, less than 17.85% of JavaScript online submissions for Build Array from Permutation.
