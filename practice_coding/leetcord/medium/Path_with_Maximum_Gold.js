/*
 *
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  let arr = [];
  grid.forEach((x, i) => {
    x.forEach((v, j) => {
      if (v > 0) {
        arr.push([i, j]);
      }
    });
  });
  function search(grid, i, j, v) {
    let cor = [
        [i - 1, j],
        [i + 1, j],
        [i, j - 1],
        [i, j + 1],
      ],
      nv = v + grid[i][j],
      ans = nv;
    for (let p of cor) {
      let [y, x] = p;
      let dummy = grid.map((x) => x.map((y) => y));
      dummy[i][j] = 0;
      if (grid[y] && grid[y][x] && grid[y][x] > 0) {
        let k = search(dummy, y, x, nv);
        ans = k > ans ? k : ans;
      }
    }
    return ans;
  }
  let ans = 0;
  for (let i of arr) {
    let p = search(grid, i[0], i[1], 0);
    ans = p > ans ? p : ans;
  }
  return ans;
};

// Runtime: 732 ms, faster than 10.00% of JavaScript online submissions for Path with Maximum Gold.
// Memory Usage: 47.5 MB, less than 5.00% of JavaScript online submissions for Path with Maximum Gold.
