//치킨 쿠폰
function solution(chicken) {
  let ans = 0,
    n = chicken;
  while (n >= 10) {
    let [a, b] = [Math.floor(n / 10), n % 10];
    ans += a;
    n = a + b;
  }

  return ans;
}
