//경주로 건설

//풀이 완료
function solution(board) {
  let m = board.length,
    n = m * m,
    dp = {};
  for (let i = 0; i < n; i++) {
    let [a, b] = [Math.floor(i / m), i % m];
    dp[i] = { N: Infinity, S: Infinity, E: Infinity, W: Infinity };
  }
  dp[0].N = 0;
  dp[0].W = 0;
  let opp = { S: "N", N: "S", E: "W", W: "E" },
    NS = ["N", "S"],
    WE = ["W", "E"];
  let corner = { S: WE, N: WE, W: NS, E: NS, A: ["B", "C"] };
  let next = {
    S: ["S", "E", "W"],
    N: ["N", "E", "W"],
    W: ["W", "N", "S"],
    E: ["E", "N", "S"],
    A: ["E", "S"],
  };

  function coor(p, d) {
    let [i, j] = [Math.floor(p / m), p % m];
    if (d === "N") {
      i -= 1;
    } else if (d === "S") {
      i += 1;
    } else if (d === "E") {
      j += 1;
    } else if (d === "W") {
      j -= 1;
    }
    if (i >= 0 && i < m && j >= 0 && j < m && board[i][j] === 0) {
      return i * m + j;
    } else {
      return -1;
    }
  }
  function f(arr) {
    let narr = [];
    for (let [pd, p] of arr) {
      //            console.log(dp[p])
      for (let d of next[pd]) {
        let k = coor(p, d);

        if (k > -1) {
          let s = pd === "A" ? 0 : dp[p][opp[pd]],
            cr = corner[pd];
          s += 100;
          if (d === cr[0] || d === cr[1]) {
            s += 500;
          }
          if (dp[k][opp[d]] === Infinity || s < dp[k][opp[d]]) {
            dp[k][opp[d]] = s;
            narr.push([d, k]);
          }
        }
      }
    }
    if (narr.length > 0) {
      f(narr);
    }
  }

  f([
    ["E", 0],
    ["S", 0],
  ]);

  let ans = Infinity;
  for (let i in dp[n - 1]) {
    ans = dp[n - 1][i] < ans ? dp[n - 1][i] : ans;
  }
  return ans;
}

//시도 8
// function solution(board) {
//   let m = board.length,
//     n = m * m,
//     dp = Infinity;

//   let NS = ["N", "S"],
//     WE = ["W", "E"];
//   let corner = { S: WE, N: WE, W: NS, E: NS, A: ["B", "C"] };
//   let next = {
//     S: ["S", "E", "W"],
//     N: ["N", "E", "W"],
//     W: ["W", "N", "S"],
//     E: ["E", "N", "S"],
//     A: ["E", "S"],
//   };

//   function coor(p, d) {
//     let [i, j] = [Math.floor(p / m), p % m];
//     if (d === "N") {
//       i -= 1;
//     } else if (d === "S") {
//       i += 1;
//     } else if (d === "E") {
//       j += 1;
//     } else if (d === "W") {
//       j -= 1;
//     }
//     if (i >= 0 && i < m && j >= 0 && j < m && board[i][j] === 0) {
//       return i * m + j;
//     } else {
//       return -1;
//     }
//   }
//   function f(pd, p, db, c) {
//     if (p === n - 1) {
//       db[p] = c;
//       if (c < dp) {
//         dp = c;
//       }
//     }

//     if (db[p] === undefined) {
//       db[p] = c;
//       let sk = 0;
//       for (let d of next[pd]) {
//         let k = coor(p, d),
//           cr = corner[pd];
//         if (k !== -1) {
//           if (d === cr[0] || d === cr[1]) {
//             if (c + 600 < dp) {
//               f(d, k, { ...db }, c + 600);
//             }
//           } else {
//             if (c + 100 < dp) {
//               f(d, k, { ...db }, c + 100);
//             }
//           }
//         } else {
//           sk += k;
//         }
//       }
//       if (sk === -3) {
//         let [i, j] = [Math.floor(p / m), p % m];
//         board[i][j] = 1;
//       }
//     }
//   }
//   f("A", 0, {}, 0);

