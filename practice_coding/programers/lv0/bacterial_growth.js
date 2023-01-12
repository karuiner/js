//세균 증식
function solution(n, t) {
  var answer = 0;
  function f(t) {
    if (t <= 1) {
      return t ? 2 : 1;
    } else {
      let k = Math.floor(t / 2);
      let [a, b] = [t - k, k];
      return f(a) * f(b);
    }
  }
  return n * f(t);
}
