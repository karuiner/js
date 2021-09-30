/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let db = {};
  for (let i of nums) {
    if (db[i]) {
      db[i]++;
    } else {
      db[i] = 1;
    }
  }
  let ans = 0;
  for (let i in db) {
    if (db[i] === 1) {
      ans = Number(i);
      break;
    }
  }
  return ans;
};

// Runtime: 80 ms, faster than 65.80% of JavaScript online submissions for Single Number II.
// Memory Usage: 42.2 MB, less than 9.67% of JavaScript online submissions for Single Number II.
