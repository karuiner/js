/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let db = {},
    ans = 0;
  for (let i of nums) {
    if (db[i]) {
      ans = i;
      break;
    } else {
      db[i] = true;
    }
  }
  return ans;
};

// Runtime: 124 ms, faster than 59.24% of JavaScript online submissions for Find the Duplicate Number.
// Memory Usage: 55.3 MB, less than 32.76% of JavaScript online submissions for Find the Duplicate Number.
