//팩토리얼
function solution(n) {
  var ans = 1;
  while (n >= ans) {
    n /= ans;
    ans++;
  }
  return ans > 1 ? ans - 1 : 1;
}
