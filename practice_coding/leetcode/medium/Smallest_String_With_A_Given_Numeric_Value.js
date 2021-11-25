/*
 *
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
  let a = "a".charCodeAt(0),
    ans = Array(n).fill(1),
    nk = k - n,
    i = n - 1;
  while (nk > 0 && i >= 0) {
    if (nk > 25) {
      ans[i] += 25;
      nk -= 25;
    } else {
      ans[i] += nk;
      nk = 0;
    }
    i--;
  }
  return ans.reduce((ac, x) => {
    return ac + String.fromCharCode(x - 1 + a);
  }, "");
};

// Runtime: 196 ms, faster than 69.57% of JavaScript online submissions for Smallest String With A Given Numeric Value.
// Memory Usage: 60.8 MB, less than 30.43% of JavaScript online submissions for Smallest String With A Given Numeric Value.
