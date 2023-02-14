//안전 지대
function solution(board) {
  let ans = 0,
    n = board.length;

  function check(i, j) {
    let ans = 0;
    for (let ii = i - 1; ii <= i + 1; ii++) {
      for (let jj = j - 1; jj <= j + 1; jj++) {
        if (ii >= 0 && jj >= 0 && ii < n && jj < n) {
          ans += board[ii][jj];
        }
      }
    }

    return ans === 0;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (check(i, j)) {
        ans++;
      }
    }
  }
  return ans;
}
