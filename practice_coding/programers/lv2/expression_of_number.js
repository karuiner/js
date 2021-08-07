function solution(n) {
  function f(a, b, n) {
    let x = 0.5 * (a + b) * (b - a + 1);

    return x > n ? 1 : x < n ? -1 : 0;
  }
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    let a = i,
      b = n,
      c = Math.floor(0.5 * (a + b));
    if (f(i, a, n) === 0) {
      ans++;
    } else if (f(i, b, n) === 0) {
      ans++;
    } else {
      while (a < c) {
        let z = f(i, c, n);
        if (z === 0) {
          ans++;
          break;
        } else if (z > 0) {
          b = c;
          c = Math.floor(0.5 * (a + b));
        } else {
          a = c;
          c = Math.floor(0.5 * (a + b));
        }
      }
    }
  }
  return ans;
}

let n = 15;
console.log(solution(n)); // 4
// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15
