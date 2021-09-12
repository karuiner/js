/*
 *
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  let db = {};
  let n = s.length;
  for (let i = 0; i < n; i++) {
    if (db[s[i]]) {
      db[s[i]] += 1;
    } else {
      db[s[i]] = 1;
    }
    if (db[t[i]]) {
      db[t[i]] -= 1;
    } else {
      db[t[i]] = -1;
    }
  }
  let ans = 0;
  for (let i in db) {
    if (db[i] > 0) {
      ans += db[i];
    }
  }
  return ans;
};

// Runtime: 249 ms, faster than 21.74% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
// Memory Usage: 44.5 MB, less than 91.30% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
