/*
 *
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let db = {},
    db2 = {},
    ans = true,
    ss = s.split(" ");
  if (pattern.length !== ss.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    if (db[pattern[i]]) {
      if (db[pattern[i]] !== ss[i]) {
        ans = false;
        break;
      }
    } else {
      db[pattern[i]] = ss[i];
    }
    if (db2[ss[i]] && db2[ss[i]] !== pattern[i]) {
      ans = false;
      break;
    } else {
      db2[ss[i]] = pattern[i];
    }
  }

  return ans;
};

// Runtime: 76 ms, faster than 53.92% of JavaScript online submissions for Word Pattern.
// Memory Usage: 38.5 MB, less than 59.36% of JavaScript online submissions for Word Pattern.
