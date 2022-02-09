/*
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  let n = nums.length,
    ans = 0;
  if (n === 1) {
    return 0;
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        ans++;
      }
    }
  }
  return ans;
};

// Runtime: 72 ms, faster than 95.42% of JavaScript online submissions for Count Number of Pairs With Absolute Difference K.
// Memory Usage: 42.8 MB, less than 13.59% of JavaScript online submissions for Count Number of Pairs With Absolute Difference K.
