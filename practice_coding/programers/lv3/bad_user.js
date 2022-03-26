// 불량 유저

function solution(user_id, banned_id) {
  function check(a, b) {
    let l = a.length,
      ans = true;
    for (let i = 0; i < l; i++) {
      if (a[i] !== b[i] && b[i] !== "*") {
        ans = false;
        break;
      }
    }
    return ans;
  }
  let db = {};
  for (let i of user_id) {
    let l = i.length,
      s = i[0];
    if (db[l] === undefined) {
      db[l] = [];
    }

    db[l].push(i);
  }
  let out = {},
    ans = {},
    count = {};
  for (let i of banned_id) {
    let l = i.length,
      arr = [];
    if (count[l] === undefined) {
      count[l] = 0;
    }
    count[l]++;
    if (db[l] !== undefined) {
      for (let a of db[l]) {
        if (check(a, i)) {
          arr.push(a);
        }
      }
      arr.sort();
      let s = arr.join("-");
      if (out[s] === undefined) {
        if (ans[l] === undefined) {
          ans[l] = {};
        }
        for (let i of arr) {
          if (ans[l][i] === undefined) {
            ans[l][i] = true;
          }
        }
        out[s] = arr;
      }
    }
  }

  function combi(a, b) {
    [a, b] = a > b ? [b, a] : [a, b];
    let u = 1,
      d = 1;
    for (let i = b; i > b - a; i--) {
      u *= i;
    }
    for (let i = a; i > 1; i--) {
      d *= i;
    }
    return u / d;
  }
  if (Object.keys(ans).length === 0) {
    return 0;
  }

  let rst = 0;
  for (let i in count) {
    let a = count[i],
      b = Object.keys(ans[i]).length;
    if (b > 0) {
      if (rst === 0) {
        rst = combi(a, b);
      } else {
        rst *= combi(a, b);
      }
    }
  }

  return rst;
}
