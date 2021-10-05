/*
 *
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let db = {};
  for (let i of s) {
    db[i] = db[i] ? db[i] + 1 : 1;
  }
  let k = -1,
    ans = true;
  for (let i in db) {
    if (k < 0) {
      k = db[i];
    } else if (db[i] !== k) {
      ans = false;
      break;
    }
  }
  return ans;
};
// Runtime: 88 ms, faster than 39.81% of JavaScript online submissions for Check if All Characters Have Equal Number of Occurrences.
// Memory Usage: 41 MB, less than 28.70% of JavaScript online submissions for Check if All Characters Have Equal Number of Occurrences.
