/*
 *
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let ans = "",
    n = columnNumber,
    db = {};
  for (let i = 1; i < 27; i++) {
    db[i] = String.fromCharCode(64 + i);
  }
  while (n > 26) {
    let r = n % 26;
    n = (n - r) / 26;
    if (r === 0) {
      r = 26;
      n--;
    }
    ans = db[r] + ans;
  }
  ans = db[n] + ans;
  return ans;
};

// Runtime: 95 ms, faster than 19.31% of JavaScript online submissions for Excel Sheet Column Title.
// Memory Usage: 38.3 MB, less than 78.76% of JavaScript online submissions for Excel Sheet Column Title.
