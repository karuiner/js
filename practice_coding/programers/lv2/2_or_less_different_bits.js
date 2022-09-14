//2개 이하로 다른 비트

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
