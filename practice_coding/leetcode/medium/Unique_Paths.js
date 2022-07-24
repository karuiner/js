/*
 *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 풀이 완료
var uniquePaths = function (m, n) {
  let db = {};
  if (m > n) {
    [m, n] = [n, m];
  }
  for (let i = 1; i <= m; i++) {
    db[i] = {};
  }
  let max = Math.max(m, n);
  for (let i = 1; i <= n; i++) {
    db[1][i] = 1;
  }

  function f(x, y) {
    let ans = 0;
    if (x > y) {
      [x, y] = [y, x];
    }
    if (db[x][y] === undefined) {
      if (y > 1) {
        ans += f(x, y - 1);
      }
      if (x > 1) {
        ans += f(x - 1, y);
      }
      db[x][y] = ans;
    } else {
      ans = db[x][y];
    }
    return ans;
  }
  return f(m, n);
};

// Runtime: 109 ms, faster than 22.11% of JavaScript online submissions for Unique Paths.
// Memory Usage: 42.3 MB, less than 49.57% of JavaScript online submissions for Unique Paths.

//풀이 시도 1
var uniquePaths = function (m, n) {
  let ans = 0;
  function f(x, y) {
    if (x < m) {
      f(x + 1, y);
    }
    if (y < n) {
      f(x, y + 1);
    }
    if (x === m && y === n) {
      ans++;
    }
  }
  f(1, 1);
  return ans;
};
