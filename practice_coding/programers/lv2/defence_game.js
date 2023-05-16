//디펜스 게임
// 시도 3
function solution(n, k, enemy) {
  let ans = 0,
    l = enemy.length,
    marr = [];
  if (k >= l) {
    return l;
  }

  function insert(x) {
    let left = 0;
    let right = marr.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (x > marr[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    marr.splice(left, 0, x);
  }

  function get() {
    return marr.shift();
  }
  for (let i of enemy) {
    if (n > i) {
      n -= i;
      insert(i);
    } else if (k > 0) {
      if (marr.length > 0) {
        let p = get();
        insert(i);
        n += p - i;
      }
      k--;
    } else {
      n -= i;
    }

    if (n >= 0) {
      ans++;
    }
  }

  return ans;
}

// 시도 2
function solution(n, k, enemy) {
  let ans = 0,
    l = enemy.length,
    marr = [];

  function insert(x) {
    let n = marr.length;
    if (n > 0) {
      let [a, b] = [0, n - 1];
      if (x >= marr[a]) {
        marr = [x].concat(marr);
      } else if (x <= marr[b]) {
        marr.push(x);
      } else {
        while (a < b) {
          let m = Math.floor((a + b) * 0.5);
          if (x > marr[m]) {
            b = m;
          } else {
            a = m + 1;
          }
        }
        marr = marr.slice(0, a).concat(x, marr.slice(a));
      }
    } else {
      marr.push(x);
    }
  }
  function get() {
    let x = marr[0];
    marr = marr.slice(1);
    return x;
  }

  for (let i of enemy) {
    if (n > i) {
      n -= i;
      insert(i);
    } else if (k > 0) {
      if (marr.length > 0) {
        let p = get();
        insert(i);
        n += p - i;
      }
      k--;
    } else {
      n -= i;
    }

    if (n >= 0) {
      ans++;
    }
  }

  return ans;
}

// 시도 1
function solution(n, k, enemy) {
  let ans = 0,
    l = enemy.length;
  if (l <= k) {
    return l;
  } else {
    let i = 0;
    while (i < l && n > 0) {
      let h = Math.floor(n / 2),
        c = enemy[i];
      if (n - c < h && k > 0) {
        k--;
      } else {
        n -= c;
      }
      i++;
    }
    console.log(i, n);
    return n > 0 ? i : i - 1;
  }
}
