/*
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let db = {},
    n = s.length,
    n2 = t.length;
  if (n !== n2) {
    return false;
  }
  for (let i = 0; i < n; i++) {
    if (db[s[i]] === undefined) {
      db[s[i]] = 1;
    } else {
      db[s[i]]++;
    }
  }
  for (let i = 0; i < n2; i++) {
    if (db[t[i]] === undefined) {
      db[t[i]] = -1;
    } else {
      db[t[i]]--;
    }
  }
  let ans = true;
  for (let i in db) {
    if (db[i] !== 0) {
      ans = false;
      break;
    }
  }

  return ans;
};

// Runtime: 88 ms, faster than 85.38% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 40.9 MB, less than 69.21% of JavaScript online submissions for Valid Anagram.
