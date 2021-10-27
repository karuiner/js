/*
 *
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  let c,
    ans = "";
  for (let i = shifts.length - 1; i >= 0; i--) {
    let k = c === undefined ? 0 : c;
    c = k + shifts[i];

    ans = String.fromCharCode(97 + ((s[i].charCodeAt(0) - 97 + c) % 26)) + ans;
  }

  return ans;
};

// Runtime: 124 ms, faster than 86.86% of JavaScript online submissions for Shifting Letters.
// Memory Usage: 54.9 MB, less than 96.03% of JavaScript online submissions for Shifting Letters.
