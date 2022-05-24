/*
 *
 * @param {number[]} deliciousness
 * @return {number}
 */

// 풀이 시도 1
var countPairs = function (deliciousness) {
  let ans = 0,
    n = deliciousness.length,
    db = {};
  function f(n) {
    if (n <= 2) {
      return n > 0 ? true : false;
    }
    if (n % 2 !== 0) {
      return false;
    } else {
      let rn = Math.floor(Math.sqrt(n));
      if (rn ** 2 !== n) {
        return f(n / 2);
      } else {
        return f(rn);
      }
    }
  }

  for (let i = 0; i < n - 1; i++) {
    let a = deliciousness[i];
    for (let j = i + 1; j < n; j++) {
      let b = deliciousness[j],
        k = a + b;
      if (db[k] === undefined) {
        let sub = f(k);
        db[k] = sub;
        if (sub) {
          ans++;
        }
      } else if (db[k]) {
        ans++;
      }
    }
  }
  return ans;
};
