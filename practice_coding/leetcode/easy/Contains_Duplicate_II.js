/*
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 풀이 시도 1
var containsNearbyDuplicate = function (nums, k) {
  let n = nums.length,
    ans = false;
  for (let i = 0; i < n; i++) {
    if (nums.slice(i + 1, i + k + 1).includes(nums[i])) {
      ans = true;
      break;
    }
  }
  return ans;
};
