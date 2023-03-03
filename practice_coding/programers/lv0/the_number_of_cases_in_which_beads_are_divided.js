//구슬을 나누는 경우의 수
function solution(balls, share) {
  function f(a, b) {
    let ans = 1;
    for (let i = a + 1; i <= b; i++) {
      ans *= i;
    }
    return ans;
  }
  let a = share,
    k = balls - share;
  return Math.floor(f(a, balls) / f(1, k));
}
