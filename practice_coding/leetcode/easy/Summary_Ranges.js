/*
 *
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let a = nums[0],
    b = nums[0],
    ans = [],
    n = nums.length;
  if (n === 0) {
    return ans;
  }
  for (let i = 1; i < n; i++) {
    if (nums[i] - b === 1) {
      b = nums[i];
    } else {
      if (a === b) {
        ans.push(`${b}`);
      } else {
        ans.push(`${a}->${b}`);
      }
      [a, b] = [nums[i], nums[i]];
    }
  }
  if (a === b) {
    ans.push(`${b}`);
  } else {
    ans.push(`${a}->${b}`);
  }
  return ans;
};

// Runtime: 72 ms, faster than 59.00% of JavaScript online submissions for Summary Ranges.
// Memory Usage: 42.2 MB, less than 51.00% of JavaScript online submissions for Summary Ranges.