//   return dp;
// }
//시도 7
// function solution(board) {
//   let m = board.length,
//     n = m * m,
//     dp = {};
//   for (let i = 0; i < n; i++) {
//     let [a, b] = [Math.floor(i / m), i % m];
//     dp[i] = { pnode: -1, stg: Infinity, curve:Infinity,score:Infinity, pass: board[a][b] === 0 };
//   }

//   let arr = [
//     ["A", 0],
//     ["A", 0],
//   ];
//   let opp = { S: "N", N: "S", E: "W", W: "E" },
//     NS = ["N", "S"],
//     WE = ["W", "E"];
//   let corner = { S: WE, N: WE, W: NS, E: NS, A: ["B", "C"] };
//   let next = {
//     S: ["S", "E", "W"],
//     N: ["N", "E", "W"],
//     W: ["W", "N", "S"],
//     E: ["E", "N", "S"],
//     A: ["E", "S"],
//   };

//   function coor(p, d) {
//     let [i, j] = [Math.floor(p / m), p % m];
//     if (d === "N") {
//       i -= 1;
//     } else if (d === "S") {
//       i += 1;
//     } else if (d === "E") {
//       j += 1;
//     } else if (d === "W") {
//       j -= 1;
//     }
//     if (i >= 0 && i < m && j >= 0 && j < m) {
//       return i * m + j;
//     } else {
//       return -1;
//     }
//   }
//   function f(pd, p, s) {
//     if (p === n - 1) {
//       return s;
//     } else {
//       for (let d of next[pd]) {
//         let k = coor(p, d),
//           s = dp[p].score,
//             stg =dp[p].stg,
//           curve= dp[p].curve,
//           cr = corner[pd];
//         if (k > -1 && pd !== opp[d] && dp[k].pass) {
//             s+=100
//             stg+=1
//           if (d === cr[0] || d === cr[1]) {
//             s += 500;
//             curve+=1
//           }
//           if (dp[k].score === Infinity || s < dp[k].score||curve <=dp[k].curve) {
//             dp[k].pnode = p;
//             dp[k].score = s;
//             dp[k].curve=curve;
//             dp[k].stg=stg
// //            console.log(d,p,k,s)
//             f(d, k, s);
//           }
//         }
//       }
//     }
//   }
//   dp[0].score = 0;
//   dp[0].stg = 0;
//   dp[0].curve = 0;

//   f("A", 0, 0);
//   return dp[n - 1].score;
// }

// 시도 6
// function solution(board) {
//   let m = board.length,
//     n = m * m,
//     dp = {};
//   for (let i = 0; i < n; i++) {
//     let [a, b] = [Math.floor(i / m), i % m];
//     dp[i] = { pnode: -1, score: Infinity, pass: board[a][b] === 0 };
//   }

//   dp[0].score = 0;
//   let arr = [
//     ["A", 0],
//     ["A", 0],
//   ];
//   let opp = { S: "N", N: "S", E: "W", W: "E" },
//     NS = ["N", "S"],
//     WE = ["W", "E"];
//   let corner = { S: WE, N: WE, W: NS, E: NS, A: ["B", "C"] };
//   let next = {
//     S: ["S", "E", "W"],
//     N: ["N", "E", "W"],
//     W: ["W", "N", "S"],
//     E: ["E", "N", "S"],
//     A: ["E", "S"],
//   };

//   function coor(p, d) {
//     let [i, j] = [Math.floor(p / m), p % m];
//     if (d === "N") {
//       i -= 1;
//     } else if (d === "S") {
//       i += 1;
//     } else if (d === "E") {
//       j += 1;
//     } else if (d === "W") {
//       j -= 1;
//     }
//     if (i >= 0 && i < m && j >= 0 && j < m) {
//       return i * m + j;
//     } else {
//       return -1;
//     }
//   }
//   function f(pd, p, s) {
//     if (p === n - 1) {
//       return s;
//     } else {
//       for (let d of next[pd]) {
//         let k = coor(p, d),
//           s = dp[p].score,
//           cr = corner[pd];
//         if (k > -1 && pd !== opp[d] && dp[k].pass) {
//           if (d !== cr[0] && d !== cr[1]) {
//             s += 100;
//           } else {
//             s += 600;
//           }
//           if (dp[k].score === Infinity || s < dp[k].score) {
//             dp[k].pnode = p;
//             dp[k].score = s;
//             //console.log(d,p,k,s)
//             f(d, k, s);
//           } else if (s === dp[k].score) {
//             f(d, k, s);

