/*
 *
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let db = {},
    n = t.length;
  for (let i = 0; i < n; i++) {
    if (db[t[i]] === undefined) {
      db[t[i]] = 1;
    } else {
      db[t[i]]++;
    }

    if (i < n - 1) {
      if (db[s[i]] === undefined) {
        db[s[i]] = -1;
      } else {
        db[s[i]]--;
      }
      if (db[s[i]] === 0) {
        delete db[s[i]];
      }
    }

    if (db[t[i]] === 0) {
      delete db[t[i]];
    }
  }
  let ans = "";
  for (let i in db) {
    ans = i;
  }
  return ans;
};

// Runtime: 137 ms, faster than 10.11% of JavaScript online submissions for Find the Difference.
// Memory Usage: 42 MB, less than 11.15% of JavaScript online submissions for Find the Difference.
