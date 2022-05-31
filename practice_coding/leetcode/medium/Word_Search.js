/*
 *
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let m = board.length,
    n = board[0].length,
    l = word.length,
    check = Array(m * n).fill(true);
  function cal(i, j) {
    return i * n + j;
  }

  function f(i, j, k, check) {
    let ans = false;
    function ff(i, j, ans) {
      let sub = f(i, j, k + 1, [...check]);
      ans = sub ? sub : ans;
      return ans;
    }
    if (board[i][j] === word[k]) {
      check[cal(i, j)] = false;
      if (k + 1 === l) {
        ans = true;
      } else {
        if (i > 0 && check[cal(i - 1, j)] && !ans) {
          ans = ff(i - 1, j, ans);
        }
        if (j > 0 && check[cal(i, j - 1)] && !ans) {
          ans = ff(i, j - 1, ans);
        }
        if (i < m - 1 && check[cal(i + 1, j)] && !ans) {
          ans = ff(i + 1, j, ans);
        }
        if (j < n - 1 && check[cal(i, j + 1)] && !ans) {
          ans = ff(i, j + 1, ans);
        }
      }
    }

    return ans;
  }
  let ans = false;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sub = f(i, j, 0, [...check]);
      if (sub) {
        ans = true;
        break;
      }
    }
    if (ans) {
      break;
    }
  }
  return ans;
};

// Runtime: 1568 ms, faster than 25.90% of JavaScript online submissions for Word Search.
// Memory Usage: 54.1 MB, less than 5.24% of JavaScript online submissions for Word Search.
