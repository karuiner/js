/*
 *
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let l = columnTitle.length,
    a = "A".charCodeAt(0),
    ans = 0;
  for (let i = 0; i < l; i++) {
    let c = columnTitle[i].charCodeAt(0);
    ans += (c - a + 1) * 26 ** (l - i - 1);
  }

  return ans;
};

// Runtime: 88 ms, faster than 75.09% of JavaScript online submissions for Excel Sheet Column Number.
// Memory Usage: 40.5 MB, less than 29.89% of JavaScript online submissions for Excel Sheet Column Number.
