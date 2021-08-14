/*
 *
 * @param {number[]} nums
 * @return {number[]}
 */
// var getConcatenation = function(nums) {
//    return [...nums,...nums]
// };
//     Runtime: 147 ms, faster than 5.57% of JavaScript online submissions for Concatenation of Array.
//     Memory Usage: 42.3 MB, less than 53.81% of JavaScript online submissions for Concatenation of Array.

var getConcatenation = function (nums) {
  let ans = [],
    n = nums.length;
  for (let i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[n + i] = nums[i];
  }
  return ans;
};

// Runtime: 149 ms, faster than 5.57% of JavaScript online submissions for Concatenation of Array.
// Memory Usage: 42.4 MB, less than 36.18% of JavaScript online submissions for Concatenation of Array.
