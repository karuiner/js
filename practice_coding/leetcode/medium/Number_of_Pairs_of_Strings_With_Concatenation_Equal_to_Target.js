/*
 *
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function (nums, target) {
  let n = nums.length,
    ans = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        ans++;
      }
      if (nums[j] + nums[i] === target) {
        ans++;
      }
    }
  }

  return ans;
};

// Runtime: 88 ms, faster than 65.88% of JavaScript online submissions for Number of Pairs of Strings With Concatenation Equal to Target.
// Memory Usage: 44.7 MB, less than 36.47% of JavaScript online submissions for Number of Pairs of Strings With Concatenation Equal to Target.
