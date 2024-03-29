// 큰 수 만들기

// 풀이 시도 11
// 한개 빼고 모두 성공 - 이전 시도와 같은 결과
// 방법은 단순히 앞에서부터 주어진 길이 내의 값중 가장 큰값을
// 첫번째 기준으로 삼는다. 그앞의 값은 버린다. 그리고 주어진기렝서 버려진 숫자의 갯수를 제한다.
// 선택된 다음 수부터 위 방법을 반복한다.
// 모든 수를 돌 때 까지 주어진 길이가 소모되지 않으면
// 주어진 배열의 마지막에서부터 길이만큼을 제한다.
function solution(number, k) {
  let idx = 0,
    n = number.length;
  let ans = "";
  while (k > 0 && idx < n) {
    let l = idx + k > n - 1 ? n - 1 : idx + k,
      max = 0,
      si = idx;
    for (let i = idx; i <= l; i++) {
      let k = number[i];
      if (k > max) {
        max = k;
        si = i;
      }
    }
    ans += max;
    k -= si - idx;
    idx = si + 1;
  }

  if (k === 0) {
    ans = ans + number.slice(idx);
  } else {
    ans = number.slice(0, n - k);
  }
  return ans;
}

// 풀이시도 10
function solution(number, k) {
  let idx = 0,
    n = number.length;
  let ans = "";
  while (k > 0 && idx < n) {
    if (idx > 0 && number[idx - 1] < number[idx]) {
      let q = idx;
      while (k > 0 && q - 1 >= 0 && number[q - 1] < number[idx]) {
        q--;
        n--;
        k--;
      }

      number = number.slice(0, q) + number.slice(idx);
      idx = q;
    } else {
      idx++;
    }
  }
  ans = number.slice(0, n - k);
  return ans;
}

// 풀이시도 9
function solution(number, k) {
  let idx = 0,
    n = number.length;
  let ans = "",
    key = [],
    count = [],
    u = "";
  for (let i of number) {
    if (u === "") {
      u = i;
      key[idx] = i;
      count[idx] = 1;
    } else if (i === u) {
      count[idx]++;
    } else {
      idx++;
      key[idx] = i;
      count[idx] = 1;
      u = i;
    }
  }
  n = idx + 1;
  idx = 0;
  while (k > 0 && idx < n) {
    if (idx > 0 && key[idx - 1] < key[idx]) {
      if (count[idx - 1] > k) {
        count[idx - 1] -= k;
        k = 0;
      } else {
        k -= count[idx - 1];
        key = [...key.slice(0, idx - 1), ...key.slice(idx)];
        count = [...count.slice(0, idx - 1), ...count.slice(idx)];
        idx--;
        n--;
      }
    } else {
      idx++;
    }
  }
  for (let i = 0; i < n; i++) {
    ans = ans.padEnd(ans.length + count[i], key[i]);
  }
  return ans.slice(0, number.length - k);
}

// 풀이시도 8
function solution(number, k) {
  let idx = 0,
    n = number.length;
  let ans = "",
    key = [],
    count = [],
    u = "";
  for (let i of number) {
    if (u === "") {
      u = i;
      key[idx] = i;
      count[idx] = 1;
    } else if (i === u) {
      count[idx]++;
    } else {
      idx++;
      key[idx] = i;
      count[idx] = 1;
      u = i;
    }
  }
  n = idx + 1;
  idx = 0;
  while (k > 0 && idx < n) {
    if (idx > 0 && key[idx - 1] < key[idx] && count[idx - 1] > 0) {
      if (count[idx - 1] >= k) {
        count[idx - 1] -= k;
        k = 0;
      } else {
        k -= count[idx - 1];
        count[idx - 1] = 0;
      }
    } else {
      idx++;
    }
  }
  for (let i = 0; i < n; i++) {
    ans = ans.padEnd(ans.length + count[i], key[i]);
  }
  return ans.slice(0, number.length - k);
}

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
