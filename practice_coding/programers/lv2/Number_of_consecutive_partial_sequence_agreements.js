//연속 부분 수열 합의 개수
function solution(elements) {
  let db = {},
    n = elements.length,
    ans = 0,
    rt = {};

  for (let i = 0; i <= n; i++) {
    let c = i;
    if (db[i] === undefined) {
      db[i] = {};
    }
    for (let s = 0; s < n; s++) {
      if (i === 0) {
        db[i][s] = 0;
      } else {
        db[i][s] = db[i - 1][s];
        let e = s + i - 1;
        if (e !== s) {
          if (e > n - 1) {
            e = e % n;
          }
        }
        db[i][s] += elements[e];
      }
      let u = db[i][s];
      if (rt[u] === undefined) {
        rt[u] = true;
        ans++;
      }
    }
  }

  return ans - 1;
}
