/*
 *
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
// 풀이시도 2 - 2
var countSubIslands = function (grid1, grid2) {
  let c = 0,
    db = {},
    check = {},
    m = grid2.length,
    n = grid2[0].length;

  function f(i, j) {
    db[c].push([i, j]);
    grid2[i][j] = 0;
    if (grid2[i][j - 1] !== undefined && grid2[i][j - 1] === 1) {
      f(i, j - 1);
    }

    if (grid2[i][j + 1] !== undefined && grid2[i][j + 1] === 1) {
      f(i, j + 1);
    }

    if (grid2[i + 1] !== undefined && grid2[i + 1][j] === 1) {
      f(i + 1, j);
    }

    if (grid2[i - 1] !== undefined && grid2[i - 1][j] === 1) {
      f(i - 1, j);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] === 1) {
        c++;
        db[c] = [];
        f(i, j);
      }
    }
  }
  let ans = 0;

  for (let i in db) {
    let cc = true;
    for (let [x, y] of db[i]) {
      if (grid1[x][y] === 0) {
        cc = false;
        break;
      }
    }
    if (cc) {
      ans++;
    }
  }

  return ans;
};

// Runtime: 593 ms, faster than 19.44% of JavaScript online submissions for Count Sub Islands.
// Memory Usage: 114.3 MB, less than 5.09% of JavaScript online submissions for Count Sub Islands.

// 풀이시도 2 - 1
// var countSubIslands = function (grid1, grid2) {
//   let c = 0,
//     db = {},
//     check = {},
//     m = grid2.length,
//     n = grid2[0].length;

//   function ck(i, j) {
//     let ans = [];
//     if (check[i - 1] !== undefined) {
//       if (check[i - 1][j] !== undefined) {
//         ans.push(check[i - 1][j]);
//       }
//     }
//     if (check[i] !== undefined) {
//       if (check[i][j - 1] !== undefined && ans[0] !== check[i][j - 1]) {
//         ans.push(check[i][j - 1]);
//       }
//     }
//     return ans;
//   }

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       let ckk = ck(i, j);
//       console.log(ckk, grid2[i][j]);
//       if (ckk.length === 0 && grid2[i][j] === 1) {
//         console.log(i, j);
//         c++;
//         if (check[i] === undefined) {
//           check[i] = {};
//         }
//         check[i][j] = 10 + c;
//         db[10 + c] = [[i, j]];
//       } else if (grid2[i][j] === 1) {
//         if (check[i] === undefined) {
//           check[i] = {};
//         }
//         let vv = ckk[0];
//         if (ckk.length > 1) {
//           let [a, b] = ckk;
//           if (a > b) {
//             [a, b] = [b, a];
//           }
//           db[a].push(...db[b]);
//           delete db[b];
//           vv = a;
//         }
//         check[i][j] = vv;
//         db[vv].push([i, j]);
//       }
//     }
//   }
//   let ans = 0;

//   for (let i in db) {
//     let cc = true;
//     for (let [x, y] of db[i]) {
//       if (grid1[x][y] === 0) {
//         cc = false;
//         break;
//       }
//     }
//     if (cc) {
//       ans++;
//     }
//   }

//   return ans;
// };

//풀이시도 1
// var countSubIslands = function (grid1, grid2) {
//   let c = 0,
//     db = {},
//     check = {},
//     m = grid2.length,
//     n = grid2[0].length;

//   function ck(i, j) {
//     let ans = -1;
//     if (check[i - 1] !== undefined) {
//       if (check[i - 1][j] !== undefined) {
//         ans = check[i - 1][j];
//       }
//     }
//     if (ans === -1 && check[i] !== undefined) {
//       if (check[i][j - 1] !== undefined) {
//         ans = check[i][j - 1];
//       }
//     }
//     return ans;
//   }

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       let ckk = ck(i, j);
//       if (ckk === -1 && grid2[i][j] === 1) {
//         c++;
//         if (check[i] === undefined) {
//           check[i] = {};
//         }
//         check[i][j] = 10 + c;
//         db[10 + c] = [[i, j]];
//       } else if (grid2[i][j] === 1) {
//         if (check[i] === undefined) {
//           check[i] = {};
//         }

//         check[i][j] = ckk;
//         db[ckk].push([i, j]);
//       }
//     }
//   }
//   let ans = 0;
//   console.log(db);
//   for (let i in db) {
//     let cc = true;
//     for (let [x, y] of db[i]) {
//       if (grid1[x][y] === 0) {
//         cc = false;
//         break;
//       }
//     }
//     if (cc) {
//       ans++;
//     }
//   }

//   return ans;
// };
