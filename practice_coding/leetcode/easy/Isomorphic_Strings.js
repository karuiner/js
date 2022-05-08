/*
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let db = {},
    used = {},
    ans = true;
  for (let i = 0; i < s.length; i++) {
    let [a, b] = [s[i], t[i]];
    if (db[a] === undefined && used[b] === undefined) {
      db[a] = b;
      used[b] = true;
    } else if (db[a] !== b || db[a] === undefined) {
      ans = false;
      break;
    }
  }
  return ans;
};

// Runtime: 77 ms, faster than 86.00% of JavaScript online submissions for Isomorphic Strings.
// Memory Usage: 43.8 MB, less than 45.26% of JavaScript online submissions for Isomorphic Strings.
