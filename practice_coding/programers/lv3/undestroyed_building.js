//파괴되지 않은 빌딩

// 시도 2
function solution(board, skill) {
  let m = board.length,
    n = board[0].length,
    ans = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let [t, r1, c1, r2, c2, d] of skill) {
        if (i >= r1 && i <= r2 && j >= c1 && j <= c2) {
          board[i][j] += t === 1 ? -d : d;
        }
      }
      if (board[i][j] > 0) {
        ans++;
      }
    }
  }

  return ans;
}

// 시도 1
// function solution(board, skill) {
//   let m = board.length,
//     n = board[0].length,
//     ans = 0;

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       for (let [t, r1, c1, r2, c2, d] of skill) {
//         if (i >= r1 && i <= r2 && j >= c1 && j <= c2) {
//           board[i][j] += t === 1 ? -d : d;
//         }
//       }
//       if (board[i][j] > 0) {
//         ans++;
//       }
//     }
//   }

//   return ans;
// }
