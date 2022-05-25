/*
 *
 * @param {number[]} deliciousness
 * @return {number}
 */

// 풀이 완료
var countPairs = function (deliciousness) {
  let ans = 0,
    n = deliciousness.length,
    db = {},
    arr = [],
    k = {},
    c = 0;
  for (let i of deliciousness) {
    if (db[i] === undefined) {
      arr.push(i);
      db[i] = 1;
      c++;
    } else {
      db[i]++;
    }
  }
  arr.sort((a, b) => a - b);
  let max = arr[c - 1],
    min = arr[0],
    p = [1],
    q = 1,
    c2 = 1,
    check = {};

  while (q <= max) {
    q *= 2;
    p.push(q);
    c2++;
  }
  for (let i = 0; i < c; i++) {
    let a = arr[i];
    for (let j = 0; j < c2; j++) {
      let z = p[j],
        b = z - a,
        key = a < b ? `${a}-${b}` : `${b}-${a}`;
      if (db[b] !== undefined) {
        if (a === b) {
          let l = db[a];
          ans += l * (l - 1) * 0.5;
        } else if (check[key] === undefined) {
          let l = db[a],
            m = db[b];
          ans += l * m;
          check[key] = true;
        }
      }
    }
  }
  return ans % (1e9 + 7);
};

// Runtime: 1377 ms, faster than 24.00% of JavaScript online submissions for Count Good Meals.
// Memory Usage: 119.6 MB, less than 6.00% of JavaScript online submissions for Count Good Meals.

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
