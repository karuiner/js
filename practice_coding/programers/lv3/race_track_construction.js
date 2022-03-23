//경주로 건설

// 시도 4
function solution(board) {
  let ans = 0,
    m = board.length,
    dp = Array(m * m).fill(Infinity);
  let opp = { S: "N", N: "S", E: "W", W: "E" },
    NS = ["N", "S"],
    WE = ["W", "E"];
  let idx = { S: [1, 0], N: [-1, 0], E: [0, 1], W: [0, -1] },
    n = m * m;
  let corner = { S: WE, N: WE, W: NS, E: NS, A: ["B", "C"] };

  function f(arr) {
    // position, direction, sum
    function doit(p, d, s, td) {
      let v = 100,
        next = [];
      if (opp[d] !== td) {
        let cn = corner[d];
        if (td === cn[0] || td === cn[1]) {
          v += 500;
        }
        let [i, j] = [Math.floor(p / m), p % m],
          [ti, tj] = [i + idx[td][0], j + idx[td][1]];
        if (ti >= 0 && ti < m && tj >= 0 && tj < m) {
          let tp = ti * m + tj;
          if (
            tp >= 0 &&
            tp < n &&
            board[i][j] === 0 &&
            (dp[tp] === Infinity || s + v < dp[tp])
          ) {
            if (tp <= n - 1) {
              next = [tp, td, s + v];
            }
          }
        }
      }
      return next;
    }
    let next = [];
    for (let i of arr) {
      if (dp[i[0]] === Infinity || i[2] < dp[i[0]]) {
        dp[i[0]] = i[2];
      }
      for (let j of ["N", "S", "E", "W"]) {
        let sub = doit(...i, j);
        if (sub.length > 0) {
          next.push(sub);
        }
      }
    }
    if (next.length > 0) {
      f(next);
    }
  }

  f([[0, "A", 0]]);
  return dp[n - 1];
}

// 시도 3
// function solution(board) {
//   let ans = 0,
//     m = board.length,
//     dp = Array(m * m).fill(Infinity);
//   let opp = { S: "N", N: "S", E: "W", W: "E" },
//     NS = ["N", "S"],
//     WE = ["W", "E"];
//   let idx = { S: [1, 0], N: [-1, 0], E: [0, 1], W: [0, -1] },
//     n = m * m;
//   let corner = { S: WE, N: WE, W: NS, E: NS, A: ["B", "C"] };

//   function f(p, d, s) {
//     // position, direction, sum
//     function doit(td) {
//       let v = 100;
//       if (opp[d] !== td) {
//         let cn = corner[d];
//         if (td === cn[0] || td === cn[1]) {
//           v += 500;
//         }
//         let [i, j] = [Math.floor(p / m), p % m],
//           [ti, tj] = [i + idx[td][0], j + idx[td][1]],
//           next = [];
//         if (ti >= 0 && ti < m && tj >= 0 && tj < m) {
//           let tp = ti * m + tj;
//           if (
//             tp >= 0 &&
//             tp < n &&
//             board[i][j] === 0 &&
//             (dp[tp] === Infinity || s + v < dp[tp])
//           ) {
//             if (tp <= n - 1) {
//               if (next.length === 0) {
//                 next = [tp, td, s + v];
//               } else if (s + v < next[2]) {
//                 next = [tp, td, s + v];
//               }
//             }
//           }
//         }
//         if (next.length > 0) {
//           console.log("-----------------");
//           for (let i = 0; i < m; i++) {
//             console.log(`${dp.slice(i * m, (i + 1) * m)}`);
//           }
//           f(...next);
//         }
//       }
//     }
//     dp[p] = s;
//     doit("N");
//     doit("S");
//     doit("E");
//     doit("W");
//   }
//   f(0, "A", 0);
//   return dp[n - 1];
// }

// 시도 2
// function solution(board) {
//   let ans = 0,
//     m = board.length,
//     dp = Array(m * m).fill(Infinity);
//   let opp = { S: "N", N: "S", E: "W", W: "E" },
//     NS = ["N", "S"],
//     WE = ["W", "E"];
//   let idx = { S: [1, 0], N: [-1, 0], E: [0, 1], W: [0, -1] },
//     n = m * m;
//   let corner = { S: WE, N: WE, W: NS, E: NS, A: ["B", "C"] };

//   function f(p, d, s) {
//     // position, direction, sum
//     function doit(td) {
//       let v = 100;
//       if (opp[d] !== td) {
//         let cn = corner[d];
//         if (td === cn[0] || td === cn[1]) {
//           v += 500;
//         }
//         let [i, j] = [Math.floor(p / m), p % m],
//           [ti, tj] = [i + idx[td][0], j + idx[td][1]];
//         if (ti >= 0 && ti < m && tj >= 0 && tj < m) {
//           let tp = ti * m + tj;
//           if (
//             tp >= 0 &&
//             tp < n &&
//             board[i][j] === 0 &&
//             (dp[tp] === Infinity || s + v < dp[tp])
//           ) {
//             console.log("-----------------");
//             for (let i = 0; i < m; i++) {
//               console.log(`${dp.slice(i * m, (i + 1) * m)}`);
//             }

//             if (tp <= n - 1) {
//               f(tp, td, s + v);
//             }
//           }
//         }
//       }
//     }
//     dp[p] = s;
//     doit("N");
//     doit("S");
//     doit("E");
//     doit("W");
//   }
//   f(0, "N", 0);
//   f(0, "S", 0);
//   f(0, "E", 0);
//   f(0, "W", 0);
//   return dp[n - 1];
// }

//시도 1
// function solution(board) {
//   let m = board.length,
//     dp = Array(m * m).fill(Infinity);

//   function f(p, k, s) {
//     if (s < dp[k]) {
//       dp[k] = s;
//       let [pi, pj] = p >= 0 ? [Math.floor(p / m), p % m] : [-1, -1];
//       let [i, j] = [Math.floor(k / m), k % m];
//       if (i - 1 >= 0 && i - 1 !== pi && board[i - 1][j] === 0) {
//         if (p >= 0 && (pj === j - 1 || pj === j + 1)) {
//           f(k, (i - 1) * m + j, s + 600);
//         } else {
//           f(k, (i - 1) * m + j, s + 100);
//         }
//       }
//       if (i + 1 < m && i + 1 !== pi && board[i + 1][j] === 0) {
//         if (p >= 0 && (pj === j - 1 || pj === j + 1)) {
//           f(k, (i + 1) * m + j, s + 600);
//         } else {
//           f(k, (i + 1) * m + j, s + 100);
//         }
//       }
//       if (j - 1 >= 0 && j - 1 !== pj && board[i][j - 1] === 0) {
//         if (p >= 0 && (pi === i - 1 || pi === i + 1)) {
//           f(k, i * m + j - 1, s + 600);
//         } else {
//           f(k, i * m + j - 1, s + 100);
//         }
//       }
//       if (j + 1 < m && j + 1 !== pj && board[i][j + 1] === 0) {
//         if (p >= 0 && (pi === i - 1 || pi === i + 1)) {
//           f(k, i * m + j + 1, s + 600);
//         } else {
//           f(k, i * m + j + 1, s + 100);
//         }
//       }
//     }
//   }
//   f(-1, 0, 0);
//   for (let i = 0; i < m; i++) {
//     console.log(dp.slice(i * m, (i + 1) * m));
//   }

//   return dp[m * m - 1];
// }
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
