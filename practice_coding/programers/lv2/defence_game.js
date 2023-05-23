//디펜스 게임
// 시도 10
// 잘못된 접근
function solution(n, k, enemy) {
  let ans = k,
    l = enemy.length,
    marr = [],
    c = 0;
  if (l <= k) {
    return l;
  }

  function f(k) {
    let arr = enemy.slice(0, k),
      s = 0,
      n = 0,
      t = 0,
      key = [],
      db = [];
    for (let i of arr) {
      if (db[i] === undefined) {
        db[i] = 0;
        key[n] = i;
        n++;
      }
      db[i]++;
      s += i;
      t++;
    }
    key.sort((a, b) => a - b);

    function push(x) {
      s += x;
      if (n === 0 || x <= key[0]) {
        key.splice(0, 0, x);
        db[x] = 1;
      } else if (x > key[n - 1]) {
        key[n] = x;
        db[x] = 1;
      } else {
        if (db[x] === undefined) {
          let left = 0;
          let right = n;
          while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (x > arr[mid]) {
              left = mid + 1;
            } else {
              right = mid;
            }
          }

          arr.splice(left, 0, x);
          db[x] = 0;
        }
        db[x]++;
      }
      if (t + 1 > k) {
        let q = key[0];
        if (db[q] > 1) {
          db[q]--;
        } else {
          key.shift();
          delete db[q];
        }
        s -= q;
      } else {
        t++;
      }
    }

    return {
      push: push,
      sum: () => s,
      n: () => n,
      arr: arr,
    };
  }
  let m = f(k),
    s = m.sum();

  for (let i = k; i < l; i++) {
    let a = enemy[i];
    m.push(a);
    s += a;
    if (s > m.sum() + n) {
      break;
    }

    ans++;
  }
  return ans;
}

// 시도 9
function solution(n, k, enemy) {
  let ans = k,
    l = enemy.length,
    marr = [],
    c = 0;
  if (l <= k) {
    return l;
  }

  function f(k) {
    let arr = enemy.slice(0, k),
      s = 0,
      n = 0;
    arr.sort((a, b) => a - b);
    for (let i of arr) {
      s += i;
      n++;
    }

    function push(x) {
      s += x;
      if (n === 0 || x <= arr[0]) {
        arr.splice(0, 0, x);
      } else if (x > arr[n - 1]) {
        arr[n] = x;
      } else {
        let left = 0;
        let right = n;
        while (left < right) {
          const mid = Math.floor((left + right) / 2);
          if (x > arr[mid]) {
            left = mid + 1;
          } else {
            right = mid;
          }
        }
        arr.splice(left, 0, x);
      }
      if (n + 1 > k) {
        let p = arr.shift();
        s -= p;
      } else {
        n++;
      }
    }

    return {
      push: push,
      sum: () => s,
      n: () => n,
      arr: arr,
    };
  }
  let m = f(k),
    s = m.sum();

  for (let i = k; i < l; i++) {
    let a = enemy[i];
    m.push(a);
    s += a;
    if (s > m.sum() + n) {
      break;
    }

    ans++;
  }
  return ans;
}

// 시도 8
// 두개의 시간초과를 제외하고 모두 풀이함.
// 방법
// 순차적으로 진행하면서 주어진 갯수 만큼 채울수 있는 최대값 배열을 만들고 해당 배열의 합을 구한다.
// 현재 주어진 값들을 합산하는 합 변수를 하나 정의한다.
// 주어진 값과 최대 값 배열의 총합을 더한 값이 합산 값 변수 보다 작아지는 경우
// 연산을 종료한다.
// 이전까지의 횟수를 결과로 돌려준다.
// 즉 현재 단계까지 수행하면서 무시되지 않은 스테이지의 값을 초기값과 비요하여 불가능 가능여부를 확인하는 것이다.

function solution(n, k, enemy) {
  let ans = 0,
    l = enemy.length,
    marr = [],
    c = 0;

  function f() {
    let arr = [],
      s = 0,
      n = 0;
    function push(x) {
      s += x;
      if (n === 0 || x <= arr[0]) {
        arr.splice(0, 0, x);
      } else if (x > arr[n - 1]) {
        arr[n] = x;
      } else {
        let left = 0;
        let right = n;
        while (left < right) {
          const mid = Math.floor((left + right) / 2);
          if (x > arr[mid]) {
            left = mid + 1;
          } else {
            right = mid;
          }
        }
        arr.splice(left, 0, x);
      }
      if (n + 1 > k) {
        let p = arr.shift();
        s -= p;
      } else {
        n++;
      }
    }

    return {
      push: push,
      sum: () => s,
      n: () => n,
      arr: arr,
    };
  }
  let m = f(),
    s = 0;

  for (let i of enemy) {
    m.push(i);
    s += i;
    if (s > m.sum() + n) {
      break;
    }
    ans++;
  }
  return ans;
}

// 시도 7
function solution(n, k, enemy) {
  let ans = 0,
    l = enemy.length,
    marr = [],
    c = 0;
  let arr = [];
  function f() {
    let arr = [],
      s = 0,
      n = 0;
    return {
      push: (x) => {
        if (n > 0 && x > arr[n - 1]) {
          let i = 0;
          if (x < arr[0]) {
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
            i = left;
          }
          arr.splice(i, 0, x);
          s += x;
          if (n + 1 > k) {
            s -= arr[n];
            arr = arr.slice(0, k);
          } else {
            n++;
          }
        } else if (n === 0) {
          arr[0] = x;
          s = x;
          n++;
        }
      },
      sum: s,

      n: n,
      arr: arr,
    };
  }
  let m = f();

  for (let i of enemy) {
    m.push(i);
    console.log(m.sum, m.arr);
    c += i;
    arr.push(c);
  }
  console.log(arr);
  return ans;
}

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
