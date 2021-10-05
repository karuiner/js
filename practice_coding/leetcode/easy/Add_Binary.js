/*
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let l = Math.max(a.length, b.length),
    ans = "",
    k = -1,
    c = 0;
  while (ans.length < l) {
    let i = k < -1 ? Number(a.slice(k, k + 1) || 0) : Number(a.slice(k) || 0),
      j = k < -1 ? Number(b.slice(k, k + 1) || 0) : Number(b.slice(k) || 0);
    if (i + j + c > 1) {
      ans = `${i + j + c - 2}` + ans;
      c = 1;
    } else {
      ans = `${i + j + c}` + ans;
      c = 0;
    }
    k--;
  }
  if (c) {
    ans = "1" + ans;
  }
  return ans;
};
// Runtime: 84 ms, faster than 77.45% of JavaScript online submissions for Add Binary.
// Memory Usage: 41 MB, less than 24.05% of JavaScript online submissions for Add Binary.
