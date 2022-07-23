/*
 *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let ans = 0;
  function f(x, y) {
    if (x < m) {
      f(x + 1, y);
    }
    if (y < n) {
      f(x, y + 1);
    }
    if (x === m && y === n) {
      ans++;
    }
  }
  f(1, 1);
  return ans;
};
