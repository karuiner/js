/*
 *
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let ans = 0,
    m = board.length,
    n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "X") {
        let [y, x] = [i, j];
        while (board[y][x] === "X") {
          if (board[y + 1] !== undefined && board[y + 1][x] === "X") {
            board[y][x] = ".";
            y++;
          } else if (board[y][x + 1] !== undefined && board[y][x + 1] === "X") {
            board[y][x] = ".";
            x++;
          } else {
            board[y][x] = ".";
          }
        }
        ans++;
      }
    }
  }

  return ans;
};

// Runtime: 76 ms, faster than 90.71% of JavaScript online submissions for Battleships in a Board.
// Memory Usage: 41.3 MB, less than 25.00% of JavaScript online submissions for Battleships in a Board.
