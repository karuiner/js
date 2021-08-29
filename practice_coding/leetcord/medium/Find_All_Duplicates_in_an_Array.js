/*
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let db = {};
  for (let i of nums) {
    db[i] = db[i] ? db[i] + 1 : 1;
  }
  let ans = Object.keys(db)
    .filter((x) => db[x] > 1)
    .map((x) => Number(x));
  return ans;
};

// Runtime: 152 ms, faster than 26.78% of JavaScript online submissions for Find All Duplicates in an Array.
// Memory Usage: 55.7 MB, less than 11.83% of JavaScript online submissions for Find All Duplicates in an Array.
