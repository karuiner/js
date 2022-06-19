//파괴되지 않은 빌딩

function solution(board, skill) {
  let m = board.length,
    n = board[0].length,
    ans = 0,
    db = {},
    dummy = [];
  for (let i = 0; i < m; i++) {
    dummy[i] = Array(n).fill(0);
  }

  for (let [t, r1, c1, r2, c2, d] of skill) {
    let k = t === 1 ? -d : d;
    dummy[r1][c1] += k;
    if (r2 + 1 < m) {
      dummy[r2 + 1][c1] += -k;
    }
    if (c2 + 1 < n) {
      dummy[r1][c2 + 1] += -k;
    }
    if (r2 + 1 < m && c2 + 1 < n) {
      dummy[r2 + 1][c2 + 1] += k;
    }
  }

  function f(mdata) {
    for (let j = 0; j < n; j++) {
      for (let i = 1; i < m; i++) {
        dummy[i][j] += dummy[i - 1][j];
      }
    }
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (j > 0) {
          dummy[i][j] += dummy[i][j - 1];
        }
        if (board[i][j] + dummy[i][j] > 0) {
          ans++;
        }
      }
    }
  }

  f(dummy);

  return ans;
}

// 시도 2
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
