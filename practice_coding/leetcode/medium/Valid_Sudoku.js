/*
 *
 * @param {character[][]} board
 * @return {boolean}
 */
// var isValidSudoku = function (board) {
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       if (board[i][j] !== ".") {
//         let db = {},
//           db2 = {},
//           db3 = {};
//         for (let k = 0; k < 9; k++) {
//           if (board[i][k] !== ".") {
//             db[board[i][k]] = db[board[i][k]] ? db[board[i][k]] + 1 : 1;
//             if (db[board[i][k]] > 1) return false;
//           }
//           if (board[k][j] !== ".") {
//             db2[board[k][j]] = db2[board[k][j]] ? db2[board[k][j]] + 1 : 1;
//             if (db2[board[k][j]] > 1) return false;
//           }
//           let ii = 3 * Math.floor(i / 3) + Math.floor(k / 3),
//             jj = 3 * Math.floor(j / 3) + (k % 3);
//           if (board[ii][jj] !== ".") {
//             db3[board[ii][jj]] = db3[board[ii][jj]]
//               ? db3[board[ii][jj]] + 1
//               : 1;
//             if (db3[board[ii][jj]] > 1) return false;
//           }
//         }
//       }
//     }
//   }

//   return true;
// };

// Runtime: 84 ms, faster than 93.91% of JavaScript online submissions for Valid Sudoku.
// Memory Usage: 42.7 MB, less than 47.33% of JavaScript online submissions for Valid Sudoku.

// 불필요한 부분 잘라내버리기.

/*
 *
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let db = {},
      db2 = {},
      db3 = {};
    for (let k = 0; k < 9; k++) {
      if (board[i][k] !== ".") {
        db[board[i][k]] = db[board[i][k]] ? db[board[i][k]] + 1 : 1;
        if (db[board[i][k]] > 1) return false;
      }
      if (board[k][i] !== ".") {
        db2[board[k][i]] = db2[board[k][i]] ? db2[board[k][i]] + 1 : 1;
        if (db2[board[k][i]] > 1) return false;
      }
      let ii = 3 * Math.floor(i / 3) + Math.floor(k / 3),
        jj = 3 * (i % 3) + (k % 3);
      if (board[ii][jj] !== ".") {
        db3[board[ii][jj]] = db3[board[ii][jj]] ? db3[board[ii][jj]] + 1 : 1;
        if (db3[board[ii][jj]] > 1) return false;
      }
    }
  }

  return true;
};

// Runtime: 72 ms, faster than 99.73% of JavaScript online submissions for Valid Sudoku.
// Memory Usage: 41.6 MB, less than 74.54% of JavaScript online submissions for Valid Sudoku.
