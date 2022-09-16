//2개 이하로 다른 비트

// 풀이 완료
function solution(numbers) {
  let ans = [];

  function cvt(l) {
    if (l === 1) {
      return "1";
    }
    return "10".padEnd(l, "1");
  }

  function f(x) {
    let n = x.length,
      idx = -1;
    for (let i = n - 1; i >= 0; i--) {
      if (x[i] === "0") {
        idx = i;
        break;
      }
    }

    let k = n - idx;
    if (idx < 0) {
      return cvt(k);
    } else {
      return x.slice(0, idx) + cvt(k);
    }
  }
  for (let i of numbers) {
    let a = i.toString(2);
    let b = f(a);
    ans.push(parseInt(b, 2));
  }

  return ans;
}

// 풀이시도 1
function solution(numbers) {
  let ans = [];

  function check(x, y) {
    let b = y.toString(2),
      n = b.length;
    let a = x.toString(2);
    if (n > a.length) {
      a = a.padStart(n, "0");
    }
    let ans = 0;
    for (let i = 0; i < n; i++) {
      if (a[i] !== b[i]) {
        ans++;
      }
    }
    return ans;
  }

  function f(x) {
    let y = x + 1;
    while (check(x, y) > 2) {
      y++;
    }
    return y;
  }
  for (let i of numbers) {
    ans.push(f(i));
  }

  return ans;
}
