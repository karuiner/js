/*
 *
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let n = nums.length,
    ans = false;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
        ans = true;
        break;
      }
    }
    if (ans) {
      break;
    }
  }

  return ans;
};

// Runtime: 1078 ms, faster than 30.97% of JavaScript online submissions for Contains Duplicate III.
// Memory Usage: 39.7 MB, less than 91.59% of JavaScript online submissions for Contains Duplicate III.
