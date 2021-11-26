/*
 *
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let l = 0,
    r = 0;
  for (let i of s) {
    if (i === "(") {
      l++;
    } else if (l > 0) {
      l--;
    } else {
      r++;
    }
  }
  return l + r;
};

// Runtime: 76 ms, faster than 73.49% of JavaScript online submissions for Minimum Add to Make Parentheses Valid.
// Memory Usage: 40.4 MB, less than 12.50% of JavaScript online submissions for Minimum Add to Make Parentheses Valid.
