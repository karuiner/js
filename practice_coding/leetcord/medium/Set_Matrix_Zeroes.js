/*
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let zeros = [],
    m = matrix.length,
    n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        zeros.push([i, j]);
      }
    }
  }
  for (let [i, j] of zeros) {
    for (let k = 0; k < n; k++) {
      matrix[i][k] = 0;
    }
    for (let k = 0; k < m; k++) {
      matrix[k][j] = 0;
    }
  }
};
// Runtime: 96 ms, faster than 78.43% of JavaScript online submissions for Set Matrix Zeroes.
// Memory Usage: 41.5 MB, less than 32.10% of JavaScript online submissions for Set Matrix Zeroes.
