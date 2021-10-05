/*
 *
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let ans = 0;
  for (let i = 0; i < parseInt(n / 2); i++) {
    ans += n - (2 * i + 1);
  }
  return ans;
};
//Runtime: 84 ms, faster than 60.94% of JavaScript online submissions for Minimum Operations to Make Array Equal.
//Memory Usage: 39 MB, less than 36.86% of JavaScript online submissions for Minimum Operations to Make Array Equal.
