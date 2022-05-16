/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  let n = nums.length,
    dp = Array(n).fill(0);
  dp[0] = nums[0];
  for (let i = 1; i < n; i++) {
    c = nums[i];
    for (let j = 0; j < i; j++) {
      [c, dp[j]] = [(c + dp[j]) % 10, c % 10];
    }
    dp[i] = c;
  }
  return dp[n - 1];
};

// Runtime: 291 ms, faster than 37.90% of JavaScript online submissions for Find Triangular Sum of an Array.
// Memory Usage: 46.2 MB, less than 70.17% of JavaScript online submissions for Find Triangular Sum of an Array.
