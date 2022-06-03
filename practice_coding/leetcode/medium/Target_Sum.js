/*
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let n = nums.length;
  function f(s, k) {
    let ans = 0;
    if (k === n - 1) {
      if (s - nums[k] === target) {
        ans++;
      }
      if (s + nums[k] === target) {
        ans++;
      }
    } else {
      ans += f(s - nums[k], k + 1);
      ans += f(s + nums[k], k + 1);
    }
    return ans;
  }

  return f(0, 0);
};

// Runtime: 1628 ms, faster than 45.49% of JavaScript online submissions for Target Sum.
// Memory Usage: 41.7 MB, less than 97.49% of JavaScript online submissions for Target Sum.
