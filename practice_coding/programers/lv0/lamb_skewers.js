//양꼬치

function solution(n, k) {
  let ans = n * 12000;
  k -= Math.floor(n / 10);
  if (k > 0) {
    ans += k * 2000;
  }
  return ans;
}
