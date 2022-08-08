/*
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 풀이시도 2
var threeSumClosest = function (nums, target) {
  let ans = 1000000,
    n = nums.length;
  let i = 0,
    j = n - 1;
  while (j - i >= 2) {
    let a = nums[i] + nums[i + 1] + nums[j],
      b = nums[i] + nums[j - 1] + nums[j];
    let k1 = Math.abs(a - target),
      k2 = Math.abs(b - target);
    console.log(a, b, k1, k2);
    if (k1 > k2) {
      if (Math.abs(ans - target) > k2) {
        ans = b;
      }
      i++;
    } else {
      if (Math.abs(ans - target) > k1) {
        ans = a;
      }
      j--;
    }
  }
  return ans;
};
// 풀이시도 1
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
