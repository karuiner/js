//억억단을 외우자

// 풀이완료
function solution(e, starts) {
  let ans = [],
    max = 0,
    target,
    db = {},
    min = e,
    check = { 1: 1 };

  let arr = Array(e + 1).fill(0);
  for (let i = 2; i < e + 1; i++) {
    let k = Math.min(Math.floor(e / i) + 1, i);
    for (let j = 1; j < k; j++) {
      arr[i * j] += 2;
    }
  }
  let h = Math.floor(Math.sqrt(e)) + 1;
  for (let i = 1; i < h; i++) {
    arr[i ** 2]++;
  }

  starts.forEach((x, i) => {
    db[x] = i;
    if (x < min) {
      min = x;
    }
  });

  for (let i = e; i >= min; i--) {
    let k = arr[i];
    if (max < k) {
      max = k;
      target = i;
    } else if (k === max) {
      target = i;
    }
    if (db[i] !== undefined) {
      ans[db[i]] = target;
    }
  }

  return ans;
}
// 풀이 시도 5
function solution(e, starts) {
  let ans = [],
    max = 0,
    target,
    db = {},
    min = Infinity,
    ldb = { 2: { 2: 1 }, 3: { 3: 1 } };

  function f(x) {
    let ans = 1;
    if (x === 1) {
      return x;
    }
    if (ldb[x] !== undefined) {
      for (let i in ldb[x]) {
        ans *= ldb[x][i] + 1;
      }
    } else {
      let h = Math.floor(Math.sqrt(x));
      if (h <= 2) {
        h = 2;
      }
      for (let i = 2; i <= h; i++) {
        if (x % i === 0) {
          let [a, b] = [i, x / i];
          if (ldb[b] === undefined) {
            f(b);
          }
          ldb[x] = { ...ldb[b] };
          if (ldb[x][a] === undefined) {
            ldb[x][a] = 0;
          }
          ldb[x][a]++;
          for (let i in ldb[x]) {
            ans *= ldb[x][i] + 1;
          }

          break;
        }
      }
    }

    return ans;
  }

  starts.map((x, i) => {
    db[x] = i;
    if (x < min) {
      min = x;
    }
  });

  for (let i = e; i >= min; i--) {
    let idx = db[i],
      k = f(i);

    if (k > max) {
      max = k;
      target = i;
    } else if (k === max) {
      target = i;
    }

    if (idx !== undefined) {
      ans[idx] = target;
    }
  }

  return ans;
}

// 풀이 시도 4
function solution(e, starts) {
  let ans = [],
    max = 0,
    target,
    db = {},
    min = Infinity,
    ldb = { 1: 1, 2: 2, 3: 2 };

  function f(x) {
    let h = Math.floor(Math.sqrt(x)),
      ans = 2;
    if (ldb[x] === undefined) {
      if (h < 2) {
        return x;
      }
      for (let i = 2; i <= h; i++) {
        if (x % i === 0) {
          let [a, b] = [i, x / i];
          if (ldb[a] === undefined) {
            ldb[a] = f(a);
          }
          let x1 = ldb[a];
          if (ldb[b] === undefined) {
            ldb[b] = f(b);
          }
          let y1 = ldb[b];
          ans = x1 * (y1 - 1);

          break;
        }
      }
      ldb[x] = ans;
    } else {
      ans = ldb[x];
    }

    return ans;
  }

  starts.map((x, i) => {
    db[x] = i;
    if (x < min) {
      min = x;
    }
  });

  for (let i = e; i >= min; i--) {
    let idx = db[i],
      k = f(i);

    if (k > max) {
      max = k;
      target = i;
    } else if (k === max) {
      target = i;
    }
    console.log(i, idx, k, target);
    if (idx !== undefined) {
      ans[idx] = target;
    }
  }
  console.log(ldb);
  return ans;
}

// 풀이 시도 3
function solution(e, starts) {
  let ans = [],
    max = 0,
    target,
    db = {},
    min = Infinity;

  function f(x) {
    let h = Math.floor(Math.sqrt(x)),
      ans = 0;
    for (let i = 1; i <= h; i++) {
      if (x % i === 0) {
        if (i === x / i) {
          ans++;
        } else {
          ans += 2;
        }
      }
    }
    return ans;
  }

  starts.map((x, i) => {
    db[x] = i;
    if (x < min) {
      min = x;
    }
  });

  for (let i = e; i >= min; i--) {
    let idx = db[i],
      k = f(i);
    if (k > max) {
      max = k;
      target = i;
    } else if (k === max) {
      target = i;
    }
    if (idx !== undefined) {
      ans[idx] = target;
    }
  }
  return ans;
}

// 풀이 시도 2
function solution(e, starts) {
  let ans = [],
    max = 0,
    marr = [],
    db = {};

  function f(x) {
    let h = Math.floor(Math.sqrt(x)),
      ans = 0;
    for (let i = 1; i <= h; i++) {
      if (x % i === 0) {
        if (i === x / i) {
          ans++;
        } else {
          ans += 2;
        }
      }
    }
    return ans;
  }
  for (let i = 0; i < starts.length; i++) {
    let k = starts[i];
    let max = 0;
    for (let j = k; j <= e; j++) {
      if (db[j] === undefined) {
        db[j] = f(j);
      }
      if (db[j] > max) {
        max = db[j];
        ans[i] = j;
      }
    }
  }

  return ans;
}

// 수정중
function solution(e, starts) {
  let ans = [],
    max = 0,
    arr = [],
    key = [],
    db = {};

  function f(x) {
    let h = Math.floor(Math.sqrt(x)),
      ans = 0;
    for (let i = 1; i <= h; i++) {
      if (x % i === 0) {
        if (i === x / i) {
          ans++;
        } else {
          ans += 2;
        }
      }
    }
    return ans;
  }

  for (let i = 1; i <= e; i++) {
    let k = f(i);
    if (db[k] === undefined) {
      key.push(k);
      db[k] = [];
    }
    db[k].push(i);
    arr.push([...key]);
  }
  console.log(arr);
  for (let i of starts) {
    let all = arr[e - 1];
    let del = arr[i - 1];
    console.log(all, del);
    // for (let j of marr){
    //     if (i <=j){
    //         ans.push(j)
    //         break
    //     }
    // }
  }

  return ans;
}

// 풀이시도 1

function solution(e, starts) {
  let ans = [],
    max = 0,
    marr = [];

  function f(x) {
    let h = Math.floor(Math.sqrt(x)),
      ans = 0;
    for (let i = 1; i <= h; i++) {
      if (x % i === 0) {
        if (i === x / i) {
          ans++;
        } else {
          ans += 2;
        }
      }
    }
    return ans;
  }
  for (let i = 1; i <= e; i++) {
    let k = f(i);

    if (k > max) {
      max = k;
      marr = [i];
    } else if (k === max) {
      marr.push(i);
    }
  }
  for (let i of starts) {
    for (let j of marr) {
      if (i <= j) {
        ans.push(j);
        break;
      }
    }
  }

  return ans;
}
