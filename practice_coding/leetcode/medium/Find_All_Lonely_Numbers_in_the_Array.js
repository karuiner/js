/*
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function (nums) {
  let db = {};
  for (let i of nums) {
    db[i] = db[i] === undefined ? 1 : db[i] + 1;
  }
  let key = Object.keys(db)
      .map((x) => Number(x))
      .filter((x) => db[x] === 1),
    ans = [];
  for (let i of key) {
    if (db[i - 1] === undefined && db[i + 1] === undefined) {
      ans.push(i);
    }
  }
  return ans;
};

// Runtime: 656 ms, faster than 43.40% of JavaScript online submissions for Find All Lonely Numbers in the Array.
// Memory Usage: 88.5 MB, less than 62.26% of JavaScript online submissions for Find All Lonely Numbers in the Array.