//             // let route = [k],
//             //   route2 = [p, k],
//             //   u = k;
//             // while (dp[u].pnode !== -1) {
//             //   route = [dp[u].pnode, ...route];
//             //   u = dp[u].pnode;
//             // }
//             // u = p;
//             // while (dp[u].pnode !== -1) {
//             //   route2 = [dp[u].pnode, ...route2];
//             //   u = dp[u].pnode;
//             // }

//             // console.log("route 1", route.join(" => "), dp[k].score);
//             // console.log("route 2", route2.join(" => "), s);
//           }
//         }
//       }
//     }
//   }
//   f("A", 0, 0);
//   return dp[n - 1].score;
// }

//시도 5
// function solution(board) {
//   let m = board.length,
//     n = m * m,
//     dp = {};
//   for (let i = 0; i < n; i++) {
//     let [a, b] = [Math.floor(i / m), i % m];
//     dp[i] = { pnode: -1, score: Infinity, pass: board[a][b] === 0 };
//   }

//   dp[0].score = 0;
//   let arr = [
//     ["A", 0],
//     ["A", 0],
//   ];
//   let opp = { S: "N", N: "S", E: "W", W: "E" },
//     NS = ["N", "S"],
//     WE = ["W", "E"];
//   let corner = { S: WE, N: WE, W: NS, E: NS, A: ["B", "C"] };

//   function coor(p, d) {
//     let [i, j] = [Math.floor(p / m), p % m];
//     if (d === "N") {
//       i -= 1;
//     } else if (d === "S") {
//       i += 1;
//     } else if (d === "E") {
//       j += 1;
//     } else if (d === "W") {
//       j -= 1;
//     }
//     if (i >= 0 && i < m && j >= 0 && j < m) {
//       return i * m + j;
//     } else {
//       return -1;
//     }
//   }

//   while (arr.length > 0) {
//     let narra = [],
//       narrb = [];
//     for (let [pd, p, pcv] of arr) {
//       for (let d of ["N", "S", "E", "W"]) {
//         let k = coor(p, d),
//           s = dp[p].score,
//           cr = corner[pd],
//           cv = false;
//         if (k > -1 && pd !== opp[d] && dp[k].pass) {
//           if (d !== cr[0] && d !== cr[1]) {
//             s += 100;
//           } else {
//             cv = true;
//             s += 600;
//           }
//           if (dp[k].score === Infinity || s < dp[k].score) {
//             dp[k].pnode = p;
//             dp[k].score = s;
//             if (cv) {
//               narrb.push([d, k, cv]);
//             } else {
//               narra.push([d, k, cv]);
//             }
//           }
//         }
//       }
//     }

//     arr = [...narra, ...narrb];
//   }
//   return dp[n - 1].score;
// }

// 시도 4
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

//   function f(arr) {
//     // position, direction, sum
//     function doit(p, d, s, td) {
//       let v = 100,
//         next = [];
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
//             if (tp <= n - 1) {
//               next = [tp, td, s + v];
//             }
//           }
//         }
//       }
//       return next;
//     }
//     let next = [];
//     for (let i of arr) {
//       if (dp[i[0]] === Infinity || i[2] < dp[i[0]]) {
//         dp[i[0]] = i[2];
//       }
//       for (let j of ["N", "S", "E", "W"]) {
//         let sub = doit(...i, j);
//         if (sub.length > 0) {
//           next.push(sub);
//         }
//       }
//     }
//     if (next.length > 0) {
//       f(next);
//     }
//   }

//   f([[0, "A", 0]]);
//   return dp[n - 1];
// }

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
]; //3800
let board2 = [
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 1],
  [1, 0, 0, 0],
];

//2100

let s = solution(board);
console.log(s);
