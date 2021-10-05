/*
 *
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let copy = board.map((x) => x.map((y) => y));
  function count(map, i, j) {
    return (
      map.reduce((c, x, k) => {
        if (k >= i - 1 && k <= i + 1) {
          c += x.reduce((d, y, l) => {
            if (l >= j - 1 && l <= j + 1) {
              d += y;
            }
            return d;
          }, 0);
        }
        return c;
      }, 0) - map[i][j]
    );
  }

  function check(map, i, j, target) {
    let p = [-1, 0, 1],
      live = count(map, i, j);
    if (map[i][j]) {
      if (live > 3) {
        target[i][j] = 0;
      } else if (live < 2) {
        target[i][j] = 0;
      }
    } else {
      if (live === 3) {
        target[i][j] = 1;
      }
    }
  }
  copy.forEach((x, i) => {
    x.forEach((y, j) => {
      check(copy, i, j, board);
    });
  });
};

// Runtime: 72 ms, faster than 83.19% of JavaScript online submissions for Game of Life.
// Memory Usage: 39.1 MB, less than 50.66% of JavaScript online submissions for Game of Life.
