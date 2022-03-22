//경주로 건설
function solution(board) {
  let m = board.length,
    dp = Array(m * m).fill(Infinity);

  function f(p, k, s) {
    if (s < dp[k]) {
      dp[k] = s;
      let [pi, pj] = p >= 0 ? [Math.floor(p / m), p % m] : [-1, -1];
      let [i, j] = [Math.floor(k / m), k % m];
      if (i - 1 >= 0 && i - 1 !== pi && board[i - 1][j] === 0) {
        if (p >= 0 && (pj === j - 1 || pj === j + 1)) {
          f(k, (i - 1) * m + j, s + 600);
        } else {
          f(k, (i - 1) * m + j, s + 100);
        }
      }
      if (i + 1 < m && i + 1 !== pi && board[i + 1][j] === 0) {
        if (p >= 0 && (pj === j - 1 || pj === j + 1)) {
          f(k, (i + 1) * m + j, s + 600);
        } else {
          f(k, (i + 1) * m + j, s + 100);
        }
      }
      if (j - 1 >= 0 && j - 1 !== pj && board[i][j - 1] === 0) {
        if (p >= 0 && (pi === i - 1 || pi === i + 1)) {
          f(k, i * m + j - 1, s + 600);
        } else {
          f(k, i * m + j - 1, s + 100);
        }
      }
      if (j + 1 < m && j + 1 !== pj && board[i][j + 1] === 0) {
        if (p >= 0 && (pi === i - 1 || pi === i + 1)) {
          f(k, i * m + j + 1, s + 600);
        } else {
          f(k, i * m + j + 1, s + 100);
        }
      }
    }
  }
  f(-1, 0, 0);
  for (let i = 0; i < m; i++) {
    console.log(dp.slice(i * m, (i + 1) * m));
  }

  return dp[m * m - 1];
}
let board = [
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
];

let s = solution(board);
