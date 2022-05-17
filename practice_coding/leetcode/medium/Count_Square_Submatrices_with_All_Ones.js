/*
 *
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  let m = matrix.length,
    n = matrix[0].length;
  let k = Math.min(m, n),
    ans = 0;

  function f(k) {
    let ans = 0;
    for (let i = 0; i < m - k + 1; i++) {
      for (let j = 0; j < n - k + 1; j++) {
        if (f2(i, j, k)) {
          ans++;
        }
      }
    }
    return ans;
  }
  function f2(a, b, k) {
    let ans = true;
    for (let i = a; i < a + k; i++) {
      for (let j = b; j < b + k; j++) {
        if (matrix[i][j] === 0) {
          ans = false;
          break;
        }
      }
      if (!ans) {
        break;
      }
    }
    return ans;
  }
  for (let i = 1; i <= k; i++) {
    ans += f(i);
  }
  return ans;
};
// Runtime: 572 ms, faster than 6.81% of JavaScript online submissions for Count Square Submatrices with All Ones.
// Memory Usage: 45.8 MB, less than 78.72% of JavaScript online submissions for Count Square Submatrices with All Ones.
