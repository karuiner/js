//짝수의 합
function solution(n) {
  n = n % 2 === 1 ? n - 1 : n;
  let k = n / 2;

  return k * (k + 1);
}
