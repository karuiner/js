/*
 *
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  let db = {};
  function f(n, k) {
    let ans = 0;
    if (n > 1) {
      if (db[n] !== undefined && db[n][k] !== undefined) {
        ans += db[n][k];
      } else {
        for (let i = 1; i <= k; i++) {
          ans += f(n - 1, i);
        }
      }
    } else {
      ans += k;
    }
    if (db[n] === undefined) {
      db[n] = {};
    }
    if (db[n][k] === undefined) {
      db[n][k] = ans;
    }
    return ans;
  }
  return f(n, 5);
};

// Runtime: 140 ms, faster than 39.15% of JavaScript online submissions for Count Sorted Vowel Strings.
// Memory Usage: 38.8 MB, less than 46.70% of JavaScript online submissions for Count Sorted Vowel Strings.
