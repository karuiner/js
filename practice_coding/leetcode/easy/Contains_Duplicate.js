/*
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let db = {},
    ans = false;
  for (let i of nums) {
    db[i] = db[i] ? db[i] + 1 : 1;
    if (db[i] > 1) {
      ans = true;
      break;
    }
  }
  return ans;
};

// Runtime: 152 ms, faster than 18.29% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 46.5 MB, less than 35.01% of JavaScript online submissions for Contains Duplicate.
