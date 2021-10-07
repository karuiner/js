/*
 *
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  let m = mat.length,
    n = mat[0].length;
  for (let i = -(n - 2); i < m - 1; i++) {
    let sub = [];
    for (let j = 0; j < n; j++) {
      if (i + j >= 0 && i + j <= m - 1) {
        sub.push(mat[i + j][j]);
      }
    }
    sub.sort((a, b) => a - b);
    for (let j = 0; j < n; j++) {
      if (i + j >= 0 && i + j <= m - 1) {
        mat[i + j][j] = sub[0];
        sub = sub.slice(1);
      }
    }
  }

  return mat;
};
// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Sort the Matrix Diagonally.
// Memory Usage: 45.4 MB, less than 7.19% of JavaScript online submissions for Sort the Matrix Diagonally.
