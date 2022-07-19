/*
 *
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */

//풀이시도 1
var countSubIslands = function (grid1, grid2) {
  let c = 0,
    db = {},
    check = {},
    m = grid2.length,
    n = grid2[0].length;

  function ck(i, j) {
    let ans = -1;
    if (check[i - 1] !== undefined) {
      if (check[i - 1][j] !== undefined) {
        ans = check[i - 1][j];
      }
    }
    if (ans === -1 && check[i] !== undefined) {
      if (check[i][j - 1] !== undefined) {
        ans = check[i][j - 1];
      }
    }
    return ans;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let ckk = ck(i, j);
      if (ckk === -1 && grid2[i][j] === 1) {
        c++;
        if (check[i] === undefined) {
          check[i] = {};
        }
        check[i][j] = 10 + c;
        db[10 + c] = [[i, j]];
      } else if (grid2[i][j] === 1) {
        if (check[i] === undefined) {
          check[i] = {};
        }

        check[i][j] = ckk;
        db[ckk].push([i, j]);
      }
    }
  }
  let ans = 0;
  console.log(db);
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
