//옹알이(1)

function solution(babbling) {
  let ans = 0;
  let db = { a: "aya", y: "ye", w: "woo", m: "ma" };

  function f(x) {
    let sub = {},
      i = 0,
      n = x.length,
      check = true;
    while (i < n && check) {
      let k = x[i];
      if (db[k] && !sub[k]) {
        let w = db[k],
          p = w.length,
          u = x.slice(i, i + p);
        if (w === u) {
          sub[k] = true;
          i += p;
        } else {
          check = false;
        }
      } else {
        check = false;
      }
    }
    return check;
  }
  for (let i of babbling) {
    let s = f(i);
    ans += s ? 1 : 0;
  }

  return ans;
}
