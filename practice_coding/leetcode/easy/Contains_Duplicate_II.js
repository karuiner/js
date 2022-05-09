/*
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 풀이 완료
var containsNearbyDuplicate = function (nums, k) {
  let n = nums.length,
    ans = false,
    db = {};
  for (let i = 0; i < n; i++) {
    if (db[nums[i]] === undefined || i - db[nums[i]] > k) {
      db[nums[i]] = i;
    } else {
      ans = true;
      break;
    }
  }
  return ans;
};

// Runtime: 213 ms, faster than 35.31% of JavaScript online submissions for Contains Duplicate II.
// Memory Usage: 63.8 MB, less than 53.25% of JavaScript online submissions for Contains Duplicate II.

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
