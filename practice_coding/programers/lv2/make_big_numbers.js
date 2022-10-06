// 큰 수 만들기 - 다시 시작
//풀이시도 7
function solution(number, k) {
  let idx = 0,
    n = number.length,
    i = 0,
    j = 0,
    check = [],
    u = 0;
  let ans = "";
  for (let i = 0; i < n; i++) {
    check[i] = true;
  }
  while (k > 0 && i < n) {
    if (i === j) {
      j++;
    } else if (i < idx) {
      idx = j;
      i = j;
      j++;
    } else if (number[i] < number[j]) {
      check[i] = false;
      i--;
      k--;
    } else if (!check[i] && i < j) {
      i++;
    } else if (!check[j] && j < n) {
      j++;
    } else {
      i++;
      j++;
    }
    u++;
  }
  number = number.slice(0, n - k);

  return number.split("").reduce((acc, x, i) => (check[i] ? acc + x : acc), "");
}

// 풀이 시도 6
function solution(number, k) {
  let idx = 0,
    n = number.length,
    i = 0,
    j = 0,
    check = [],
    u = 0;
  let ans = "";
  for (let i = 0; i < n; i++) {
    check[i] = true;
  }
  while (k > 0 && i < n && u < 2 * n) {
    if (i === j) {
      j++;
    } else if (i < idx) {
      idx = j;
      i = j;
      j++;
    } else if (number[i] < number[j]) {
      check[i] = false;
      i--;
      k--;
    } else {
      i++;
      j++;
    }
    u++;
  }

  return number.split("").reduce((acc, x, i) => (check[i] ? acc + x : acc), "");
}

// 풀이 시도 5
function solution(number, k) {
  let idx = 0,
    n = number.length;
  let ans = "";
  while (k > 0 && idx < n) {
    if (idx > 0 && number[idx - 1] < number[idx]) {
      number = number.slice(0, idx - 1) + number.slice(idx);
      idx--;
      n--;
      k--;
    } else {
      idx++;
    }
  }
  ans = number.slice(0, n - k);
  return ans;
}

//풀이시도 4
function solution(number, k) {
  let idx = 0,
    n = number.length;
  let ans = "";
  while (k > 0 && idx < n) {
    let max = ["0", -1];
    for (let i = idx; i <= idx + k; i++) {
      if (number[i] > max[0]) {
        max = [number[i], i];
      }
    }
    ans += max[0];
    k -= max[1] - idx;
    idx = max[1] + 1;
  }
  if (k > 0) {
    ans = number.slice(0, n - k);
  }
  return ans;
}

//풀이 시도 3
function solution(number, k) {
  let idx = 0,
    c = 0,
    n = number.length,
    p = 0;
  let arr = [],
    check = [],
    z1 = 0,
    z2 = 1;
  for (let i = 0; i < n; i++) {
    let p = Number(number[i]);
    if (arr[p] === undefined) {
      arr[p] = [];
    }
    arr[p].push(i);
    check[i] = true;
  }
  let q = arr.reduce((acc, x) => acc.concat(x), []);
  function f(check) {
    return check.reduce((acc, x, i) => (x ? acc + number[i] : acc), "");
  }
  while (c < k) {
    let a = [...check],
      b = [...check];
    a[z1] = false;
    b[z2] = false;
    let u = f(a),
      l = f(b);
    if (u < l) {
      check = [...b];
      z1;
      z2 = z2 + 1;
      c++;
    } else if (u > l) {
      check = [...a];
      z1 = z2;
      z2 = z2 + 1;
      c++;
    } else {
      z1++;
      z2++;
    }
    //  console.log(c,k,z1,z2,f(check),u,l)
  }

  return f(check);
}

//풀이시도 2
function solution(number, k) {
  let idx = 0,
    c = 0,
    n = number.length,
    p = 0;
  let arr = [],
    check = [];

  function f(s, c) {
    let ans = "",
      n = s.length,
      x = "";

    for (let i = 0; i < n; i++) {
      let sub = s.slice(0, i) + s.slice(i + 1);

      if (x.length === 0) {
        x = sub[0];
      } else if (Number(x) < Number(sub[0])) {
        x = sub[0];
      }
      if (x === sub[0]) {
        if (c > 1) {
          sub = f(sub, c - 1);
        }
        if (ans.length === 0) {
          ans = sub;
        } else if (sub > ans) {
          ans = sub;
        }
      }
    }
    return ans;
  }

  return f(number, k);
}

// 풀이시도 1
function solution(number, k) {
  let i = 0,
    c = 0,
    n = number.length,
    p = 0;
  let sn = number.split("");
  sn.sort();
  sn.join("");
  while (c < k) {
    let z = n;
    for (let j = 0; j < n; j++) {
      if (number[i] === sn[j]) {
        number = number.slice(0, i) + number.slice(i + 1);
        sn = sn.slice(0, j) + sn.slice(j + 1);
        n--;
        c++;
        break;
      }
    }
    if (z === n) {
      i++;
    }
  }
  return number;
}
