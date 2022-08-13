/*
 *
 * @param {number[][]} grid
 * @return {number}
 */
// 풀이 완료
var minPathSum = function (grid) {
  let m = grid.length,
    n = grid[0].length,
    ans = [];
  for (let i = 0; i < m; i++) {
    ans[i] = [];
    for (let j = 0; j < n; j++) {
      ans[i][j] = -1;
    }
  }
  ans[0][0] = grid[0][0];

  function f(i, j) {
    let k = ans[i][j];
    if (i + 1 < m) {
      if (ans[i + 1][j] < 0) {
        ans[i + 1][j] = k + grid[i + 1][j];
        f(i + 1, j);
      } else if (ans[i + 1][j] > k + grid[i + 1][j]) {
        ans[i + 1][j] = k + grid[i + 1][j];
        f(i + 1, j);
      }
    }
    if (j + 1 < n) {
      if (ans[i][j + 1] < 0) {
        ans[i][j + 1] = k + grid[i][j + 1];
        f(i, j + 1);
      } else if (ans[i][j + 1] > k + grid[i][j + 1]) {
        ans[i][j + 1] = k + grid[i][j + 1];
        f(i, j + 1);
      }
    }
  }
  f(0, 0);
  return ans[m - 1][n - 1];
};

// Runtime: 713 ms, faster than 5.18% of JavaScript online submissions for Minimum Path Sum.
// Memory Usage: 45 MB, less than 32.94% of JavaScript online submissions for Minimum Path Sum.
