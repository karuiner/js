//피자 나눠 먹기 (2)
function solution(n) {
  let ans = 1;
  while ((6 * ans) % n !== 0) {
    ans++;
  }
  return ans;
}
