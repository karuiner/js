//약수 구하기
function solution(n) {
  let a = [],
    b = [],
    h = Math.floor(Math.sqrt(n));
  for (let i = 1; i <= h; i++) {
    let [c, d] = [n / i, n % i];
    if (d === 0) {
      if (c === i) {
        a.push(i);
      } else {
        a.push(i);
        b = [c, ...b];
      }
    }
  }

  return [...a, ...b];
}
