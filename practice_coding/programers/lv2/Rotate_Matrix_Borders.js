//행렬 테두리 회전하기

// 풀이 완료

function solution(rows, columns, queries) {
  let ans = [],
    db = {},
    [r, c] = [rows, columns];
  function check(i, j) {
    let ans = true;
    if (db[i] === undefined) {
      ans = false;
    }
    if (ans && db[i][j] === undefined) {
      ans = false;
    }
    return ans;
  }
  function input(i, j, k) {
    if (db[i] === undefined) {
      db[i] = {};
    }
    db[i][j] = k;
  }

  function f(is, js, ie, je) {
    let k = (is - 1) * c + js;
    if (check(is, js)) {
      k = db[is][js];
    }
    let mn = k;
    for (let j = js + 1; j <= je; j++) {
      let s = (is - 1) * c + j;
      if (check(is, j)) {
        s = db[is][j];
      }
      input(is, j, k);
      k = s;
      if (k < mn) {
        mn = k;
      }
    }
    for (let i = is + 1; i <= ie; i++) {
      let s = (i - 1) * c + je;
      if (check(i, je)) {
        s = db[i][je];
      }
      input(i, je, k);
      k = s;
      if (k < mn) {
        mn = k;
      }
    }
    for (let j = je - 1; j >= js; j--) {
      let s = (ie - 1) * c + j;
      if (check(ie, j)) {
        s = db[ie][j];
      }
      input(ie, j, k);
      k = s;
      if (k < mn) {
        mn = k;
      }
    }
    for (let i = ie - 1; i > is; i--) {
      let s = (i - 1) * c + js;
      if (check(i, js)) {
        s = db[i][js];
      }
      input(i, js, k);
      k = s;
      if (k < mn) {
        mn = k;
      }
    }
    input(is, js, k);
    return mn;
  }
  for (let crr of queries) {
    let k = f(...crr);
    ans.push(k);
  }

  return ans;
}
