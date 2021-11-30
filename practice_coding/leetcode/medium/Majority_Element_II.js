/*
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let k = Math.floor(nums.length / 3),
    db = {},
    ans = {};
  for (let i of nums) {
    if (db[i] === undefined) {
      db[i] = 1;
    } else {
      db[i]++;
    }
    if (db[i] > k) {
      if (ans[i] === undefined) {
        ans[i] = true;
      }
    }
  }

  return Object.keys(ans)
    .map((x) => Number(x))
    .sort((a, b) => a - b);
};

// Runtime: 92 ms, faster than 37.37% of JavaScript online submissions for Majority Element II.
// Memory Usage: 43 MB, less than 5.54% of JavaScript online submissions for Majority Element II.
