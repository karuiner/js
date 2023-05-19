//디펜스 게임
// 시도 6
// k의길이가 고정이라는점을 활용하면 좋을것도 같은데..
function solution(n, k, enemy) {
  let ans = 0,
    l = enemy.length,
    marr = [],
    c = 0;
  if (k >= l) {
    return l;
  }

  function f() {
    let arr = [],
      n = 0;
    return {
      push: (x) => {
        if (x <= arr[n - 1]) {
          arr[n] = x;
        } else if (x > arr[0]) {
          arr = [x].concat(arr);
        } else {
          let left = 0;
          let right = n;
          while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (x > arr[mid]) {
              right = mid;
            } else {
              left = mid + 1;
            }
          }
          arr.splice(left, 0, x);
        }
      },
      get: () => {
        return arr.shift();
      },
      n: n,
      arr: arr,
    };
  }
  let m = f();

  for (let i = 0; i < l; i++) {
    let a = enemy[i];
    if (k > 0) {
      m.push(a);
      k--;
    } else if (n > 0) {
      m.push(a);
      let q = m.get();
      n -= q;
    } else {
      break;
    }
    ans++;
  }

  return ans;
}

// 시도 5
// 단순히 순차적으로 셈하는것도 속도가 느리다..
function solution(n, k, enemy) {
  let ans = 0,
    l = enemy.length,
    arr = [],
    c = 0;
  if (k >= l) {
    ans = l;
  } else {
    for (let i of enemy) {
      if (i >= 0.5 * n && k > 0) {
        k--;
      } else {
        n -= i;
      }
      if (n > 0) {
        c++;
      } else {
        break;
      }
    }
    ans = c;
  }
  return ans;
}

// 시도 4
function solution(n, k, enemy) {
  let ans = 0,
    l = enemy.length,
    marr = [],
    c = 0;
  if (k >= l) {
    return l;
  }

  function f() {
    let arr = [],
      n = 0;
    return {
      push: (x) => {
        if (x <= arr[n - 1]) {
          arr[n] = x;
        } else if (x > arr[0]) {
          arr = [x].concat(arr);
        } else {
          let left = 0;
          let right = n;
          while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (x > arr[mid]) {
              right = mid;
            } else {
              left = mid + 1;
            }
          }
          arr.splice(left, 0, x);
        }
      },
      get: () => {
        return arr.shift();
      },
      n: n,
      arr: arr,
    };
  }
  let m = f();

  for (let i = 0; i < l; i++) {
    let a = enemy[i];
    m.push(a);
    n -= a;
    if (n <= 0 && k > 0) {
      let p = m.get();
      n += p;
      k--;
    }
    if (n >= 0) {
      ans++;
    } else {
      break;
    }
  }

  return ans;
}

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
