/*
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let dummy = matrix.map((x) => {
      return [...x];
    }),
    n = dummy.length;

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      matrix[j][n - 1 - i] = dummy[i][j];
    }
  }
};

// Runtime: 112 ms, faster than 7.53% of JavaScript online submissions for Rotate Image.
// Memory Usage: 38.7 MB, less than 66.13% of JavaScript online submissions for Rotate Image.
