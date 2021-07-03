/*
 *
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let ans = [],
    m = matrix.length,
    n = matrix[0].length;
  for (let i = 0; i < n; i++) {
    let sub = [];
    for (let j = 0; j < m; j++) {
      sub.push(matrix[j][i]);
    }
    ans.push(sub);
  }
  return ans;
};
// Runtime: 100 ms, faster than 23.72% of JavaScript online submissions for Transpose Matrix.
// Memory Usage: 41.5 MB, less than 12.41% of JavaScript online submissions for Transpose Matrix.
