/*
 *
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
  let p = [],
    db = {};
  for (let i of s) {
    if (db[i] === undefined) {
      db[i] = 1;
    } else {
      db[i]++;
    }
    p.push({ ...db });
  }
  let ans = 0;
  for (let i = 0; i < p.length - 1; i++) {
    let l = 0,
      r = 0;
    for (let j in db) {
      if (p[i][j] !== undefined) {
        l++;
        if (db[j] - p[i][j] > 0) {
          r++;
        }
      } else {
        r++;
      }
    }

    if (l === r) {
      ans++;
    }
  }
  return ans;
};

// Runtime: 452 ms, faster than 8.68% of JavaScript online submissions for Number of Good Ways to Split a String.
// Memory Usage: 83.2 MB, less than 5.15% of JavaScript online submissions for Number of Good Ways to Split a String.
