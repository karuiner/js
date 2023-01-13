//제곱수 판별하기
function solution(n) {
  var answer = 0;
  let k = Math.floor(Math.sqrt(n));

  return k * k === n ? 1 : 2;
}
