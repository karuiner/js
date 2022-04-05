//줄서는 방법
function solution(n, k) {
  let fact = { 0: 1 },
    s = 1,
    ns = [];
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      s *= i;
      fact[i] = s;
      ns[i - 1] = i;
    }
  }

  function f(n, k, ns) {
    let ans = [];
    let a = fact[n - 1],
      b = Math.floor((k - 1) / a);
    let q = ns[b],
      sub = [...ns.slice(0, b), ...ns.slice(b + 1)];
    ans.push(q);
    if (sub.length > 0 && n > 0) {
      let nans = f(n - 1, k - b * a, sub);
      ans = ans.concat(nans);
    }
    return ans;
  }

  return f(n, k, ns);
}
let n = 3,
  k = 5,
  expected_result = [3, 1, 2];
console.log(
  `calculated_result : ${solution(n, k)}, expected_result : ${expected_result} `
);
