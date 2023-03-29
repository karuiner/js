//개미 군단

function solution(hp) {
  let ans = 0,
    n = hp,
    c = 0;
  function f(n, c) {
    return [Math.floor(n / c), n % c];
  }
  [c, n] = f(n, 5);
  ans += c;
  [c, n] = f(n, 3);
  ans += c + n;

  return ans;
}
