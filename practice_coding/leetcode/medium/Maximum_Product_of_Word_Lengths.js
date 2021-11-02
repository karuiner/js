/*
 *
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let n = words.length,
    db = {},
    key = {},
    ans = 0;
  for (let i of words) {
    db[i] = {};
    for (let j of i) {
      if (key[j] === undefined) {
        key[j] = true;
      }
      if (db[i][j] === undefined) {
        db[i][j] = true;
      }
    }
  }
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let check = true;
      for (let k in key) {
        if (db[words[i]][k] && db[words[j]][k]) {
          check = false;
          break;
        }
      }
      if (check) {
        let l = words[i].length * words[j].length;
        ans = ans < l ? l : ans;
      }
    }
  }

  return ans;
};

// Runtime: 1036 ms, faster than 25.29% of JavaScript online submissions for Maximum Product of Word Lengths.
// Memory Usage: 56.9 MB, less than 14.94% of JavaScript online submissions for Maximum Product of Word Lengths.
