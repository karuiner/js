/*
 *
 * @param {number[][]} grid
 * @return {number}
 */
// 풀이 완료
var equalPairs = function (grid) {
  let ans = 0,
    row = {},
    col = {},
    m = grid.length,
    n = grid[0].length;
  for (let i = 0; i < m; i++) {
    let s = grid[i].join("_");
    if (row[s] === undefined) {
      row[s] = 0;
    }
    row[s]++;
  }

  for (let i = 0; i < n; i++) {
    let k = [];
    for (let j = 0; j < m; j++) {
      k.push(grid[j][i]);
    }
    let s = k.join("_");
    if (col[s] === undefined) {
      col[s] = 0;
    }
    col[s]++;
    if (row[s] !== undefined) {
      ans += row[s];
    }
  }
  return ans;
};

// Runtime: 157 ms, faster than 65.29% of JavaScript online submissions for Equal Row and Column Pairs.
// Memory Usage: 53.3 MB, less than 51.27% of JavaScript online submissions for Equal Row and Column Pairs.
