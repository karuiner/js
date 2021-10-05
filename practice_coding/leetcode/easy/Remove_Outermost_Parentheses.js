/*
 *
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let l = -1,
    ans = "";
  for (let i of s) {
    if (i === "(") {
      l++;
    }
    if (l > 0) {
      ans += i;
    }
    if (i === ")") {
      l--;
    }
  }
  return ans;
};

// Runtime: 80 ms, faster than 57.74% of JavaScript online submissions for Remove Outermost Parentheses.
// Memory Usage: 40.8 MB, less than 52.90% of JavaScript online submissions for Remove Outermost Parentheses.
