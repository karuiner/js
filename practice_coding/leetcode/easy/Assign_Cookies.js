/*
 *
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);

  let ans = 0,
    j = 0,
    n = s.length;
  for (let i of g) {
    if (s[j] >= i) {
      ans++;
      j++;
    }
    if (j >= n) {
      break;
    }
  }
  return ans;
};

// Runtime: 87 ms, faster than 98.69% of JavaScript online submissions for Assign Cookies.
// Memory Usage: 45.1 MB, less than 13.91% of JavaScript online submissions for Assign Cookies.
