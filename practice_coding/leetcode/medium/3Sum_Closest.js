/*
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let ans = 1000000,
    n = nums.length;
  nums.sort((a, b) => a - b);
  function f(idx, t, c) {
    if (c > 0) {
      for (let i = idx; i < n - c + 1; i++) {
        f(i + 1, t + nums[i], c - 1);
      }
    } else {
      if (Math.abs(ans - target) > Math.abs(t - target)) {
        ans = t;
      }
    }
  }
  f(0, 0, 3);
  return ans;
};
